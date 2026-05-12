import { useState, useEffect } from "react";
import { CheckCircle2, X } from "lucide-react";

export default function HeroSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    plano: "",
    origem: "Hero Section",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_content: "",
    utm_term: ""
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setFormData(prev => ({
      ...prev,
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_content: params.get("utm_content") || "",
      utm_term: params.get("utm_term") || ""
    }));
  }, []);

  const validatePhone = (phone: string) => {
    const cleanPhone = phone.replace(/\D/g, ""); 
    if (cleanPhone.length < 10 || cleanPhone.length > 11) return false;
    const numberWithoutDDD = cleanPhone.substring(2);
    const isRepeated = /^(.)\1+$/.test(numberWithoutDDD);
    if (isRepeated) return false;
    return cleanPhone;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validPhone = validatePhone(formData.telefone);
    if (!validPhone) {
      alert("Por favor, insira um telefone válido");
      return;
    }

    setIsSubmitting(true);
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbydXhaefhoc12JAZrECEIuSQFcMx1jXD2oeogjBzJaMoHA7kujr82xikgsvYCIbGJYWiQ/exec";

    try {
      const dataToSend = { ...formData, telefone: validPhone };
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      // Disparo do Lead no Meta Pixel
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq('track', 'Lead');
      }

      setShowModal(true);
      setFormData(prev => ({
        ...prev,
        nome: "",
        email: "",
        telefone: "",
        plano: ""
      }));
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao enviar. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="hero" className="relative bg-[#1D2D5C] text-white py-12 md:py-24 px-6 min-h-screen flex items-center">
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl animate-in fade-in zoom-in duration-300 relative text-center">
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
              <X size={20} />
            </button>
            <div className="bg-green-100 p-3 rounded-full mb-4 inline-block">
              <CheckCircle2 size={40} className="text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-[#1a2847] mb-2">Solicitação Enviada!</h3>
            <p className="text-gray-600">Recebemos com sucesso a sua solicitação, em breve um de nossos especialistas entrará em contato.</p>
            <button onClick={() => setShowModal(false)} className="mt-6 w-full bg-[#1a2847] text-white font-bold py-3 rounded-lg hover:bg-[#2a3a5a]">
              Fechar
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Benefício para nós é cuidar de pessoas e atender sua empresa
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 md:mb-0">
            Cote agora com especialistas da Brazil Health.
          </p>
        </div>

        <div className="bg-white rounded-lg p-6 md:p-8 shadow-2xl">
          <h3 className="text-[#1a2847] text-xl font-semibold mb-6 text-center">Solicite uma cotação</h3>

          <form onSubmit={handleSubmit} className="space-y-4 text-left text-[#1a2847]">
            <div>
              <label className="block text-sm mb-1 font-medium">Nome *</label>
              <input
                type="text" required
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-md bg-[#FAFBFD] focus:ring-2 focus:ring-orange-500"
                placeholder="Seu nome completo"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1 font-medium">E-mail *</label>
                <input
                  type="email" required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md bg-[#FAFBFD] focus:ring-2 focus:ring-orange-500"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 font-medium">Telefone (DDD + Número) *</label>
                <input
                  type="text" required
                  maxLength={11}
                  value={formData.telefone}
                  onChange={(e) => setFormData({ ...formData, telefone: e.target.value.replace(/\D/g, "") })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md bg-[#FAFBFD] focus:ring-2 focus:ring-orange-500"
                  placeholder="11999999999"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1 font-medium">O que você precisa? *</label>
              <select
                required
                value={formData.plano}
                onChange={(e) => setFormData({ ...formData, plano: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-md bg-[#FAFBFD] focus:ring-2 focus:ring-orange-500"
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
              disabled={isSubmitting}
              className={`w-full bg-[#ff6b35] hover:bg-[#ff5722] text-white font-bold py-4 rounded-md transition-all shadow-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? "ENVIANDO..." : "ENVIAR SOLICITAÇÃO"}
            </button>

            <p className="text-[10px] text-gray-500 mt-3 text-center leading-tight">
              Ao enviar seus dados, você concorda em ser contatado por nossos especialistas da 
              Brazil Health para receber a cotação solicitada, conforme nossa Política de Privacidade.
            </p>

            <p className="text-gray-400 text-[10px] text-center mt-2">
              * Todos os campos são obrigatórios.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}