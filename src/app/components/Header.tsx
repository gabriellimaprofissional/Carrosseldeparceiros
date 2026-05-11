import { Phone, Facebook, Instagram, Youtube, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Cotação", href: "#contato" },
    { name: "Plano de Saúde", href: "#plano-saude" },
    { name: "Plano Odonto", href: "#plano-odonto" },
    { name: "Seguro Vida", href: "#seguro-vida" },
    { name: "Plano Pet", href: "#plano-pet" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#1a2847] text-white py-2 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] md:text-sm">
          <span className="hidden sm:block font-medium tracking-wide">
            LMGE CORRETORA DE SEGUROS LTDA
          </span>
          <div className="flex items-center justify-between w-full sm:w-auto gap-4">
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-[#4a90e2]" />
              <span className="font-bold">(11) 94291-7766</span>
            </div>
            <div className="flex gap-4 border-l border-white/20 pl-4">
              <Facebook size={16} className="cursor-pointer hover:text-[#4a90e2] transition-colors" />
              <Instagram size={16} className="cursor-pointer hover:text-[#4a90e2] transition-colors" />
              <Youtube size={16} className="cursor-pointer hover:text-[#4a90e2] transition-colors" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-md py-4 px-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center group cursor-pointer">
            <span className="text-xl md:text-2xl font-black tracking-tighter">
              <span className="text-[#1a2847] group-hover:text-[#4a90e2] transition-colors">Brazil</span>
              <span className="text-[#4a90e2]">Health</span>
            </span>
          </div>

          {/* Nav - Desktop */}
          <nav className="hidden md:flex gap-6 lg:gap-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#1a2847] hover:text-[#4a90e2] transition-all text-sm font-bold uppercase tracking-wider relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4a90e2] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Botão Menu Hamburguer - Mobile */}
          <button 
            className="md:hidden text-[#1a2847] focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu Mobile - Dropdown Animado */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl py-4 flex flex-col items-center gap-4 animate-in slide-in-from-top duration-300">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar num item
                className="text-[#1a2847] text-lg font-bold py-2 w-full text-center hover:bg-gray-50 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  );
}