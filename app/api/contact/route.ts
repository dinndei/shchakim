import { createHash } from "node:crypto";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MAX_RATE_LIMIT_ENTRIES = 10_000;
const allowedEvents = new Set(["חתונה", "אירוע פרטי", "אירוע עסקי", "אחר"]);
const requestsByIp = new Map<string, { count: number; resetAt: number }>();

type ContactSubmission = {
  name: string;
  phone: string;
  email: string;
  event: string;
  message: string;
  company: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function readText(value: unknown, maxLength: number): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length <= maxLength ? trimmed : null;
}

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
  return createHash("sha256").update(ip).digest("hex");
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();

  for (const [key, entry] of requestsByIp) {
    if (entry.resetAt <= now) requestsByIp.delete(key);
  }

  const entry = requestsByIp.get(ip);
  if (entry && entry.resetAt > now) {
    if (entry.count >= RATE_LIMIT_MAX_REQUESTS) return true;
    entry.count += 1;
    return false;
  }

  if (requestsByIp.size >= MAX_RATE_LIMIT_ENTRIES) return true;
  requestsByIp.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
  return false;
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

function validateSubmission(value: unknown): ContactSubmission | null {
  if (!isRecord(value)) return null;

  const name = readText(value.name, 100);
  const phone = readText(value.phone, 40);
  const email = readText(value.email ?? "", 254);
  const event = readText(value.event ?? "", 40);
  const message = readText(value.message ?? "", 2000);
  const company = readText(value.company ?? "", 200);

  if (
    !name ||
    !phone ||
    email === null ||
    event === null ||
    message === null ||
    company === null
  ) {
    return null;
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;
  if (event && !allowedEvents.has(event)) return null;

  return { name, phone, email, event, message, company };
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "הבקשה אינה תקינה." }, { status: 400 });
  }

  const submission = validateSubmission(body);
  if (!submission) {
    return NextResponse.json({ error: "נא לבדוק את הפרטים ולנסות שוב." }, { status: 400 });
  }

  if (submission.company) {
    return NextResponse.json({ message: "הפרטים התקבלו." });
  }

  if (isRateLimited(getClientIp(request))) {
    return NextResponse.json(
      { error: "נשלחו יותר מדי פניות. נסו שוב בעוד כמה דקות." },
      { status: 429 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.CONTACT_EMAIL;
  if (!apiKey || !from || !to) {
    console.error("Contact form email is not configured. Set RESEND_API_KEY, RESEND_FROM_EMAIL, and CONTACT_EMAIL.");
    return NextResponse.json(
      { error: "שירות שליחת הפניות אינו זמין כרגע. נסו שוב מאוחר יותר." },
      { status: 503 },
    );
  }

  const escapedMessage = escapeHtml(submission.message || "לא נמסרה הודעה.");
  const html = [
    `<p><strong>שם:</strong> ${escapeHtml(submission.name)}</p>`,
    `<p><strong>טלפון:</strong> ${escapeHtml(submission.phone)}</p>`,
    submission.email ? `<p><strong>מייל:</strong> ${escapeHtml(submission.email)}</p>` : "",
    submission.event ? `<p><strong>סוג אירוע:</strong> ${escapeHtml(submission.event)}</p>` : "",
    `<p><strong>פרטים נוספים:</strong></p><p>${escapedMessage.replace(/\n/g, "<br>")}</p>`,
  ].join("");
  const text = [
    `שם: ${submission.name}`,
    `טלפון: ${submission.phone}`,
    submission.email ? `מייל: ${submission.email}` : "",
    submission.event ? `סוג אירוע: ${submission.event}` : "",
    `פרטים נוספים: ${submission.message || "לא נמסרה הודעה."}`,
  ].filter(Boolean).join("\n");

  let resendResponse: Response;
  try {
    resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: `פנייה חדשה מהאתר — ${submission.name}`,
        html,
        text,
        ...(submission.email ? { reply_to: submission.email } : {}),
      }),
    });
  } catch (error) {
    console.error("Failed to reach Resend while sending a contact form submission.", error);
    return NextResponse.json(
      { error: "לא הצלחנו לשלוח את הפרטים כרגע. נסו שוב מאוחר יותר." },
      { status: 502 },
    );
  }

  if (!resendResponse.ok) {
    console.error(`Resend rejected a contact form submission (${resendResponse.status}).`);
    return NextResponse.json(
      { error: "לא הצלחנו לשלוח את הפרטים כרגע. נסו שוב מאוחר יותר." },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: "הפרטים נשלחו בהצלחה." });
}
