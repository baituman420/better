import React from 'react';
import { PHILOSOPHY_PILLARS, PHILOSOPHY_IMAGE, RESTAURANT_INFO } from '../data/restaurantData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Philosophy: React.FC = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.08 });

  return (
    <section 
      id="filosofia" 
      ref={ref} 
      className={`w-full py-12 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-surface-container-high relative overflow-hidden transition-colors duration-700 editorial-chapter ${
        isVisible ? 'editorial-chapter-visible' : 'editorial-chapter-hidden'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Columna de texto editorial y pilares */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold mb-2 sm:mb-3 text-xs sm:text-sm">
              Nuestra Filosofía
            </div>
            
            <h2 className="font-headline-lg text-2xl sm:text-headline-lg text-primary font-serif font-medium mb-3 sm:mb-5 leading-tight">
              Bueno para ti.<br />
              <span className="italic text-secondary">Buenísimo para tu día.</span>
            </h2>
            
            <p className="font-body-md sm:font-body-lg text-body-md sm:text-body-lg text-on-surface-variant mb-6 sm:mb-8 leading-relaxed">
              Creemos que comer bien no debería ser un sacrificio ni una ocasión especial. En BETTER unimos la frescura de los ingredientes de temporada con recetas llenas de sabor, pensadas para adaptarse al ritmo dinámico de Bilbao. Sin prisas, pero con la agilidad que pide tu día.
            </p>

            {/* 3 Pilares con hover interactivo */}
            <div className="space-y-3.5 sm:space-y-4">
              {PHILOSOPHY_PILLARS.map((pillar, idx) => (
                <div
                  key={pillar.id}
                  style={{ transitionDelay: `${idx * 80}ms` }}
                  className="flex items-start gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-surface-container-lowest shadow-xs hover:shadow-md hover:translate-x-1 transition-all duration-300 border border-surface-container"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary-fixed flex items-center justify-center shrink-0 text-on-primary-fixed font-bold shadow-xs">
                    <span className="material-symbols-outlined text-[18px] sm:text-[20px]">
                      {pillar.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-base sm:text-headline-sm text-primary mb-0.5">
                      {pillar.title}
                    </h3>
                    <p className="font-body-md text-on-surface-variant leading-relaxed text-xs sm:text-sm">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna de imagen ambiental con foto real del local */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] bg-surface-container group border border-surface-container">
              <img
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-104"
                src={PHILOSOPHY_IMAGE.src}
                alt={PHILOSOPHY_IMAGE.alt}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-primary/10 to-transparent"></div>
              
              {/* Sello arquitectónico sobre la imagen */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-3.5 sm:p-5 rounded-xl bg-surface/90 backdrop-blur-md shadow-lg flex items-center justify-between border border-surface-container transition-transform duration-300 group-hover:-translate-y-1">
                <div>
                  <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold text-xs">
                    Espacio {RESTAURANT_INFO.address}
                  </p>
                  <p className="font-headline-sm text-sm sm:text-headline-sm text-primary font-medium mt-0.5">
                    Luz natural y calma en el Ensanche
                  </p>
                </div>
                <span className="material-symbols-outlined text-primary text-[24px] sm:text-[28px] shrink-0 ml-2">
                  nature_people
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Degradado continuo suave de transición hacia la galería */}
      <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-b from-transparent to-surface pointer-events-none"></div>
    </section>
  );
};
