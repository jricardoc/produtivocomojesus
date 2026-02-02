import React from "react";
import { BookOpen, Calendar, CheckSquare, Headphones } from "lucide-react";

const ProductDetails = () => {
  const items = [
    {
      icon: <BookOpen className="w-12 h-12 text-gold-500 mb-6" />,
      title: 'O Guia Principal "Produtivo como Jesus"',
      description: "O manual completo da engenharia de rotina de Cristo.",
      emoji: "📘",
    },
    {
      icon: <Calendar className="w-12 h-12 text-gold-500 mb-6" />,
      title: "Planner de 21 Dias de Implementação",
      description:
        "Um roteiro diário de 10 minutos para reprogramar seus hábitos.",
      emoji: "🗓️",
    },
    {
      icon: <CheckSquare className="w-12 h-12 text-gold-500 mb-6" />,
      title: 'Checklist "O Despertar do Mestre"',
      description: "Um passo a passo para sua primeira hora da manhã.",
      emoji: "💡",
    },
    {
      icon: <Headphones className="w-12 h-12 text-gold-500 mb-6" />,
      title: 'BÔNUS: Áudio-Treinamento "Foco no Deserto"',
      description: "Como manter a concentração em ambientes caóticos.",
      emoji: "🎧",
    },
  ];

  return (
    <section className="bg-white pb-10 pt-0 md:py-20">
      <div className="container mx-auto px-6">
        {/* DOBRA 4 - O QUE VOCÊ RECEBE */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              O Que Você Recebe?
            </h2>
            <p className="text-xl text-slate-600">(Entrega do Produto)</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-gold-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">
                  {item.emoji} {item.title}
                </h3>
                <p className="text-slate-600 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
