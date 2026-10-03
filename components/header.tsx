import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="שחקים הפקות - דף הבית">
          <Image
            className="brand-logo"
            src="/assets/logo.png"
            alt=""
            width={1620}
            height={1175}
            priority
          />
        </Link>
        <nav className="main-nav" aria-label="ניווט ראשי">
          <Link href="/#events">האירועים שלנו</Link>
          <Link href="/contact">יצירת קשר</Link>
        </nav>
        <Link className="header-cta" href="/contact">
          בואו נדבר <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </header>
  );
}
