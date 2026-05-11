import { Phone, Mail, Code } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1a2847] text-white">
      <div className="border-t-4 border-[#ff6b35]">
        <div className="max-w-7xl mx-auto py-12 px-6">
          <div className="grid grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-white">Brazil</span>
                <span className="text-[#4a90e2]">Health</span>
              </h3>
              <p className="text-sm mb-2">LMGE CORRETORA DE SEGUROS LTDA</p>
              <p className="text-sm">CNPJ: 60.238.639/0001-31</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-[#ff6b35]" />
                  <span>(11) 94291-7766</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-[#ff6b35]" />
                  <span>guilherme.escobar@brazilhealth.com.br</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Desenvolvimento</h4>
              <div className="flex items-center gap-2 text-sm">
                <Code size={16} className="text-[#ff6b35]" />
                <span>NucleoCorr.</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
            <p>© 2026 LMGE Corretora de Seguros LTDA - Brazil Health. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
