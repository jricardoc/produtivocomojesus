import React from "react";
import { Download, PlayCircle, Sparkles, Clock, Mail } from "lucide-react";

const HowItWorks = () => {
  const scrollToOffer = () => {
    const offerSection = document.getElementById("offer-section");
    if (offerSection) {
      const headerOffset = 100;
      const elementPosition = offerSection.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white py-10 md:py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            🎯 COMO FUNCIONA NA PRÁTICA?
          </h2>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto space-y-12 mb-16">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="bg-gold-500 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 text-2xl font-bold text-white shadow-lg">
              1
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                VOCÊ COMPRA E RECEBE TUDO NA HORA
              </h3>
              <p className="text-slate-600 mb-4">
                → Assim que o pagamento for confirmado, você recebe um e-mail
                com:
              </p>
              <ul className="space-y-2 text-slate-700 ml-4 mb-4">
                <li>✓ Link de acesso à Área de Membros</li>
                <li>
                  ✓ Ebook completo em PDF (para ler no celular, tablet ou
                  computador)
                </li>
                <li>
                  ✓ Planner digital editável (você pode imprimir ou usar
                  digitalmente)
                </li>
                <li>✓ Audiobooks das meditações guiadas</li>
              </ul>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <Clock className="w-4 h-4 text-gold-600" />
                <span>
                  Tempo de acesso: IMEDIATO (em até 5 minutos após a compra)
                </span>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="bg-gold-500 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 text-2xl font-bold text-white shadow-lg">
              2
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                VOCÊ COMEÇA HOJE MESMO
              </h3>
              <p className="text-slate-600 mb-4">
                → Não precisa esperar segunda-feira. Não precisa se preparar.
              </p>
              <p className="text-slate-600 mb-4">
                → Abra o Dia 1 do Planner e siga o passo a passo. Cada dia tem:
              </p>
              <ul className="space-y-2 text-slate-700 ml-4 mb-4">
                <li>✓ 1 lição bíblica + científica (10 min de leitura)</li>
                <li>✓ 1 exercício prático guiado (5-10 min)</li>
                <li>✓ 1 meditação guiada opcional (7-15 min)</li>
              </ul>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <Clock className="w-4 h-4 text-gold-600" />
                <span>Tempo diário necessário: 05 à 10 minutos</span>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="bg-gold-500 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 text-2xl font-bold text-white shadow-lg">
              3
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                EM 21 DIAS, VOCÊ NÃO É MAIS A MESMA PESSOA
              </h3>
              <div className="bg-gold-50 p-6 rounded-xl border-l-4 border-gold-500">
                <p className="text-slate-700 italic mb-4">
                  "Imagine você daqui a 7 dias: Você acorda e, pela primeira vez
                  em muito tempo, seu primeiro pensamento não é ansiedade ou
                  autossabotagem."
                </p>
                <p className="text-slate-700">
                  Você tem uma tarefa importante para fazer e você não
                  procrastina, simplesmente começa. Não porque você virou um
                  robô, mas você aprendeu a interromper os pensamentos
                  destrutivos ANTES que eles te paralisem. Porque você descobriu
                  que Deus não quer só mudar suas circunstâncias — Ele quer
                  transformar seu modo de pensar.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary CTA */}
        <div className="text-center">
          <button
            onClick={scrollToOffer}
            className="bg-gold-500 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-gold-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border-b-4 border-gold-700 active:border-b-0 active:translate-y-1"
          >
            Quero Começar Agora
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
