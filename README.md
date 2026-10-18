# BETTER Bilbao — Web Demo

Demo comercial navegable para el establecimiento de comida saludable y café **BETTER Bilbao** (Henao Kalea 2, Bilbao), basada fielmente en el diseño aprobado creado en **Google Stitch**.

🔗 **Demo en vivo en GitHub Pages**: [https://baituman420.github.io/better/](https://baituman420.github.io/better/)

---

## 🍽️ Sobre BETTER Bilbao

BETTER es una propuesta gastronómica saludable y fresca ubicada en el Ensanche de Bilbao (Henao Kalea 2, junto a Plaza Ensanche y Jardines de Albia).

Su oferta incluye:
- **Tostas y desayunos**: Hogazas de masa madre, aguacate al punto, queso batido y semillas.
- **Bocadillos y focaccias**: Panes artesanos, vegetales asados y quesos escogidos.
- **Bowls y ensaladas**: Granos enteros, hojas frescas y aderezos caseros.
- **Bebidas y zumos**: Zumos naturales, opciones botánicas, cafés e infusiones.

> **Nota de contenido verificado**: Los textos y datos se han configurado con tono neutro y verificado, reflejando fielmente la identidad del local en Henao 2 sin asumir datos no confirmados (como horarios concretos, teléfonos o precios cerrados).

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

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/baituman420/better.git
   cd better
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo**:
   ```bash
   npm run dev
   ```

4. **Compilar para producción**:
   ```bash
   npm run build
   ```

5. **Previsualizar la compilación**:
   ```bash
   npm run preview
   ```

---

## 📱 Funcionalidades de la Demo

- ✅ **Fidelidad visual total** al prototipo aprobado de Google Stitch.
- ✅ **Navegación fluida por anclas** entre todas las secciones (*Inicio*, *Propuesta*, *Filosofía*, *Cultura Culinaria*, *Visítanos*).
- ✅ **Menú responsive adaptable** para móviles, tabletas y ordenadores de sobremesa.
- ✅ **Enlace interactivo a Google Maps** con las coordenadas de Henao 2, Bilbao.
- ✅ **Conexión a Instagram** oficial `@better_restaurant`.
- ✅ **Modal interactivo** de detalles para cada categoría de la carta.
- ✅ **Ruta base `/better/`** para correcto funcionamiento de assets en GitHub Pages.
