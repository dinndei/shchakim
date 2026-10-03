"use client";

import { useState, type FormEvent } from "react";

type SubmissionState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmissionState("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });
      const result: unknown = await response.json();

      if (!response.ok) {
        const message =
          typeof result === "object" &&
          result !== null &&
          "error" in result &&
          typeof result.error === "string"
            ? result.error
            : "לא הצלחנו לשלוח את הפרטים. נסו שוב מאוחר יותר.";
        throw new Error(message);
      }

      form.reset();
      setSubmissionState("success");
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "לא הצלחנו לשלוח את הפרטים. נסו שוב מאוחר יותר.",
      );
      setSubmissionState("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>איך קוראים לכם? <span>*</span><input name="name" type="text" placeholder="שם מלא" maxLength={100} required /></label>
        <label>טלפון <span>*</span><input name="phone" type="tel" placeholder="050-000-0000" maxLength={40} required /></label>
      </div>
      <label>כתובת מייל<input name="email" type="email" placeholder="name@example.com" maxLength={254} /></label>
      <label>איזה אירוע חוגגים?
        <select name="event" defaultValue="">
          <option value="" disabled>בחרו סוג אירוע</option>
          <option value="חתונה">חתונה</option>
          <option value="אירוע פרטי">אירוע פרטי</option>
          <option value="אירוע עסקי">אירוע עסקי</option>
          <option value="אחר">אחר</option>
        </select>
      </label>
      <label>קצת על מה שאתם חולמים<textarea name="message" rows={4} maxLength={2000} placeholder="תאריך משוער, כמות אורחים, רעיון שכבר יש לכם..." /></label>
      <div className="contact-form-honeypot" aria-hidden="true">
        <label>השאירו את השדה הזה ריק<input name="company" type="text" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <button className="button button-dark form-submit" type="submit" disabled={submissionState === "submitting"}>
        {submissionState === "submitting" ? "שולחים..." : "שליחת פרטים"} <span aria-hidden="true">↗</span>
      </button>
      <p className="form-feedback" aria-live="polite" role={submissionState === "error" ? "alert" : "status"}>
        {submissionState === "success" && "הפרטים נשלחו בהצלחה. נחזור אליכם בהקדם."}
        {submissionState === "error" && errorMessage}
      </p>
    </form>
  );
}
