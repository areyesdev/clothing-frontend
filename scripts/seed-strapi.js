// ==================== CONFIGURACIÓN ====================
const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337";
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN || "TU_API_TOKEN_AQUI";

// ==================== CATEGORÍAS ====================
const categories = [
  {
    name: "Hombre",
    slug: "hombre",
    description:
      "Colección completa de moda masculina. Encuentra camisetas, pantalones, chaquetas y más.",
  },
  {
    name: "Mujer",
    slug: "mujer",
    description:
      "Moda femenina con estilo. Vestidos, blusas, jeans y accesorios para toda ocasión.",
  },
  {
    name: "Accesorios",
    slug: "accesorios",
    description:
      "Complementa tu estilo con nuestra selección de accesorios: bolsos, gorras, cinturones y más.",
  },
  {
    name: "Ofertas",
    slug: "ofertas",
    description: "Las mejores ofertas y descuentos en productos seleccionados.",
  },
];

// ==================== PRODUCTOS (100+) ====================
const products = [
  // ===================== HOMBRE - CAMISETAS (15) =====================
  {
    name: "Camiseta Básica Negra",
    slug: "camiseta-basica-negra-hombre",
    description:
      "Camiseta de algodón 100% con corte clásico. Perfecta para el día a día.",
    price: 59900,
    originalPrice: null,
    category: "hombre",
    subcategory: "Camisetas",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Negro"],
    stock: 50,
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
  },
  {
    name: "Camiseta Básica Blanca",
    slug: "camiseta-basica-blanca-hombre",
    description: "Camiseta esencial de algodón blanco. Versátil y cómoda.",
    price: 59900,
    originalPrice: null,
    category: "hombre",
    subcategory: "Camisetas",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Blanco"],
    stock: 60,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800",
  },
  {
    name: "Camiseta Gris Melange",
    slug: "camiseta-gris-melange-hombre",
    description: "Camiseta en tono gris melange, suave al tacto.",
    price: 64900,
    originalPrice: null,
    category: "hombre",
    subcategory: "Camisetas",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Gris Melange"],
    stock: 45,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800",
  },
  {
    name: "Camiseta Cuello V Azul",
    slug: "camiseta-cuello-v-azul-hombre",
    description: "Camiseta con cuello en V, elegante y moderna.",
    price: 69900,
    originalPrice: null,
    category: "hombre",
    subcategory: "Camisetas",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Azul Marino"],
    stock: 35,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1622445275576-721325763afe?w=800",
  },
  {
    name: "Camiseta Estampada Urban",
    slug: "camiseta-estampada-urban-hombre",
    description: "Camiseta con estampado urbano, perfecta para un look casual.",
    price: 79900,
    originalPrice: null,
    category: "hombre",
    subcategory: "Camisetas",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Negro", "Blanco"],
    stock: 40,
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800",
  },
  {
    name: "Camiseta Oversize Premium",
    slug: "camiseta-oversize-premium-hombre",
    description: "Camiseta oversize de algodón premium. Tendencia streetwear.",
    price: 89900,
    originalPrice: null,
    category: "hombre",
    subcategory: "Camisetas",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Negro", "Beige", "Verde Militar"],
    stock: 30,
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800",
  },
  {
    name: "Camiseta Manga Larga Básica",
    slug: "camiseta-manga-larga-basica-hombre",
    description: "Camiseta de manga larga en algodón suave.",
    price: 74900,
    originalPrice: null,
    category: "hombre",
    subcategory: "Camisetas",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Negro", "Blanco", "Gris"],
    stock: 40,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800",
  },
  {
    name: "Camiseta Henley",
    slug: "camiseta-henley-hombre",
    description: "Camiseta estilo Henley con botones. Look casual elegante.",
    price: 84900,
    originalPrice: null,
    category: "hombre",
    subcategory: "Camisetas",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blanco", "Azul Claro", "Verde Oliva"],
    stock: 25,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1627225924765-552d49cf47ad?w=800",
  },
  {
    name: "Camiseta Rayas Marineras",
    slug: "camiseta-rayas-marineras-hombre",
    description: "Camiseta con rayas estilo marinero. Clásico atemporal.",
    price: 79900,
    originalPrice: null,
    category: "hombre",
    subcategory: "Camisetas",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Azul/Blanco", "Rojo/Blanco"],
    stock: 30,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=800",
  },
  {
    name: "Camiseta Deportiva Dry-Fit",
    slug: "camiseta-deportiva-dryfit-hombre",
    description: "Camiseta técnica con tecnología de secado rápido.",
    price: 94900,
    originalPrice: null,
    category: "hombre",
    subcategory: "Camisetas",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Negro", "Azul", "Rojo"],
    stock: 50,
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=800",
  },
  {
    name: "Camiseta Polo Clásica",
    slug: "camiseta-polo-clasica-hombre",
    description: "Polo de algodón piqué con bordado en el pecho.",
    price: 99900,
    originalPrice: null,
    category: "hombre",
    subcategory: "Camisetas",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Azul Marino", "Blanco", "Negro", "Verde"],
    stock: 45,
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1625910513413-5fc45e80fd80?w=800",
  },
  {
    name: "Camiseta Polo Slim Fit",
    slug: "camiseta-polo-slim-fit-hombre",
    description: "Polo de corte entallado, moderno y elegante.",
    price: 109900,
    originalPrice: null,
    category: "hombre",
    subcategory: "Camisetas",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Rosa", "Celeste", "Amarillo"],
    stock: 30,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800",
  },
  {
    name: "Camiseta Térmica",
    slug: "camiseta-termica-hombre",
    description:
      "Camiseta térmica para climas fríos. Mantiene el calor corporal.",
    price: 119900,
    originalPrice: null,
    category: "hombre",
    subcategory: "Camisetas",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Negro", "Gris Oscuro"],
    stock: 25,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1618354691229-88d47f285158?w=800",
  },
  {
    name: "Camiseta Tie-Dye",
    slug: "camiseta-tie-dye-hombre",
    description: "Camiseta con efecto tie-dye único. Estilo retro moderno.",
    price: 84900,
    originalPrice: null,
    category: "hombre",
    subcategory: "Camisetas",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Multicolor Azul", "Multicolor Verde"],
    stock: 20,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?w=800",
  },
  {
    name: "Pack 3 Camisetas Básicas",
    slug: "pack-3-camisetas-basicas-hombre",
    description:
      "Pack de 3 camisetas básicas en colores neutros. Mejor precio.",
    price: 149900,
    originalPrice: 179700,
    category: "hombre",
    subcategory: "Camisetas",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Negro/Blanco/Gris"],
    stock: 40,
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800",
  },

  // ===================== HOMBRE - PANTALONES (12) =====================
  {
    name: "Jeans Slim Fit Azul Oscuro",
    slug: "jeans-slim-fit-azul-oscuro-hombre",
    description: "Jeans de corte slim con elastano para mayor comodidad.",
    price: 149900,
    originalPrice: null,
    category: "hombre",
    subcategory: "Pantalones",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Azul Oscuro"],
    stock: 35,
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800",
  },
  {
    name: "Jeans Slim Fit Azul Claro",
    slug: "jeans-slim-fit-azul-claro-hombre",
    description: "Jeans slim en tono azul claro, perfectos para verano.",
    price: 149900,
    originalPrice: null,
    category: "hombre",
    subcategory: "Pantalones",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Azul Claro"],
    stock: 30,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=800",
  },
  {
    name: "Jeans Straight Negro",
    slug: "jeans-straight-negro-hombre",
    description: "Jeans de corte recto en negro. Versátil y elegante.",
    price: 159900,
    originalPrice: null,
    category: "hombre",
    subcategory: "Pantalones",
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: ["Negro"],
    stock: 40,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800",
  },
  {
    name: "Jeans Relaxed Fit",
    slug: "jeans-relaxed-fit-hombre",
    description: "Jeans de corte relajado, máxima comodidad.",
    price: 154900,
    originalPrice: null,
    category: "hombre",
    subcategory: "Pantalones",
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["Azul Medio"],
    stock: 25,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800",
  },
  {
    name: "Pantalón Chino Beige",
    slug: "pantalon-chino-beige-hombre",
    description: "Pantalón chino clásico en algodón. Elegante y cómodo.",
    price: 129900,
    originalPrice: null,
    category: "hombre",
    subcategory: "Pantalones",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Beige"],
    stock: 35,
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800",
  },
  {
    name: "Pantalón Chino Azul Marino",
    slug: "pantalon-chino-azul-marino-hombre",
    description: "Chino en azul marino, perfecto para oficina o casual.",
    price: 129900,
    originalPrice: null,
    category: "hombre",
    subcategory: "Pantalones",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Azul Marino"],
    stock: 30,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800",
  },
  {
    name: "Pantalón Chino Verde Oliva",
    slug: "pantalon-chino-verde-oliva-hombre",
    description: "Chino en verde oliva, toque militar moderno.",
    price: 129900,
    originalPrice: null,
    category: "hombre",
    subcategory: "Pantalones",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Verde Oliva"],
    stock: 25,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?w=800",
  },
  {
    name: "Pantalón Cargo",
    slug: "pantalon-cargo-hombre",
    description: "Pantalón cargo con múltiples bolsillos. Estilo utilitario.",
    price: 169900,
    originalPrice: null,
    category: "hombre",
    subcategory: "Pantalones",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Verde Militar", "Negro", "Beige"],
    stock: 30,
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=800",
  },
  {
    name: "Pantalón Jogger",
    slug: "pantalon-jogger-hombre",
    description: "Jogger cómodo con puños elásticos. Casual y deportivo.",
    price: 119900,
    originalPrice: null,
    category: "hombre",
    subcategory: "Pantalones",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Negro", "Gris", "Azul Marino"],
    stock: 45,
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=800",
  },
  {
    name: "Pantalón de Vestir",
    slug: "pantalon-vestir-hombre",
    description:
      "Pantalón de vestir clásico. Perfecto para ocasiones formales.",
    price: 179900,
    originalPrice: null,
    category: "hombre",
    subcategory: "Pantalones",
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: ["Negro", "Azul Marino", "Gris"],
    stock: 25,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800",
  },
  {
    name: "Bermuda Chino",
    slug: "bermuda-chino-hombre",
    description: "Bermuda chino para verano. Fresca y elegante.",
    price: 89900,
    originalPrice: null,
    category: "hombre",
    subcategory: "Pantalones",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Beige", "Azul Marino", "Blanco"],
    stock: 40,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800",
  },
  {
    name: "Short Deportivo",
    slug: "short-deportivo-hombre",
    description: "Short deportivo con tecnología de secado rápido.",
    price: 69900,
    originalPrice: null,
    category: "hombre",
    subcategory: "Pantalones",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Negro", "Azul", "Gris"],
    stock: 50,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800",
  },

  // ===================== HOMBRE - SUDADERAS Y HOODIES (10) =====================
  {
    name: "Sudadera con Capucha Negra",
    slug: "sudadera-capucha-negra-hombre",
    description: "Hoodie clásico con bolsillo canguro. Algodón premium.",
    price: 159900,
    originalPrice: null,
    category: "hombre",
    subcategory: "Sudaderas",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Negro"],
    stock: 40,
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800",
  },
  {
    name: "Sudadera con Capucha Gris",
    slug: "sudadera-capucha-gris-hombre",
    description: "Hoodie en gris melange, suave y cálido.",
    price: 159900,
    originalPrice: null,
    category: "hombre",
    subcategory: "Sudaderas",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Gris Melange"],
    stock: 35,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=800",
  },
  {
    name: "Sudadera Oversize",
    slug: "sudadera-oversize-hombre",
    description: "Sudadera oversize estilo streetwear. Máxima comodidad.",
    price: 179900,
    originalPrice: null,
    category: "hombre",
    subcategory: "Sudaderas",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Negro", "Beige", "Verde Militar"],
    stock: 25,
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1572495641004-28421ae29f86?w=800",
  },
  {
    name: "Sudadera Sin Capucha",
    slug: "sudadera-sin-capucha-hombre",
    description: "Sudadera crew neck clásica. Estilo minimalista.",
    price: 139900,
    originalPrice: null,
    category: "hombre",
    subcategory: "Sudaderas",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Negro", "Gris", "Azul Marino"],
    stock: 30,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800",
  },
  {
    name: "Sudadera con Cierre",
    slug: "sudadera-cierre-hombre",
    description: "Hoodie con cierre completo. Práctico y versátil.",
    price: 169900,
    originalPrice: null,
    category: "hombre",
    subcategory: "Sudaderas",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Negro", "Gris", "Azul"],
    stock: 30,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1611601322175-ef8ec8bc3a6e?w=800",
  },
  {
    name: "Sudadera Deportiva",
    slug: "sudadera-deportiva-hombre",
    description: "Sudadera técnica para entrenamiento. Ligera y transpirable.",
    price: 149900,
    originalPrice: null,
    category: "hombre",
    subcategory: "Sudaderas",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Negro", "Azul", "Rojo"],
    stock: 35,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=800",
  },
  {
    name: "Buzo Cuello Alto",
    slug: "buzo-cuello-alto-hombre",
    description: "Buzo con cuello alto tipo tortuga. Elegante y cálido.",
    price: 169900,
    originalPrice: null,
    category: "hombre",
    subcategory: "Sudaderas",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Negro", "Gris Oscuro", "Azul Marino"],
    stock: 20,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1614975059251-992f11792571?w=800",
  },
  {
    name: "Sudadera Estampada Logo",
    slug: "sudadera-estampada-logo-hombre",
    description: "Sudadera con logo estampado. Estilo urbano.",
    price: 139900,
    originalPrice: null,
    category: "hombre",
    subcategory: "Sudaderas",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Negro", "Blanco"],
    stock: 30,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1614975058789-717c3f4b8a75?w=800",
  },
  {
    name: "Hoodie Tie-Dye",
    slug: "hoodie-tie-dye-hombre",
    description: "Hoodie con efecto tie-dye único. Estilo retro.",
    price: 179900,
    originalPrice: null,
    category: "hombre",
    subcategory: "Sudaderas",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Multicolor"],
    stock: 15,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800",
  },
  {
    name: "Buzo Polar",
    slug: "buzo-polar-hombre",
    description: "Buzo de polar suave. Ideal para clima frío.",
    price: 129900,
    originalPrice: null,
    category: "hombre",
    subcategory: "Sudaderas",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Negro", "Gris", "Azul Marino"],
    stock: 40,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=800",
  },

  // ===================== HOMBRE - CHAQUETAS (8) =====================
  {
    name: "Chaqueta de Cuero Negra",
    slug: "chaqueta-cuero-negra-hombre",
    description: "Chaqueta de cuero sintético premium. Estilo clásico rebelde.",
    price: 349900,
    originalPrice: null,
    category: "hombre",
    subcategory: "Chaquetas",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Negro"],
    stock: 20,
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800",
  },
  {
    name: "Chaqueta de Cuero Café",
    slug: "chaqueta-cuero-cafe-hombre",
    description: "Chaqueta de cuero sintético en tono café vintage.",
    price: 349900,
    originalPrice: null,
    category: "hombre",
    subcategory: "Chaquetas",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Café"],
    stock: 15,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=800",
  },
  {
    name: "Chaqueta Bomber",
    slug: "chaqueta-bomber-hombre",
    description: "Bomber jacket clásica. Estilo aviador atemporal.",
    price: 279900,
    originalPrice: null,
    category: "hombre",
    subcategory: "Chaquetas",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Negro", "Verde Militar", "Azul Marino"],
    stock: 25,
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800",
  },
  {
    name: "Chaqueta Denim",
    slug: "chaqueta-denim-hombre",
    description: "Chaqueta de mezclilla clásica. Nunca pasa de moda.",
    price: 229900,
    originalPrice: null,
    category: "hombre",
    subcategory: "Chaquetas",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Azul Claro", "Azul Oscuro", "Negro"],
    stock: 30,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1601333144130-8cbb312386b6?w=800",
  },
  {
    name: "Chaqueta Impermeable",
    slug: "chaqueta-impermeable-hombre",
    description:
      "Chaqueta resistente al agua con capucha. Para días lluviosos.",
    price: 259900,
    originalPrice: null,
    category: "hombre",
    subcategory: "Chaquetas",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Negro", "Azul Marino", "Verde"],
    stock: 25,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=800",
  },
  {
    name: "Chaqueta Acolchada",
    slug: "chaqueta-acolchada-hombre",
    description: "Chaqueta acolchada ligera. Calidez sin peso extra.",
    price: 289900,
    originalPrice: null,
    category: "hombre",
    subcategory: "Chaquetas",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Negro", "Azul Marino", "Verde Oliva"],
    stock: 20,
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1544923246-77307dd628b8?w=800",
  },
  {
    name: "Blazer Casual",
    slug: "blazer-casual-hombre",
    description: "Blazer de corte moderno. Smart casual perfecto.",
    price: 329900,
    originalPrice: null,
    category: "hombre",
    subcategory: "Chaquetas",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Azul Marino", "Gris", "Negro"],
    stock: 15,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1593030103066-0093718efeb9?w=800",
  },
  {
    name: "Chaqueta Cortavientos",
    slug: "chaqueta-cortavientos-hombre",
    description:
      "Cortavientos ligero y compacto. Ideal para actividades outdoor.",
    price: 199900,
    originalPrice: null,
    category: "hombre",
    subcategory: "Chaquetas",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Negro", "Rojo", "Azul"],
    stock: 30,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800",
  },

  // ===================== MUJER - BLUSAS Y TOPS (15) =====================
  {
    name: "Blusa Elegante Satín Blanca",
    slug: "blusa-elegante-satin-blanca-mujer",
    description:
      "Blusa de satín con cuello en V. Perfecta para ocasiones especiales.",
    price: 119900,
    originalPrice: null,
    category: "mujer",
    subcategory: "Blusas",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Blanco"],
    stock: 30,
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1564246544814-647abf93e546?w=800",
  },
  {
    name: "Blusa Satín Champagne",
    slug: "blusa-satin-champagne-mujer",
    description: "Blusa satinada en tono champagne elegante.",
    price: 119900,
    originalPrice: null,
    category: "mujer",
    subcategory: "Blusas",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Champagne"],
    stock: 25,
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=800",
  },
  {
    name: "Blusa Satín Negra",
    slug: "blusa-satin-negra-mujer",
    description: "Blusa de satín negra, elegancia atemporal.",
    price: 119900,
    originalPrice: null,
    category: "mujer",
    subcategory: "Blusas",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Negro"],
    stock: 25,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6?w=800",
  },
  {
    name: "Top Crop Básico",
    slug: "top-crop-basico-mujer",
    description: "Top crop de algodón, casual y cómodo.",
    price: 49900,
    originalPrice: null,
    category: "mujer",
    subcategory: "Blusas",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Negro", "Blanco", "Rosa"],
    stock: 50,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800",
  },
  {
    name: "Top Tirantes Encaje",
    slug: "top-tirantes-encaje-mujer",
    description: "Top de tirantes con detalles de encaje.",
    price: 69900,
    originalPrice: null,
    category: "mujer",
    subcategory: "Blusas",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Negro", "Blanco", "Nude"],
    stock: 35,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=800",
  },
  {
    name: "Camiseta Básica Mujer",
    slug: "camiseta-basica-mujer",
    description: "Camiseta de algodón suave, corte femenino.",
    price: 54900,
    originalPrice: null,
    category: "mujer",
    subcategory: "Blusas",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Negro", "Blanco", "Gris", "Rosa"],
    stock: 60,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=800",
  },
  {
    name: "Blusa Bohemia",
    slug: "blusa-bohemia-mujer",
    description: "Blusa con estampado bohemio y mangas amplias.",
    price: 99900,
    originalPrice: null,
    category: "mujer",
    subcategory: "Blusas",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Multicolor"],
    stock: 25,
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800",
  },
  {
    name: "Blusa Off-Shoulder",
    slug: "blusa-off-shoulder-mujer",
    description: "Blusa con hombros descubiertos, estilo romántico.",
    price: 89900,
    originalPrice: null,
    category: "mujer",
    subcategory: "Blusas",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Blanco", "Rojo", "Azul"],
    stock: 30,
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800",
  },
  {
    name: "Camiseta Oversize Mujer",
    slug: "camiseta-oversize-mujer",
    description: "Camiseta oversize cómoda, estilo relajado.",
    price: 74900,
    originalPrice: null,
    category: "mujer",
    subcategory: "Blusas",
    sizes: ["S", "M", "L"],
    colors: ["Negro", "Blanco", "Beige"],
    stock: 40,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=800",
  },
  {
    name: "Body Básico",
    slug: "body-basico-mujer",
    description:
      "Body ajustado de algodón, base perfecta para cualquier outfit.",
    price: 79900,
    originalPrice: null,
    category: "mujer",
    subcategory: "Blusas",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Negro", "Blanco", "Nude"],
    stock: 35,
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=800",
  },
  {
    name: "Camisa Lino Blanca",
    slug: "camisa-lino-blanca-mujer",
    description: "Camisa de lino fresca y elegante.",
    price: 129900,
    originalPrice: null,
    category: "mujer",
    subcategory: "Blusas",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Blanco"],
    stock: 25,
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=800",
  },
  {
    name: "Camisa Rayas",
    slug: "camisa-rayas-mujer",
    description: "Camisa clásica con rayas, versátil y atemporal.",
    price: 109900,
    originalPrice: null,
    category: "mujer",
    subcategory: "Blusas",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Azul/Blanco", "Negro/Blanco"],
    stock: 30,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800",
  },
  {
    name: "Top Deportivo",
    slug: "top-deportivo-mujer",
    description: "Top deportivo con soporte medio, ideal para yoga y pilates.",
    price: 69900,
    originalPrice: null,
    category: "mujer",
    subcategory: "Blusas",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Negro", "Rosa", "Azul"],
    stock: 45,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=800",
  },
  {
    name: "Blusa Manga Abullonada",
    slug: "blusa-manga-abullonada-mujer",
    description: "Blusa romántica con mangas abullonadas.",
    price: 109900,
    originalPrice: null,
    category: "mujer",
    subcategory: "Blusas",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Blanco", "Rosa Palo", "Celeste"],
    stock: 25,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1564246544814-647abf93e546?w=800",
  },
  {
    name: "Camiseta Cuello Tortuga",
    slug: "camiseta-cuello-tortuga-mujer",
    description: "Camiseta con cuello alto, elegante y cálida.",
    price: 79900,
    originalPrice: null,
    category: "mujer",
    subcategory: "Blusas",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Negro", "Blanco", "Beige", "Burdeos"],
    stock: 35,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1614251055880-ee96e4803393?w=800",
  },

  // ===================== MUJER - VESTIDOS (12) =====================
  {
    name: "Vestido Floral Verano",
    slug: "vestido-floral-verano-mujer",
    description: "Vestido midi con estampado floral, perfecto para verano.",
    price: 149900,
    originalPrice: null,
    category: "mujer",
    subcategory: "Vestidos",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Floral Azul", "Floral Rosa"],
    stock: 30,
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800",
  },
  {
    name: "Vestido Midi Negro",
    slug: "vestido-midi-negro-mujer",
    description: "Vestido midi elegante en negro, versátil para toda ocasión.",
    price: 169900,
    originalPrice: null,
    category: "mujer",
    subcategory: "Vestidos",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Negro"],
    stock: 25,
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800",
  },
  {
    name: "Vestido Camisero",
    slug: "vestido-camisero-mujer",
    description: "Vestido estilo camisero, casual y cómodo.",
    price: 139900,
    originalPrice: null,
    category: "mujer",
    subcategory: "Vestidos",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Beige", "Azul Claro", "Verde Oliva"],
    stock: 25,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1583496661160-fb5886a0uj9a?w=800",
  },
  {
    name: "Vestido Coctel",
    slug: "vestido-coctel-mujer",
    description: "Vestido de coctel elegante para eventos especiales.",
    price: 229900,
    originalPrice: null,
    category: "mujer",
    subcategory: "Vestidos",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Negro", "Rojo", "Azul Marino"],
    stock: 15,
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800",
  },
  {
    name: "Vestido Largo Bohemio",
    slug: "vestido-largo-bohemio-mujer",
    description: "Vestido largo con estampado bohemio, fluido y romántico.",
    price: 189900,
    originalPrice: null,
    category: "mujer",
    subcategory: "Vestidos",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Multicolor"],
    stock: 20,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800",
  },
  {
    name: "Vestido Mini Ajustado",
    slug: "vestido-mini-ajustado-mujer",
    description: "Vestido mini ajustado, sexy y moderno.",
    price: 119900,
    originalPrice: null,
    category: "mujer",
    subcategory: "Vestidos",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Negro", "Rojo", "Nude"],
    stock: 30,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800",
  },
  {
    name: "Vestido Punto",
    slug: "vestido-punto-mujer",
    description: "Vestido de punto suave, cómodo y elegante.",
    price: 159900,
    originalPrice: null,
    category: "mujer",
    subcategory: "Vestidos",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Beige", "Gris", "Negro"],
    stock: 25,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=800",
  },
  {
    name: "Vestido Wrap",
    slug: "vestido-wrap-mujer",
    description: "Vestido cruzado que favorece la figura.",
    price: 139900,
    originalPrice: null,
    category: "mujer",
    subcategory: "Vestidos",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Negro", "Azul Marino", "Verde Esmeralda"],
    stock: 30,
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800",
  },
  {
    name: "Vestido Denim",
    slug: "vestido-denim-mujer",
    description: "Vestido de mezclilla casual y versátil.",
    price: 129900,
    originalPrice: null,
    category: "mujer",
    subcategory: "Vestidos",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Azul Claro", "Azul Oscuro"],
    stock: 25,
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1562137369-1a1a0bc66744?w=800",
  },
  {
    name: "Vestido Tirantes",
    slug: "vestido-tirantes-mujer",
    description: "Vestido de tirantes fresco para días calurosos.",
    price: 99900,
    originalPrice: null,
    category: "mujer",
    subcategory: "Vestidos",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Blanco", "Negro", "Terracota"],
    stock: 35,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1495385794356-15371f348c31?w=800",
  },
  {
    name: "Vestido Blazer",
    slug: "vestido-blazer-mujer",
    description: "Vestido estilo blazer, sofisticado y moderno.",
    price: 199900,
    originalPrice: null,
    category: "mujer",
    subcategory: "Vestidos",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Negro", "Blanco", "Beige"],
    stock: 20,
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
  },
  {
    name: "Vestido Satín Fiesta",
    slug: "vestido-satin-fiesta-mujer",
    description: "Vestido de satín para fiestas y eventos.",
    price: 249900,
    originalPrice: null,
    category: "mujer",
    subcategory: "Vestidos",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Champagne", "Negro", "Esmeralda"],
    stock: 15,
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?w=800",
  },

  // ===================== MUJER - PANTALONES Y JEANS (10) =====================
  {
    name: "Jeans Mom Fit",
    slug: "jeans-mom-fit-mujer",
    description: "Jeans de tiro alto con corte relajado estilo años 90.",
    price: 149900,
    originalPrice: null,
    category: "mujer",
    subcategory: "Pantalones",
    sizes: ["24", "26", "28", "30", "32"],
    colors: ["Azul Medio"],
    stock: 40,
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800",
  },
  {
    name: "Jeans Skinny Negro",
    slug: "jeans-skinny-negro-mujer",
    description: "Jeans skinny en negro, básico imprescindible.",
    price: 139900,
    originalPrice: null,
    category: "mujer",
    subcategory: "Pantalones",
    sizes: ["24", "26", "28", "30", "32"],
    colors: ["Negro"],
    stock: 45,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=800",
  },
  {
    name: "Jeans Wide Leg",
    slug: "jeans-wide-leg-mujer",
    description: "Jeans de pierna ancha, elegantes y cómodos.",
    price: 159900,
    originalPrice: null,
    category: "mujer",
    subcategory: "Pantalones",
    sizes: ["24", "26", "28", "30", "32"],
    colors: ["Azul Claro", "Azul Oscuro"],
    stock: 30,
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=800",
  },
  {
    name: "Pantalón Palazzo",
    slug: "pantalon-palazzo-mujer",
    description: "Pantalón palazzo fluido, elegante y versátil.",
    price: 139900,
    originalPrice: null,
    category: "mujer",
    subcategory: "Pantalones",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Negro", "Beige", "Verde Oliva"],
    stock: 25,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800",
  },
  {
    name: "Leggings Premium",
    slug: "leggings-premium-mujer",
    description: "Leggings de tela premium con efecto reductor.",
    price: 89900,
    originalPrice: null,
    category: "mujer",
    subcategory: "Pantalones",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Negro", "Gris", "Azul Marino"],
    stock: 50,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800",
  },
  {
    name: "Pantalón Cargo Mujer",
    slug: "pantalon-cargo-mujer",
    description: "Pantalón cargo con bolsillos, estilo utilitario.",
    price: 159900,
    originalPrice: null,
    category: "mujer",
    subcategory: "Pantalones",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Verde Militar", "Negro", "Beige"],
    stock: 25,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=800",
  },
  {
    name: "Falda Midi Plisada",
    slug: "falda-midi-plisada-mujer",
    description: "Falda midi plisada con cintura elástica.",
    price: 119900,
    originalPrice: null,
    category: "mujer",
    subcategory: "Pantalones",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Negro", "Nude", "Verde Oliva"],
    stock: 30,
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1583496661160-fb5886a0uj9a?w=800",
  },
  {
    name: "Falda Mini Denim",
    slug: "falda-mini-denim-mujer",
    description: "Minifalda de mezclilla clásica.",
    price: 89900,
    originalPrice: null,
    category: "mujer",
    subcategory: "Pantalones",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Azul Claro", "Azul Oscuro"],
    stock: 35,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1583496661160-fb5886a0uj9a?w=800",
  },
  {
    name: "Short Denim",
    slug: "short-denim-mujer",
    description: "Short de mezclilla de tiro alto.",
    price: 79900,
    originalPrice: null,
    category: "mujer",
    subcategory: "Pantalones",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Azul Claro", "Negro"],
    stock: 40,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800",
  },
  {
    name: "Pantalón de Vestir Mujer",
    slug: "pantalon-vestir-mujer",
    description: "Pantalón de vestir de corte recto, elegante.",
    price: 159900,
    originalPrice: null,
    category: "mujer",
    subcategory: "Pantalones",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Negro", "Gris", "Beige"],
    stock: 25,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800",
  },

  // ===================== MUJER - CHAQUETAS Y ABRIGOS (8) =====================
  {
    name: "Chaqueta Denim Mujer",
    slug: "chaqueta-denim-mujer",
    description: "Chaqueta de mezclilla clásica, nunca pasa de moda.",
    price: 199900,
    originalPrice: null,
    category: "mujer",
    subcategory: "Chaquetas",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Azul Claro", "Azul Oscuro"],
    stock: 30,
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1527016021513-b09758b777bd?w=800",
  },
  {
    name: "Blazer Oversize",
    slug: "blazer-oversize-mujer",
    description: "Blazer oversize moderno y sofisticado.",
    price: 269900,
    originalPrice: null,
    category: "mujer",
    subcategory: "Chaquetas",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Negro", "Beige", "Gris"],
    stock: 20,
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800",
  },
  {
    name: "Cardigan Oversize",
    slug: "cardigan-oversize-mujer",
    description: "Cardigan tejido oversize, suave y acogedor.",
    price: 179900,
    originalPrice: null,
    category: "mujer",
    subcategory: "Chaquetas",
    sizes: ["S/M", "L/XL"],
    colors: ["Beige", "Gris", "Rosa Palo"],
    stock: 25,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800",
  },
  {
    name: "Chaqueta Cuero Mujer",
    slug: "chaqueta-cuero-mujer",
    description: "Chaqueta de cuero sintético estilo biker.",
    price: 329900,
    originalPrice: null,
    category: "mujer",
    subcategory: "Chaquetas",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Negro", "Café"],
    stock: 15,
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800",
  },
  {
    name: "Abrigo Largo",
    slug: "abrigo-largo-mujer",
    description: "Abrigo largo elegante para invierno.",
    price: 399900,
    originalPrice: null,
    category: "mujer",
    subcategory: "Chaquetas",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Negro", "Camel", "Gris"],
    stock: 15,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800",
  },
  {
    name: "Bomber Jacket Mujer",
    slug: "bomber-jacket-mujer",
    description: "Bomber jacket versátil y moderna.",
    price: 229900,
    originalPrice: null,
    category: "mujer",
    subcategory: "Chaquetas",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Negro", "Verde Militar", "Rosa"],
    stock: 20,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800",
  },
  {
    name: "Chaleco Acolchado",
    slug: "chaleco-acolchado-mujer",
    description: "Chaleco acolchado ligero, perfecto para entretiempo.",
    price: 179900,
    originalPrice: null,
    category: "mujer",
    subcategory: "Chaquetas",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Negro", "Beige", "Azul Marino"],
    stock: 25,
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1544923246-77307dd628b8?w=800",
  },
  {
    name: "Chaqueta Punto",
    slug: "chaqueta-punto-mujer",
    description: "Chaqueta de punto suave con botones.",
    price: 149900,
    originalPrice: null,
    category: "mujer",
    subcategory: "Chaquetas",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Beige", "Gris", "Negro"],
    stock: 30,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800",
  },

  // ===================== ACCESORIOS - BOLSOS (10) =====================
  {
    name: "Bolso Tote de Cuero",
    slug: "bolso-tote-cuero",
    description: "Bolso tote espacioso en cuero sintético de alta calidad.",
    price: 189900,
    originalPrice: null,
    category: "accesorios",
    subcategory: "Bolsos",
    sizes: ["Único"],
    colors: ["Negro", "Café", "Camel"],
    stock: 25,
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800",
  },
  {
    name: "Bolso Crossbody",
    slug: "bolso-crossbody",
    description: "Bolso bandolera compacto y práctico.",
    price: 129900,
    originalPrice: null,
    category: "accesorios",
    subcategory: "Bolsos",
    sizes: ["Único"],
    colors: ["Negro", "Nude", "Rojo"],
    stock: 30,
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800",
  },
  {
    name: "Mochila Urbana",
    slug: "mochila-urbana",
    description: "Mochila urbana con múltiples compartimentos.",
    price: 159900,
    originalPrice: null,
    category: "accesorios",
    subcategory: "Bolsos",
    sizes: ["Único"],
    colors: ["Negro", "Gris", "Azul Marino"],
    stock: 35,
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800",
  },
  {
    name: "Clutch de Noche",
    slug: "clutch-noche",
    description: "Clutch elegante para ocasiones especiales.",
    price: 99900,
    originalPrice: null,
    category: "accesorios",
    subcategory: "Bolsos",
    sizes: ["Único"],
    colors: ["Negro", "Dorado", "Plateado"],
    stock: 20,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800",
  },
  {
    name: "Bolso Shopper",
    slug: "bolso-shopper",
    description: "Bolso shopper grande para el día a día.",
    price: 169900,
    originalPrice: null,
    category: "accesorios",
    subcategory: "Bolsos",
    sizes: ["Único"],
    colors: ["Negro", "Beige", "Marrón"],
    stock: 25,
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800",
  },
  {
    name: "Riñonera",
    slug: "rinonera",
    description: "Riñonera práctica estilo streetwear.",
    price: 79900,
    originalPrice: null,
    category: "accesorios",
    subcategory: "Bolsos",
    sizes: ["Único"],
    colors: ["Negro", "Blanco", "Rojo"],
    stock: 40,
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800",
  },
  {
    name: "Bolso Mini",
    slug: "bolso-mini",
    description: "Bolso mini tendencia, pequeño pero con estilo.",
    price: 89900,
    originalPrice: null,
    category: "accesorios",
    subcategory: "Bolsos",
    sizes: ["Único"],
    colors: ["Negro", "Rosa", "Verde"],
    stock: 30,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800",
  },
  {
    name: "Bolso de Playa",
    slug: "bolso-playa",
    description: "Bolso de playa tejido con capacidad amplia.",
    price: 69900,
    originalPrice: null,
    category: "accesorios",
    subcategory: "Bolsos",
    sizes: ["Único"],
    colors: ["Natural", "Negro/Natural"],
    stock: 35,
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800",
  },
  {
    name: "Bolso Bucket",
    slug: "bolso-bucket",
    description: "Bolso estilo bucket, moderno y funcional.",
    price: 149900,
    originalPrice: null,
    category: "accesorios",
    subcategory: "Bolsos",
    sizes: ["Único"],
    colors: ["Negro", "Marrón", "Blanco"],
    stock: 25,
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800",
  },
  {
    name: "Mochila Mini",
    slug: "mochila-mini",
    description: "Mini mochila urbana perfecta para lo esencial.",
    price: 119900,
    originalPrice: null,
    category: "accesorios",
    subcategory: "Bolsos",
    sizes: ["Único"],
    colors: ["Negro", "Beige", "Rosa"],
    stock: 30,
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800",
  },

  // ===================== ACCESORIOS - OTROS (10) =====================
  {
    name: "Gorra Snapback",
    slug: "gorra-snapback",
    description: "Gorra con visera plana y cierre ajustable.",
    price: 49900,
    originalPrice: null,
    category: "accesorios",
    subcategory: "Gorras",
    sizes: ["Único"],
    colors: ["Negro", "Blanco", "Rojo", "Azul Marino"],
    stock: 60,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800",
  },
  {
    name: "Gorra Dad Hat",
    slug: "gorra-dad-hat",
    description: "Gorra clásica estilo Dad Hat.",
    price: 44900,
    originalPrice: null,
    category: "accesorios",
    subcategory: "Gorras",
    sizes: ["Único"],
    colors: ["Negro", "Beige", "Verde Oliva"],
    stock: 50,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=800",
  },
  {
    name: "Cinturón de Cuero",
    slug: "cinturon-cuero-clasico",
    description: "Cinturón de cuero genuino con hebilla metálica.",
    price: 79900,
    originalPrice: null,
    category: "accesorios",
    subcategory: "Cinturones",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Negro", "Café"],
    stock: 40,
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800",
  },
  {
    name: "Cinturón Trenzado",
    slug: "cinturon-trenzado",
    description: "Cinturón de cuero trenzado, elegante y flexible.",
    price: 89900,
    originalPrice: null,
    category: "accesorios",
    subcategory: "Cinturones",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Negro", "Marrón"],
    stock: 35,
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800",
  },
  {
    name: "Gafas de Sol Aviador",
    slug: "gafas-sol-aviador",
    description: "Gafas de sol estilo aviador con protección UV400.",
    price: 89900,
    originalPrice: null,
    category: "accesorios",
    subcategory: "Gafas",
    sizes: ["Único"],
    colors: ["Dorado/Verde", "Plateado/Azul", "Negro"],
    stock: 30,
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800",
  },
  {
    name: "Gafas de Sol Cat Eye",
    slug: "gafas-sol-cat-eye",
    description: "Gafas de sol estilo cat eye, femeninas y elegantes.",
    price: 79900,
    originalPrice: null,
    category: "accesorios",
    subcategory: "Gafas",
    sizes: ["Único"],
    colors: ["Negro", "Carey", "Blanco"],
    stock: 25,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800",
  },
  {
    name: "Bufanda de Lana",
    slug: "bufanda-lana",
    description: "Bufanda suave de lana para el invierno.",
    price: 69900,
    originalPrice: null,
    category: "accesorios",
    subcategory: "Bufandas",
    sizes: ["Único"],
    colors: ["Gris", "Negro", "Beige", "Burdeos"],
    stock: 40,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800",
  },
  {
    name: "Sombrero Fedora",
    slug: "sombrero-fedora",
    description: "Sombrero Fedora clásico de fieltro.",
    price: 99900,
    originalPrice: null,
    category: "accesorios",
    subcategory: "Sombreros",
    sizes: ["S/M", "L/XL"],
    colors: ["Negro", "Marrón", "Beige"],
    stock: 20,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=800",
  },
  {
    name: "Cartera de Cuero",
    slug: "cartera-cuero",
    description: "Cartera clásica de cuero con múltiples compartimentos.",
    price: 119900,
    originalPrice: null,
    category: "accesorios",
    subcategory: "Carteras",
    sizes: ["Único"],
    colors: ["Negro", "Café"],
    stock: 35,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800",
  },
  {
    name: "Reloj Minimalista",
    slug: "reloj-minimalista",
    description: "Reloj con diseño minimalista y correa de cuero.",
    price: 199900,
    originalPrice: null,
    category: "accesorios",
    subcategory: "Relojes",
    sizes: ["Único"],
    colors: ["Negro/Negro", "Plateado/Marrón", "Dorado/Nude"],
    stock: 20,
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800",
  },

  // ===================== OFERTAS (15) =====================
  {
    name: "Pack 3 Camisetas Básicas Hombre",
    slug: "pack-3-camisetas-oferta-hombre",
    description: "Pack de 3 camisetas básicas en colores neutros. ¡Ahorra 30%!",
    price: 124900,
    originalPrice: 179700,
    category: "ofertas",
    subcategory: "Packs",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Negro/Blanco/Gris"],
    stock: 40,
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800",
  },
  {
    name: "Sudadera con Capucha Oferta",
    slug: "sudadera-capucha-oferta",
    description: "Sudadera cómoda con capucha y bolsillo canguro. 30% OFF.",
    price: 109900,
    originalPrice: 159900,
    category: "ofertas",
    subcategory: "Sudaderas",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Gris Melange", "Negro", "Azul Marino"],
    stock: 35,
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800",
  },
  {
    name: "Jeans Slim Fit Oferta",
    slug: "jeans-slim-fit-oferta",
    description: "Jeans de corte slim. ¡Precio especial!",
    price: 99900,
    originalPrice: 149900,
    category: "ofertas",
    subcategory: "Jeans",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Azul Oscuro", "Negro"],
    stock: 45,
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800",
  },
  {
    name: "Vestido Midi Floral Oferta",
    slug: "vestido-midi-floral-oferta",
    description: "Vestido midi con estampado floral. 35% de descuento.",
    price: 97400,
    originalPrice: 149900,
    category: "ofertas",
    subcategory: "Vestidos",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Floral Azul"],
    stock: 20,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800",
  },
  {
    name: "Blusa Satín Oferta",
    slug: "blusa-satin-oferta",
    description: "Blusa de satín elegante con 25% de descuento.",
    price: 89900,
    originalPrice: 119900,
    category: "ofertas",
    subcategory: "Blusas",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Champagne", "Negro", "Vino"],
    stock: 30,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1564246544814-647abf93e546?w=800",
  },
  {
    name: "Chaqueta Denim Oferta",
    slug: "chaqueta-denim-oferta",
    description: "Chaqueta de mezclilla clásica. ¡20% OFF!",
    price: 159900,
    originalPrice: 199900,
    category: "ofertas",
    subcategory: "Chaquetas",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Azul Claro"],
    stock: 25,
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1601333144130-8cbb312386b6?w=800",
  },
  {
    name: "Bolso Tote Oferta",
    slug: "bolso-tote-oferta",
    description: "Bolso tote espacioso. Precio especial.",
    price: 139900,
    originalPrice: 189900,
    category: "ofertas",
    subcategory: "Bolsos",
    sizes: ["Único"],
    colors: ["Negro", "Camel"],
    stock: 20,
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800",
  },
  {
    name: "Gafas de Sol Aviador Oferta",
    slug: "gafas-sol-aviador-oferta",
    description: "Gafas de sol estilo aviador. 20% OFF.",
    price: 71900,
    originalPrice: 89900,
    category: "ofertas",
    subcategory: "Gafas",
    sizes: ["Único"],
    colors: ["Dorado/Verde", "Plateado/Azul"],
    stock: 25,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800",
  },
  {
    name: "Pack 2 Polos Oferta",
    slug: "pack-2-polos-oferta",
    description: "Pack de 2 polos clásicos. ¡Ahorra $50.000!",
    price: 149900,
    originalPrice: 199800,
    category: "ofertas",
    subcategory: "Packs",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Azul Marino/Blanco", "Negro/Gris"],
    stock: 30,
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1625910513413-5fc45e80fd80?w=800",
  },
  {
    name: "Falda Midi Plisada Oferta",
    slug: "falda-midi-plisada-oferta",
    description: "Falda midi plisada con cintura elástica. 40% OFF.",
    price: 71900,
    originalPrice: 119900,
    category: "ofertas",
    subcategory: "Faldas",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Negro", "Verde Oliva", "Burdeos"],
    stock: 25,
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1583496661160-fb5886a0uj9a?w=800",
  },
  {
    name: "Cinturón de Cuero Oferta",
    slug: "cinturon-cuero-oferta",
    description: "Cinturón de cuero genuino. Precio especial.",
    price: 59900,
    originalPrice: 79900,
    category: "ofertas",
    subcategory: "Cinturones",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Negro", "Café"],
    stock: 40,
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800",
  },
  {
    name: "Cardigan Oversize Oferta",
    slug: "cardigan-oversize-oferta",
    description: "Cardigan tejido oversize. ¡25% de descuento!",
    price: 134900,
    originalPrice: 179900,
    category: "ofertas",
    subcategory: "Chaquetas",
    sizes: ["S/M", "L/XL"],
    colors: ["Beige", "Gris"],
    stock: 20,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800",
  },
  {
    name: "Pantalón Cargo Oferta",
    slug: "pantalon-cargo-oferta",
    description: "Pantalón cargo con múltiples bolsillos. 30% OFF.",
    price: 118900,
    originalPrice: 169900,
    category: "ofertas",
    subcategory: "Pantalones",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Verde Militar", "Negro"],
    stock: 30,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=800",
  },
  {
    name: "Mochila Urbana Oferta",
    slug: "mochila-urbana-oferta",
    description: "Mochila urbana con múltiples compartimentos. 20% OFF.",
    price: 127900,
    originalPrice: 159900,
    category: "ofertas",
    subcategory: "Bolsos",
    sizes: ["Único"],
    colors: ["Negro", "Gris"],
    stock: 25,
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800",
  },
  {
    name: "Vestido Coctel Oferta",
    slug: "vestido-coctel-oferta",
    description: "Vestido de coctel elegante. ¡Precio especial de temporada!",
    price: 179900,
    originalPrice: 229900,
    category: "ofertas",
    subcategory: "Vestidos",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Negro", "Rojo"],
    stock: 15,
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800",
  },
];

