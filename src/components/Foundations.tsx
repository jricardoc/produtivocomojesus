import React from "react";
import { Brain, BookOpen, MessageCircle } from "lucide-react";

const Foundations = () => {
  const foundations = [
    {
      icon: <Brain className="w-12 h-12 text-[#C8A55B]" />,
      title: "Neurociência Aplicada",
      description:
        "Descubra por que seu cérebro te sabota — e como usar a neuroplasticidade para criar novos padrões mentais que te libertam da procrastinação e da autossabotagem de uma vez por todas.",
    },
    {
      icon: <BookOpen className="w-12 h-12 text-[#C8A55B]" />,
      title: "Sabedoria Bíblica",
      description:
        "A Palavra de Deus não é teoria — é o manual de transformação mental que a humanidade sempre precisou. Aplique verdades bíblicas milenares combinadas com estratégias práticas para vencer a ansiedade, agir com propósito e viver em paz interior.",
    },
    {
      icon: <MessageCircle className="w-12 h-12 text-[#C8A55B]" />,
      title: "Terapia Cognitiva",
      description:
        "Técnicas da Terapia Cognitivo-Comportamental aplicadas à fé cristã para identificar pensamentos distorcidos, quebrar crenças limitantes e criar novos hábitos mentais alinhados com a verdade de Deus.",
    },
  ];

  return (
    <section className="bg-white py-10 md:py-20">
      <div className="container mx-auto px-6">
        {/* Main Quote */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C1F3F] mb-8">
            📖 Romanos 12:2 (NTLH)
          </h2>

          <div className="bg-[#F5F6F9] p-8 rounded-2xl mb-8">
            <p className="text-xl md:text-2xl text-[#0C1F3F] leading-relaxed italic">
              "Deixem que Deus os transforme por meio de uma completa mudança da
              mente.."
            </p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            A neurociência moderna descobriu algo revolucionário: seu cérebro
            pode ser reprogramado.
            <br />E a Bíblia já ensinava isso há 2.000 anos.
          </p>
        </div>

        {/* Foundation Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {foundations.map((foundation, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-[#F5F6F9]"
            >
              <div className="flex justify-center mb-6">{foundation.icon}</div>
              <h3 className="text-2xl font-bold text-[#0C1F3F] mb-4">
                {foundation.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {foundation.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Foundations;
