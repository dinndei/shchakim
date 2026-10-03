import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
  title: "יצירת קשר",
  description: "ספרו לנו על האירוע שאתם חולמים עליו, ונחזור אליכם כדי להתחיל לתכנן.",
};

export default function ContactPage() {
  return (
    <div className="contact-page">
      <section className="contact-intro">
        <span className="eyebrow"><span className="eyebrow-dot" /> אנחנו כאן בשבילכם</span>
        <h1>בואו נדבר על<br /><span className="heading-accent">האירוע שלכם.</span></h1>
        <p>חתונה, חגיגה או אירוע עסקי — ספרו לנו מה אתם מדמיינים ונחשוב ביחד איך להפוך את זה למציאות.</p>
        <Link className="text-link" href="/#events">צריכים קצת השראה? לכל האירועים <span aria-hidden="true">↗</span></Link>
      </section>
      <section className="contact-form-section">
        <div className="contact-form-heading">
          <span className="eyebrow">מתחילים כאן</span>
          <h2>כמה פרטים קטנים</h2>
          <p>מלאו את הפרטים ונחזור אליכם בהקדם.</p>
        </div>
        <ContactForm />
      </section>
    </div>
  );
}
