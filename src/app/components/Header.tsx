import { Phone, Facebook, Instagram, Youtube } from "lucide-react";

export default function Header() {
  return (
    <>
      <div className="bg-[#1a2847] text-white py-2 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <span>LMGE CORRETORA DE SEGUROS LTDA</span>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>(11) 94291-7766</span>
            </div>
            <div className="flex gap-3">
              <Facebook size={18} className="cursor-pointer hover:opacity-80" />
              <Instagram size={18} className="cursor-pointer hover:opacity-80" />
              <Youtube size={18} className="cursor-pointer hover:opacity-80" />
            </div>
          </div>
        </div>
      </div>

      <header className="bg-white shadow-sm py-4 px-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold">
              <span className="text-[#1a2847]">Brazil</span>
              <span className="text-[#4a90e2]">Health</span>
            </span>
          </div>

          <nav className="flex gap-8">
            <a href="#contato" className="text-[#1a2847] hover:text-[#4a90e2] transition-colors font-bold">
              Cotação
            </a>
            <a href="#plano-saude" className="text-[#1a2847] hover:text-[#4a90e2] transition-colors font-bold">
              Plano de Saúde
            </a>
            <a href="#plano-odonto" className="text-[#1a2847] hover:text-[#4a90e2] transition-colors font-bold">
              Plano Odonto
            </a>
            <a href="#seguro-vida" className="text-[#1a2847] hover:text-[#4a90e2] transition-colors font-bold">
              Seguro Vida
            </a>
            <a href="#plano-pet" className="text-[#1a2847] hover:text-[#4a90e2] transition-colors font-bold">
              Plano Pet
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
