import React from 'react';
import { PRODUCT_CATEGORIES, type MenuItem } from '../data/restaurantData';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ProductCategoriesProps {
  onSelectCategory?: (category: MenuItem) => void;
}

export const ProductCategories: React.FC<ProductCategoriesProps> = ({ onSelectCategory }) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.08 });

  return (
    <section 
      id="carta" 
      ref={ref} 
      className={`w-full py-12 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-surface transition-colors duration-700 editorial-chapter relative ${
        isVisible ? 'editorial-chapter-visible' : 'editorial-chapter-hidden'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Cabecera de la sección con transición suave continua */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold mb-2 sm:mb-3 text-xs sm:text-sm">
            Variedad para cada momento
          </div>
          <h2 className="font-headline-lg text-2xl sm:text-headline-lg text-primary font-serif font-medium mb-3 sm:mb-4">
            Hay muchas formas de comer BETTER.
          </h2>
          <p className="font-body-md sm:font-body-lg text-body-md sm:text-body-lg text-on-surface-variant leading-relaxed">
            Desde primera hora de la mañana hasta la merienda. Cuatro propuestas equilibradas preparadas a diario con producto fresco y de temporada.
          </p>
        </div>

        {/* Grid de 4 categorías equilibradas con entrada escalonada y visible desde inicio */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {PRODUCT_CATEGORIES.map((cat, index) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory?.(cat)}
              style={{
                transitionDelay: `${index * 70}ms`
              }}
              className="group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-400 border border-surface-container cursor-pointer"
            >
              {/* Imagen con zoom ligero al hover */}
              <div className="relative aspect-[4/3] overflow-hidden bg-surface-container">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                  src={cat.image}
                  alt={cat.altText}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {cat.badge && (
                  <span className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-sm text-primary font-label-sm text-label-sm uppercase tracking-wider px-2.5 py-1 rounded-full font-semibold shadow-xs text-xs">
                    {cat.badge}
                  </span>
                )}
              </div>

              {/* Contenido de la tarjeta */}
              <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-1 justify-between bg-surface-container-lowest">
                <div>
                  <h3 className="font-headline-sm text-lg sm:text-headline-sm text-primary mb-1.5 sm:mb-2 group-hover:text-primary-container transition-colors duration-200">
                    {cat.name}
                  </h3>
                  <p className="font-body-md text-on-surface-variant leading-relaxed text-xs sm:text-sm">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-4 sm:pt-5 mt-3 sm:mt-4 flex items-center justify-between border-t border-surface-container-low">
                  <span className="font-label-md text-xs sm:text-label-md uppercase tracking-wider text-secondary font-semibold group-hover:text-secondary-fixed-dim transition-colors">
                    {cat.highlightTag}
                  </span>
                  <span className="material-symbols-outlined text-primary text-[18px] sm:text-[20px] transition-transform duration-300 group-hover:translate-x-1.5">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Suave degradado inferior para fundir con la siguiente sección */}
      <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-b from-transparent to-surface-container-high pointer-events-none"></div>
    </section>
  );
};
