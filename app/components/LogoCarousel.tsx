import Image from "next/image";

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

export default function LogoCarousel() {
  return (
    <div className="bg-[#F0EDE6] p-4">
      <div className="grid grid-cols-6 gap-6">
        {partners.map(({ name, logo }) => (
          <div
            key={name}
            className="flex items-center justify-center"
            style={{ height: "80px" }}
          >
            <Image
              src={logo}
              alt={name}
              width={220}
              height={80}
              className="w-full h-[70px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
