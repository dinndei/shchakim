"use client";

import { useEffect, useState } from "react";
import { testimonials } from "@/data/testimonials";

const VISIBLE_TESTIMONIALS = 3;
const AUTOPLAY_DELAY_MS = 6500;

export function TestimonialsCarousel() {
  const [firstIndex, setFirstIndex] = useState(0);
  const [autoplayEnabled, setAutoplayEnabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateAutoplayPreference = () => setAutoplayEnabled(!preference.matches);

    updateAutoplayPreference();
    preference.addEventListener("change", updateAutoplayPreference);
    return () => preference.removeEventListener("change", updateAutoplayPreference);
  }, []);

  useEffect(() => {
    if (!autoplayEnabled || isHovered || hasFocus) return;

    const interval = window.setInterval(() => {
      setFirstIndex((current) => (current + 1) % testimonials.length);
    }, AUTOPLAY_DELAY_MS);

    return () => window.clearInterval(interval);
  }, [autoplayEnabled, hasFocus, isHovered]);

  function moveBy(amount: number) {
    setFirstIndex((current) => (current + amount + testimonials.length) % testimonials.length);
  }

  const visibleTestimonials = Array.from(
    { length: VISIBLE_TESTIMONIALS },
    (_, offset) => testimonials[(firstIndex + offset) % testimonials.length],
  );

  return (
    <section
      className="testimonials-section"
      aria-labelledby="testimonials-heading"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setHasFocus(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setHasFocus(false);
        }
      }}
    >
      <div className="testimonials-inner">
        <div className="section-heading testimonials-heading">
          <div>
            <span className="eyebrow">המלצות לדוגמה — להחליף לפני פרסום</span>
            <h2 id="testimonials-heading">הלקוחות <span className="heading-accent">מספרים.</span></h2>
          </div>
        </div>

        <div className="testimonials-grid" aria-live="off">
          {visibleTestimonials.map((testimonial, offset) => (
            <article
              className="testimonial-card"
              key={`${firstIndex}-${offset}`}
              aria-label={`המלצה ${((firstIndex + offset) % testimonials.length) + 1}`}
            >
              <blockquote>{testimonial.quote}</blockquote>
              <div className="testimonial-attribution">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.eventType}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="testimonials-controls">
          <span className="testimonials-count" aria-live="polite">
            {firstIndex + 1} / {testimonials.length}
          </span>
          <div className="testimonials-buttons">
            <button
              className="testimonial-control"
              type="button"
              aria-label="ההמלצה הקודמת"
              onClick={() => moveBy(-1)}
            >
              <span aria-hidden="true">→</span>
            </button>
            <button
              className="testimonial-control testimonial-autoplay"
              type="button"
              aria-label={autoplayEnabled ? "השהיית החלפה אוטומטית" : "הפעלת החלפה אוטומטית"}
              aria-pressed={autoplayEnabled}
              onClick={() => setAutoplayEnabled((enabled) => !enabled)}
            >
              <span aria-hidden="true">{autoplayEnabled ? "Ⅱ" : "▶"}</span>
            </button>
            <button
              className="testimonial-control"
              type="button"
              aria-label="ההמלצה הבאה"
              onClick={() => moveBy(1)}
            >
              <span aria-hidden="true">←</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}