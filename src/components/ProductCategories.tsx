import React from 'react';
import { PRODUCT_CATEGORIES, type MenuItem } from '../data/restaurantData';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ProductCategoriesProps {
  onSelectCategory?: (category: MenuItem) => void;
}

export const ProductCategories: React.FC<ProductCategoriesProps> = ({ onSelectCategory }) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="carta" ref={ref} className="w-full py-24 px-6 lg:px-12 bg-surface">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabecera de la sección */}
        <div 
          className={`max-w-3xl mb-16 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold mb-3">
            Variedad para cada momento
          </div>
          <h2 className="font-headline-lg text-headline-lg text-primary font-serif font-medium mb-4">
            Hay muchas formas de comer BETTER.
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Desde primera hora de la mañana hasta la merienda y cena. Cuatro propuestas equilibradas preparadas a diario con producto fresco y sin artificios.
          </p>
        </div>

        {/* Grid de 4 categorías equilibradas con entrada escalonada */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCT_CATEGORIES.map((cat, index) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory?.(cat)}
              style={{
                transitionDelay: `${index * 120}ms`
              }}
              className={`group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 border border-surface-container cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Imagen con badge y zoom ligero al hover */}
              <div className="relative aspect-[4/3] overflow-hidden bg-surface-container">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  src={cat.image}
                  alt={cat.altText}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {cat.badge && (
                  <span className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-sm text-primary font-label-sm text-label-sm uppercase tracking-wider px-2.5 py-1 rounded-full font-semibold shadow-sm">
                    {cat.badge}
                  </span>
                )}
              </div>

              {/* Contenido de la tarjeta */}
              <div className="p-6 flex flex-col flex-1 justify-between bg-surface-container-lowest">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-2 group-hover:text-primary-container transition-colors duration-200">
                    {cat.name}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-sm">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 flex items-center justify-between border-t border-surface-container-low">
                  <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-semibold group-hover:text-secondary-fixed-dim transition-colors">
                    {cat.highlightTag}
                  </span>
                  <span className="material-symbols-outlined text-primary text-[20px] transition-transform duration-300 group-hover:translate-x-1.5">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
