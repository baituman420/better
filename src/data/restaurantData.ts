export interface MenuItem {
  id: string;
  name: string;
  description: string;
  badge?: string;
  highlightTag?: string;
  image: string;
  altText: string;
}

export interface Pillar {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface GalleryFeature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  altText: string;
  badgeText?: string;
  icon?: string;
}

export interface InstagramPost {
  id: string;
  caption: string;
  image: string;
  altText: string;
}

export interface RestaurantInfo {
  name: string;
  city: string;
  address: string;
  zone: string;
  postalCode: string;
  hoursNote: string;
  mapsUrl: string;
  instagramUrl: string;
  instagramHandle: string;
}

export const RESTAURANT_INFO: RestaurantInfo = {
  name: "BETTER",
  city: "Bilbao",
  address: "Henao Kalea, 2",
  zone: "Junto a Plaza Ensanche · Abando",
  postalCode: "48009 Bilbao, Bizkaia",
  hoursNote: "Consulta nuestros horarios actualizados en el local y redes sociales",
  mapsUrl: "https://maps.google.com/?q=Henao+Kalea+2+Bilbao",
  instagramUrl: "https://instagram.com/better_restaurant",
  instagramHandle: "@better_restaurant"
};

// Base path helper for GitHub Pages compatibility
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export const LOGO_URL = "https://lh3.googleusercontent.com/aida/AEtjO1VEm5gBMQR9tzdM300JRf9COXlfu3t3FFxKbA9ehOGVumOSX12oHBhUI26qilL55REYne1-WpbCcSkU3X3AErJUYOArvKhg9pHMFe13xU4YjHdVGernwhKd7GTiOQfvkLkpcM4Vwp67PNg73c2MHo8fZ73VkwbWKGxttUAa3WzfuSzpUlHQZiRII4jREuCjZTqKFvex3qC7dDMW_vLayDTKIFrUDU8KwhU6rB261i-RwONhvPaAwXF-1wY";

// Hero Image: Tostas artesanas con aguacate y salmón preparadas en BETTER Bilbao
export const HERO_IMAGE = {
  src: `${BASE}/images/hero-dish.jpg`,
  alt: "Tostas artesanas preparadas al momento en BETTER Bilbao con aguacate y salmón marinado"
};

// Categorías Gastronómicas con fotos reales
export const PRODUCT_CATEGORIES: MenuItem[] = [
  {
    id: "tostas",
    name: "Tostas y desayunos",
    description: "Hogazas de masa madre, aguacate al punto, queso batido, semillas y toques frescos para empezar el día con vitalidad.",
    badge: "Desayunos y brunch",
    highlightTag: "Masa Madre",
    image: `${BASE}/images/cat-tostas.jpg`,
    altText: "Tostas de pan de masa madre con aguacate y salmón en BETTER Bilbao"
  },
  {
    id: "bocadillos",
    name: "Bocadillos y focaccias",
    description: "Panes crujientes con cereales y semillas, vegetales frescos, quesos fundidos e ingredientes de calidad recién preparados.",
    badge: "Elaboración diaria",
    highlightTag: "Pan Artesano",
    image: `${BASE}/images/cat-bocadillos.jpg`,
    altText: "Bocadillo artesano con pollo a la plancha, tomate, lechuga y queso en pan con semillas"
  },
  {
    id: "bowls",
    name: "Bowls y ensaladas",
    description: "Bases de granos selectos, hojas verdes de temporada, semillas y variedad de ingredientes frescos llenos de color.",
    badge: "Combinaciones frescas",
    highlightTag: "Nutritivo y fresco",
    image: `${BASE}/images/cat-bowls.jpg`,
    altText: "Bowl saludable con base verde, atún, pepino, pimientos y aceite de oliva virgen extra"
  },
  {
    id: "bebidas",
    name: "Bebidas y zumos",
    description: "Zumos naturales de fruta y verdura, batidos verdes revitalizantes, cafés de especialidad e infusiones.",
    badge: "Zumos naturales",
    highlightTag: "Frescura natural",
    image: `${BASE}/images/cat-bebidas.jpg`,
    altText: "Zumo verde natural con manzana y espinacas en vaso de cristal"
  }
];

