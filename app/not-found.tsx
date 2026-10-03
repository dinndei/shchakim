import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <span className="eyebrow">העמוד לא נמצא</span>
      <h1>נראה שהלכנו<br /><span className="heading-accent">לאיבוד.</span></h1>
      <Link className="button button-dark" href="/">חזרה לדף הבית <span aria-hidden="true">↗</span></Link>
    </section>
  );
}
