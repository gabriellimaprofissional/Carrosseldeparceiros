import imgPlanoSaude from "../../imports/image-1.png";
import imgPlanoOdonto from "../../imports/image-2.png";
import imgSeguroVida from "../../imports/image-3.png";
import imgPlanoPet from "../../imports/image-4.png";

export default function ServicesSection() {
  return (
    <div className="bg-white">
      <section id="plano-saude" className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1a2847] mb-6">Plano de Saúde</h2>

            <div className="space-y-4 text-[#1a2847]">
              <div>
                <h3 className="font-semibold mb-2">Planos Individuais e Familiar</h3>
                <p className="text-gray-700">
                  Trabalhamos com as melhores operadoras e oferecemos planos que atendam à necessidade de serviços para você e a família. Garantimos atendimento personalizado, cotação de planos, valores e propostas sem qualquer burocracia.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">PJ/PME Planos Coletivos Empresarial</h3>
                <p className="text-gray-700">
                  Fornecemos a solução completa em planos de saúde. Pessoas Jurídicas e Pequenas e Médias Empresas podem contar com nossos especialistas para encontrar o plano de saúde ideal garantindo aos seus colaboradores a boa saúde e satisfação.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Planos Coletivos por Adesão</h3>
                <p className="text-gray-700">
                  Caso esteja procurando um plano mais econômico e com mais cobertura esse e o melhor pois alem de custar mais barato também garantiremos um boa rede ótima para você e pra sua familia.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <img src={imgPlanoSaude} alt="Plano de Saúde" className="rounded-lg shadow-lg max-w-md w-full object-cover" />
          </div>
        </div>
      </section>

      <section id="plano-odonto" className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img src={imgPlanoOdonto} alt="Plano Odonto" className="rounded-lg shadow-lg max-w-md w-full object-cover" />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#1a2847] mb-6">Plano Odonto</h2>

            <div className="space-y-4 text-[#1a2847]">
              <p className="text-gray-700">
                Nós da Brazil Health temos os melhores planos de saúde que vão dar muito mais tranquilidade para você.
              </p>

              <p className="text-gray-700">
                Oferecemos planos de Saúde Dental de todos os níveis e preços para atender a todos. Saúde dentária hoje é de extrema importância pois o plano Dental lhe dá a base e você e sua familia tem onde recorrer em qualquer momento que precise.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="seguro-vida" className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1a2847] mb-6">Seguro Vida</h2>

            <p className="text-gray-700">
              O seguro de vida é de extrema importância financeira para suas familiares em caso de morte ou incapacidade.
            </p>
          </div>

          <div className="flex justify-center">
            <img src={imgSeguroVida} alt="Seguro Vida" className="rounded-lg shadow-lg max-w-md w-full object-cover" />
          </div>
        </div>
      </section>

      <section id="plano-pet" className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img src={imgPlanoPet} alt="Plano Pet" className="rounded-lg shadow-lg max-w-md w-full object-cover" />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#1a2847] mb-6">Plano Pet</h2>

            <p className="text-gray-700">
              O Plano Pet garante saúde para seu pet a qualquer momento com cobertura veterinária em todo território nacional. Com o plano seu Pet terá toda assistência de saúde.
              <br /><br />
              Proporcionando também segurança tanto para o seu pet que terá o melhor atendimento e para você que terá a responsabilidade médica veterinária sem custo por já possuir o plano de Saúde.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
