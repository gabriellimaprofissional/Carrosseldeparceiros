import { useState } from "react";

export default function HeroSection() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    plano: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    // Ajustado padding para ser menor no mobile e maior no desktop (py-12 vs md:py-24)
    <section id="hero" className="bg-[#1D2D5C] text-white py-12 md:py-24 px-6 min-h-screen flex items-center">
      {/* - grid-cols-1: no celular (1080x1920) fica um em cima do outro.
          - md:grid-cols-2: no desktop fica lado a lado.
      */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
        
        {/* Texto do Hero */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Benefício para nós é cuidar de pessoas e atender sua empresa
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 md:mb-0">
            Cote agora com especialistas da Brazil Health.
          </p>
        </div>

        {/* Card do Formulário */}
        <div className="bg-white rounded-lg p-6 md:p-8 shadow-2xl">
          <h3 className="text-[#1a2847] text-xl font-semibold mb-6 text-center">
            Solicite uma cotação
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[#1a2847] text-sm mb-1 font-medium">Nome</label>
              <input
                type="text"
                required
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-[#1a2847] bg-[#FAFBFD] focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Seu nome completo"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#1a2847] text-sm mb-1 font-medium">E-mail</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-[#1a2847] bg-[#FAFBFD] focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-[#1a2847] text-sm mb-1 font-medium">Telefone</label>
                <input
                  type="tel"
                  required
                  value={formData.telefone}
                  onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-[#1a2847] bg-[#FAFBFD] focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#1a2847] text-sm mb-1 font-medium">O que você precisa?</label>
              <select
                required
                value={formData.plano}
                onChange={(e) => setFormData({ ...formData, plano: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-[#1a2847] bg-[#FAFBFD] focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="">Selecione um plano</option>
                <option value="saude">Plano de Saúde</option>
                <option value="odonto">Plano Odontológico</option>
                <option value="vida">Seguro Vida</option>
                <option value="pet">Plano Pet</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-[#ff6b35] hover:bg-[#ff5722] text-white font-bold py-4 rounded-md transition-all transform hover:scale-[1.02] shadow-lg"
            >
              ENVIAR SOLICITAÇÃO
            </button>
            <p className="text-gray-400 text-[10px] text-center mt-2">
              Seus dados estão seguros conosco.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}