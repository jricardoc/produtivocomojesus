import React, { useEffect, useState } from "react";
import { CheckCircle, Award } from "lucide-react";

const Offer = () => {
  const [checkoutUrl, setCheckoutUrl] = useState(
    "https://pay.hotmart.com/O102339313N?checkoutMode=10",
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utmParams: Record<string, string> = {};

    [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_content",
      "utm_term",
    ].forEach((param) => {
      const value = params.get(param);
      if (value) {
        utmParams[param] = value;
      }
    });

    if (Object.keys(utmParams).length > 0) {
      const url = new URL(
        "https://pay.hotmart.com/O102339313N?checkoutMode=10",
      );
      Object.entries(utmParams).forEach(([key, value]) => {
        url.searchParams.set(key, value);
      });
      setCheckoutUrl(url.toString());
    }
  }, []);

  const benefits = [
    {
      text: 'Guia "Produtivo como Jesus": O manual de engenharia de rotina baseada nos Evangelhos.',
      hasBonus: true,
    },
    {
      text: "Planner de 21 Dias: Lições diárias para aplicar o método F.O.C.O na prática.",
      hasBonus: true,
    },
    {
      text: "Protocolos de Alta Performance: Técnicas de neurociência para eliminar distrações.",
      hasBonus: true,
    },
    {
      text: 'Checklist "O Despertar": O passo a passo para uma manhã produtiva e espiritual.',
      hasBonus: true,
    },
    {
      text: 'Áudio-Treinamento "Foco no Deserto": Como manter a clareza em dias caóticos.',
      hasBonus: true,
    },
    {
      text: "Acesso Imediato e Vitalício: Comece agora e consulte sempre que precisar.",
      hasBonus: true,
    },
  ];

  return (
    <section id="offer-section" className="bg-slate-50 py-10 md:py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Two Choices Section */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-900">
              ⚖️ VOCÊ TEM DUAS ESCOLHAS AGORA
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-slate-500 mb-4">
                  OPÇÃO 1: Continuar como está
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  → Acordar todo dia com a mesma mente bagunçada
                  <br />
                  → Prometer a si mesmo que vai mudar (de novo)
                  <br />
                  → Sentir culpa por procrastinar e se autossabotar
                  <br />→ Ficar preso nos mesmos padrões mentais por mais meses,
                  anos...
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border-2 border-gold-500 shadow-xl transform scale-105">
                <h3 className="text-xl font-bold text-gold-600 mb-4">
                  OPÇÃO 2: Decidir que hoje é o dia
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  • Investir os próximos 21 dias para recalibrar sua
                  produtividade.
                  <br />
                  • Aprender a dominar sua agenda em vez de ser escravo dela.
                  <br />• Finalmente viver a paz de quem cumpre sua missão
                  diária com excelência.
                </p>
              </div>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 mb-12 border border-gold-200 shadow-2xl">
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3 text-left">
                    <CheckCircle className="w-6 h-6 text-gold-500 flex-shrink-0 mt-0.5" />
                    <span className="text-lg flex-1 text-slate-700">
                      {benefit.text}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-slate-100 pt-8">
                <p className="text-xl line-through text-slate-400 mb-3">
                  De R$ 267,00
                </p>
                <p className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                  R$ 19,90{" "}
                  <span className="text-2xl text-slate-600 font-normal">
                    à vista
                  </span>
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  Menos do que um lanche — para você dominar o seu tempo e viver
                  o seu propósito todos os dias.
                </p>

                {/* Main CTA */}
                <a
                  href={checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gold-500 text-white px-8 py-5 rounded-full text-xl font-bold hover:bg-gold-600 transition-all duration-300 hover:scale-105 shadow-2xl mb-6 animate-pulse-glow w-full md:w-auto border-b-4 border-gold-700 active:border-b-0 active:translate-y-1"
                >
                  QUERO CAMINHAR NO RITMO DO MESTRE
                </a>

                {/* Security Text */}
                <p className="text-sm text-slate-500">
                  Pagamento 100% seguro · Acesso imediato · 7 dias de garantia
                  incondicional
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
