import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: {
    default: "שחקים הפקות | רגעים שנשארים",
    template: "%s | שחקים הפקות",
  },
  description:
    "הפקת אירועים פרטיים ועסקיים עם מחשבה על כל פרט. בואו לראות את האירועים שלנו.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
