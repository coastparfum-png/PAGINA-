export type FragranceType = "EDT" | "EDP" | "EXP" | "PARFUM";
export type Gender = "female" | "male" | "unisex";

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  size_ml: number;
  fragrance_type: FragranceType;
  price_clp: number;
  gender: Gender;
  description: string;
  notes_top: string;
  notes_heart: string;
  notes_base: string;
  gradient_class: string;
  accent_color: string;
  in_stock: boolean;
  featured: boolean;
  limited: boolean;
  imageUrl: string;
  imageFallback: string;
}

export const products: Product[] = [
  {
    id: "1",
    slug: "ck-one-shock",
    name: "CK One Shock For Her",
    brand: "Calvin Klein",
    size_ml: 100,
    fragrance_type: "EDT",
    price_clp: 44990,
    gender: "female",
    description: "Audaz y seductora. La primera fragancia femenina de la familia CK One rompe las reglas con un corazón de chocolate y notas orientales especiadas. Sexy e irresistible.",
    notes_top: "Flor de pasionaria, amapola roja, peonía",
    notes_heart: "Jazmín, narciso, chocolate mexicano, zarzamora",
    notes_base: "Almizcle, pachulí, ámbar, vainilla",
    gradient_class: "linear-gradient(135deg,#1a0505,#2d0a0a)",
    accent_color: "#E8A0B0",
    in_stock: true,
    featured: true,
    limited: false,
    imageUrl: "/Stock perfumes/CK One Shock For Her/perfume.png",
    imageFallback: "/Stock perfumes/CK One Shock For Her/perfume.png",
  },
  {
    id: "2",
    slug: "stronger-with-you",
    name: "Stronger With You",
    brand: "Emporio Armani",
    size_ml: 50,
    fragrance_type: "EDT",
    price_clp: 69990,
    gender: "male",
    description: "Para el hombre que conecta de verdad. Una fragancia especiada y dulce que combina frescura mediterránea con calidez envolvente. Elegante, moderno y memorable.",
    notes_top: "Cardamomo, hojas de violeta",
    notes_heart: "Lavanda, salvia, castaña glaseada",
    notes_base: "Vainilla, cedro, almizcle",
    gradient_class: "linear-gradient(135deg,#0a0a12,#12121f)",
    accent_color: "#8B9DC3",
    in_stock: true,
    featured: true,
    limited: false,
    imageUrl: "/Stock perfumes/Stronger With You/perfume.png",
    imageFallback: "/Stock perfumes/Stronger With You/perfume.png",
  },
  {
    id: "3",
    slug: "toy2-bubblegum",
    name: "Toy 2 Bubble Gum",
    brand: "Moschino",
    size_ml: 100,
    fragrance_type: "EDT",
    price_clp: 64990,
    gender: "female",
    description: "Divertida, juvenil y totalmente adictiva. El icónico osito rosa de Moschino en un aroma dulce y frutal que captura la alegría y la energía de vivir sin reglas.",
    notes_top: "Frutas confitadas, naranja amarga, limón",
    notes_heart: "Goma de mascar, rosa búlgara, durazno, jengibre",
    notes_base: "Almizcle, ambroxan, cedro",
    gradient_class: "linear-gradient(135deg,#1f0514,#2d0a1e)",
    accent_color: "#F472B6",
    in_stock: true,
    featured: false,
    limited: false,
    imageUrl: "/Stock perfumes/Toy 2 Bubble Gum/perfume.png",
    imageFallback: "/Stock perfumes/Toy 2 Bubble Gum/perfume.png",
  },
  {
    id: "4",
    slug: "light-blue-dg",
    name: "Light Blue",
    brand: "Dolce & Gabbana",
    size_ml: 100,
    fragrance_type: "EDT",
    price_clp: 69990,
    gender: "female",
    description: "El Mediterráneo en un frasco. Fresca, luminosa e icónica. Light Blue evoca las tardes de verano junto al mar con su frescura cítrica y su corazón floral atemporal.",
    notes_top: "Limón siciliano, manzana Granny Smith, cedro",
    notes_heart: "Bambú, jazmín, rosa blanca",
    notes_base: "Cedro, almizcle, ámbar",
    gradient_class: "linear-gradient(135deg,#050a14,#0a1424)",
    accent_color: "#7DD3FC",
    in_stock: true,
    featured: true,
    limited: false,
    imageUrl: "/Stock perfumes/Light Blue/perfume.png",
    imageFallback: "/Stock perfumes/Light Blue/perfume.png",
  },
  {
    id: "5",
    slug: "yes-i-am",
    name: "Yes I Am",
    brand: "Cacharel",
    size_ml: 50,
    fragrance_type: "EDP",
    price_clp: 39990,
    gender: "female",
    description: "Una declaración de amor propio. Floral intensa con corazón de rosas excepcionales y una base cálida de cachemira. Sofisticada, femenina y poderosa.",
    notes_top: "Pera, pera glaseada",
    notes_heart: "Rosa centifolia, rosa turca, iris",
    notes_base: "Almizcle, madera de cachemira, sándalo",
    gradient_class: "linear-gradient(135deg,#1a0505,#250808)",
    accent_color: "#FB7185",
    in_stock: true,
    featured: false,
    limited: false,
    imageUrl: "/Stock perfumes/Yes I Am/perfume.png",
    imageFallback: "/Stock perfumes/Yes I Am/perfume.png",
  },
  {
    id: "6",
    slug: "mandarin-sky-elixir",
    name: "Odyssey Mandarin Sky Elixir",
    brand: "Armaf",
    size_ml: 100,
    fragrance_type: "EDP",
    price_clp: 54990,
    gender: "unisex",
    description: "Edición limitada 2025. Oriental amaderada unisex de larga duración excepcional. Mandarina vibrante que evoluciona hacia un corazón especiado y una base cálida de vainilla.",
    notes_top: "Mandarina, naranja, lavanda, pimienta negra, cardamomo",
    notes_heart: "Caramelo, haba tonka, pachulí, incienso",
    notes_base: "Vainilla, vetiver",
    gradient_class: "linear-gradient(135deg,#050a14,#0d0d24)",
    accent_color: "#818CF8",
    in_stock: true,
    featured: true,
    limited: true,
    imageUrl: "/Stock perfumes/Odyssey Mandarin Sky Elixir/perfume.png",
    imageFallback: "/Stock perfumes/Odyssey Mandarin Sky Elixir/perfume.png",
  }
];
