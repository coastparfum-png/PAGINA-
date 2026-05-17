export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  size_ml: number;
  type: "EDT" | "EDP" | "EXP" | "PARFUM";
  price: number;
  gender: "female" | "male" | "unisex";
  gradient: string;
  accent: string;
  top_notes: string;
  heart_notes: string;
  base_notes: string;
  description: string;
  featured: boolean;
  limited?: boolean;
}

export const products: Product[] = [
  {
    id: "ck-one-shock",
    slug: "ck-one-shock",
    name: "CK One Shock For Her",
    brand: "Calvin Klein",
    size_ml: 100,
    type: "EDT",
    price: 44990,
    gender: "female",
    gradient: "from-rose-950 via-stone-900 to-[#0F0800]",
    accent: "#E8A0B0",
    top_notes: "Flor de pasionaria, amapola roja, peonía",
    heart_notes: "Jazmín, narciso, chocolate mexicano, zarzamora",
    base_notes: "Almizcle, pachulí, ámbar, vainilla",
    description:
      "Audaz y seductora. La primera fragancia femenina de la familia CK One rompe las reglas con un corazón de chocolate y notas orientales especiadas. Sexy e irresistible.",
    featured: true,
  },
  {
    id: "stronger-with-you",
    slug: "stronger-with-you",
    name: "Stronger With You",
    brand: "Emporio Armani",
    size_ml: 50,
    type: "EDT",
    price: 69990,
    gender: "male",
    gradient: "from-stone-950 via-zinc-900 to-[#080808]",
    accent: "#8B9DC3",
    top_notes: "Cardamomo, hojas de violeta",
    heart_notes: "Lavanda, salvia, castaña glaseada",
    base_notes: "Vainilla, cedro, almizcle",
    description:
      "Para el hombre que conecta de verdad. Una fragancia especiada y dulce que combina frescura mediterránea con calidez envolvente. Elegante, moderno y memorable.",
    featured: true,
  },
  {
    id: "toy2-bubblegum",
    slug: "toy2-bubblegum",
    name: "Toy 2 Bubble Gum",
    brand: "Moschino",
    size_ml: 100,
    type: "EDT",
    price: 64990,
    gender: "female",
    gradient: "from-pink-950 via-fuchsia-950 to-[#0F0808]",
    accent: "#F472B6",
    top_notes: "Frutas confitadas, naranja amarga, limón",
    heart_notes: "Goma de mascar, rosa búlgara, durazno, jengibre",
    base_notes: "Almizcle, ambroxan, cedro",
    description:
      "Divertida, juvenil y totalmente adictiva. El icónico osito rosa de Moschino en un aroma dulce y frutal que captura la alegría y la energía de vivir sin reglas.",
    featured: false,
  },
  {
    id: "light-blue-dg",
    slug: "light-blue-dg",
    name: "Light Blue",
    brand: "Dolce & Gabbana",
    size_ml: 100,
    type: "EDT",
    price: 69990,
    gender: "female",
    gradient: "from-sky-950 via-blue-950 to-[#050A0F]",
    accent: "#7DD3FC",
    top_notes: "Limón siciliano, manzana Granny Smith, cedro",
    heart_notes: "Bambú, jazmín, rosa blanca",
    base_notes: "Cedro, almizcle, ámbar",
    description:
      "El Mediterráneo en un frasco. Fresca, luminosa e icónica. Light Blue evoca las tardes de verano junto al mar con su frescura cítrica y su corazón floral atemporal.",
    featured: true,
  },
  {
    id: "yes-i-am",
    slug: "yes-i-am",
    name: "Yes I Am",
    brand: "Cacharel",
    size_ml: 50,
    type: "EDP",
    price: 39990,
    gender: "female",
    gradient: "from-red-950 via-rose-950 to-[#0F0505]",
    accent: "#FB7185",
    top_notes: "Pera, pera glaseada",
    heart_notes: "Rosa centifolia, rosa turca, iris",
    base_notes: "Almizcle, madera de cachemira, sándalo",
    description:
      "Una declaración de amor propio. Floral intensa con corazón de rosas excepcionales y una base cálida de cachemira. Sofisticada, femenina y poderosa.",
    featured: false,
  },
  {
    id: "mandarin-sky-elixir",
    slug: "mandarin-sky-elixir",
    name: "Odyssey Mandarin Sky Elixir",
    brand: "Armaf",
    size_ml: 100,
    type: "EDP",
    price: 54990,
    gender: "unisex",
    gradient: "from-blue-950 via-indigo-950 to-[#050508]",
    accent: "#818CF8",
    top_notes: "Mandarina, naranja, lavanda, pimienta negra, cardamomo",
    heart_notes: "Caramelo, haba tonka, pachulí, incienso",
    base_notes: "Vainilla, vetiver",
    description:
      "Edición limitada 2025. Oriental amaderada unisex de larga duración excepcional. Mandarina vibrante que evoluciona hacia un corazón especiado y una base cálida de vainilla.",
    featured: true,
    limited: true,
  },
];
