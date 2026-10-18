import React from 'react';
import { INSTAGRAM_POSTS, RESTAURANT_INFO } from '../data/restaurantData';

export const InstagramSection: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 lg:px-12 bg-surface border-t border-surface-container">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <div className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold mb-3">
          Comunidad &amp; Vida Sana
        </div>
        <h2 className="font-headline-lg text-headline-lg text-primary font-serif font-medium mb-4">
          La mesa de BETTER en tu feed
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto">
          Comparte tus momentos, recetas de temporada y novedades diarias en el corazón de Bilbao.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Grid de 4 capturas sociales */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-12">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={RESTAURANT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden bg-surface-container shadow-sm border border-surface-container block"
            >
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src={post.image}
                alt={post.altText}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-surface p-4 text-center">
                <span className="font-label-md text-label-md uppercase tracking-wider">
                  {post.caption}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Botón Seguir en Instagram */}
        <div className="flex justify-center">
          <a
            className="inline-flex items-center gap-2.5 bg-surface-container-high hover:bg-surface-container-highest text-primary transition-all duration-200 px-6 py-3 rounded-full font-label-md text-label-md uppercase tracking-wider shadow-sm hover:-translate-y-0.5"
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
