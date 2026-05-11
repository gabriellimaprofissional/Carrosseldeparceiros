import { Phone, Mail, Code, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1a2847] text-white">
      {/* Linha de destaque superior */}
      <div className="border-t-4 border-[#ff6b35]">
        <div className="max-w-7xl mx-auto py-12 px-6">
          {/* Grid Responsivo:
            - grid-cols-1: No celular (um embaixo do outro)
            - md:grid-cols-3: No desktop (lado a lado)
          */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            
            {/* Bloco 1: Identificação */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-white">Brazil</span>
                <span className="text-[#4a90e2]">Health</span>
              </h3>
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

          {/* Linha de Copyright */}
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs md:text-sm text-gray-400">
            <p className="leading-relaxed">
              © 2026 LMGE Corretora de Seguros LTDA - Brazil Health. <br className="md:hidden" /> 
              Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}