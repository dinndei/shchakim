import Link from "next/link";
import { EventCard } from "@/components/event-card";
import { events } from "@/data/events";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow"><span className="eyebrow-dot" /> שחקים הפקות · אירועים עם נשמה</span>
          <h1>הרגעים הכי יפים<br />מתחילים <span className="heading-accent">בחלום.</span></h1>
          <p className="hero-copy">
            אנחנו הופכים רעיונות לאירועים שמרגישים בדיוק כמו שדמיינתם — רק קצת יותר.
          </p>
          <div className="hero-actions">
            <Link className="button button-dark" href="#events">לגלות את האירועים <span aria-hidden="true">↓</span></Link>
            <Link className="text-link" href="/contact">יש לכם רעיון? דברו איתנו <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={events[0].cover} alt="" />
          <div className="hero-image-caption"><span>01 / 06</span><span>רגעים שנשארים</span></div>
          <span className="hero-stamp">MADE<br />WITH<br />LOVE</span>
        </div>
        <div className="hero-bottom"><span>גללו להשראה</span><span className="hero-line" /></div>
      </section>

      <section className="events-section" id="events">
        <div className="section-heading">
          <div>
            <span className="eyebrow">העבודות שלנו</span>
            <h2>כל אירוע הוא <span className="heading-accent">סיפור.</span></h2>
          </div>
          <p>רגעים אמיתיים, אנשים אהובים, ופרטים קטנים שעושים את כל ההבדל.</p>
        </div>
        <div className="events-grid">
          {events.map((event, index) => (
            <EventCard key={event.slug} event={event} index={index} />
          ))}
        </div>
      </section>

      <section className="home-contact">
        <span className="eyebrow"><span className="eyebrow-dot" /> הדבר הבא מתחיל כאן</span>
        <h2>יש לכם סיבה<br />טובה <span className="heading-accent">לחגוג?</span></h2>
        <p>בואו נדמיין ביחד איך הרגע שלכם ייראה.</p>
        <Link className="button button-light" href="/contact">ספרו לנו על האירוע <span aria-hidden="true">↗</span></Link>
        <span className="contact-decoration" aria-hidden="true">ש</span>
      </section>
    </>
  );
}
