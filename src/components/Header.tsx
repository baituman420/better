import React, { useState, useEffect } from 'react';
import { LOGO_URL, RESTAURANT_INFO } from '../data/restaurantData';

interface HeaderProps {
  onOpenCartaModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCartaModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header 
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-surface/95 backdrop-blur-md shadow-md border-b border-surface-container py-0' 
          : 'bg-surface/80 backdrop-blur-sm border-b border-surface-container/60 py-1'
      }`}
    >
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo Brand */}
        <div className="flex items-center gap-4">
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#inicio");
            }}
            className="flex items-center gap-3 group transition-transform duration-300 hover:opacity-90 active:scale-98"
          >
            <img
              alt="BETTER Bilbao Logo"
              className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
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
              className="relative font-label-lg text-label-lg tracking-wider uppercase text-on-surface-variant hover:text-primary transition-colors py-2 group cursor-pointer"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={() => {
              if (onOpenCartaModal) {
                onOpenCartaModal();
              } else {
                handleNavClick("#carta");
              }
            }}
            className="inline-flex items-center justify-center bg-primary-container text-surface hover:bg-tertiary active:scale-95 transition-all duration-200 px-5 sm:px-6 py-2.5 rounded-full font-label-md text-label-md uppercase tracking-wider shadow-[0_2px_10px_rgba(23,63,53,0.12)] hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
          >
            Ver carta
          </button>

          <a
            href={RESTAURANT_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram de BETTER Bilbao"
            className="w-9 h-9 rounded-full bg-primary hover:bg-primary-container text-on-primary flex items-center justify-center shrink-0 transition-transform duration-200 hover:scale-105 active:scale-95 shadow-sm"
          >
            <span className="material-symbols-outlined text-[19px]">photo_camera</span>
          </a>

          <button
            aria-label="Abrir menú móvil"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-primary hover:bg-surface-container-high transition-colors focus:outline-none cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[26px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown con transición suave */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface/98 backdrop-blur-lg border-t border-surface-container px-6 py-6 shadow-2xl transition-all duration-300">
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
                className="inline-flex items-center justify-center gap-2 bg-surface-container-high text-primary hover:bg-surface-container-highest px-4 py-3 rounded-lg font-label-md text-label-md uppercase tracking-wider transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">near_me</span>
                <span>Cómo llegar ({RESTAURANT_INFO.address})</span>
              </a>
              <a
                href={RESTAURANT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary-container text-surface hover:bg-tertiary px-4 py-3 rounded-lg font-label-md text-label-md uppercase tracking-wider transition-colors"
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
