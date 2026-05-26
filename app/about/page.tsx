import Image from "next/image";
import Link from "next/link";
import LogoCarousel from "../components/LogoCarousel";

const leadership = [
  {
    name: "Akira Nakahara",
    title: "Chief Executive Officer",
    photo: "/images/people/akira.jpg",
    bio: "Akira brings years of experience working with business leaders, cultural innovators, and movement builders to translate big ideas into narratives that shape public conversation. Known for bridging sectors and creative disciplines, he helps leaders find the story that drives clarity, influence, and action. Akira is a co-founder of NewWorld, a narrative strategy agency that brings cultural intelligence, creative storytelling, and strategic innovation to build trust, shape narratives, and grow influence for leaders working to transform how power works and who it works for. He is based in NYC.",
    website: "https://akiranakahara.com",
  },
  {
    name: "Jay Coen Gilbert",
    title: "Executive Chair",
    photo: "/images/people/jay.png",
    bio: "Jay Coen Gilbert is co-founder of B Lab and the B Corporation movement, with nearly 8,000 companies across 80 countries. He is also co-founder of White Men for Racial Justice, an anti-racist pro-justice community of practice. Prior, Jay co-founded AND 1, a global basketball footwear, apparel, and entertainment company. Jay grew up in NYC and graduated from Stanford University.",
  },
];


export default function About() {
  return (
    <div className="pb-24">

      {/* Hero */}
      <section className="relative h-[60vh] flex items-end pb-16 px-8 pt-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/projects/reset/reset-reset-reset.jpg"
            alt="RESET RESET RESET — RESET Campaign"
            fill
            className="object-cover opacity-60"
            style={{ objectPosition: "center 70%" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/20 to-transparent" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <h1
            className="text-[clamp(2rem,4vw,3.5rem)] font-black leading-[1.1] tracking-tight text-[#F0EDE6] max-w-2xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            About
          </h1>
        </div>
      </section>

      <div className="px-8">
        <div className="max-w-5xl mx-auto">

          {/* Intro */}
          <section className="mb-24 max-w-3xl mt-8">
            <p className="text-[16px] text-[#C8C4BC] leading-relaxed mb-5">
              Imperative 21 was built on the belief that narrative power can only
              be built through radical collaboration. By bridging the energies,
              interests, and capabilities of business leaders, movements, and
              culture shifters, the network worked to activate a community of
              allies around a{" "}
              <Link
                href="/imperatives"
                className="text-[#F0EDE6] underline underline-offset-4 decoration-[#A89060] hover:text-[#A89060] transition-colors"
              >
                shared vision
              </Link>
              {" "}of a just economy that creates shared wellbeing on a healthy planet.
            </p>
            <p className="text-[16px] text-[#C8C4BC] leading-relaxed mb-5">
              Across the global network, Imperative 21 coordinated partners around
              a consistent set of values, creating the cultural space needed for
              business leaders and policymakers to lead change inside their
              organizations and drive systemic change together.
            </p>
            <p className="text-[16px] text-[#C8C4BC] leading-relaxed">
              Imperative 21 was made possible by a founding group of network stewards
              whose vision and commitment gave the work its foundation. We are grateful
              to B Lab, B Team, CECP, Common Future, Conscious Capitalism, GIIN, Just
              Capital, and Participant for believing that a different kind of economy
              was possible and that the power to shape it lay in changing the story.
            </p>
          </section>

          {/* Leadership — single column stacked */}
          <section className="mb-24">
            <h2 className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#F0EDE6] mb-10 pb-4 border-b border-[#2E2E2C]">
              Leadership
            </h2>
            <div className="flex flex-col gap-24">
              {leadership.map(({ name, title, photo, bio, website }) => (
                <div key={name} className="flex flex-row gap-10 max-w-3xl">
                  <div className="relative w-[220px] h-[258px] overflow-hidden flex-shrink-0">
                    <Image
                      src={photo}
                      alt={name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="pt-1">
                    <p
                      className="text-[1.25rem] font-bold text-[#F0EDE6] mb-1"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {name}
                    </p>
                    <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#A89060] mb-5">
                      {title}
                    </p>
                    <p className="text-[14px] text-[#C8C4BC] leading-relaxed mb-3">
                      {bio}
                    </p>
                    {website && (
                      <a
                        href={website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[12px] text-[#A89060] hover:text-[#F0EDE6] transition-colors tracking-wide"
                      >
                        {website.replace("https://", "")} →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>

      {/* Strategic Partners — manual carousel */}
      <section className="mt-8 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#F0EDE6] pb-4 border-b border-[#2E2E2C] mb-8">
            Strategic Partners
          </h2>
          <LogoCarousel />
        </div>
      </section>

    </div>
  );
}
