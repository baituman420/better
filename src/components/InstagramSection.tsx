import React from 'react';
import { INSTAGRAM_POSTS, RESTAURANT_INFO } from '../data/restaurantData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const InstagramSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section ref={ref} className="w-full py-24 px-6 lg:px-12 bg-surface border-t border-surface-container overflow-hidden">
      <div 
        className={`max-w-7xl mx-auto text-center mb-12 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold mb-3">
          Comunidad &amp; Vida Sana
        </div>
        <h2 className="font-headline-lg text-headline-lg text-primary font-serif font-medium mb-4">
          La mesa de BETTER en tu feed
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto">
          Comparte tus momentos, desayunos y propuestas del día en el corazón de Bilbao.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Grid de 4 capturas sociales reales con animación escalonada */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-12">
          {INSTAGRAM_POSTS.map((post, index) => (
            <a
              key={post.id}
              href={RESTAURANT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ transitionDelay: `${index * 120}ms` }}
              className={`group relative aspect-square rounded-xl overflow-hidden bg-surface-container shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 border border-surface-container block ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <img
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                src={post.image}
                alt={post.altText}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-surface p-4 text-center">
                <span className="material-symbols-outlined text-[28px] mb-2 text-secondary-fixed transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  photo_camera
                </span>
                <span className="font-label-md text-label-md uppercase tracking-wider font-semibold">
                  {post.caption}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Botón Seguir en Instagram */}
        <div 
          className={`flex justify-center transition-all duration-700 ease-out delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <a
            className="inline-flex items-center gap-2.5 bg-surface-container-high hover:bg-surface-container-highest text-primary transition-all duration-300 px-6 py-3 rounded-full font-label-md text-label-md uppercase tracking-wider shadow-sm hover:shadow-md hover:-translate-y-0.5 border border-surface-container active:scale-95"
            href={RESTAURANT_INFO.instagramUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[18px]">photo_camera</span>
            <span>Seguir en Instagram {RESTAURANT_INFO.instagramHandle}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
