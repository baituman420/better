import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-primary-container text-surface-container-low border-t border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-10 sm:pt-14 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-y-8 sm:gap-y-10 md:gap-x-gutter-lg pb-10 sm:pb-12 border-b border-on-primary-container/20">
          
          {/* Brand Info */}
          <div className="sm:col-span-2 md:col-span-4 flex flex-col justify-between space-y-4 sm:space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <span className="font-headline-md text-xl sm:text-headline-md tracking-tight text-surface">
                  {RESTAURANT_INFO.name}
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-primary-container font-semibold text-xs">
                  {RESTAURANT_INFO.city}
                </span>
              </div>
              <p className="font-body-md text-surface-variant max-w-sm font-normal leading-relaxed text-xs sm:text-sm">
                Comida honesta, ingredientes frescos y cocina cercana en el corazón de Bilbao. Una propuesta gastronómica equilibrada inspirada en la vitalidad y el sabor de cada día.
              </p>
            </div>
            <div className="pt-1">
              <a
                className="inline-flex items-center gap-2 font-label-md text-xs sm:text-label-md uppercase tracking-wider text-surface-variant hover:text-surface transition-colors"
                href={RESTAURANT_INFO.instagramUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[18px] sm:text-[20px]">share</span>
                <span>{RESTAURANT_INFO.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Ubicación */}
          <div className="md:col-span-3 space-y-3 sm:space-y-4">
            <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-primary-container font-semibold text-xs">
              Ubicación &amp; Contacto
            </p>
            <address className="not-italic font-body-md text-surface-variant space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <div className="text-surface font-medium">{RESTAURANT_INFO.address}</div>
              <div>{RESTAURANT_INFO.postalCode}</div>
              <div className="pt-1 text-secondary-fixed text-xs font-semibold uppercase tracking-wider">
                {RESTAURANT_INFO.zone}
              </div>
              <div className="pt-1 text-xs text-on-primary-container">
                {RESTAURANT_INFO.hoursNote}
              </div>
            </address>
          </div>

          {/* Navegación rápida */}
          <div className="md:col-span-3 space-y-3 sm:space-y-4">
            <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-primary-container font-semibold text-xs">
              Explorar
            </p>
            <ul className="space-y-2 sm:space-y-2.5 font-body-md text-xs sm:text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#inicio')}
                  className="text-surface-variant hover:text-surface transition-colors text-left cursor-pointer"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#carta')}
                  className="text-surface-variant hover:text-surface transition-colors text-left cursor-pointer"
                >
                  Propuesta gastronómica
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#filosofia')}
                  className="text-surface-variant hover:text-surface transition-colors text-left cursor-pointer"
                >
                  Nuestra filosofía
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#espacio')}
                  className="text-surface-variant hover:text-surface transition-colors text-left cursor-pointer"
                >
                  Cultura culinaria
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#visitanos')}
                  className="text-surface-variant hover:text-surface transition-colors text-left cursor-pointer"
                >
                  El espacio Henao 2
                </button>
              </li>
            </ul>
          </div>

          {/* Propuesta */}
          <div className="md:col-span-2 space-y-3 sm:space-y-4">
            <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-primary-container font-semibold text-xs">
              Propuesta
            </p>
            <p className="font-body-md text-surface-variant leading-relaxed text-xs sm:text-sm">
              Cocina basada en producto fresco, variedad real, opciones vegetales y desayunos preparados al momento.
            </p>
          </div>

        </div>

        {/* Barra inferior */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 font-label-sm text-label-sm uppercase tracking-wider text-on-primary-container text-xs">
          <p>© {new Date().getFullYear()} BETTER Bilbao. Demo comercial.</p>
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="text-on-primary-container">Bilbao · Bizkaia</span>
            <a
              href={RESTAURANT_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-primary-container hover:text-surface transition-colors underline"
            >
              Google Maps
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