export const PHILOSOPHY_PILLARS: Pillar[] = [
  {
    id: "sabor",
    icon: "restaurant",
    title: "Sabor sin atajos",
    description: "Recetas equilibradas, aderezos preparados en casa y combinaciones pensadas para disfrutar de cada bocado con productos de calidad."
  },
  {
    id: "variedad",
    icon: "spa",
    title: "Variedad real",
    description: "Opciones frescas, vegetales y reconfortantes para cualquier momento del día, desde un desayuno reparador hasta una comida completa."
  },
  {
    id: "energia",
    icon: "location_city",
    title: "Energía urbana",
    description: "Un espacio acogedor en pleno centro para parar, recargar pilas con un café o llevarte tu comida cómodamente a la oficina."
  }
];

// Filosofía: Sala del local BETTER Bilbao con sus clientes y ambiente acogedor
export const PHILOSOPHY_IMAGE = {
  src: `${BASE}/images/filosofia-local.jpg`,
  alt: "Interior del restaurante BETTER Bilbao en Henao 2 con mesas de madera, iluminación cálida y clientes disfrutando"
};

// Galería Editorial destacada
export const EDITORIAL_GALLERY: {
  main: GalleryFeature;
  secondary: GalleryFeature[];
} = {
  main: {
    id: "focaccia",
    title: "Platos combinados y bocadillos artesanos",
    subtitle: "La mesa de cada día",
    description: "Nuestra propuesta en mesa: bowls generosos con cereales y verduras, bocadillos en pan artesano y zumos recién prensados para una pausa reparadora.",
    badgeText: "Preparación al momento",
    icon: "restaurant_menu",
    image: `${BASE}/images/editorial-focaccia.jpg`,
    altText: "Mesa servida en BETTER Bilbao con bowl saludable de pasta y atún, bocadillo gourmet y zumos naturales"
  },
  secondary: [
    {
      id: "bowls-editorial",
      title: "Bowls de fruta fresca y cereales",
      subtitle: "Combinaciones equilibradas",
      description: "Frutas de temporada cortadas al momento con avena y semillas crujientes, ligeras y nutritivas.",
      image: `${BASE}/images/editorial-bowls.jpg`,
      altText: "Bowl de fruta fresca con plátano, manzana y fresas en BETTER Bilbao"
    },
    {
      id: "bebidas-editorial",
      title: "Zumos naturales y smoothies",
      subtitle: "Energía viva",
      description: "Elaboraciones en frío a base de cítricos, zanahoria, espinacas y frutas frescas sin azúcares añadidos.",
      image: `${BASE}/images/editorial-bebidas.jpg`,
      altText: "Gama de zumos naturales de colores sobre la barra del local en Henao 2"
    }
  ]
};

// Fotografía del local en Henao 2
export const LOCAL_IMAGE = {
  src: `${BASE}/images/local-interior.jpg`,
  alt: "Ambiente interior de BETTER Bilbao en Henao 2 con iluminación geométrica, mesas de madera y arte en paredes"
};

export const LOCAL_FACHADA_IMAGE = {
  src: `${BASE}/images/local-fachada.jpg`,
  alt: "Entrada exterior y fachada de BETTER Bilbao en la esquina de Henao Kalea 2"
};

// Posts de Instagram con fotos reales del local y platos
export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "ig-1",
    caption: "Mornings in Bilbao",
    image: `${BASE}/images/ig-tostas-desayuno.jpg`,
    altText: "Desayuno en BETTER Bilbao con tosta de aguacate y chía, bowl de frutas y café con leche"
  },
  {
    id: "ig-2",
    caption: "Take away & Paseo",
    image: `${BASE}/images/ig-smoothie-parque.jpg`,
    altText: "Zumo verde de BETTER para llevar paseando por los parques de Bilbao"
  },
  {
    id: "ig-3",
    caption: "Fruta fresca diaria",
    image: `${BASE}/images/ig-fruta-fresca.jpg`,
    altText: "Cestas de fruta fresca en la barra de BETTER Bilbao para zumos del día"
  },
  {
    id: "ig-4",
    caption: "Ready to go",
    image: `${BASE}/images/ig-takeaway-bilbao.jpg`,
    altText: "Menú takeaway de ensalada y zumo natural con bolsa kraft de BETTER Bilbao"
  }
];
