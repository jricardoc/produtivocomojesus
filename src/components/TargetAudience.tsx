import React from "react";
import { CheckCircle2 } from "lucide-react";

const TargetAudience = () => {
  const points = [
    "Vive prometendo a si mesmo que vai mudar — mas sempre volta aos mesmos padrões mentais de autossabotagem",
    "Tem TDAH, é neurodivergente ou suspeita que seja — e luta para manter foco, organização e consistência mesmo querendo servir a Deus com excelência",
    "Procrastina mesmo sabendo que tem coisas importantes para fazer — e se sente culpado(a) por isso todo dia",
    "Sente que sua mente está sempre acelerada ou travada — entre pensamentos ruminantes e paralisia mental",
    "Acredita em Deus, mas sente que algo te impede de viver o propósito divino — como se sua própria mente fosse seu maior obstáculo",
    "Já tentou jejum, oração, terapia ou livros de autoajuda — mas nada trouxe uma transformação duradoura",
    "Quer uma solução prática, bíblica e cientificamente fundamentada — não mais promessas vazias ou métodos que não funcionam",
  ];

  return (
    <section className="bg-white pb-10 md:pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
            Para Quem É Este Planner?
          </h2>

          <div className="space-y-6">
            {points.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-gold-50 rounded-xl hover:shadow-md transition-shadow duration-300 border border-gold-100"
              >
                <CheckCircle2 className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                <p className="text-slate-700 text-lg leading-relaxed font-medium">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
