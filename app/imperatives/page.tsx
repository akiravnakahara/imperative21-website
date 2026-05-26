import Image from "next/image";

const whyItMatters = [
  {
    label: "A North Star",
    desc: "A shared vision of a just economy that creates shared wellbeing on a healthy planet.",
  },
  {
    label: "A Basis for Accountability",
    desc: "A foundation of principles for the diverse network of allies pursuing that vision to hold each other to.",
  },
  {
    label: "A Catalyst for Collective Action",
    desc: "Allowing a diverse network of allies to find common ground and act together toward economic systems change, even across different perspectives and approaches.",
  },
];

const imperatives = [
  {
    number: "01",
    title: "Design for Interdependence",
    artwork: "/images/projects/reset/free-fair-markets.jpg",
    artworkAlt: "Free + Fair Markets — Nasiruddin Akmal for RESET",
    artworkCredit: "Nasiruddin Akmal for RESET",
    points: [
      "Recognize the interdependence of healthy people, planet, and economies",
      "Balance the relationships between the private sector, government and civil society",
      "Ensure that everyone has access to free and fair markets",
    ],
  },
  {
    number: "02",
    title: "Invest for Justice",
    artwork: "/images/projects/reset/distribute-power.jpg",
    artworkAlt: "Concentrate / Distribute Power — LMNOPI for RESET",
    artworkCredit: "LMNOPI for RESET",
    points: [
      "Remove structural inequality",
      "Ensure leadership and ownership are more inclusive, and investment more accessible",
      "Use technology to advance democratic ideals and human rights",
      "Promote greater voice, power and opportunity for those currently marginalized",
    ],
  },
  {
    number: "03",
    title: "Account for Stakeholders",
    artwork: "/images/projects/reset/profit-purpose.jpg",
    artworkAlt: "Profit + Purpose — Mike Nicholson for RESET",
    artworkCredit: "Mike Nicholson for RESET",
    points: [
      "Measure success based on credible common metrics of sustainable value creation for all stakeholders",
      "Create incentives that reward business and investments creating social and environmental value",
      "Enhance standards of fiduciary duty",
    ],
  },
];

const sectionHeading = "text-[clamp(1.4rem,2.5vw,2rem)] font-black text-[#F0EDE6] mb-10";
const sectionHeadingStyle = { fontFamily: "var(--font-playfair)" };

export default function Imperatives() {
  return (
    <div className="pb-24">

      {/* Hero */}
      <section className="relative h-[60vh] flex items-end pb-16 px-8 pt-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/projects/reset/living-wage.jpg"
            alt="Minimum Living Wage — RESET Campaign"
            fill
            className="object-cover opacity-50"
            style={{ objectPosition: "center 30%" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <h1
            className="text-[clamp(2rem,4vw,3.5rem)] font-black leading-[1.1] tracking-tight text-[#F0EDE6] max-w-2xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            The Imperatives for Economic Systems Change
          </h1>
        </div>
      </section>

      <div className="px-8">
        <div className="max-w-5xl mx-auto">

          {/* Intro + Background combined */}
          <section className="mt-8 mb-20 max-w-3xl">
            <p className="text-[16px] text-[#C8C4BC] leading-relaxed mb-5">
              The Imperatives describe the design objectives and characteristics
              of the economic system we must move toward.
            </p>
            <p className="text-[16px] text-[#C8C4BC] leading-relaxed mb-5">
              Imperative 21, along with a coalition of partners, led a global
              process to co-create the Imperatives for Economic Systems Change
              with a network of 350 organizations, giving the movement greater
              coherence and power.
            </p>
            <p className="text-[16px] text-[#C8C4BC] leading-relaxed">
              The process emerged from the public launch of Imperative 21 in
              April 2020 at the virtual Skoll World Forum, with the objective of
              building a shared understanding of the economic system change
              needed for the 21st century and the pathways to get there.
            </p>
          </section>

          {/* Why the Imperatives Matter */}
          <section className="mb-24">
            <h2 className={sectionHeading} style={sectionHeadingStyle}>
              Why the Imperatives Matter
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              {whyItMatters.map(({ label, desc }) => (
                <div key={label} className="border-t border-[#2E2E2C] pt-6">
                  <p
                    className="text-[clamp(1.5rem,2.5vw,2.2rem)] font-black leading-tight text-[#F0EDE6] mb-4"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {label}
                  </p>
                  <p className="text-[15px] text-[#C8C4BC] leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* The Three Imperatives */}
          <section className="mb-24 border-t border-[#2E2E2C] pt-12">
            <h2 className={sectionHeading} style={sectionHeadingStyle}>
              The Imperatives
            </h2>
            <div className="flex flex-col">
              {imperatives.map(({ number, title, artwork, artworkAlt, artworkCredit, points }, i) => (
                <div
                  key={number}
                  className="grid md:grid-cols-2 gap-0 border-t border-[#2E2E2C]"
                >
                  {/* Text */}
                  <div className={`py-14 ${i % 2 === 1 ? "md:order-2 md:pl-14" : "md:pr-14"}`}>
                    <p className="text-[11px] font-medium tracking-[0.2em] text-[#A89060] mb-3">
                      {number}
                    </p>
                    <h3
                      className="text-[clamp(1.4rem,2.5vw,2rem)] font-black leading-tight text-[#F0EDE6] mb-8"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {title}
                    </h3>
                    <ul className="flex flex-col gap-5">
                      {points.map((point) => (
                        <li key={point} className="flex gap-4 text-[15px] text-[#C8C4BC] leading-relaxed">
                          <span className="text-[#A89060] flex-shrink-0 mt-0.5">—</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Artwork — full poster, no cropping */}
                  <div className={`flex flex-col justify-end ${i % 2 === 1 ? "md:order-1" : ""}`}>
                    <div className="relative w-full" style={{ aspectRatio: "3/4" }}>
                      <Image
                        src={artwork}
                        alt={artworkAlt}
                        fill
                        className="object-contain object-bottom"
                      />
                    </div>
                    <p className="text-[11px] text-[#555] mt-2 pb-4">
                      {artworkCredit}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Acknowledgements — centered */}
          <section className="border-t border-[#2E2E2C] pt-12 text-center max-w-2xl mx-auto">
            <h2 className={sectionHeading} style={sectionHeadingStyle}>
              Acknowledgements
            </h2>
            <p className="text-[13px] text-[#88887E] leading-relaxed mb-4">
              The Imperatives co-creation process was stewarded by a coalition of
              allies that calls itself Project Portal: Charmian Love, UK21
              co-convener, Chair and Co Founder B Lab UK; James Perry, B Lab
              board member, Co Founder B Lab UK; Charlotte Sewell, Project Portal
              project manager; Jason Stockwood, 53° Capital co-founder and B Lab
              UK board member; Chris Turner, B Lab UK executive director; Anna
              Heckenlively, Imperative 21 chief of staff; Robin Hodess, Imperative
              21 representative of The B Team; and Jay Coen Gilbert, Imperative 21
              co-chair.
            </p>
            <p className="text-[13px] text-[#88887E] leading-relaxed">
              Special thanks to: Derrick Feldman, Amy Thayer and the team at
              Influence SG; Josh Davis; New Economy Research Associates at Said
              Business School, Oxford University: Sabrina Bainbridge, Jillian
              Gedeon, Laura Ketteringham, Khanya Okumu, Aditya Rajashekaran and
              Saskia Rothuizen, and Laura Chavez-Varela at the Blavatnik School
              of Government, University of Oxford.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
