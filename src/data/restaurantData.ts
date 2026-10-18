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

export const LOGO_URL = "https://lh3.googleusercontent.com/aida/AEtjO1VEm5gBMQR9tzdM300JRf9COXlfu3t3FFxKbA9ehOGVumOSX12oHBhUI26qilL55REYne1-WpbCcSkU3X3AErJUYOArvKhg9pHMFe13xU4YjHdVGernwhKd7GTiOQfvkLkpcM4Vwp67PNg73c2MHo8fZ73VkwbWKGxttUAa3WzfuSzpUlHQZiRII4jREuCjZTqKFvex3qC7dDMW_vLayDTKIFrUDU8KwhU6rB261i-RwONhvPaAwXF-1wY";

export const HERO_IMAGE = {
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkwHXemgN8MxdNbYuL8K3nKv0hlOOn8OXLjU1b4JpD7gZVcHW4Gh5YSRyTxNCTsrSEh6b_WbuZ5N3DVjR_BvClEGJqwvARuKW4mJ9O8MgtgbALrBf3LLJp1NnBw36J6EbOOUxbXvGR4NM3XVc89KdXJ5COltyXGxkEx1_jPYO_0YHGyuBXCHd6bv7qUXAkHL7uNM6gZSxB3BZYn6yPbLGJuQWdiO4SX1Zywbi3lo-vWInOZjfLjk6A",
  alt: "Tosta artesanal con ingredientes frescos y semillas en plato cerámico rústico"
};

export const PRODUCT_CATEGORIES: MenuItem[] = [
  {
    id: "tostas",
    name: "Tostas y desayunos",
    description: "Hogazas de masa madre, aguacate al punto, queso batido, semillas y combinaciones botánicas para empezar bien el día.",
    badge: "Desayunos y brunch",
    highlightTag: "Masa Madre",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQNoF7sYRPmOEta90f7JQwUT9_WcW2Ym5VzFyKJ1sQoO4UXIKUUfNkvZVDlmMeVRyUti2xAZVR-uyP4r9xwRWLn6a-N-SQjntnd0MeSu9QWcaBdOt5nXgYCCjoqE7p63B6d8GETL5YmTUXiPT8iLYK656WMlXB5YYIhadrieMr5zOssfxyjbSgega0TaKYGlGpmqaAfl7T8-aDcgLZWIz5F9vRCymBlnWLle4T6jrgaSWYD_W-W51v",
    altText: "Tosta con queso blanco, tomates cherry, aguacate y semillas sobre fondo cálido"
  },
  {
    id: "bocadillos",
    name: "Bocadillos y focaccias",
    description: "Focaccias recién preparadas, vegetales asados, quesos escogidos y panes crujientes con ingredientes de calidad.",
    badge: "Elaboración diaria",
    highlightTag: "Pan Artesano",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAZFazW5N_Key2Iuu0jmpZsK-p6ShIcp_x-3fQtjxtcy2PuOHsWUp3FAKtyik6O08yuNMAksv2q5oY9YCG2YKrz0ffMll2LvqZ2RkVcfaXF6rUkzXdrDT5VcnGLDeomSIqYYwEhmgZMj4ND0cmqyE-9OXrTd5_FwIVQIj2bYziRHOBH4VgImryD5CApIdUUJV8anOKJCpcZvitvKinvWWW1NAGIpVoMyvzZerPd6cm3CPBRsmak7I-",
    altText: "Bocadillo gourmet en focaccia con vegetales asados y queso mozzarella"
  },
  {
    id: "bowls",
    name: "Bowls y ensaladas",
    description: "Bases de granos selectos, hojas verdes frescas, variedad vegetal, semillas y aderezos propios llenos de sabor.",
    badge: "Combinaciones frescas",
    highlightTag: "Nutritivo y fresco",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlyd1lzcJdLaLDpU8eGus3vqxdPG2FErHR1oUMcCgjudFIGjipMQWvorDM-h_xVLSE4u31yhi0iKu6gvuPZKenZA7eDHpkZt6nEEVq0gcwuLumf6z9uvjt6MQRo1dczMITI4NCJcDiEOwJ6G25bADbmyD4J0rEfF4Qwck-f2zSwmbe6JaL7Y9Ic1APCvRz29urS2V-wcrCLVMFACjizYRM5uJkL05esvBVi9EbPhUeFVjgasAuUkqN",
    altText: "Bowl colorido con quinoa, calabaza asada, aguacate, edamame y rabanito"
  },
  {
    id: "bebidas",
    name: "Bebidas y zumos",
    description: "Zumos naturales con fruta y verdura, batidos frescos, infusiones, matcha y cafés para acompañar cada plato.",
    badge: "Zumos naturales",
    highlightTag: "Frescura natural",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqIUvcpPGOd4Ig1Io2xAMXtO6f3oiOERaovnFoSw3IYYGFntax6WuFddJq1ptrdNlfRkpuQbsd-2KXIJ1o8gfTNStxHbd96HbymTPpDJ6WOn6oFwwpe48eknnDx39LGsdKm4iAHfH7LIF_m-Hzlb7qJng0Ej-Q1TSqECPDSfrJJEwnKu_VS7KQ0_Oo54U8EhPqSEw7hy-TpmGPxcIXc-i5HFDAVofttXl5FhyM0vIzAKis994LzsnP",
    altText: "Selección de zumos naturales y smoothies en vasos de cristal sobre barra"
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
    description: "Opciones frescas, vegetales y nutritivas para cualquier momento del día, desde un desayuno reparador hasta una comida completa."
  },
  {
    id: "energia",
    icon: "location_city",
    title: "Energía urbana",
    description: "Un espacio acogedor en pleno centro para parar, recargar pilas con un café o llevarte tu comida cómodamente a la oficina."
  }
];

