import type { Metadata } from "next";
import Link from "next/link";

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
        <form className="contact-form" action="mailto:hello@example.com" method="post" encType="text/plain">
          <div className="form-row">
            <label>איך קוראים לכם? <span>*</span><input name="name" type="text" placeholder="שם מלא" required /></label>
            <label>טלפון <span>*</span><input name="phone" type="tel" placeholder="050-000-0000" required /></label>
          </div>
          <label>כתובת מייל<input name="email" type="email" placeholder="name@example.com" /></label>
          <label>איזה אירוע חוגגים?
            <select name="event" defaultValue="">
              <option value="" disabled>בחרו סוג אירוע</option>
              <option>חתונה</option>
              <option>אירוע פרטי</option>
              <option>אירוע עסקי</option>
              <option>אחר</option>
            </select>
          </label>
          <label>קצת על מה שאתם חולמים<textarea name="message" rows={4} placeholder="תאריך משוער, כמות אורחים, רעיון שכבר יש לכם..." /></label>
          <button className="button button-dark form-submit" type="submit">שליחת פרטים <span aria-hidden="true">↗</span></button>
          <p className="form-note">בלחיצה ייפתח יישום הדואר שלכם. יש להחליף את כתובת הדוא״ל בפרויקט לפני העלייה לאוויר.</p>
        </form>
      </section>
    </div>
  );
}
