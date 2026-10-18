# BETTER Bilbao — Web Demo

Demo comercial navegable para el establecimiento de comida saludable y café **BETTER Bilbao** (Henao Kalea 2, Bilbao), basada fielmente en el diseño aprobado de **Google Stitch** y enriquecida con **fotografías reales del local y sus productos** y **animaciones fluidas**.

🔗 **Demo en vivo en GitHub Pages**: [https://baituman420.github.io/better/](https://baituman420.github.io/better/)

---

## 📸 Fotografías Reales Integradas

Hemos incorporado una cuidada selección de fotografías del Instagram oficial de **BETTER Bilbao** organizadas en `public/images/`:
- **Hero Principal**: Tostas artesanas con aguacate y salmón preparadas al momento en el establecimiento (`hero-dish.jpg`).
- **Categorías Gastronómicas**:
  - *Tostas y desayunos*: Tostas de masa madre con aguacate y salmón (`cat-tostas.jpg`).
  - *Bocadillos y focaccias*: Bocadillo con pan de semillas y vegetales frescos (`cat-bocadillos.jpg`).
  - *Bowls y ensaladas*: Bowl saludable completo con base verde, atún y verduras (`cat-bowls.jpg`).
  - *Bebidas y zumos*: Zumo verde natural preparado en frío (`cat-bebidas.jpg`).
- **Nuestra Filosofía**: Vista de la sala interior de Henao 2 con sus clientes y ambiente acogedor (`filosofia-local.jpg`).
- **Cultura Culinaria (Galería Editorial)**:
  - *Mesa servida*: Bandeja completa con bowl saludable, bocadillo y zumos naturales (`editorial-focaccia.jpg`).
  - *Bowls de fruta*: Fruta fresca cortada al momento con avena y semillas (`editorial-bowls.jpg`).
  - *Bebidas*: Gama de zumos naturales de colores sobre la barra (`editorial-bebidas.jpg`).
- **Visítanos (Henao 2)**:
  - Selector interactivo entre vista del *Interior* de la sala (`local-interior.jpg`) y la *Fachada exterior* en esquina (`local-fachada.jpg`).
- **Comunidad Instagram (@better_restaurant)**:
  - Mosaico de 4 publicaciones reales: desayunos con tosta y bowl de açaí, café y matcha paseando por Bilbao, cestas de fruta fresca en barra y formato take away.

---

## ✨ Animaciones y Microinteracciones

- **Scroll Reveal progresivo**: Bloques de contenido y cuadrículas de productos que entran suavemente a medida que el usuario navega (`useScrollReveal` con `IntersectionObserver`).
- **Hero suave**: Entrada escalonada de titular, pill de ubicación y botones de acción, con sutil movimiento flotante en el badge de fotografía real.
- **Microinteracciones en tarjetas**: Efecto elevación (`hover:-translate-y-1.5`), zoom óptico ligero de imágenes (`group-hover:scale-105`) y transiciones de sombra.
- **Navegación premium**: Header con detección de scroll dinámico (fondo translúcido con desenfoque `backdrop-blur`), indicador de subrayado sutil en enlaces y botón de acción directa.
- **Accesibilidad y Respeto a `prefers-reduced-motion`**: Si el usuario tiene activada la reducción de movimiento en su sistema operativo, todas las animaciones se desactivan instantáneamente para garantizar máxima accesibilidad.

---

## 🍽️ Sobre BETTER Bilbao

BETTER es una propuesta gastronómica saludable y fresca ubicada en el Ensanche de Bilbao (Henao Kalea 2, junto a Plaza Ensanche y Jardines de Albia).

Su oferta incluye:
- **Tostas y desayunos**: Hogazas de masa madre, aguacate al punto, queso batido y semillas.
- **Bocadillos y focaccias**: Panes artesanos, vegetales asados y quesos escogidos.
- **Bowls y ensaladas**: Granos enteros, hojas frescas y aderezos caseros.
- **Bebidas y zumos**: Zumos naturales, opciones botánicas, cafés e infusiones.

---

## 🚀 Tecnologías

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/) configurado con los tokens de diseño de Google Stitch (*Editorial Gastronomy*):
  - **Tipografía**: *Playfair Display* (títulos editoriales) + *Plus Jakarta Sans* (cuerpo y etiquetas) + *Material Symbols Outlined*.
  - **Paleta**: *Deep Forest Pine* (`#173F35`), *Warm Ochre* (`#7C5721`), *Warm Linen Cream* (`#FAFAF3`).
- **Arquitectura de datos**: Separación desacoplada entre los datos del establecimiento y la carta (`src/data/restaurantData.ts`) y la capa de presentación visual (`src/components/`).
- **CI/CD**: Despliegue automático en GitHub Pages vía GitHub Actions (`.github/workflows/deploy.yml`).

---

## 🛠️ Instalación y Desarrollo Local

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo**:
   ```bash
   npm run dev
   ```

3. **Compilar para producción**:
   ```bash
   npm run build
   ```

4. **Previsualizar la compilación**:
   ```bash
   npm run preview
   ```
