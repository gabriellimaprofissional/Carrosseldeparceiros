import { useState } from "react";
import imgABF from "../../imports/image-6.png";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
  };

  return (
    <section id="contato" className="py-16 px-6 bg-[#FAFBFD]">
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-bold text-[#1a2847] mb-8">Fale Conosco</h2>

          <div className="space-y-6 mb-8">
            <div>
              <h3 className="font-semibold text-[#1a2847] mb-1">Razão Social</h3>
              <p className="text-gray-700">LMGE CORRETORA DE SEGUROS LTDA</p>
              <p className="text-gray-700">CNPJ: 60.238.639/0001-31</p>
            </div>

            <div>
              <h3 className="font-semibold text-[#1a2847] mb-1">Telefone</h3>
              <p className="text-gray-700">(11) 94291-7766</p>
            </div>

            <div>
              <h3 className="font-semibold text-[#1a2847] mb-1">Email</h3>
              <p className="text-gray-700">guilherme.escobar@brazilhealth.com.br</p>
            </div>
          </div>

          <div className="mt-8">
            <img src={imgABF} alt="ABF Associado" className="max-w-xs" />
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-[#1a2847] mb-6">
            Envie sua mensagem e solicite uma cotação
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[#1a2847] text-sm mb-2">Nome completo</label>
              <input
                type="text"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-[#1a2847] bg-[#FAFBFD] focus:outline-none focus:ring-2 focus:ring-[#4a90e2]"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[#1a2847] text-sm mb-2">E-mail</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-[#1a2847] bg-[#FAFBFD] focus:outline-none focus:ring-2 focus:ring-[#4a90e2]"
                />
              </div>

              <div>
                <label className="block text-[#1a2847] text-sm mb-2">Telefone</label>
                <input
                  type="tel"
                  value={formData.telefone}
                  onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-[#1a2847] bg-[#FAFBFD] focus:outline-none focus:ring-2 focus:ring-[#4a90e2]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#1a2847] text-sm mb-2">Mensagem</label>
              <textarea
                value={formData.mensagem}
                onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-[#1a2847] bg-[#FAFBFD] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#ff6b35] hover:bg-[#ff5722] text-white font-semibold py-3 rounded-md transition-colors"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
