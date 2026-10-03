import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <Link className="brand footer-brand" href="/" aria-label="שחקים הפקות - דף הבית">
          <Image
            className="brand-logo"
            src="/assets/logo.png"
            alt=""
            width={1620}
            height={1175}
          />
        </Link>
        <p>רגעים גדולים. תשומת לב לכל פרט.</p>
        <Link className="footer-contact" href="/contact">בואו ליצור משהו ביחד <span aria-hidden="true">↗</span></Link>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} שחקים הפקות</span>
        <Link href="/contact">דברו איתנו</Link>
      </div>
    </footer>
  );
}
