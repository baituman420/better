import React, { useState } from 'react';
import { LOCAL_IMAGE, LOCAL_FACHADA_IMAGE, RESTAURANT_INFO } from '../data/restaurantData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const VisitSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.08 });
  const [activePhoto, setActivePhoto] = useState<'interior' | 'fachada'>('interior');

  return (
    <section 
      id="visitanos" 
      ref={ref} 
      className={`w-full py-12 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-surface-container-low overflow-hidden transition-colors duration-700 editorial-chapter relative ${
        isVisible ? 'editorial-chapter-visible' : 'editorial-chapter-hidden'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Información de visita con entrada suave */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold mb-2 sm:mb-3 text-xs sm:text-sm">
              Encuéntranos en el centro
            </div>
            
            <h2 className="font-headline-lg text-2xl sm:text-headline-lg text-primary font-serif font-medium mb-3 sm:mb-5 leading-tight">
              Tu rincón healthy en Bilbao.
            </h2>
            
            <p className="font-body-md sm:font-body-lg text-body-md sm:text-body-lg text-on-surface-variant mb-6 sm:mb-8 leading-relaxed">
              Situado en la céntrica Calle Henao 2, a pocos pasos de la emblemática Plaza Ensanche y los Jardines de Albia. Un punto de encuentro luminoso con mesas de madera, arte y un ambiente sereno para comer bien en cualquier momento.
            </p>

            {/* Tarjetas de datos prácticos con hover */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="p-3.5 sm:p-4 rounded-xl bg-surface-container-lowest shadow-xs hover:shadow-md hover:translate-x-1 transition-all duration-300 flex items-start gap-3.5 border border-surface-container">
                <span className="material-symbols-outlined text-secondary text-[22px] sm:text-[24px] mt-0.5">
                  location_on
                </span>
                <div>
                  <p className="font-headline-sm text-base sm:text-headline-sm text-primary mb-0.5">
                    Ubicación
                  </p>
                  <p className="font-body-md text-on-surface-variant text-xs sm:text-sm">
                    {RESTAURANT_INFO.address}, {RESTAURANT_INFO.postalCode}
                  </p>
                  <p className="font-label-sm text-label-sm uppercase tracking-wider text-secondary mt-0.5 font-semibold text-xs">
                    {RESTAURANT_INFO.zone}
                  </p>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-surface-container-lowest shadow-xs hover:shadow-md hover:translate-x-1 transition-all duration-300 flex items-start gap-3.5 border border-surface-container">
                <span className="material-symbols-outlined text-secondary text-[22px] sm:text-[24px] mt-0.5">
                  schedule
                </span>
                <div>
                  <p className="font-headline-sm text-base sm:text-headline-sm text-primary mb-0.5">
                    Horarios y servicio
                  </p>
                  <p className="font-body-md text-on-surface-variant text-xs sm:text-sm">
                    Desayunos · Almuerzos · Meriendas
                  </p>
                  <p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mt-0.5 text-xs">
                    {RESTAURANT_INFO.hoursNote}
                  </p>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-surface-container-lowest shadow-xs hover:shadow-md hover:translate-x-1 transition-all duration-300 flex items-start gap-3.5 border border-surface-container">
                <span className="material-symbols-outlined text-secondary text-[22px] sm:text-[24px] mt-0.5">
                  storefront
                </span>
                <div>
                  <p className="font-headline-sm text-base sm:text-headline-sm text-primary mb-0.5">
                    Espacio y servicio
                  </p>
                  <p className="font-body-md text-on-surface-variant text-xs sm:text-sm">
                    Para disfrutar en sala con tranquilidad o take-away rápido para llevar donde quieras.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary-container text-surface hover:bg-tertiary hover:shadow-lg active:scale-98 transition-all duration-300 px-7 sm:px-8 py-3.5 sm:py-4 rounded-lg font-label-lg text-label-lg uppercase tracking-wider shadow-md hover:-translate-y-0.5 group"
                href={RESTAURANT_INFO.mapsUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[20px] transition-transform duration-300 group-hover:scale-115">
                  near_me
                </span>
                <span>Cómo llegar en Google Maps</span>
              </a>
            </div>
          </div>

          {/* Fotografía interactiva del local (interior / fachada con selector elegante) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl aspect-[4/3] bg-surface-container border border-surface-container group">
              <img
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-104"
                src={activePhoto === 'interior' ? LOCAL_IMAGE.src : LOCAL_FACHADA_IMAGE.src}
                alt={activePhoto === 'interior' ? LOCAL_IMAGE.alt : LOCAL_FACHADA_IMAGE.alt}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"></div>
              
              {/* Botones de alternancia de vista de foto real */}
              <div className="absolute bottom-3.5 right-3.5 sm:bottom-4 sm:right-4 flex items-center gap-2 bg-surface/90 backdrop-blur-md p-1.5 rounded-lg shadow-md border border-surface-container">
                <button
                  type="button"
                  onClick={() => setActivePhoto('interior')}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    activePhoto === 'interior' 
                      ? 'bg-primary-container text-surface shadow-xs' 
                      : 'text-primary hover:bg-surface-container'
                  }`}
                >
                  Interior
                </button>
                <button
                  type="button"
                  onClick={() => setActivePhoto('fachada')}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    activePhoto === 'fachada' 
                      ? 'bg-primary-container text-surface shadow-xs' 
                      : 'text-primary hover:bg-surface-container'
                  }`}
                >
                  Fachada
                </button>
              </div>

              {/* Pie de foto */}
              <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 bg-surface-container-lowest/90 backdrop-blur-sm px-3 py-1.5 rounded-md shadow-xs text-xs font-semibold uppercase tracking-wider text-primary border border-surface-container">
                {activePhoto === 'interior' ? 'Sala y mesas en Henao 2' : 'Esquina exterior Henao Kalea'}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Suave degradado inferior hacia la sección Instagram */}
      <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-b from-transparent to-surface pointer-events-none"></div>
    </section>
  );
};
