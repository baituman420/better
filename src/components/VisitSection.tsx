import React from 'react';
import { LOCAL_IMAGE, RESTAURANT_INFO } from '../data/restaurantData';

export const VisitSection: React.FC = () => {
  return (
    <section id="visitanos" className="w-full py-24 px-6 lg:px-12 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-gutter-lg items-center">
          
          {/* Información de visita */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold mb-3">
              Encuéntranos en el centro
            </div>
            
            <h2 className="font-headline-lg text-headline-lg text-primary font-serif font-medium mb-6 leading-tight">
              Tu rincón healthy en Bilbao.
            </h2>
            
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
              Situado en la céntrica Calle Henao, a pocos pasos de la emblemática Plaza Ensanche y los Jardines de Albia. Un punto de encuentro luminoso con techos altos, mesas de madera y un ambiente sereno para comer bien en cualquier momento.
            </p>

            {/* Tarjetas de datos prácticos */}
            <div className="space-y-4 mb-8">
              <div className="p-5 rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-4 border border-surface-container">
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

              <div className="p-5 rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-4 border border-surface-container">
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

              <div className="p-5 rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-4 border border-surface-container">
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
                className="inline-flex items-center gap-3 bg-primary-container text-surface hover:bg-tertiary transition-all duration-300 px-8 py-4 rounded-lg font-label-lg text-label-lg uppercase tracking-wider shadow-md hover:-translate-y-0.5 group"
                href={RESTAURANT_INFO.mapsUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[20px] transition-transform duration-200 group-hover:scale-110">
                  near_me
                </span>
                <span>Cómo llegar en Google Maps</span>
              </a>
            </div>
          </div>

          {/* Fotografía del interior del local */}
          <div className="lg:col-span-6">
            <div className="relative rounded-xl overflow-hidden shadow-xl aspect-[4/3] bg-surface-container border border-surface-container">
              <img
                className="w-full h-full object-cover"
                src={LOCAL_IMAGE.src}
                alt={LOCAL_IMAGE.alt}
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
