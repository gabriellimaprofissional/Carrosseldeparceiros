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
    /* mb-4 aproxima o título do carrossel */
    <div className="w-full text-center mb-4">
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

  // Triplicamos a lista para criar o loop infinito visual sem saltos
  const triplePartners = [...partners, ...partners, ...partners];

  return (
    <div className="w-full overflow-hidden py-2 relative">
      {/* Máscaras laterais para suavizar a entrada/saída dos logos */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

      {/* Container da Animação Infinita */}
      <div className="flex w-max animate-scroll">
        {triplePartners.map((partner, index) => (
          <div
            key={index}
            className="w-[200px] md:w-[250px] flex-shrink-0 flex items-center justify-center px-8"
          >
            <div className="flex items-center justify-center h-24 w-full">
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 md:max-h-16 w-auto object-contain hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scroll {
          animation: scroll 35s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

export default function PartnersSection() {
  return (
    /* pt-4: reduz o espaço entre Plano Pet e esta seção.
       pb-12: mantém um respiro saudável na parte de baixo.
    */
    <section className="bg-white pt-4 pb-12 border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionTitle />
        <PartnersCarousel />
      </div>
    </section>
  );
}