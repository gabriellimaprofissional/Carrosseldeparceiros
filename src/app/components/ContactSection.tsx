import { useState, useEffect } from "react";
import { CheckCircle2, X } from "lucide-react";

// Importação da imagem local conforme a estrutura do seu VS Code
import imgABF from "../../imports/ABF_ASSOCIADO-01.png";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
    origem: "Contact Section",
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

      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq('track', 'Lead');
      }

      setShowModal(true);
      setFormData(prev => ({
        ...prev,
        nome: "",
        email: "",
        telefone: "",
        mensagem: ""
      }));
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao enviar. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="relative py-12 md:py-24 px-6 bg-[#FAFBFD]">
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

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="text-center md:text-left order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2847] mb-8">Fale Conosco</h2>
          <div className="space-y-8 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-sm md:bg-transparent md:p-0 md:shadow-none border border-gray-100 md:border-none text-left">
              <h3 className="font-bold text-[#1a2847] mb-1 uppercase text-xs tracking-widest">Razão Social</h3>
              <p className="text-gray-700 font-medium">LMGE CORRETORA DE SEGUROS LTDA</p>
              <p className="text-gray-500 text-sm">CNPJ: 60.238.639/0001-31</p>
            </div>
            <div className="flex flex-col md:flex-row gap-8 text-left">
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
          <div className="mt-12 flex justify-center md:justify-start">
            {/* Imagem local aplicada aqui */}
            <img src={imgABF} alt="ABF Associado" className="max-w-[180px] md:max-w-xs" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-2xl order-1 md:order-2 border border-gray-100">
          <h3 className="text-xl md:text-2xl font-bold text-[#1a2847] mb-6 leading-tight">
            Envie sua mensagem e solicite uma cotação
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5 text-left">
            <div>
              <label className="block text-[#1a2847] text-sm font-semibold mb-2">Nome completo *</label>
              <input
                type="text" required
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-[#1a2847] bg-[#FAFBFD] focus:ring-2 focus:ring-[#4a90e2] outline-none transition-all"
                placeholder="Como prefere ser chamado?"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#1a2847] text-sm font-semibold mb-2">E-mail *</label>
                <input
                  type="email" required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-[#1a2847] bg-[#FAFBFD] focus:ring-2 focus:ring-[#4a90e2] outline-none transition-all"
                  placeholder="exemplo@email.com"
                />
              </div>
              <div>
                <label className="block text-[#1a2847] text-sm font-semibold mb-2">Telefone *</label>
                <input
                  type="tel" required
                  maxLength={11}
                  value={formData.telefone}
                  onChange={(e) => setFormData({ ...formData, telefone: e.target.value.replace(/\D/g, "") })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-[#1a2847] bg-[#FAFBFD] focus:ring-2 focus:ring-[#4a90e2] outline-none transition-all"
                  placeholder="11999999999"
                />
              </div>
            </div>
            <div>
              <label className="block text-[#1a2847] text-sm font-semibold mb-2">Mensagem *</label>
              <textarea
                required
                value={formData.mensagem}
                onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-[#1a2847] bg-[#FAFBFD] focus:ring-2 focus:ring-[#4a90e2] resize-none outline-none transition-all"
                placeholder="Conte-nos como podemos ajudar..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-[#ff6b35] hover:bg-[#ff5722] text-white font-bold py-4 rounded-lg transition-all shadow-lg active:scale-95 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? "ENVIANDO..." : "ENVIAR MENSAGEM"}
            </button>

            <p className="text-[10px] text-gray-400 mt-3 text-center leading-tight">
              Ao enviar seus dados, você concorda em ser contatado por nossos especialistas da 
              Brazil Health para receber a cotação solicitada, conforme nossa Política de Privacidade.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}