export const PHILOSOPHY_IMAGE = {
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkqOfI4imd4-maE2Tn2Xkk6m0DHa3qn-XQNuoIVjmFo1kZvtUpB0nOpUIKGiYjnkztY7bLqyl5kxGwQe3SjDde9SZbGhv_cVgc9tsB2Iqkx9Kp2Ne4CHxBR7nhakR3-ldNfMc5En6eguIHkM_jHirTaPx8WH7WbwnnbPU8BHPaTIw8Emhxf8BniGKIRpf3WuV3hhsyeaaLVM1A0U0IXWQ7CzH3q5Byfeq-Yigl4OXaK3oy9eyHmu3W",
  alt: "Interior luminoso y contemporáneo del restaurante BETTER en Bilbao con amplios ventanales y plantas"
};

export const EDITORIAL_GALLERY: {
  main: GalleryFeature;
  secondary: GalleryFeature[];
} = {
  main: {
    id: "focaccia",
    title: "Focaccias artesanas y panes selectos",
    subtitle: "Panes y masas cuidadas",
    description: "La base perfecta para nuestros bocadillos de vegetales asados, quesos escogidos y salsas botánicas hechas con mimo.",
    badgeText: "Preparación cuidada",
    icon: "bakery_dining",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXKT0GzfwZs7eQZ-fmUOPykdGfeUwc9vq6wxkhr6CUzBNcijPBj1YjR2OeG9DetTzCBSjLbIWD-9UJGVpX4WVUN8ud-s0VGHPsbvW3bMGqhPqR_slanl_TJFMQoxssozzOWi53tMnFLsn-9H-Y-RJ28UxKx2ASCvOS1lcrThZKGoFgYvIGVmbIlCZBkYsCVqhWqBfOjvsRz207qyxkw55kFiERwtGoljclaQPY5UgSYO5RD1dAoY8N",
    altText: "Focaccia artesana rellena de vegetales asados, rúcula y mozzarella en tabla de madera"
  },
  secondary: [
    {
      id: "bowls-editorial",
      title: "Bowls con texturas y contrastes",
      subtitle: "Combinaciones equilibradas",
      description: "Cereales integrales, hojas frescas y aderezos pensados para nutrirte sin pesadez.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPBzYxPab2UMbCXrRo_fYBtinxiD0uhtTWzH5qEJ_yqddaVkcePbIMA8lAXQexa4Z6104DYq6fPW6I9u-w5XgKPMoKN3S0Ic-XMdnBvx1LexADT46jgyOUAZrc0PTrDs6sqQL_z-_9Q972234wt4lKU9N-fGweVSOj4-CsV7VQGDbfb_X0I7YfEOHOzgjukoshffd8On049JhSwmMrWlSod3-wcu7KctO8S70Fv5wWtvsFBFtbimjO",
      altText: "Vista cenital de bowl con quinoa, calabaza, aguacate y granada"
    },
    {
      id: "bebidas-editorial",
      title: "Zumos naturales y bebidas botánicas",
      subtitle: "Frescura viva",
      description: "Elaboraciones con frutas y verduras frescas para conservar el sabor y la frescura natural.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9vrDB_phYozE15xuFDEPiYjnaoZpU7gxUiVliYtaFCXIi1Hvb2qOeCGDBEhZUyzM6-4NZa4zyGY1CKMLSNok4hALFh3SAmvIC_Ux3brVWEEWATrxerj7dpSR-sxjIs1PFjz8D9RBWO7v9hjfC_Ujo4PTYypAfUlhTeN46pT_uBp4122_RRqMUlSlENulXexGcn6RKhe3dWkgshMt9lf6WuCTm7E-kvHDVoSuyOKGzRupaRbzGden8",
      altText: "Zumos naturales de colores con rodajas de cítricos y jengibre fresco"
    }
  ]
};

