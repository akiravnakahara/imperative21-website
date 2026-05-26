import Image from "next/image";

const resetArtworks = [
  { src: "/images/projects/reset/extractive-regenerative.jpg", alt: "Extractive / Regenerative" },
  { src: "/images/projects/reset/free-fair-markets.jpg", alt: "Free + Fair Markets" },
  { src: "/images/projects/reset/distribute-power.jpg", alt: "Concentrate / Distribute Power" },
  { src: "/images/projects/reset/hardhat-worker.jpg", alt: "Financial Insecurity" },
];

export default function OurWork() {
  return (
    <div className="pb-24">

      {/* Hero */}
      <section className="relative h-[60vh] flex items-end pb-16 px-8 pt-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/projects/reset/hardhat-worker.jpg"
            alt="Financial Insecurity — RESET Campaign"
            fill
            className="object-cover opacity-50"
            style={{ objectPosition: "center 45%" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <h1
            className="text-[clamp(2rem,4vw,3.5rem)] font-black leading-[1.1] tracking-tight text-[#F0EDE6] max-w-2xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Our Work
          </h1>
        </div>
      </section>

      <div className="px-8">
        <div className="max-w-5xl mx-auto">

          {/* Intro */}
          <section className="mt-8 mb-20 max-w-3xl">
            <p className="text-[16px] text-[#C8C4BC] leading-relaxed">
              Imperative 21 worked across three interconnected areas to advance new narratives in service of economic systems change.
            </p>
          </section>

          {/* Project 1: Margins to Mainstream */}
          <section className="mb-24 border-t border-[#2E2E2C] pt-12">
            <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-black leading-tight text-[#A89060] mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
              Build Narrative Power
            </h2>
            <p className="text-[15px] text-[#C8C4BC] leading-relaxed mb-10 max-w-2xl">
              The long-term, systemic work of building narrative capacity across a movement, bringing inclusive economy solutions into public discourse and imagination.
            </p>

            {/* Text + Report Cover */}
            <div className="grid md:grid-cols-2 gap-14 mb-10 items-center">
              <div>
                <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#88887E] mb-3">Featured Project</p>
                <h2
                  className="text-[clamp(1.4rem,2.5vw,2rem)] font-black leading-tight text-[#F0EDE6] mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Margins to Mainstream
                </h2>
                <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#A89060] mb-6">2026</p>
                <p className="text-[15px] text-[#C8C4BC] leading-relaxed mb-8">
                  Imperative 21, along with{" "}
                  <a href="https://www.bliscollective.org" target="_blank" rel="noopener noreferrer" className="text-[#F0EDE6] underline underline-offset-4 decoration-[#A89060] hover:text-[#A89060] transition-colors">BLIS Collective</a>
                  {" "}and{" "}
                  <a href="https://www.narrativecollab.org" target="_blank" rel="noopener noreferrer" className="text-[#F0EDE6] underline underline-offset-4 decoration-[#A89060] hover:text-[#A89060] transition-colors">Beloved Economies</a>
                  , co-led a
                  cross-organizational effort to bring inclusive economy solutions into public
                  discourse and imagination. Building shared narrative infrastructure across a
                  network of 300+ organizations, the initiative combined collaborative research,
                  coordinated storytelling, and a field-wide campaign. This work piloted a new
                  model for how movements operate collectively at scale. Supported by a coalition
                  of 15+ organizations across movement, philanthropy, and business, and funded by
                  a grant from the Center for Cultural Innovation through a participatory process
                  led by Surdna Foundation grantees. Completing in 2026.
                </p>
                <a
                  href="/assets/MarginsToMainstream-May2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[11px] font-semibold tracking-[0.15em] uppercase border border-[#F0EDE6] text-[#F0EDE6] px-7 py-4 hover:border-[#A89060] hover:text-[#A89060] transition-colors duration-200"
                >
                  Download Report →
                </a>
              </div>
              <div className="flex items-start">
                <Image
                  src="/images/projects/margins/margins-2.png"
                  alt="Margins to Mainstream Report Cover"
                  width={300}
                  height={400}
                  className="w-3/4 h-auto object-contain"
                />
              </div>
            </div>

            {/* Videos */}
            <div className="grid grid-cols-2 gap-8">
              <div className="flex gap-5">
                <div className="relative w-2/5 flex-shrink-0 aspect-[9/16] bg-[#141414]">
                  <video
                    controls
                    className="absolute inset-0 w-full h-full object-cover"
                    preload="metadata"
                    poster="/images/projects/margins/margins-draft-still.jpg"
                  >
                    <source src="/videos/margins-final-draft.mov" type="video/mp4" />
                  </video>
                </div>
                <p className="text-[13px] text-[#88887E] leading-relaxed pt-1">Report Hot Take Video from Michael Mezzatesta /{" "}
                  <a href="https://www.betterfuture.media" target="_blank" rel="noopener noreferrer" className="text-[#C8C4BC] hover:text-[#F0EDE6] underline underline-offset-4 decoration-[#A89060] transition-colors">Better Future Media</a>
                </p>
              </div>
              <div className="flex gap-5">
                <div className="relative w-2/5 flex-shrink-0 aspect-[9/16] bg-[#141414]">
                  <video
                    controls
                    className="absolute inset-0 w-full h-full object-cover"
                    preload="metadata"
                    poster="/images/projects/margins/margins-foxxy-still.jpg"
                  >
                    <source src="/videos/margins-foxxy-blue.mp4" type="video/mp4" />
                  </video>
                </div>
                <p className="text-[13px] text-[#88887E] leading-relaxed pt-1">Report Hot Take Video from Dino Foxx of Justice Funders /{" "}
                  <a href="https://www.instagram.com/dinofoxx/" target="_blank" rel="noopener noreferrer" className="text-[#C8C4BC] hover:text-[#F0EDE6] underline underline-offset-4 decoration-[#A89060] transition-colors">Foxxy Blue Snacks</a>
                </p>
              </div>
            </div>
          </section>

          {/* Project 2: Scene on Radio: Capitalism */}
          <section className="mb-24 border-t border-[#2E2E2C] pt-12">
            <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-black leading-tight text-[#A89060] mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
              Change the Conversation
            </h2>
            <p className="text-[15px] text-[#C8C4BC] leading-relaxed mb-10 max-w-2xl">
              Creating content that challenges the dominant economic narrative and opens up new thinking about what's possible.
            </p>
            {/* Text + links */}
            <div className="grid md:grid-cols-2 gap-14 mb-16 items-center">
              <div>
                <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#88887E] mb-3">Featured Project</p>
                <h3
                  className="text-[clamp(1.4rem,2.5vw,2rem)] font-black leading-tight text-[#F0EDE6] mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Scene on Radio: Capitalism
                </h3>
                <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#A89060] mb-6">2024</p>
                <p className="text-[15px] text-[#C8C4BC] leading-relaxed mb-8">
                  Imperative 21 co-produced Season 7 of Scene on Radio, a long-form narrative
                  series exploring capitalism beyond one-sided stories. Hosted by investigative
                  journalist John Biewen with co-host Ellen McGirt, the series traces how
                  capitalism emerged and evolved, how it has been shaped by those with power,
                  and how it can be shaped again. Downloaded over one million times, the series
                  has been used in multi-week cohorts of business leaders to engage with its
                  ideas and reflect on their role in today's economy.
                </p>
                <div className="flex flex-col gap-4">
                <a
                  href="https://www.youtube.com/watch?v=1lzfWPloZ0I&list=PLTd9hR9bSyjoFitwXId7k55B5FA49seQl&index=12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#C8C4BC] hover:text-[#F0EDE6] transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span className="text-[13px] font-medium">Listen on YouTube</span>
                </a>
                <a
                  href="https://podcasts.apple.com/us/podcast/scene-on-radio/id1036276968"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#C8C4BC] hover:text-[#F0EDE6] transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 814 1000" fill="currentColor" aria-hidden="true">
                    <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57.8-155.5-127.4c-58.1-81-105.3-207.7-105.3-328.5 0-193.1 125.7-295.8 249.4-295.8 65.8 0 120.6 43.2 161.9 43.2 39.3 0 100.5-45.8 175.4-45.8 28.3 0 130.3 2.6 197.2 99.3zm-234.7-182.6c31.2-36.9 53.4-88.1 53.4-139.3 0-7.1-.6-14.3-1.9-20.1-50.9 1.9-110.8 33.9-147.1 76.5-27 30.6-55.3 81.8-55.3 133.7 0 7.8.6 15.6 1.3 18.2 2.6.6 6.4 1.3 10.2 1.3 45.8 0 103.5-30.6 139.4-70.3z" />
                  </svg>
                  <span className="text-[13px] font-medium">Listen on Apple Podcasts</span>
                </a>
                <a
                  href="https://open.spotify.com/show/0ouPKjo1tKkj8V4nNI7mBv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#C8C4BC] hover:text-[#F0EDE6] transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381C8.64 5.801 15.6 6.081 20.1 8.82c.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                  <span className="text-[13px] font-medium">Listen on Spotify</span>
                </a>
                </div>
              </div>
              <Image
                src="/images/projects/capitalism/capitalism-tile.jpg"
                alt="Scene on Radio: Capitalism — Season 7"
                width={300}
                height={300}
                className="w-full h-auto"
              />
            </div>
            {/* Full-width video */}

            <div className="aspect-video bg-[#141414]">
              <iframe
                src="https://www.youtube.com/embed/wB7LnVXIamU"
                title="Scene on Radio: Capitalism Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </section>

          {/* Project 3: RESET Campaign */}
          <section className="mb-24 border-t border-[#2E2E2C] pt-12">
            <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-black leading-tight text-[#A89060] mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
              Pioneer Collective Action
            </h2>
            <p className="text-[15px] text-[#C8C4BC] leading-relaxed mb-10 max-w-2xl">
              Bold narrative experiments that demonstrated what a broad, diverse network could achieve by collectively mobilizing around the Imperatives for Economic Systems Change.
            </p>
            {/* Text */}
            <div className="max-w-2xl mb-10">
              <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#88887E] mb-3">Featured Project</p>
              <h2
                className="text-[clamp(1.4rem,2.5vw,2rem)] font-black leading-tight text-[#F0EDE6] mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                The RESET Campaign
              </h2>
              <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#A89060] mb-6">2020</p>
              <p className="text-[15px] text-[#C8C4BC] leading-relaxed">
                Hundreds of allies across the Imperative 21 network collectively launched a
                multimedia campaign to raise awareness that we can and must create a just
                economy that centers people, not profit. The campaign included artwork and
                video on the Nasdaq Tower in Times Square, large scale public art projections
                in NYC and São Paulo, and full page ads in the New York Times and Financial
                Times. RESET generated important proof points and lessons on the value and
                challenges of collective narrative action, carrying the movement forward.
              </p>
            </div>

            {/* Two videos side by side */}
            <div className="grid grid-cols-2 gap-6 mb-24">
              <div className="aspect-video bg-[#141414]">
                <iframe
                  src="https://www.youtube.com/embed/v8B8Z84En3M"
                  title="RESET Campaign Trailer"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="aspect-video bg-[#141414]">
                <iframe
                  src="https://www.youtube.com/embed/ByUTADeP7Hs"
                  title="RESET Times Square"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Artwork grid */}
            <p className="text-[13px] text-[#88887E] mb-4">
              Campaign Artwork Produced by{" "}
              <a
                href="https://amplifier.org/reset/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C8C4BC] hover:text-[#F0EDE6] underline underline-offset-4 decoration-[#A89060] transition-colors"
              >
                Amplifier
              </a>
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {resetArtworks.map(({ src, alt }) => (
                <a
                  key={src}
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-[3/4] overflow-hidden block group"
                >
                  <Image src={src} alt={alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </a>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
