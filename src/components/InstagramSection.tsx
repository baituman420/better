import React from 'react';
import { INSTAGRAM_POSTS, RESTAURANT_INFO } from '../data/restaurantData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const InstagramSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.08 });

  return (
    <section 
      ref={ref} 
      className={`w-full py-12 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-surface border-t border-surface-container overflow-hidden transition-colors duration-700 editorial-chapter relative ${
        isVisible ? 'editorial-chapter-visible' : 'editorial-chapter-hidden'
      }`}
    >
      <div className="max-w-7xl mx-auto text-center mb-8 sm:mb-12">
        <div className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold mb-2 sm:mb-3 text-xs sm:text-sm">
          Comunidad &amp; Vida Sana
        </div>
        <h2 className="font-headline-lg text-2xl sm:text-headline-lg text-primary font-serif font-medium mb-3 sm:mb-4">
          La mesa de BETTER en tu feed
        </h2>
        <p className="font-body-md sm:font-body-lg text-body-md sm:text-body-lg text-on-surface-variant max-w-xl mx-auto">
          Comparte tus momentos, desayunos y propuestas del día en el corazón de Bilbao.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Grid de 4 capturas sociales reales con animación escalonada suave */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12">
          {INSTAGRAM_POSTS.map((post, index) => (
            <a
              key={post.id}
              href={RESTAURANT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ transitionDelay: `${index * 70}ms` }}
              className="group relative aspect-square rounded-xl overflow-hidden bg-surface-container shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-400 border border-surface-container block"
            >
              <img
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                src={post.image}
                alt={post.altText}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-surface p-3 sm:p-4 text-center">
                <span className="material-symbols-outlined text-[24px] sm:text-[28px] mb-1 sm:mb-2 text-secondary-fixed transform -translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  photo_camera
                </span>
                <span className="font-label-md text-xs sm:text-label-md uppercase tracking-wider font-semibold">
                  {post.caption}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Botón Seguir en Instagram */}
        <div className="flex justify-center">
          <a
            className="inline-flex items-center gap-2 bg-surface-container-high hover:bg-surface-container-highest text-primary transition-all duration-300 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-label-md text-xs sm:text-label-md uppercase tracking-wider shadow-xs hover:shadow-md hover:-translate-y-0.5 border border-surface-container active:scale-98"
            href={RESTAURANT_INFO.instagramUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[18px]">photo_camera</span>
            <span>Seguir en Instagram {RESTAURANT_INFO.instagramHandle}</span>
          </a>
        </div>
      </div>

      {/* Degradado continuo hacia el pie de página */}
      <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-b from-transparent to-primary-container/20 pointer-events-none"></div>
    </section>
  );
};
