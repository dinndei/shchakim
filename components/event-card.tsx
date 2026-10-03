import Link from "next/link";
import type { Event } from "@/data/events";

export function EventCard({ event, index }: { event: Event; index: number }) {
  return (
    <Link
      className={`event-card event-card-${index % 6}`}
      href={`/events/${event.slug}`}
      aria-label={`לצפייה באירוע: ${event.title}`}
    >
      <div className="event-image-wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="event-image" src={event.cover} alt="" loading="lazy" />
        <span className="event-arrow" aria-hidden="true">↗</span>
      </div>
      <div className="event-card-info">
        <div>
          <span className="event-category">{event.category}</span>
          <h3>{event.title}</h3>
        </div>
        <span className="event-location">{event.location}</span>
      </div>
    </Link>
  );
}