export const LOCAL_IMAGE = {
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmlQqfBJqx9NKIR2RGtrJNjTVAdwqsE-TI1dK0TPThyUrNg4e_shu3WvP4-_iq8J84YbMB27tBCfc2GQxTgr79Ye5I33VdFWybXmUpANsdoanVWS5qdVRva5-h2u2CRdxy0pkWlSWNDzlZ7_-4KiVyw1yjMV8rNthhsQBog-x-Q4VRP0YeIYX4WEkdXOybX0dTLK6fuMULruIo9l1gFaaxXPY1zkkTGwneijavKu7aArWCCy226wRj",
  alt: "Perspectiva del interior de BETTER Bilbao con luz natural por amplias cristaleras y mesas de madera"
};

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "ig-1",
    caption: "Mornings in Bilbao",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIlETqwwlh-_s6gQ86SQiYq8qQ-019FhonxoPGngEe2_mdD1MgyadTqWdfUYdrWjvbJ89WyEtOCMUC8VGOaAc5EyF4L41CYluhlf9zST8R_SxoDYi-PnwkVjYZspv3Le7yU9tIO3MiLhqcSNwgbd-kzZ2x-w2D73Vn20Oah4FBE6FcohObgm1Hhpge5BarifcKhhfJdaVvciA4LzM_GNra_yB8ZRQDMl4YQPxOn-4iEDWQAYjt-qbD",
    altText: "Tosta de pan de masa madre con queso fresco y rodajas de tomate bajo la luz matutina"
  },
  {
    id: "ig-2",
    caption: "Lunch break favorito",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKQ1jqaJ7oU1_XENtHAVcDjdhm0lkEVpM-o0siFpTua5PuPoGlqSlLt3t9dw7EZJTjIqLqEMj53ZbyiYTjep_04dZGieqa-B5Pm9ydmxJMcBOvGY9CoOusqAwm2kRDbMjTZk6O-WdfMAHJIt1-f-Uia6fZYnUDa74s6QIyGzX9QrM3Xw_9bjfLT4x-ieg5FjHkRbRyA-wGnMoA16TWj2rs-xXnx13rzECnchL7KZzUIayiW3TcogFM",
    altText: "Focaccia artesana cortada en dos con vegetales asados y mozzarella en tabla de madera"
  },
  {
    id: "ig-3",
    caption: "Colores de temporada",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmHXqQeloemapQOVahN8x5r-MkA2ELL0Bb2imKoZVN6ys62xclSsuZWS7tmyIfp7OKoQM-0PLJVKonueQbTWT7Je-jEVqRGHg_vEzyBMVfUQuxhyalMUqCX9MuDjfGZYHdbYW74ke2J2KzlTnYQWT_sTbrUej1RVvKorn1vie7Jd3W-9Qdv7PhwfRajDMYROAPO-VMQuDKSeH1Pe7IzIPSUWJIPyh9BwoiisguCiQU2jex9HcYF2qm",
    altText: "Bowl colorido y nutritivo con aguacate, quinoa, granada y hojas verdes"
  },
  {
    id: "ig-4",
    caption: "Frescura natural",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAp0G2XciBBY6cVyqhvo6EpSDCpK4KvOvOxImZyPdFy77G8B2vg28SzJ6rbMvgi8Oo9LbFVRe0cXxaAfiCpRJZSLJlIwK4158AkX2W9YY76odM0LMH4bLam42MgfvGZXdDfSdXxVRh0xsvBsBaxPmL2Khm87q2b2t7rV4DEpubyANV-S_fmXCqGLAEHgVj4uDC7wyqziGnD7lxcmP0LmWa_s3te_PaoyZnHmxcYjDG4JrX6JRuqcMb5",
    altText: "Vasos de zumos naturales de fruta y verdura sobre barra con fruta fresca"
  }
];
