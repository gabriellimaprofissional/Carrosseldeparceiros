import { useState, useEffect } from "react";
import { Phone, Mail, Code, ShieldCheck } from "lucide-react";
import PrivacyModal from "./PrivacyModal";
import logoBrazilHealth from "../../imports/logo_brazil_health.png";

export default function Footer() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  // EFEITO MÁGICO: Escuta o evento vindo de qualquer lugar (inclusive do Banner)
  useEffect(() => {
    const handleOpen = () => setIsPrivacyOpen(true);
    window.addEventListener("openPrivacyModal", handleOpen);
    return () => window.removeEventListener("openPrivacyModal", handleOpen);
  }, []);

  return (
    <footer className="bg-[#1a2847] text-white">
      <div className="border-t-4 border-[#ff6b35]">
        <div className="max-w-7xl mx-auto py-12 px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            
            {/* Bloco 1: Identificação */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="mb-4 bg-white p-2 rounded-lg inline-block">
                <img src={logoBrazilHealth} alt="Logo Brazil Health" className="h-10 w-auto object-contain" />
              </div>
              <p className="text-sm font-medium mb-1">LMGE CORRETORA DE SEGUROS LTDA</p>
              <p className="text-gray-400 text-xs">CNPJ: 60.238.639/0001-31</p>
            </div>

            {/* Bloco 2: Contato */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="text-lg font-semibold mb-4 text-[#4a90e2]">Contato</h4>
              <div className="space-y-4 text-sm">
                <a href="tel:11942917766" className="flex items-center gap-3 hover:text-[#ff6b35] transition-colors">
                  <Phone size={18} className="text-[#ff6b35]" />
                  <span>(11) 94291-7766</span>
                </a>
                <a href="mailto:guilherme.escobar@brazilhealth.com.br" className="flex items-center gap-3 hover:text-[#ff6b35] transition-colors">
                  <Mail size={18} className="text-[#ff6b35]" />
                  <span>guilherme.escobar@brazilhealth.com.br</span>
                </a>
              </div>
            </div>

            {/* Bloco 3: Desenvolvimento com Link de WhatsApp */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="text-lg font-semibold mb-4 text-[#4a90e2]">Desenvolvimento</h4>
              <a 
                href="https://api.whatsapp.com/send?phone=5519992023208&text=Olá,%20eu%20gostaria%20de%20um%20orçamento%20para%20criação%20de%20site%20e/ou%20serviços%20de%20marketing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm group hover:text-[#ff6b35] transition-colors"
              >
                <Code size={18} className="text-[#ff6b35]" />
                <span className="cursor-pointer">62.966.444/0001-33</span>
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col items-center gap-4 text-center text-xs text-gray-400">
            <p>© 2026 LMGE Corretora de Seguros LTDA - Brazil Health.</p>
            <button 
              onClick={() => setIsPrivacyOpen(true)}
              className="flex items-center gap-2 border border-white/20 px-4 py-1 rounded-full hover:text-white transition-all"
            >
              <ShieldCheck size={14} className="text-[#ff6b35]" />
              Política de Privacidade (LGPD)
            </button>
          </div>
        </div>
      </div>

      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </footer>
  );
}