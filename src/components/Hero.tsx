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

  return (
    <section 
      id="inicio" 
      className="w-full bg-surface-container-low px-4 sm:px-6 lg:px-12 pt-6 sm:pt-10 lg:pt-14 pb-16 sm:pb-24 lg:pb-28 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
          
          {/* Bloque de titular visible en móvil directamente encima de la foto (< lg) */}
          <div className="lg:hidden w-full flex flex-col items-start animate-hero-fade">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-secondary mb-3 shadow-xs border border-surface-container">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest font-semibold text-xs">
                {RESTAURANT_INFO.city} · {RESTAURANT_INFO.address}
              </span>
            </div>

            <h1 className="font-headline-lg text-3xl sm:text-4xl text-primary font-bold tracking-tight leading-tight">
              COMER BIEN.<br />
              <span className="italic font-normal text-secondary">SABER MEJOR.</span>
            </h1>
          </div>

          {/* Showcase fotográfico protagonista — En móvil domina el primer pantallazo, en desktop ocupa 7 columnas */}
          <div className="w-full lg:col-span-7 lg:order-2">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/11] rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl bg-surface-container border border-surface-container group">
              {/* Stack de imágenes con transición de opacidad lenta y continua (1200ms) */}
              {HERO_SLIDES.map((slide, idx) => (
                <div
                  key={slide.src}
                  className={`absolute inset-0 transition-opacity duration-1200 ease-in-out ${
                    idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <img
                    className="w-full h-full object-cover transition-transform duration-1200 ease-out group-hover:scale-104"
                    src={slide.src}
                    alt={slide.alt}
                    loading={idx === 0 ? "eager" : "lazy"}
                  />
                  {/* Suave degradado inferior para dar profundidad sin oscurecer los ingredientes */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent pointer-events-none"></div>
                </div>
              ))}

              {/* Indicadores de diapositiva discretos y elegantes en esquina superior */}
              <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-20 flex items-center gap-1.5 bg-surface/85 backdrop-blur-md px-2.5 py-1 rounded-full border border-surface-container shadow-xs">
                {HERO_SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Ver fotografía ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                      idx === currentSlide ? 'w-5 bg-secondary' : 'w-1.5 bg-outline-variant hover:bg-secondary/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Columna editorial: en desktop contiene titular + textos + botones; en móvil contiene acciones y detalles secundarios */}
          <div className="w-full lg:col-span-5 lg:order-1 flex flex-col items-start z-10">
            
            {/* Titular Display en Desktop (oculto en móvil para no duplicar) */}
            <div className="hidden lg:block">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high text-secondary mb-6 shadow-xs border border-surface-container hover:bg-surface-container transition-colors duration-300">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest font-semibold">
                  {RESTAURANT_INFO.city} · {RESTAURANT_INFO.address}
                </span>
              </div>

              <h1 className="font-headline-lg text-4xl sm:text-5xl lg:text-[3.75rem] xl:text-[4rem] lg:leading-[4.25rem] text-primary font-bold tracking-tight mb-6">
                COMER BIEN.<br />
                <span className="italic font-normal text-secondary">SABER MEJOR.</span>
              </h1>
            </div>

            {/* Acción principal y secundaria */}
            <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-6">
              <button
                type="button"
                onClick={() => {
                  if (onOpenCarta) {
                    onOpenCarta();
                  } else {
                    scrollTo('#carta');
                  }
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-primary-container text-surface hover:bg-tertiary hover:shadow-lg active:scale-98 transition-all duration-300 px-7 sm:px-8 py-3.5 sm:py-4 rounded-lg font-label-lg text-label-lg uppercase tracking-wider shadow-md hover:-translate-y-0.5 group cursor-pointer"
              >
                <span>Descubre nuestra propuesta</span>
                <span className="material-symbols-outlined ml-2 text-[20px] transition-transform duration-300 group-hover:translate-x-1.5">
                  arrow_forward
                </span>
              </button>

              <button
                type="button"
                onClick={() => scrollTo('#visitanos')}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-surface-container-lowest text-primary hover:bg-surface-container hover:shadow-md active:scale-98 transition-all duration-300 px-6 sm:px-7 py-3.5 sm:py-4 rounded-lg font-label-lg text-label-lg uppercase tracking-wider shadow-xs cursor-pointer border border-surface-container"
              >
                <span>Ven a conocernos</span>
              </button>
            </div>

            {/* Subtítulo editorial — claro, conciso y elegante */}
            <p className="font-body-lg sm:font-body-xl text-body-lg sm:text-body-xl text-on-surface-variant max-w-xl mb-6 sm:mb-8 leading-relaxed font-normal">
              Tostas, bocadillos, bowls, ensaladas y bebidas naturales. Descubre otra forma de comer rico en el corazón de Bilbao.
            </p>

            {/* Micro-notas editoriales */}
            <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-4 sm:gap-6 text-on-surface-variant">
              <div className="flex items-center gap-2 group cursor-default">
                <span className="material-symbols-outlined text-secondary text-[20px]">eco</span>
                <span className="font-label-md text-label-md uppercase tracking-wider font-medium text-xs sm:text-sm">Cocina fresca</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-outline-variant hidden sm:block"></div>
              <div className="flex items-center gap-2 group cursor-default">
                <span className="material-symbols-outlined text-secondary text-[20px]">local_cafe</span>
                <span className="font-label-md text-label-md uppercase tracking-wider font-medium text-xs sm:text-sm">Desayunos y café</span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Degradado continuo suave de transición hacia la siguiente sección */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-surface pointer-events-none"></div>
    </section>
  );
};
