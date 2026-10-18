import React, { useEffect } from 'react';
import { PRODUCT_CATEGORIES, RESTAURANT_INFO, type MenuItem } from '../data/restaurantData';

interface CartaModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory?: MenuItem | null;
}

export const CartaModal: React.FC<CartaModalProps> = ({
  isOpen,
  onClose,
  selectedCategory,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-primary/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="relative bg-surface rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-surface-container overflow-hidden transform transition-transform duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-primary flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
          aria-label="Cerrar modal"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {selectedCategory ? (
          <div>
            <div className="relative aspect-video rounded-xl overflow-hidden mb-6 bg-surface-container shadow-sm">
              <img
                src={selectedCategory.image}
                alt={selectedCategory.altText}
                className="w-full h-full object-cover"
              />
              {selectedCategory.badge && (
                <span className="absolute top-3 left-3 bg-surface/90 backdrop-blur-sm text-primary font-label-sm text-label-sm uppercase tracking-wider px-3 py-1 rounded-full font-semibold shadow-xs">
                  {selectedCategory.badge}
                </span>
              )}
            </div>

            <div className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold mb-2">
              Categoría
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-3">
              {selectedCategory.name}
            </h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-6">
              {selectedCategory.description}
            </p>

            <div className="p-4 rounded-xl bg-surface-container-low border border-surface-container mb-6 text-sm text-on-surface-variant">
              <p className="font-semibold text-primary mb-1">Elaboración diaria en Henao 2</p>
              <p>
                En BETTER Bilbao preparamos opciones diarias según temporada y disponibilidad. Ven a visitarnos o consúltanos para conocer las propuestas del día.
              </p>
            </div>
          </div>
        ) : (
          <div>
            <div className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold mb-2">
              Propuesta Gastronómica
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-4">
              Nuestra Oferta en {RESTAURANT_INFO.address}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
              Una selección cuidada de platos frescos y equilibrados pensados para cada momento del día en Bilbao:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {PRODUCT_CATEGORIES.map((cat) => (
                <div key={cat.id} className="p-4 rounded-xl bg-surface-container-low border border-surface-container flex items-start gap-3 hover:bg-surface-container transition-colors">
                  <span className="material-symbols-outlined text-secondary text-[22px] mt-0.5">check_circle</span>
                  <div>
                    <h4 className="font-headline-sm text-base text-primary font-semibold">{cat.name}</h4>
                    <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">{cat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-surface-container-high">
          <a
            href={RESTAURANT_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary-container text-surface hover:bg-tertiary px-6 py-3 rounded-lg font-label-md text-label-md uppercase tracking-wider text-center transition-colors shadow-sm"
          >
            <span className="material-symbols-outlined text-[18px]">near_me</span>
            <span>Ven a probarlo a Henao 2</span>
          </a>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-3 rounded-lg text-primary hover:bg-surface-container font-label-md text-label-md uppercase tracking-wider cursor-pointer transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
