import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  // Link adaptado no padrão googleusercontent
  const imgABF = "https://lh3.googleusercontent.com/u/0/d/1opVLHERY9StprwfJXLb_N9eYelMFUdqq";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
  };

  return (
    <section id="contato" className="py-12 md:py-24 px-6 bg-[#FAFBFD]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Lado Esquerdo: Informações Institucionais */}
        <div className="text-center md:text-left order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2847] mb-8">
            Fale Conosco
          </h2>

          <div className="space-y-8 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-sm md:bg-transparent md:p-0 md:shadow-none border border-gray-100 md:border-none">
              <h3 className="font-bold text-[#1a2847] mb-1 uppercase text-xs tracking-widest">Razão Social</h3>
              <p className="text-gray-700 font-medium">LMGE CORRETORA DE SEGUROS LTDA</p>
              <p className="text-gray-500 text-sm">CNPJ: 60.238.639/0001-31</p>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div>
                <h3 className="font-bold text-[#1a2847] mb-1 uppercase text-xs tracking-widest">Telefone</h3>
                <p className="text-[#4a90e2] font-bold text-lg">(11) 94291-7766</p>
              </div>

              <div>
                <h3 className="font-bold text-[#1a2847] mb-1 uppercase text-xs tracking-widest">Email</h3>
                <p className="text-gray-700 break-all md:break-normal">guilherme.escobar@brazilhealth.com.br</p>
              </div>
            </div>
          </div>

          {/* Imagem ABF Associado - Estilizada */}
          <div className="mt-12 flex justify-center md:justify-start">
            <img 
              src={imgABF} 
              alt="ABF Associado" 
              className="max-w-[180px] md:max-w-xs" 
            />
          </div>
        </div>

        {/* Lado Direito: Formulário de Contato */}
        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-2xl order-1 md:order-2 border border-gray-100">
          <h3 className="text-xl md:text-2xl font-bold text-[#1a2847] mb-6 leading-tight">
            Envie sua mensagem e solicite uma cotação
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-[#1a2847] text-sm font-semibold mb-2">Nome completo</label>
              <input
                type="text"
                required
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-[#1a2847] bg-[#FAFBFD] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] transition-all"
                placeholder="Como prefere ser chamado?"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#1a2847] text-sm font-semibold mb-2">E-mail</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-[#1a2847] bg-[#FAFBFD] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] transition-all"
                  placeholder="exemplo@email.com"
                />
              </div>

              <div>
                <label className="block text-[#1a2847] text-sm font-semibold mb-2">Telefone</label>
                <input
                  type="tel"
                  required
                  value={formData.telefone}
                  onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-[#1a2847] bg-[#FAFBFD] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] transition-all"
                  placeholder="(11) 99999-9999"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#1a2847] text-sm font-semibold mb-2">Mensagem</label>
              <textarea
                value={formData.mensagem}
                onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-[#1a2847] bg-[#FAFBFD] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] resize-none transition-all"
                placeholder="Conte-nos como podemos ajudar..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#ff6b35] hover:bg-[#ff5722] text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-orange-200 active:scale-95"
            >
              ENVIAR MENSAGEM
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}