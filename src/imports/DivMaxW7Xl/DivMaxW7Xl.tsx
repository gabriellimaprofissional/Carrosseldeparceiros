import { useEffect, useRef } from "react";
import logoSulAmerica from "../SulAm_rica.png";
import logoAmil from "../Amil.png";
import logoBradesco from "../Logo_bradesco.png";
import logoPorto from "../logo_porto_seguro.png";
import logoSompo from "../logo_sompo.png";
import logoPrevent from "../logo_prevent.png";
import logoUnimed from "../logo_unimed.png";
import logoAllianz from "../logo_allianz.png";

function H2Text3Xl() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="h2.text-3xl">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1d2d5c] text-[36px] text-center whitespace-nowrap">
        <p className="leading-[40px]">Seguradoras Parceiras</p>
      </div>
    </div>
  );
}

function PartnersCarousel() {
  const partners = [
    { name: "Sul América", logo: logoSulAmerica },
    { name: "Amil", logo: logoAmil },
    { name: "Bradesco Seguros", logo: logoBradesco },
    { name: "Porto Seguro", logo: logoPorto },
    { name: "Sompo Seguros", logo: logoSompo },
    { name: "Prevent Senior", logo: logoPrevent },
    { name: "Unimed", logo: logoUnimed },
    { name: "Allianz", logo: logoAllianz },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const CARD_WIDTH = 220;
  const GAP = 32;

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += CARD_WIDTH + GAP;

      if (scrollPosition >= (CARD_WIDTH + GAP) * partners.length) {
        scrollPosition = 0;
        container.style.transition = "none";
        container.style.transform = `translateX(0px)`;

        setTimeout(() => {
          container.style.transition = "transform 2s ease-in-out";
          scrollPosition = CARD_WIDTH + GAP;
          container.style.transform = `translateX(-${scrollPosition}px)`;
        }, 50);
      } else {
        container.style.transition = "transform 2s ease-in-out";
        container.style.transform = `translateX(-${scrollPosition}px)`;
      }
    };

    const interval = setInterval(scroll, 2000);
    return () => clearInterval(interval);
  }, [partners.length]);

  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <div className="w-full h-[224px] flex items-center justify-center px-4">
      <div
        ref={containerRef}
        className="w-full max-w-[960px] overflow-hidden"
      >
        <div ref={scrollRef} className="flex items-center" style={{ gap: `${GAP}px` }}>
          {duplicatedPartners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center flex-shrink-0"
              style={{ width: `${CARD_WIDTH}px` }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-[100px] w-full object-contain opacity-90 px-2"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function DivMaxW7Xl() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center px-[32px] relative size-full" data-name="div.max-w-7xl">
      <H2Text3Xl />
      <PartnersCarousel />
    </div>
  );
}