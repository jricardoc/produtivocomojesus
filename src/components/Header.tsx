import React from "react";
import { Brain } from "lucide-react";

const Header = () => {
  const scrollToOffer = () => {
    const offerSection = document.getElementById("offer-section");
    if (offerSection) {
      const headerOffset = 100;
      const elementPosition = offerSection.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;
      const startPosition = window.pageYOffset;
      const distance = offsetPosition - startPosition;
      const duration = 2000;
      let start: number | null = null;

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);

        const ease = (t: number) =>
          t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

        window.scrollTo(0, startPosition + distance * ease(progress));

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  };

  return (
    <header className="relative bg-white text-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gold-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-gold-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-50 rounded-full opacity-50 blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-6 pt-8 pb-8 md:py-16 flex flex-col items-center justify-center">
        {/* Main Headline */}
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-center mb-6 leading-[1.15] md:leading-tight max-w-5xl text-slate-900">
          Como organizar sua rotina em 21 dias usando o mesmo método de gestão
          de tempo de <span className="text-gold-600">Jesus</span>
        </h1>

        {/* Mock-up Visual - No margin or padding as requested */}
        <div className="relative mb-6 md:mb-12">
          <div className="rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500 border-4 border-gold-100 w-[85%] max-w-[20rem] md:w-full md:max-w-md mx-auto">
            <img
              src="https://www.acervodopsicologo.com/wp-content/uploads/2026/02/novo-banner.png"
              alt="Produtivo como Jesus - Planner"
              width="800"
              height="800"
              fetchPriority="high"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Subtitle */}
        <h3 className="text-base md:text-2xl text-slate-600 text-center mb-6 md:mb-10 max-w-3xl leading-snug md:leading-relaxed px-4 font-medium">
          Descubra a rotina de alta performance baseada nos passos de Cristo.
          Como vencer a correria moderna e cumprir seu propósito sem esgotamento
          mental.
        </h3>

        {/* CTA Button */}
        <button
          onClick={scrollToOffer}
          className="inline-block bg-gold-500 text-white px-6 py-4 md:px-12 md:py-5 rounded-full text-lg md:text-xl font-bold hover:bg-gold-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border-b-4 border-gold-700 active:border-b-0 active:translate-y-1"
        >
          Quero Aprender o Ritmo de Jesus
        </button>

        {/* Trust Text */}
        <p className="text-slate-500 text-center mt-6 text-sm md:text-base font-medium">
          <span className="text-gold-600 font-bold">+2.000 pessoas</span> já
          decidiram mudar sua rotina esta semana.
        </p>
      </div>
    </header>
  );
};

export default Header;
