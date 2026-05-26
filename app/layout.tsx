import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Imperative 21",
  description:
    "A global network, active from 2020 to 2026, reshaping economic narratives and reimagining systems so everyone, everywhere can thrive.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--fg)]">
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 border-b border-[var(--border)] bg-[var(--bg)]/90 backdrop-blur-sm">
          <Link href="/">
            <Image
              src="/images/logos/Imperative21_Logo_White.png"
              alt="Imperative 21"
              width={140}
              height={36}
              className="h-7 w-auto"
            />
          </Link>
          <nav className="flex items-center gap-8">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/our-work", label: "Our Work" },
              { href: "/imperatives", label: "Imperatives" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-[11px] font-[500] tracking-[0.15em] uppercase text-[#F0EDE6] hover:text-[#A89060] transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="bg-[#141414] border-t border-[#2A2A28] px-8 py-12 mt-48">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
              <div className="max-w-md">
                <Image
                  src="/images/logos/Imperative21_Logo_White.png"
                  alt="Imperative 21"
                  width={120}
                  height={32}
                  className="h-6 w-auto mb-4 opacity-60"
                />
                <p className="text-[12px] text-[#88887E] leading-relaxed">
                  Imperative 21 was a global network, active from 2020 to 2026,
                  reshaping economic narratives to advance a just economy where
                  everyone, everywhere can thrive.
                </p>
              </div>
              <nav className="flex gap-6 text-[10px] font-[500] tracking-[0.12em] uppercase">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About" },
                  { href: "/our-work", label: "Our Work" },
                  { href: "/imperatives", label: "Imperatives" },
                ].map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-[#F0EDE6] hover:text-[#A89060] transition-colors"
                  >
                    {label}
                  </Link>
                ))}
                <a
                  href="mailto:akira@imperative21.co"
                  className="text-[#F0EDE6] hover:text-[#A89060] transition-colors"
                >
                  Contact Us
                </a>
              </nav>
            </div>
            <div className="border-t border-[#2A2A28] pt-6 text-[10px] text-[#88887E] tracking-wide">
              © 2026 Imperative 21
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
