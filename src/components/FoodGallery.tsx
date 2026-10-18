import React from 'react';
import { EDITORIAL_GALLERY } from '../data/restaurantData';

export const FoodGallery: React.FC = () => {
  const { main, secondary } = EDITORIAL_GALLERY;

  return (
    <section id="espacio" className="w-full py-24 px-6 lg:px-12 bg-surface">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado editorial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold mb-3">
              Cultura Culinaria
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary font-serif font-medium">
              El arte de lo cotidiano.
            </h2>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
              #RealFoodBilbao
            </span>
            <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
              Cero complicaciones
            </span>
            <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
              Puro sabor
            </span>
          </div>
        </div>

        {/* Mosaico asimétrico de platos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Feature Principal (7 cols) */}
          <div className="lg:col-span-7 flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm group border border-surface-container">
            <div className="relative aspect-[16/10] overflow-hidden bg-surface-container">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={main.image}
                alt={main.altText}
                loading="lazy"
              />
            </div>
            <div className="p-8 flex flex-col justify-between flex-1">
              <div>
                <div className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold mb-2">
                  {main.subtitle}
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-3">
                  {main.title}
                </h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  {main.description}
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-surface-container-low flex items-center justify-between text-on-surface-variant font-label-md text-label-md uppercase tracking-wider">
                <span>{main.badgeText}</span>
                {main.icon && (
                  <span className="material-symbols-outlined text-secondary text-[24px]">
                    {main.icon}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Columna Secundaria (5 cols, 2 cards apiladas) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {secondary.map((item) => (
              <div
                key={item.id}
                className="flex-1 flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm group border border-surface-container"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-surface-container">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={item.image}
                    alt={item.altText}
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-headline-sm text-headline-sm text-primary mb-2">
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
