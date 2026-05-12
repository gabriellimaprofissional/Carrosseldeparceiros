import React from "react";
import { X } from "lucide-react";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300 flex flex-col">
        
        {/* Header */}
        <div className="p-6 border-b flex items-center justify-between bg-[#1D2D5C] text-white">
          <h3 className="text-xl font-bold">Política de Privacidade</h3>
          <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto text-[#1a2847] leading-relaxed space-y-6">
          <section>
            <h4 className="font-bold uppercase text-xs tracking-widest text-blue-600 mb-2">1. Identificação</h4>
            <p className="text-sm">Este site é de responsabilidade da <strong>LMGE CORRETORA DE SEGUROS LTDA (Brazil Health)</strong>, CNPJ: 60.238.639/0001-31.</p>
          </section>

          <section>
            <h4 className="font-bold uppercase text-xs tracking-widest text-blue-600 mb-2">2. Coleta de Dados</h4>
            <p className="text-sm">Coletamos dados fornecidos voluntariamente através de nossos formulários: <strong>Nome, E-mail e Telefone</strong>.</p>
          </section>

          <section>
            <h4 className="font-bold uppercase text-xs tracking-widest text-blue-600 mb-2">3. Finalidade</h4>
            <p className="text-sm">Os dados são utilizados exclusivamente para o envio de cotações de planos de saúde, seguros de vida, odontológicos ou pet conforme sua solicitação.</p>
          </section>

          <section>
            <h4 className="font-bold uppercase text-xs tracking-widest text-blue-600 mb-2">4. Compartilhamento</h4>
            <p className="text-sm">Para fins de cálculo de proposta e viabilização comercial, seus dados poderão ser compartilhados com as operadoras de saúde e seguradoras parceiras.</p>
          </section>

          <section>
            <h4 className="font-bold uppercase text-xs tracking-widest text-blue-600 mb-2">5. Seus Direitos (LGPD)</h4>
            <p className="text-sm">Você pode solicitar o acesso ou exclusão definitiva de seus dados enviando um e-mail para <strong>guilherme.escobar@brazilhealth.com.br</strong>.</p>
          </section>
        </div>

        {/* Footer do Modal */}
        <div className="p-4 border-t bg-gray-50 text-center">
          <button 
            onClick={onClose}
            className="bg-[#1D2D5C] text-white px-8 py-2 rounded-lg font-bold hover:bg-[#2a3a5a] transition-all"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}