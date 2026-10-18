import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCategories } from './components/ProductCategories';
import { Philosophy } from './components/Philosophy';
import { FoodGallery } from './components/FoodGallery';
import { VisitSection } from './components/VisitSection';
import { InstagramSection } from './components/InstagramSection';
import { Footer } from './components/Footer';
import { CartaModal } from './components/CartaModal';
import type { MenuItem } from './data/restaurantData';

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<MenuItem | null>(null);

  const handleOpenCartaModal = () => {
    setSelectedCategory(null);
    setModalOpen(true);
  };

  const handleSelectCategory = (cat: MenuItem) => {
    setSelectedCategory(cat);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col font-body-md text-on-surface antialiased">
      {/* Barra de Navegación Fija */}
      <Header onOpenCartaModal={handleOpenCartaModal} />

      {/* Contenido Principal */}
      <main className="w-full pt-20 flex-1">
        <Hero onOpenCarta={handleOpenCartaModal} />
        <ProductCategories onSelectCategory={handleSelectCategory} />
        <Philosophy />
        <FoodGallery />
        <VisitSection />
        <InstagramSection />
      </main>

      {/* Pie de Página */}
      <Footer />

      {/* Modal Interactivo de Carta */}
      <CartaModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedCategory={selectedCategory}
      />
    </div>
  );
}

export default App;