// ==================== FUNCIONES ====================

async function fetchAPI(endpoint, options = {}) {
  const url = `${STRAPI_URL}/api${endpoint}`;
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        Authorization: `Bearer ${STRAPI_API_TOKEN}`,
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`HTTP ${response.status}: ${error}`);
    }

    return response.json();
  } catch (error) {
    console.error(`Error en ${endpoint}:`, error.message);
    throw error;
  }
}

async function uploadImageFromUrl(imageUrl, fileName) {
  try {
    console.log(`   📷 Descargando imagen: ${fileName}`);

    // Descargar imagen
    const imageResponse = await fetch(imageUrl);
    if (!imageResponse.ok) {
      throw new Error(
        `No se pudo descargar la imagen: ${imageResponse.status}`,
      );
    }

    const buffer = Buffer.from(await imageResponse.arrayBuffer());

    // Crear boundary para multipart
    const boundary = "----formdata-" + Date.now();
    const fileName_ = `${fileName}.jpg`;

    // Construir el body manualmente
    const header = `--${boundary}\r\nContent-Disposition: form-data; name="files"; filename="${fileName_}"\r\nContent-Type: image/jpeg\r\n\r\n`;
    const footer = `\r\n--${boundary}--\r\n`;

    const headerBuffer = Buffer.from(header, "utf-8");
    const footerBuffer = Buffer.from(footer, "utf-8");
    const body = Buffer.concat([headerBuffer, buffer, footerBuffer]);

    // Subir a Strapi
    const response = await fetch(`${STRAPI_URL}/api/upload`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${STRAPI_API_TOKEN}`,
        "Content-Type": `multipart/form-data; boundary=${boundary}`,
      },
      body: body,
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Error subiendo imagen: ${error}`);
    }

    const data = await response.json();
    console.log(`   ✅ Imagen subida: ${fileName}`);
    return data[0]?.id;
  } catch (error) {
    console.error(`   ❌ Error con imagen ${fileName}: ${error.message}`);
    return null;
  }
}

