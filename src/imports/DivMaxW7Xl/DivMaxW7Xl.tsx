import { useEffect, useRef, useState } from "react";
import logoSulAmerica from "../SulAm_rica.png";
import logoAmil from "../Amil.png";
import logoBradesco from "../Logo_bradesco.png";
import logoPorto from "../logo_porto_seguro.png";
import logoSompo from "../logo_sompo.png";
import logoPrevent from "../logo_prevent.png";
import logoUnimed from "../logo_unimed.png";
import logoAllianz from "../logo_allianz.png";

function SectionTitle() {
  return (
    <div className="w-full text-center mb-8">
      <h2 className="text-[#1d2d5c] text-3xl font-bold leading-tight">
        Seguradoras Parceiras
      </h2>
      <div className="w-16 h-1 bg-[#4a90e2] mx-auto mt-3 rounded-full"></div>
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const duplicatedPartners = [...partners, ...partners];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % partners.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [partners.length]);

  return (
    <div className="w-full overflow-hidden py-4">
      <div className="max-w-4xl mx-auto px-4">
        <div 
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ 
            // No mobile move 100% (uma por vez), no desktop move 25% (4 por vez)
            transform: `translateX(-${currentIndex * (window.innerWidth < 768 ? 100 : 25)}%)` 
          }}
        >
          {duplicatedPartners.map((partner, index) => (
            <div
              key={index}
              // w-full garante que no mobile apareça apenas UMA imagem centralizada
              className="w-full md:w-1/4 flex-shrink-0 flex items-center justify-center px-2"
            >
              <div className="flex items-center justify-center h-24 w-full">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  // Removido grayscale e opacity para manter as cores originais
                  className="max-h-16 md:max-h-20 w-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Indicadores de bolinha para o celular (opcional, ajuda a guiar o usuário) */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {partners.map((_, i) => (
            <div 
              key={i}
              className={`h-1.5 rounded-full transition-all ${currentIndex === i ? 'w-4 bg-[#4a90e2]' : 'w-1.5 bg-gray-300'}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PartnersSection() {
  return (
    <section className="bg-white py-12 border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionTitle />
        <PartnersCarousel />
      </div>
    </section>
  );
}