export default function ServicesSection() {
  // URLs configuradas para carregamento direto
  const imgPlanoSaude = "https://lh3.googleusercontent.com/d/1I6xwHVW53ErEX04hah2AoGdFFfOdYmEn";
  const imgPlanoOdonto = "https://lh3.googleusercontent.com/d/1D567KjYYap7-tB86XRfwobXW-28YqTMM";
  const imgSeguroVida = "https://lh3.googleusercontent.com/d/1PXO_DcbJcvw2_nOJtGtE8Kxt4_Zln-7g";
  const imgPlanoPet = "https://lh3.googleusercontent.com/d/1X5HR4AivkPRAxA37dbmSn1iuyvbgMOEN";

  return (
    <div className="bg-white">
      {/* SEÇÃO: PLANO DE SAÚDE */}
      <section id="plano-saude" className="py-12 md:py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2847] mb-6">Plano de Saúde</h2>
            <div className="space-y-6 text-[#1a2847]">
              <div>
                <h3 className="font-bold text-lg mb-2">Planos Individuais e Familiar</h3>
                <p className="text-gray-600 leading-relaxed">
                  Trabalhamos com as melhores operadoras e oferecemos planos que atendam à necessidade de serviços para você e a família.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">PJ/PME Planos Coletivos Empresarial</h3>
                <p className="text-gray-600 leading-relaxed">
                  Fornecemos a solução completa em planos de saúde para Pequenas e Médias Empresas.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Planos Coletivos por Adesão</h3>
                <p className="text-gray-600 leading-relaxed">
                  Uma opção econômica com ampla cobertura para você e sua família.
                </p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img src={imgPlanoSaude} alt="Plano de Saúde" className="rounded-2xl shadow-2xl max-w-full h-auto object-cover transform hover:scale-105 transition-all duration-500" />
          </div>
        </div>
      </section>

      {/* SEÇÃO: PLANO ODONTO (Fundo Cinza) */}
      <section id="plano-odonto" className="py-12 md:py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="flex justify-center">
            <img src={imgPlanoOdonto} alt="Plano Odonto" className="rounded-2xl shadow-2xl max-w-full h-auto object-cover transform hover:scale-105 transition-all duration-500" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2847] mb-6">Plano Odonto</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>Temos os melhores planos odontológicos para garantir sua tranquilidade e um sorriso saudável.</p>
              <p>A saúde dentária é essencial e nossos planos oferecem a base necessária para qualquer momento de emergência ou prevenção.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO: SEGURO VIDA */}
      <section id="seguro-vida" className="py-12 md:py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2847] mb-6">Seguro Vida</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              O seguro de vida é de extrema importância para garantir a estabilidade financeira de seus familiares em momentos imprevistos ou incapacidade.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img src={imgSeguroVida} alt="Seguro Vida" className="rounded-2xl shadow-2xl max-w-full h-auto object-cover transform hover:scale-105 transition-all duration-500" />
          </div>
        </div>
      </section>

      {/* SEÇÃO: PLANO PET (Fundo Cinza) - AJUSTE DE ESPAÇAMENTO INFERIOR */}
      <section id="plano-pet" className="pt-12 md:pt-24 pb-4 md:pb-6 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="flex justify-center">
            <img src={imgPlanoPet} alt="Plano Pet" className="rounded-2xl shadow-2xl max-w-full h-auto object-cover transform hover:scale-105 transition-all duration-500" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2847] mb-6">Plano Pet</h2>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>Saúde veterinária em todo o território nacional para o seu melhor amigo.</p>
              <p>Segurança para o pet e economia para você, garantindo atendimento médico sem custos extras por procedimento coberto.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}