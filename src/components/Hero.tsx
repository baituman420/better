import React, { useState, useEffect } from 'react';
import { HERO_SLIDES, RESTAURANT_INFO } from '../data/restaurantData';

interface HeroProps {
  onOpenCarta?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCarta }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fundido lento y progresivo entre las 3 imágenes culinarias del Hero cada 6 segundos
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <section id="inicio" className="w-full bg-surface-container-low px-6 lg:px-12 pt-10 sm:pt-14 pb-20 sm:pb-28 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-gutter-lg items-center">
          
          {/* Columna de texto editorial */}
          <div className="lg:col-span-6 flex flex-col items-start z-10">
            {/* Pill de ubicación */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high text-secondary mb-6 shadow-xs border border-surface-container hover:bg-surface-container transition-colors duration-300">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest font-semibold">
                {RESTAURANT_INFO.city} · {RESTAURANT_INFO.address}
              </span>
            </div>

            {/* Titular Display */}
            <h1 className="font-headline-lg text-4xl sm:text-5xl lg:text-[4rem] lg:leading-[4.25rem] text-primary font-bold tracking-tight mb-6">
              COMER BIEN.<br />
              <span className="italic font-normal text-secondary">SABER MEJOR.</span>
            </h1>

            {/* Subtítulo editorial */}
            <p className="font-body-xl text-body-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed font-normal">
              Tostas, bocadillos, bowls, ensaladas y bebidas naturales. Descubre otra forma de comer rico en el corazón de Bilbao.
            </p>

            {/* Botones de acción */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => {
                  if (onOpenCarta) {
                    onOpenCarta();
                  } else {
                    scrollTo('#carta');
                  }
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-primary-container text-surface hover:bg-tertiary hover:shadow-lg active:scale-98 transition-all duration-300 px-8 py-4 rounded-lg font-label-lg text-label-lg uppercase tracking-wider shadow-md hover:-translate-y-0.5 group cursor-pointer"
              >
                <span>Descubre nuestra propuesta</span>
                <span className="material-symbols-outlined ml-2 text-[20px] transition-transform duration-300 group-hover:translate-x-1.5">
                  arrow_forward
                </span>
              </button>

              <button
                type="button"
                onClick={() => scrollTo('#visitanos')}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-surface-container-lowest text-primary hover:bg-surface-container hover:shadow-md active:scale-98 transition-all duration-300 px-8 py-4 rounded-lg font-label-lg text-label-lg uppercase tracking-wider shadow-xs cursor-pointer border border-surface-container"
              >
                <span>Ven a conocernos</span>
              </button>
            </div>

            {/* Micro-nota editorial */}
            <div className="mt-12 pt-6 flex flex-wrap items-center gap-4 sm:gap-6 text-on-surface-variant">
              <div className="flex items-center gap-2 group cursor-default">
                <span className="material-symbols-outlined text-secondary text-[20px]">eco</span>
                <span className="font-label-md text-label-md uppercase tracking-wider font-medium">Cocina fresca</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-outline-variant hidden sm:block"></div>
              <div className="flex items-center gap-2 group cursor-default">
                <span className="material-symbols-outlined text-secondary text-[20px]">local_cafe</span>
                <span className="font-label-md text-label-md uppercase tracking-wider font-medium">Desayunos y café</span>
              </div>
            </div>
          </div>

          {/* Showcase fotográfico editorial con fundido lento y elegante */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-surface-container border border-surface-container group">
              {/* Stack de imágenes con transición de opacidad lenta (1200ms) */}
              {HERO_SLIDES.map((slide, idx) => (
                <div
                  key={slide.src}
                  className={`absolute inset-0 transition-opacity duration-1200 ease-in-out ${
                    idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <img
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-104"
                    src={slide.src}
                    alt={slide.alt}
                    loading={idx === 0 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"></div>
                </div>
              ))}

              {/* Indicadores de fundido discretos */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-surface/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-surface-container">
                {HERO_SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Ver imagen ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                      idx === currentSlide ? 'w-5 bg-secondary' : 'w-1.5 bg-outline-variant hover:bg-secondary/60'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Badge flotante comercial y natural con movimiento sutil */}
            <div className="absolute -bottom-6 -left-2 sm:bottom-6 sm:-left-6 z-30 bg-surface-container-lowest/95 backdrop-blur-md p-5 rounded-xl shadow-xl max-w-xs border border-surface-container animate-subtle-float">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary mt-0.5 text-[22px]">restaurant</span>
                <div>
                  <p className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                    {activeSlide.badgeTitle}
                  </p>
                  <p className="font-headline-sm text-headline-sm text-primary font-medium mt-0.5">
                    Variedad cotidiana
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1 text-sm leading-snug">
                    {activeSlide.badgeSubtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
