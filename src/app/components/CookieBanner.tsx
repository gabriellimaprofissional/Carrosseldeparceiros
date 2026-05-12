import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const handleOpenPrivacy = (e: React.MouseEvent) => {
    e.preventDefault();
    // Dispara um evento global que qualquer componente pode ouvir
    window.dispatchEvent(new Event("openPrivacyModal"));
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[200] p-4 md:p-6 animate-in slide-in-from-bottom duration-700">
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 shadow-2xl rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1 text-center md:text-left">
          <h4 className="text-[#1a2847] font-bold text-lg mb-1">Privacidade e Cookies 🍪</h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            A Brazil Health utiliza cookies e outras tecnologias para melhorar sua experiência e 
            personalizar conteúdos de acordo com nossa{" "}
            <button 
              onClick={handleOpenPrivacy}
              className="text-[#4a90e2] underline hover:text-[#1D2D5C] font-medium"
            >
              Política de Privacidade
            </button>.
          </p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <button 
            onClick={acceptCookies}
            className="flex-1 md:flex-none bg-[#1a2847] hover:bg-[#1D2D5C] text-white font-bold py-3 px-8 rounded-lg transition-colors text-sm"
          >
            ACEITAR
          </button>
        </div>
      </div>
    </div>
  );
}