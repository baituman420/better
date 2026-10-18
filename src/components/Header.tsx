import React, { useState } from 'react';
import { LOGO_URL, RESTAURANT_INFO } from '../data/restaurantData';

interface HeaderProps {
  onOpenCartaModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCartaModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Nuestra carta", href: "#carta" },
    { label: "Nuestra filosofía", href: "#filosofia" },
    { label: "El local", href: "#espacio" },
    { label: "Contacto", href: "#visitanos" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-surface/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.03)] border-b border-surface-container">
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo Brand */}
        <div className="flex items-center gap-4">
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#inicio");
            }}
            className="flex items-center gap-3 group transition-transform duration-300 hover:opacity-90"
          >
            <img
              alt="BETTER Bilbao Logo"
              className="h-8 w-auto object-contain"
              src={LOGO_URL}
            />
            <span className="font-headline-sm text-headline-sm tracking-tight text-primary">
              {RESTAURANT_INFO.name}
            </span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant font-medium hidden sm:inline-block">
              {RESTAURANT_INFO.city}
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="font-label-lg text-label-lg tracking-wider uppercase text-on-surface-variant hover:text-primary transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="#carta"
            onClick={(e) => {
              if (onOpenCartaModal) {
                e.preventDefault();
                onOpenCartaModal();
              } else {
                e.preventDefault();
                handleNavClick("#carta");
              }
            }}
            className="inline-flex items-center justify-center bg-primary-container text-surface hover:bg-tertiary transition-all duration-200 px-5 sm:px-6 py-2.5 rounded-full font-label-md text-label-md uppercase tracking-wider shadow-[0_2px_10px_rgba(23,63,53,0.12)] hover:-translate-y-0.5"
          >
            Ver carta
          </a>

          <a
            href={RESTAURANT_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram de BETTER Bilbao"
            className="w-8 h-8 rounded-full bg-primary hover:bg-primary-container text-on-primary flex items-center justify-center shrink-0 transition-colors shadow-sm"
          >
            <span className="material-symbols-outlined text-[18px]">photo_camera</span>
          </a>

          <button
            aria-label="Abrir menú móvil"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-primary hover:bg-surface-container-high transition-colors focus:outline-none"
            type="button"
          >
            <span className="material-symbols-outlined text-[26px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface border-t border-surface-container-high px-6 py-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="font-headline-sm text-headline-sm text-primary hover:text-secondary py-2 border-b border-surface-container-low transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href={RESTAURANT_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-surface-container-high text-primary hover:bg-surface-container-highest px-4 py-3 rounded-lg font-label-md text-label-md uppercase tracking-wider"
              >
                <span className="material-symbols-outlined text-[20px]">near_me</span>
                <span>Cómo llegar ({RESTAURANT_INFO.address})</span>
              </a>
              <a
                href={RESTAURANT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary-container text-surface hover:bg-tertiary px-4 py-3 rounded-lg font-label-md text-label-md uppercase tracking-wider"
              >
                <span className="material-symbols-outlined text-[20px]">photo_camera</span>
                <span>{RESTAURANT_INFO.instagramHandle}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
