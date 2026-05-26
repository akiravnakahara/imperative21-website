import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-end pb-24 px-8 pt-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/projects/reset/shared-prosperity.jpg"
            alt=""
            fill
            className="object-cover object-center opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/60 to-[#0D0D0D]/20" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <h1
            className="text-[clamp(2.8rem,6vw,5.5rem)] font-black leading-[1.05] tracking-tight text-[#F0EDE6] mb-6 max-w-3xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            The economy is a story and a system made by people.
          </h1>
          <p
            className="text-[clamp(1.1rem,2vw,1.5rem)] text-[#F0EDE6] mb-10"
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          >
            We the people can remake it.
          </p>
          <p className="text-[15px] text-[#C8C4BC] leading-relaxed max-w-xl mb-6">
            Imperative 21 was a global network, active from 2020 to 2026,
            reshaping economic narratives and reimagining systems so everyone,
            everywhere can thrive.
          </p>
          <p className="text-[15px] text-[#C8C4BC] leading-relaxed max-w-xl mb-12">
            This site is a home for the{" "}
            <Link
              href="/imperatives"
              className="text-[#F0EDE6] underline underline-offset-4 decoration-[#A89060] hover:text-[#A89060] transition-colors"
            >
              Imperatives for Economic Systems Change
            </Link>
            , developed with hundreds of allies across our global network to ground
            a diverse movement in shared principles for economic systems change,
            and the{" "}
            <Link
              href="/our-work"
              className="text-[#F0EDE6] underline underline-offset-4 decoration-[#A89060] hover:text-[#A89060] transition-colors"
            >
              projects
            </Link>{" "}
            that put them into action.
          </p>

          <Link
            href="/about"
            className="inline-block text-[11px] font-semibold tracking-[0.15em] uppercase border border-[#F0EDE6] text-[#F0EDE6] px-7 py-4 hover:border-[#A89060] hover:text-[#A89060] transition-colors duration-200"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* RESET artwork strip */}
      <section className="px-8 py-16 border-t border-[#2E2E2C]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#F0EDE6] mb-6">
            From the RESET Campaign
          </p>
          <div className="grid grid-cols-3 gap-3">
            {[
              {
                src: "/images/projects/reset/respected.jpg",
                alt: "Dis / Respected — RESET Campaign",
              },
              {
                src: "/images/projects/reset/profit-purpose.jpg",
                alt: "Profit + Purpose — Mike Nicholson",
              },
              {
                src: "/images/projects/reset/exclusive-inclusive.jpg",
                alt: "Exclusive / Inclusive — Bee Harris",
              },
            ].map(({ src, alt }) => (
              <Link
                href="/our-work"
                key={src}
                className="group relative aspect-[3/4] overflow-hidden"
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
            ))}
          </div>
          <div className="mt-5 flex justify-end">
            <Link
              href="/our-work"
              className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#F0EDE6] hover:text-[#A89060] transition-colors"
            >
              See all featured projects →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
