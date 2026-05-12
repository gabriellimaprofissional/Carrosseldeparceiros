import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import DivMaxW7Xl from "../imports/DivMaxW7Xl/DivMaxW7Xl";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import CookieBanner from "./components/CookieBanner"; // 1. Importação do novo componente

export default function App() {
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesSection />

      <section id="parceiros" className="py-16 bg-white">
        <DivMaxW7Xl />
      </section>

      <ContactSection />
      <Footer />
      <WhatsAppButton />
      
      {/* 2. Aplicação do Banner de Cookies na raiz do projeto */}
      <CookieBanner />
    </div>
  );
}