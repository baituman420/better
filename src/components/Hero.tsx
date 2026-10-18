import React from 'react';
import { HERO_IMAGE, RESTAURANT_INFO } from '../data/restaurantData';

interface HeroProps {
  onOpenCarta?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCarta }) => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="w-full bg-surface-container-low px-6 lg:px-12 pt-12 pb-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-gutter-lg items-center">
          
          {/* Columna de texto editorial */}
          <div className="lg:col-span-6 flex flex-col items-start z-10">
            {/* Pill de ubicación */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high text-secondary mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest font-semibold">
                {RESTAURANT_INFO.city} · {RESTAURANT_INFO.address}
              </span>
            </div>

            {/* Titular Display */}
            <h1 className="font-headline-lg lg:text-[4rem] lg:leading-[4.25rem] text-primary font-bold tracking-tight mb-6">
              COMER BIEN.<br />
              <span className="italic font-normal text-secondary">SABER MEJOR.</span>
            </h1>

            {/* Subtítulo editorial */}
            <p className="font-body-xl text-body-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed font-normal">
              Tostas, bocadillos, bowls, ensaladas y bebidas. Descubre otra forma de comer rico en el corazón de Bilbao.
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
                className="w-full sm:w-auto inline-flex items-center justify-center bg-primary-container text-surface hover:bg-tertiary transition-all duration-300 px-8 py-4 rounded-lg font-label-lg text-label-lg uppercase tracking-wider shadow-md hover:-translate-y-0.5 group cursor-pointer"
              >
                <span>Descubre nuestra propuesta</span>
                <span className="material-symbols-outlined ml-2 text-[20px] transition-transform duration-200 group-hover:translate-x-1">
                  arrow_forward
                </span>
              </button>

              <button
                type="button"
                onClick={() => scrollTo('#visitanos')}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-surface-container-lowest text-primary hover:bg-surface-container transition-all duration-300 px-8 py-4 rounded-lg font-label-lg text-label-lg uppercase tracking-wider shadow-sm cursor-pointer"
              >
                <span>Ven a conocernos</span>
              </button>
            </div>

            {/* Micro-nota editorial */}
            <div className="mt-12 pt-6 flex flex-wrap items-center gap-4 sm:gap-6 text-on-surface-variant">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[20px]">eco</span>
                <span className="font-label-md text-label-md uppercase tracking-wider">Cocina fresca</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-outline-variant hidden sm:block"></div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[20px]">local_cafe</span>
                <span className="font-label-md text-label-md uppercase tracking-wider">Desayunos y café</span>
              </div>
            </div>
          </div>

          {/* Showcase fotográfico con etiqueta flotante */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-xl bg-surface-container">
              <img
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                src={HERO_IMAGE.src}
                alt={HERO_IMAGE.alt}
                loading="eager"
              />
            </div>

            {/* Badge flotante con sombra suave */}
            <div className="absolute -bottom-6 -left-2 sm:bottom-6 sm:-left-6 bg-surface-container-lowest/95 backdrop-blur-md p-5 rounded-xl shadow-lg max-w-xs border border-surface-container">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary mt-0.5 text-[22px]">verified</span>
                <div>
                  <p className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                    Compromiso BETTER
                  </p>
                  <p className="font-headline-sm text-headline-sm text-primary font-medium mt-0.5">
                    Ingredientes selectos
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1 text-sm">
                    Elaborado a diario con producto fresco y equilibrado.
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
