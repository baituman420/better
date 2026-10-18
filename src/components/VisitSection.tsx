import React, { useState } from 'react';
import { LOCAL_IMAGE, LOCAL_FACHADA_IMAGE, RESTAURANT_INFO } from '../data/restaurantData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const VisitSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });
  const [activePhoto, setActivePhoto] = useState<'interior' | 'fachada'>('interior');

  return (
    <section id="visitanos" ref={ref} className="w-full py-24 px-6 lg:px-12 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-gutter-lg items-center">
          
          {/* Información de visita con entrada suave */}
          <div 
            className={`lg:col-span-6 flex flex-col transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold mb-3">
              Encuéntranos en el centro
            </div>
            
            <h2 className="font-headline-lg text-headline-lg text-primary font-serif font-medium mb-6 leading-tight">
              Tu rincón healthy en Bilbao.
            </h2>
            
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
              Situado en la céntrica Calle Henao 2, a pocos pasos de la emblemática Plaza Ensanche y los Jardines de Albia. Un punto de encuentro luminoso con mesas de madera, arte y un ambiente sereno para comer bien en cualquier momento.
            </p>

            {/* Tarjetas de datos prácticos con hover */}
            <div className="space-y-4 mb-8">
              <div className="p-5 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md hover:translate-x-1 transition-all duration-300 flex items-start gap-4 border border-surface-container">
                <span className="material-symbols-outlined text-secondary text-[24px] mt-0.5">
                  location_on
                </span>
                <div>
                  <p className="font-headline-sm text-headline-sm text-primary mb-1">
                    Ubicación
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {RESTAURANT_INFO.address}, {RESTAURANT_INFO.postalCode}
                  </p>
                  <p className="font-label-sm text-label-sm uppercase tracking-wider text-secondary mt-1 font-semibold">
                    {RESTAURANT_INFO.zone}
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md hover:translate-x-1 transition-all duration-300 flex items-start gap-4 border border-surface-container">
                <span className="material-symbols-outlined text-secondary text-[24px] mt-0.5">
                  schedule
                </span>
                <div>
                  <p className="font-headline-sm text-headline-sm text-primary mb-1">
                    Servicio continuo
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Desayunos · Almuerzos · Meriendas · Cenas
                  </p>
                  <p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mt-1">
                    {RESTAURANT_INFO.hoursNote}
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md hover:translate-x-1 transition-all duration-300 flex items-start gap-4 border border-surface-container">
                <span className="material-symbols-outlined text-secondary text-[24px] mt-0.5">
                  storefront
                </span>
                <div>
                  <p className="font-headline-sm text-headline-sm text-primary mb-1">
                    Espacio y servicio
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                    Para disfrutar en sala con tranquilidad o take-away rápido para llevar donde quieras.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <a
                className="inline-flex items-center gap-3 bg-primary-container text-surface hover:bg-tertiary hover:shadow-lg active:scale-95 transition-all duration-300 px-8 py-4 rounded-lg font-label-lg text-label-lg uppercase tracking-wider shadow-md hover:-translate-y-0.5 group"
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
          <div 
            className={`lg:col-span-6 transition-all duration-700 ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-98'
            }`}
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-[4/3] bg-surface-container border border-surface-container group">
              <img
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                src={activePhoto === 'interior' ? LOCAL_IMAGE.src : LOCAL_FACHADA_IMAGE.src}
                alt={activePhoto === 'interior' ? LOCAL_IMAGE.alt : LOCAL_FACHADA_IMAGE.alt}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"></div>
              
              {/* Botones de alternancia de vista de foto real */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-surface/90 backdrop-blur-md p-1.5 rounded-lg shadow-md border border-surface-container">
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
              <div className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur-sm px-3 py-1.5 rounded-md shadow-xs text-xs font-semibold uppercase tracking-wider text-primary border border-surface-container">
                {activePhoto === 'interior' ? 'Sala y mesas en Henao 2' : 'Esquina exterior Henao Kalea'}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