async function createCategory(category) {
  try {
    const response = await fetchAPI("/categories", {
      method: "POST",
      body: JSON.stringify({ data: category }),
    });
    console.log(`✅ Categoría creada: ${category.name}`);
    return response.data;
  } catch (error) {
    // Si ya existe, intentar obtenerla
    console.log(
      `⚠️  Categoría "${category.name}" puede que ya exista, buscando...`,
    );
    const existing = await fetchAPI(
      `/categories?filters[slug][$eq]=${category.slug}`,
    );
    if (existing.data && existing.data.length > 0) {
      console.log(`📦 Usando categoría existente: ${category.name}`);
      return existing.data[0];
    }
    throw error;
  }
}

async function createProduct(product, categoryId, imageId) {
  const productData = {
    name: product.name,
    slug: product.slug,
    description: product.description,
    price: product.price,
    originalPrice: product.originalPrice,
    sizes: product.sizes,
    colors: product.colors,
    stock: product.stock,
    featured: product.featured,
    category: categoryId,
  };

  // Solo agregar imagen si se subió correctamente
  if (imageId) {
    productData.image = imageId;
  }

  try {
    const response = await fetchAPI("/products", {
      method: "POST",
      body: JSON.stringify({ data: productData }),
    });

    const priceFormatted = new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(product.price);

    console.log(`✅ Producto creado: ${product.name} - ${priceFormatted}`);
    return response.data;
  } catch (error) {
    console.error(
      `❌ Error creando producto "${product.name}": ${error.message}`,
    );
    return null;
  }
}

