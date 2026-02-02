import React from "react";

const FinalSection = () => {
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
    <section className="bg-gradient-to-b from-[#0C1F3F] to-[#000] py-10 md:py-20 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sua Mente Foi Criada Para Ser Renovada
          </h2>

          <p className="text-xl text-[#F5F6F9] mb-12 leading-relaxed">
            Sua mente é moldável. Sua fé é o caminho.
          </p>

          <p className="text-lg text-[#F5F6F9] mb-12">
            Dê o primeiro passo para viver a transformação que a ciência explica
            — e que Deus já prometeu.
          </p>

          {/* Final CTA */}
          <button
            onClick={scrollToOffer}
            className="bg-white text-[#0C1F3F] px-16 py-6 rounded-full text-2xl font-bold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Começar Agora
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalSection;
