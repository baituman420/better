# BETTER Bilbao — Web Demo

Demo comercial navegable para el establecimiento de comida saludable y café **BETTER Bilbao** (Henao Kalea 2, Bilbao), basada fielmente en el diseño aprobado de **Google Stitch** y enriquecida con **fotografías reales del local y sus productos** y una **experiencia de transición visual continua y refinada**.

🔗 **Demo en vivo en GitHub Pages**: [https://baituman420.github.io/better/](https://baituman420.github.io/better/)

---

## 📸 Fotografías Reales Integradas

Hemos incorporado una cuidada selección de fotografías del Instagram oficial de **BETTER Bilbao** organizadas en `public/images/`:
- **Hero Principal**: Presentación fotográfica envolvente con fundido lento y continuo entre tres composiciones gastronómicas reales:
  1. *Mesa BETTER*: Composición completa con bowl saludable, bocadillo en pan crujiente y zumos naturales (`hero-mesa.jpg`).
  2. *Desayunos & Tostas*: Tostas con base crujiente, aguacate al punto y salmón (`hero-tostas.jpg`).
  3. *Bowls de Temporada*: Fruta fresca cortada al momento con avena y semillas (`hero-bowls.jpg`).
- **Categorías Gastronómicas**:
  - *Tostas y desayunos*: Tostas con aguacate fresco y salmón (`cat-tostas.jpg`).
  - *Bocadillos y focaccias*: Bocadillo en pan con cereales y semillas con vegetales frescos (`cat-bocadillos.jpg`).
  - *Bowls y ensaladas*: Bowl saludable completo con base verde, atún y verduras (`cat-bowls.jpg`).
  - *Bebidas y zumos*: Zumo verde natural preparado en frío con manzana y espinacas (`cat-bebidas.jpg`).
- **Nuestra Filosofía**: Vista de la sala interior de Henao 2 con sus clientes y ambiente acogedor (`filosofia-local.jpg`).
- **Cultura Culinaria (Galería Editorial)**:
  - *Mesa servida*: Bandeja completa con bowl saludable, bocadillo y zumos naturales (`editorial-focaccia.jpg`).
  - *Bowls de fruta*: Fruta fresca cortada al momento con avena y semillas (`editorial-bowls.jpg`).
  - *Bebidas*: Gama de zumos naturales de colores sobre la barra (`editorial-bebidas.jpg`).
- **Visítanos (Henao 2)**:
  - Selector interactivo entre vista del *Interior* de la sala (`local-interior.jpg`) y la *Fachada exterior* en esquina (`local-fachada.jpg`).
- **Comunidad Instagram (@better_restaurant)**:
  - Mosaico de 4 publicaciones reales: desayunos con tosta y bowl de açaí, zumo paseando por Bilbao, cestas de fruta fresca en barra y formato take away.

---

## ✨ Transición Visual Continua y Elegante

- **Experiencia de scroll orgánica**: Bloques de contenido visibles desde el inicio (sin pantallas en blanco ni esperas forzadas) que ganan presencia y definición con desplazamientos sutiles de 3-4px al hacer scroll.
- **Hero con fundido lento**: Transición pausada de 1.2s entre composiciones gastronómicas, manteniendo siempre el foco en el titular «COMER BIEN. SABER MEJOR.».
- **Badge comercial natural**: Mensaje informativo de "Variedad cotidiana" que resalta la propuesta culinaria del establecimiento.
- **Navegación fluida**: Header con detección de scroll dinámico (fondo translúcido con desenfoque `backdrop-blur`), indicador de línea animado al pasar el ratón y respuesta háptica visual en botones.
- **Accesibilidad y Respeto a `prefers-reduced-motion`**: Si el usuario tiene activada la reducción de movimiento en su sistema operativo, todas las animaciones se desactivan instantáneamente para garantizar máxima accesibilidad.

---

## 🍽️ Sobre BETTER Bilbao

BETTER es una propuesta gastronómica saludable y fresca ubicada en el Ensanche de Bilbao (Henao Kalea 2, junto a Plaza Ensanche y Jardines de Albia).

Su oferta incluye:
- **Tostas y desayunos**: Tostas con aguacate al punto, semillas, huevo o salmón, preparadas al momento.
- **Bocadillos y focaccias**: Panes crujientes con cereales y semillas, vegetales frescos y rellenos sabrosos.
- **Bowls y ensaladas**: Granos selectos, hojas verdes de temporada y aderezos caseros.
- **Bebidas y zumos**: Zumos naturales de fruta y verdura, batidos verdes e infusiones.

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