async function clearExistingData() {
  console.log("\n🧹 Limpiando datos existentes...");

  try {
    // Obtener y eliminar productos
    const products = await fetchAPI("/products?pagination[pageSize]=100");
    if (products.data && products.data.length > 0) {
      for (const product of products.data) {
        await fetchAPI(`/products/${product.id}`, { method: "DELETE" });
      }
      console.log(`   Eliminados ${products.data.length} productos`);
    }

    // Obtener y eliminar categorías
    const categories = await fetchAPI("/categories?pagination[pageSize]=100");
    if (categories.data && categories.data.length > 0) {
      for (const category of categories.data) {
        await fetchAPI(`/categories/${category.id}`, { method: "DELETE" });
      }
      console.log(`   Eliminadas ${categories.data.length} categorías`);
    }
  } catch (error) {
    console.log(
      "   No se pudo limpiar datos existentes (puede que no existan aún)",
    );
  }
}

async function seed() {
  console.log("╔════════════════════════════════════════════════════════════╗");
  console.log("║        🌱 SEED DE DATOS - TIENDA DE ROPA                   ║");
  console.log("║        Más de 100 productos con precios en COP             ║");
  console.log(
    "╚════════════════════════════════════════════════════════════╝\n",
  );

  console.log(`🔗 Strapi URL: ${STRAPI_URL}`);
  console.log(
    `🔑 Token configurado: ${STRAPI_API_TOKEN !== "TU_API_TOKEN_AQUI" ? "Sí" : "No (configurar!)"}\n`,
  );

  if (STRAPI_API_TOKEN === "TU_API_TOKEN_AQUI") {
    console.error("❌ ERROR: Debes configurar el STRAPI_API_TOKEN");
    console.log("\nPasos:");
    console.log("1. Abre Strapi Admin: http://localhost:1337/admin");
    console.log("2. Ve a Settings > API Tokens > Create new API Token");
    console.log('3. Nombre: "Seed Script", Tipo: "Full access"');
    console.log(
      "4. Copia el token y configúralo en este script o como variable de entorno",
    );
    process.exit(1);
  }

  // Opción para limpiar datos
  const args = process.argv.slice(2);
  if (args.includes("--clean")) {
    await clearExistingData();
  }

  // 1. Crear categorías
  console.log("\n📁 CREANDO CATEGORÍAS...");
  console.log("─".repeat(50));
  const categoryMap = {};

  for (const cat of categories) {
    const created = await createCategory(cat);
    if (created) {
      categoryMap[cat.slug] = created.id;
    }
  }

  // 2. Crear productos
  console.log("\n👕 CREANDO PRODUCTOS...");
  console.log("─".repeat(50));

  let created = 0;
  let failed = 0;

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    console.log(`\n[${i + 1}/${products.length}] ${product.name}`);

    // Subir imagen
    const imageId = await uploadImageFromUrl(product.imageUrl, product.slug);

    // Crear producto
    const categoryId = categoryMap[product.category];
    const result = await createProduct(product, categoryId, imageId);

    if (result) {
      created++;
    } else {
      failed++;
    }

    // Pequeña pausa para no sobrecargar el servidor
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  // Resumen
  console.log("\n" + "═".repeat(50));
  console.log("📊 RESUMEN");
  console.log("═".repeat(50));
  console.log(`✅ Categorías creadas: ${Object.keys(categoryMap).length}`);
  console.log(`✅ Productos creados: ${created}`);
  if (failed > 0) {
    console.log(`❌ Productos fallidos: ${failed}`);
  }

  // Estadísticas por categoría
  console.log("\n📈 PRODUCTOS POR CATEGORÍA:");
  const stats = {};
  products.forEach((p) => {
    stats[p.category] = (stats[p.category] || 0) + 1;
  });
  Object.entries(stats).forEach(([cat, count]) => {
    console.log(`   - ${cat}: ${count} productos`);
  });

  console.log("\n✨ ¡Seed completado exitosamente!");
  console.log("\nPróximos pasos:");
  console.log(
    "1. Verifica los datos en Strapi Admin: http://localhost:1337/admin",
  );
  console.log("2. Configura los permisos públicos para Category y Product");
  console.log(
    "3. Prueba la API: curl http://localhost:1337/api/products?populate=*",
  );
}

// Ejecutar
seed().catch((error) => {
  console.error("\n❌ Error fatal:", error);
  process.exit(1);
});
