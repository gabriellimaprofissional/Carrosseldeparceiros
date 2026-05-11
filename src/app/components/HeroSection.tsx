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
    <section id="hero" className="bg-[#1D2D5C] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-6 leading-tight">
            Benefício para nós é cuidar de pessoas e atender sua empresa
          </h1>
          <p className="text-lg opacity-90">
            Cote agora com especialistas
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-xl">
          <h3 className="text-[#1a2847] text-xl font-semibold mb-6 text-center">
            Solicite uma cotação
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[#1a2847] text-sm mb-2">Nome</label>
              <input
                type="text"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-[#1a2847] bg-[#FAFBFD] focus:outline-none focus:ring-2 focus:ring-[#4a90e2]"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label className="block text-[#1a2847] text-sm mb-2">E-mail</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-[#1a2847] bg-[#FAFBFD] focus:outline-none focus:ring-2 focus:ring-[#4a90e2]"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label className="block text-[#1a2847] text-sm mb-2">Telefone</label>
              <input
                type="tel"
                value={formData.telefone}
                onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-[#1a2847] bg-[#FAFBFD] focus:outline-none focus:ring-2 focus:ring-[#4a90e2]"
                placeholder="(00) 00000-0000"
              />
            </div>

            <div>
              <label className="block text-[#1a2847] text-sm mb-2">Plano de Saúde</label>
              <select
                value={formData.plano}
                onChange={(e) => setFormData({ ...formData, plano: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-[#1a2847] bg-[#FAFBFD] focus:outline-none focus:ring-2 focus:ring-[#4a90e2]"
              >
                <option value="">Selecione</option>
                <option value="saude">Plano de Saúde</option>
                <option value="odonto">Plano Odontológico</option>
                <option value="vida">Seguro Vida</option>
                <option value="pet">Plano Pet</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-[#ff6b35] hover:bg-[#ff5722] text-white font-semibold py-3 rounded-md transition-colors"
            >
              Enviar Solicitação
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
