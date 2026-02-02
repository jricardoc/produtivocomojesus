import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const Recognition = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandedImage, setExpandedImage] = useState(null);
  const [autoPlay, setAutoPlay] = useState(true);

  // --- ESTADOS PARA O SWIPE (ARRASTAR) ---
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50; // Distância mínima em pixels para considerar um arraste

  // --- LÓGICA DE SCROLL ---
  const scrollToOffer = () => {
    const offerSection = document.getElementById('offer-section');
    if (offerSection) {
      const headerOffset = 100;
      const elementPosition = offerSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      const startPosition = window.pageYOffset;
      const distance = offsetPosition - startPosition;
      const duration = 2000;
      let start = null;

      const animation = (currentTime) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        window.scrollTo(0, startPosition + distance * ease(progress));
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };
      requestAnimationFrame(animation);
    }
  };

  const images = [
    'https://www.acervodopsicologo.com/wp-content/uploads/2025/12/acervo-4.jpeg',
    'https://www.acervodopsicologo.com/wp-content/uploads/2025/12/acervo-5.jpeg',
    'https://www.acervodopsicologo.com/wp-content/uploads/2025/12/acervo-6.jpeg',
    'https://www.acervodopsicologo.com/wp-content/uploads/2025/12/acervo-7.jpeg',
    'https://www.acervodopsicologo.com/wp-content/uploads/2025/12/acervo-8.jpeg',
    'https://www.acervodopsicologo.com/wp-content/uploads/2025/12/acervo-9.jpeg',
    'https://www.acervodopsicologo.com/wp-content/uploads/2025/12/acervo-10.jpeg',
    'https://www.acervodopsicologo.com/wp-content/uploads/2025/12/acervo-11.jpeg',
    'https://www.acervodopsicologo.com/wp-content/uploads/2025/12/acervo-12.jpeg',
    'https://www.acervodopsicologo.com/wp-content/uploads/2025/12/acervo-13.jpeg',
    'https://www.acervodopsicologo.com/wp-content/uploads/2025/12/acervo-1.jpeg',
    'https://www.acervodopsicologo.com/wp-content/uploads/2025/12/acervo-2.jpeg',
    'https://www.acervodopsicologo.com/wp-content/uploads/2025/12/acervo-3.jpeg',
  ];

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    if (!autoPlay || expandedImage) return;
    const interval = setInterval(() => nextImage(), 5000);
    return () => clearInterval(interval);
  }, [autoPlay, expandedImage, images.length]);

  // --- HANDLERS DO SWIPE ---
  const onTouchStart = (e) => {
    setTouchEnd(null); // Reseta o fim para evitar movimentos antigos
    setTouchStart(e.targetTouches[0].clientX);
    setAutoPlay(false); // Para o autoplay ao tocar
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextImage(); // Arrastou para a esquerda -> Próxima imagem
    }
    if (isRightSwipe) {
      prevImage(); // Arrastou para a direita -> Imagem anterior
    }
  };

  const getVisibleImages = () => {
    const secondIndex = (currentImageIndex + 1) % images.length;
    return [
        { url: images[currentImageIndex], index: currentImageIndex },
        { url: images[secondIndex], index: secondIndex }
    ];
  };

  return (
    <section className="bg-gray-50 py-10 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Hero Title */}
        <div className="max-w-5xl mx-auto text-center mb-10 md:mb-16">
          <h2
            className="font-poppins text-4xl md:text-7xl lg:text-8xl font-black italic uppercase leading-tight mb-8"
            style={{
              backgroundImage: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 25%, #60a5fa 50%, #93c5fd 75%, #1e40af 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Reconhecimento<br />
            Que Não Se Compra
          </h2>
        </div>

        {/* Content Box */}
        <div className="max-w-6xl mx-auto border-2 border-gray-300 rounded-xl p-4 md:p-12 bg-white shadow-sm flex flex-col">
          
          {/* Text Content */}
          <div className="mb-8 md:mb-12 text-center md:text-left">
            <p className="text-base md:text-xl text-gray-700 leading-relaxed mb-4">
             Gente que aplicou o que aprendeu e viu resultado de verdade: pensamentos que finalmente começaram a se organizar, crises emocionais que perderam força, hábitos de autossabotagem que foram enfraquecidos dia após dia, e uma mente cada vez mais alinhada com Deus.
            </p>
            <p className="text-base md:text-xl leading-relaxed">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 font-semibold">
                É esse reconhecimento que importa.
              </span>
            </p>
          </div>

          {/* Carousel Wrapper - ADICIONADO EVENTOS DE TOUCH AQUI */}
          <div 
            className="relative group mb-12"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="relative overflow-hidden rounded-lg bg-gray-100 select-none"> {/* select-none evita destacar a imagem ao arrastar */}
              <div className="grid grid-cols-2 gap-2 md:gap-4 transition-transform duration-300">
                {getVisibleImages().map((imgObj, idx) => (
                    <div key={`${imgObj.index}-${idx}`} className="relative h-64 md:h-[500px] overflow-hidden rounded-lg">
                        <img
                            src={imgObj.url}
                            alt={`Depoimento ${imgObj.index + 1}`}
                            // Adicionei pointer-events-none no mobile para evitar conflito de clique vs arraste se necessário,
                            // mas deixei ativo para o clique de expandir funcionar.
                            className="w-full h-full object-cover cursor-pointer transition-transform duration-500 hover:scale-105"
                            onClick={() => setExpandedImage(imgObj.url)}
                            onMouseEnter={() => setAutoPlay(false)}
                            onMouseLeave={() => setAutoPlay(true)}
                            draggable="false" // Importante: evita o comportamento padrão de arrastar imagem do navegador
                        />
                    </div>
                ))}
              </div>
            </div>

            {/* Dots Indicators */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentImageIndex(index);
                    setAutoPlay(false);
                  }}
                  className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? 'bg-blue-600 w-6 md:w-8'
                      : 'bg-gray-300 w-1.5 md:w-2 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-6 text-center">
            <button
              onClick={scrollToOffer}
              className="bg-[#0C1F3F] text-white px-8 md:px-16 py-4 md:py-6 rounded-full text-xl md:text-2xl font-bold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Começar Agora
            </button>
          </div>

        </div>
      </div>

      {/* Modal Expandido */}
      {expandedImage && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-2 md:p-4 backdrop-blur-sm"
          onClick={() => setExpandedImage(null)}
        >
          <button
            onClick={() => setExpandedImage(null)}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-50"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={expandedImage}
            alt="Ampliado"
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Recognition;