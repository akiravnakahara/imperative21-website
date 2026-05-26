"use client";

import Image from "next/image";
import { useState } from "react";

const partners = [
  { name: "Common Future", logo: "/images/logos/CommonFuturelogo.png" },
  { name: "Participant Media", logo: "/images/logos/participantlogo.png" },
  { name: "B Lab", logo: "/images/logos/logo_b_lab.png" },
  { name: "The B Team", logo: "/images/logos/bteam.png" },
  { name: "Just Capital", logo: "/images/logos/just-capital-blue-2.png" },
  { name: "Global Impact Investing Network", logo: "/images/logos/giin_logo_tagline.svg" },
  { name: "Well-Being Economy Alliance", logo: "/images/logos/wellbeinglogo.png" },
  { name: "CECP", logo: "/images/logos/logo-cecp.png" },
  { name: "Groundwork Collaborative", logo: "/images/logos/groundworkcollaborativelogo.png" },
  { name: "Groundwater Institute", logo: "/images/logos/logo_groundwater_lightgreen.png" },
  { name: "New Capitalism Project", logo: "/images/logos/NCP+Social+Image-nobkgrd.png" },
  { name: "Inclusive Capitalism", logo: "/images/logos/inclusivecapitalism.png" },
];

const PER_PAGE = 4;

export default function LogoCarousel() {
  const [index, setIndex] = useState(0);
  const total = Math.ceil(partners.length / PER_PAGE);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(total - 1, i + 1));

  const visible = partners.slice(index * PER_PAGE, index * PER_PAGE + PER_PAGE);

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={prev}
        disabled={index === 0}
        className="text-[#F0EDE6] hover:text-[#A89060] disabled:opacity-20 transition-colors text-xl flex-shrink-0 w-8 text-center"
        aria-label="Previous"
      >
        ←
      </button>

      <div className="flex gap-3 flex-1">
        {visible.map(({ name, logo }) => (
          <div
            key={name}
            className="flex items-center justify-center bg-[#F0EDE6] flex-1"
            style={{ padding: "6px 10px", height: "100px" }}
          >
            <Image
              src={logo}
              alt={name}
              width={220}
              height={80}
              className="w-full h-[88px] object-contain"
            />
          </div>
        ))}
      </div>

      <button
        onClick={next}
        disabled={index === total - 1}
        className="text-[#F0EDE6] hover:text-[#A89060] disabled:opacity-20 transition-colors text-xl flex-shrink-0 w-8 text-center"
        aria-label="Next"
      >
        →
      </button>
    </div>
  );
}
