import React from 'react';
import { EDITORIAL_GALLERY } from '../data/restaurantData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const FoodGallery: React.FC = () => {
  const { main, secondary } = EDITORIAL_GALLERY;
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="espacio" ref={ref} className="w-full py-24 px-6 lg:px-12 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado editorial con animación */}
        <div 
          className={`flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div>
            <div className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold mb-3">
              Cultura Culinaria
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary font-serif font-medium">
              El arte de lo cotidiano.
            </h2>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-medium hover:bg-secondary-fixed/30 hover:text-secondary transition-colors duration-200 cursor-default">
              #RealFoodBilbao
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-medium hover:bg-secondary-fixed/30 hover:text-secondary transition-colors duration-200 cursor-default">
              Cero complicaciones
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-medium hover:bg-secondary-fixed/30 hover:text-secondary transition-colors duration-200 cursor-default">
              Puro sabor
            </span>
          </div>
        </div>

        {/* Mosaico asimétrico de platos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Feature Principal (7 cols) con imagen real de mesa servida */}
          <div 
            className={`lg:col-span-7 flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-surface-container ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-surface-container">
              <img
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-106"
                src={main.image}
                alt={main.altText}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-8 flex flex-col justify-between flex-1">
              <div>
                <div className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold mb-2">
                  {main.subtitle}
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-3 group-hover:text-primary-container transition-colors">
                  {main.title}
                </h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  {main.description}
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-surface-container-low flex items-center justify-between text-on-surface-variant font-label-md text-label-md uppercase tracking-wider">
                <span className="text-secondary font-semibold">{main.badgeText}</span>
                {main.icon && (
                  <span className="material-symbols-outlined text-secondary text-[24px] transition-transform duration-300 group-hover:scale-115">
                    {main.icon}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Columna Secundaria (5 cols, 2 cards apiladas) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {secondary.map((item, index) => (
              <div
                key={item.id}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                className={`flex-1 flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group border border-surface-container ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-surface-container">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    src={item.image}
                    alt={item.altText}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h4 className="font-headline-sm text-headline-sm text-primary mb-2 group-hover:text-primary-container transition-colors">
                    {item.title}
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
