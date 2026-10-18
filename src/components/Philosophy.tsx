import React from 'react';
import { PHILOSOPHY_PILLARS, PHILOSOPHY_IMAGE, RESTAURANT_INFO } from '../data/restaurantData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Philosophy: React.FC = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });

  return (
    <section id="filosofia" ref={ref} className="w-full py-24 px-6 lg:px-12 bg-surface-container-high relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-gutter-lg items-center">
          
          {/* Columna de texto editorial y pilares */}
          <div 
            className={`lg:col-span-6 flex flex-col transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold mb-3">
              Nuestra Filosofía
            </div>
            
            <h2 className="font-headline-lg text-headline-lg text-primary font-serif font-medium mb-6 leading-tight">
              Bueno para ti.<br />
              <span className="italic text-secondary">Buenísimo para tu día.</span>
            </h2>
            
            <p className="font-body-xl text-body-xl text-on-surface-variant mb-10 leading-relaxed">
              Creemos que comer bien no debería ser un sacrificio ni una ocasión especial. En BETTER unimos la frescura de los ingredientes de temporada con recetas llenas de sabor, pensadas para adaptarse al ritmo dinámico de Bilbao. Sin prisas, pero con la agilidad que pide tu día.
            </p>

            {/* 3 Pilares con hover interactivo */}
            <div className="space-y-6">
              {PHILOSOPHY_PILLARS.map((pillar, idx) => (
                <div
                  key={pillar.id}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                  className={`flex items-start gap-4 p-5 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md hover:translate-x-1 transition-all duration-300 border border-surface-container ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center shrink-0 text-on-primary-fixed font-bold shadow-xs">
                    <span className="material-symbols-outlined text-[20px]">
                      {pillar.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
                      {pillar.title}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-sm">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna de imagen ambiental con foto real del local */}
          <div 
            className={`lg:col-span-6 relative transition-all duration-800 ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-98'
            }`}
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-[4/5] bg-surface-container group">
              <img
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                src={PHILOSOPHY_IMAGE.src}
                alt={PHILOSOPHY_IMAGE.alt}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-primary/10 to-transparent"></div>
              
              {/* Sello arquitectónico sobre la imagen */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-lg bg-surface/90 backdrop-blur-md shadow-lg flex items-center justify-between border border-surface-container transition-transform duration-300 group-hover:-translate-y-1">
                <div>
                  <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                    Espacio {RESTAURANT_INFO.address}
                  </p>
                  <p className="font-headline-sm text-headline-sm text-primary font-medium">
                    Luz natural y calma en el Ensanche
                  </p>
                </div>
                <span className="material-symbols-outlined text-primary text-[28px]">
                  nature_people
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
