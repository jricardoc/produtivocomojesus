import React from "react";
import { Filter, Music, Zap, Eye } from "lucide-react";

const Method = () => {
  const steps = [
    {
      letter: "F",
      title: "Filtrar o Essencial",
      subtitle: "Estabelecer Prioridades",
      description:
        'Aprenda a dizer "não" como Jesus dizia às multidões para focar no propósito.',
      icon: <Filter className="w-8 h-8 text-white" />,
    },
    {
      letter: "O",
      title: "Orquestrar os Ritmos",
      subtitle: "Ritmos de descanso e ação",
      description: "O segredo bíblico do descanso para produzir 10x mais.",
      icon: <Music className="w-8 h-8 text-white" />,
    },
    {
      letter: "C",
      title: "Conectar na Fonte",
      subtitle: "O segredo da energia matinal",
      description:
        "Como a rotina matinal de Cristo blindava a mente d'Ele contra o estresse.",
      icon: <Zap className="w-8 h-8 text-white" />,
    },
    {
      letter: "O",
      title: "Operar em Presença",
      subtitle: "Vencer a distração",
      description:
        "Técnicas de atenção plena bíblica para eliminar a distração digital.",
      icon: <Eye className="w-8 h-8 text-white" />,
    },
  ];

  return (
    <section className="bg-gold-50 py-10 md:py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            O Método F.O.C.O de Cristo
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Diferente de cursos de gestão de tempo comuns, nosso guia foca em 4
            pilares:
          </p>
        </div>

        {/* Method Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gold-100 flex flex-col items-center text-center"
            >
              <div className="bg-gold-500 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <span className="text-2xl font-bold text-white">
                  {step.letter}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {step.title}
              </h3>
              <span className="text-gold-600 font-semibold text-sm mb-4 block">
                ({step.subtitle})
              </span>
              <p className="text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Method;
