import { useState } from "react";
import { Phone, Mail, Code, ShieldCheck } from "lucide-react";
import PrivacyModal from "./PrivacyModal";

// Importação da imagem local conforme a estrutura do seu projeto
import logoBrazilHealth from "../../imports/logo_brazil_health.png";

export default function Footer() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <footer className="bg-[#1a2847] text-white">
      {/* Linha de destaque superior */}
      <div className="border-t-4 border-[#ff6b35]">
        <div className="max-w-7xl mx-auto py-12 px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            
            {/* Bloco 1: Identificação com Logo */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              {/* Mantendo o retângulo branco para destaque do logo */}
              <div className="mb-4 bg-white p-2 rounded-lg inline-block">
                <img 
                  src={logoBrazilHealth} 
                  alt="Brazil Health Logo" 
                  className="h-10 w-auto object-contain"
                />
              </div>
              <p className="text-sm font-medium mb-1">LMGE CORRETORA DE SEGUROS LTDA</p>
              <p className="text-gray-400 text-xs">CNPJ: 60.238.639/0001-31</p>
            </div>

            {/* Bloco 2: Contato */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="text-lg font-semibold mb-4 text-[#4a90e2]">Contato</h4>
              <div className="space-y-4 text-sm">
                <a 
                  href="tel:11942917766" 
                  className="flex items-center justify-center md:justify-start gap-3 hover:text-[#ff6b35] transition-colors"
                >
                  <Phone size={18} className="text-[#ff6b35] shrink-0" />
                  <span>(11) 94291-7766</span>
                </a>
                <a 
                  href="mailto:guilherme.escobar@brazilhealth.com.br" 
                  className="flex items-center justify-center md:justify-start gap-3 hover:text-[#ff6b35] transition-colors break-all md:break-normal"
                >
                  <Mail size={18} className="text-[#ff6b35] shrink-0" />
                  <span>guilherme.escobar@brazilhealth.com.br</span>
                </a>
              </div>
            </div>

            {/* Bloco 3: Desenvolvimento */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="text-lg font-semibold mb-4 text-[#4a90e2]">Desenvolvimento</h4>
              <div className="flex items-center gap-3 text-sm group cursor-default">
                <Code size={18} className="text-[#ff6b35]" />
                <span className="group-hover:text-[#ff6b35] transition-colors">62.966.444/0001-33</span>
              </div>
            </div>
          </div>

          {/* Linha de Copyright e LGPD */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col items-center gap-4 text-center text-xs md:text-sm text-gray-400">
            <p className="leading-relaxed">
              © 2026 LMGE Corretora de Seguros LTDA - Brazil Health. <br className="md:hidden" /> 
              Todos os direitos reservados.
            </p>
            
            {/* Botão da Política de Privacidade */}
            <button 
              onClick={() => setIsPrivacyOpen(true)}
              className="flex items-center gap-2 hover:text-white transition-colors border border-white/20 px-4 py-1 rounded-full text-[10px] md:text-xs"
            >
              <ShieldCheck size={14} className="text-[#ff6b35]" />
              Política de Privacidade (LGPD)
            </button>
          </div>
        </div>
      </div>

      {/* Chamada do Modal */}
      <PrivacyModal 
        isOpen={isPrivacyOpen} 
        onClose={() => setIsPrivacyOpen(false)} 
      />
    </footer>
  );
}