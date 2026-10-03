import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EventCard } from "@/components/event-card";
import { events } from "@/data/events";

type EventPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({
  params,
}: EventPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);

  return event ? { title: event.title, description: event.description } : {};
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);

  if (!event) notFound();

  const otherEvents = events.filter((item) => item.slug !== event.slug).slice(0, 3);

  return (
    <article className="event-page">
      <div className="event-page-top">
        <Link className="back-link" href="/#events"><span aria-hidden="true">→</span> לכל האירועים</Link>
        <span className="event-category">{event.category} <span className="meta-divider">·</span> {event.location}</span>
      </div>
      <header className="event-page-heading">
        <h1>{event.title}</h1>
        <p>{event.description}</p>
      </header>
      <div className="event-gallery">
        {event.photos.map((photo, index) => (
          <div className={`gallery-photo gallery-photo-${index + 1}`} key={photo}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photo} alt={`${event.title} — תמונה ${index + 1}`} />
          </div>
        ))}
      </div>
      <section className="event-page-cta">
        <div>
          <span className="eyebrow">האירוע שלכם מחכה</span>
          <h2>בואו ניצור סיפור <span className="heading-accent">משלכם.</span></h2>
        </div>
        <Link className="button button-dark" href="/contact">מתחילים לתכנן <span aria-hidden="true">↗</span></Link>
      </section>
      <section className="related-events">
        <div className="section-heading">
          <div><span className="eyebrow">עוד רגעים</span><h2>אולי תאהבו גם</h2></div>
          <Link className="text-link" href="/#events">לכל האירועים <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="events-grid related-grid">
          {otherEvents.map((other, index) => (
            <EventCard key={other.slug} event={other} index={index} />
          ))}
        </div>
      </section>
    </article>
  );
}
