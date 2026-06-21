export type Gemstone = {
  slug: string;
  name: string;
  type: string;
  carat: number;
  measurements: string;
  origin: string;
  color: string;
  clarity: string;
  treatment: string;
  certification: string;
  availability: "Available" | "Reserved" | "Private Collection";
  description: string;
  image: string;
  gallery: string[];
  video?: string;
  featured?: boolean;
};

export const GEMSTONES: Gemstone[] = [
  {
    slug: "royal-blue-ceylon-sapphire",
    name: "Royal Blue Ceylon Sapphire",
    type: "Sapphire",
    carat: 12.47,
    measurements: "14.2 × 11.8 × 8.4 mm",
    origin: "Ratnapura, Sri Lanka",
    color: "Royal Blue",
    clarity: "Loupe Clean",
    treatment: "Unheated",
    certification: "Gübelin · SSEF",
    availability: "Available",
    description:
      "A museum-grade royal blue sapphire of exceptional saturation and crystal clarity, sourced from the legendary gem gravels of Ceylon.",
    image:
      "https://images.unsplash.com/photo-1617038260897-41a89fa42ca0?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1617038260897-41a89fa42ca0?w=1200&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80",
    ],
    featured: true,
  },
  {
    slug: "padparadscha-sunset-sapphire",
    name: "Padparadscha Sunset Sapphire",
    type: "Padparadscha Sapphire",
    carat: 8.92,
    measurements: "12.1 × 10.4 × 6.8 mm",
    origin: "Elahara, Sri Lanka",
    color: "Sunset Pink-Orange",
    clarity: "Eye Clean",
    treatment: "Unheated",
    certification: "GIA · AGL",
    availability: "Reserved",
    description:
      "The rarest of sapphires — a delicate padparadscha displaying the coveted lotus blossom hue prized by collectors worldwide.",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&q=80",
      "https://images.unsplash.com/photo-1617038260897-41a89fa42ca0?w=1200&q=80",
    ],
    featured: true,
  },
  {
    slug: "alexandrite-color-change",
    name: "Alexandrite Color-Change",
    type: "Alexandrite",
    carat: 5.18,
    measurements: "10.8 × 8.6 × 5.2 mm",
    origin: "Ural Mountains, Russia",
    color: "Green to Red",
    clarity: "Loupe Clean",
    treatment: "None",
    certification: "Gübelin · AGL",
    availability: "Private Collection",
    description:
      "An extraordinary alexandrite exhibiting a dramatic color change from emerald green in daylight to ruby red under incandescent light.",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80",
      "https://images.unsplash.com/photo-1617038260897-41a89fa42ca0?w=1200&q=80",
    ],
    featured: true,
  },
  {
    slug: "collector-kashmir-sapphire",
    name: "Collector Kashmir Sapphire",
    type: "Sapphire",
    carat: 6.34,
    measurements: "11.4 × 9.2 × 6.1 mm",
    origin: "Kashmir, India",
    color: "Velvet Blue",
    clarity: "Eye Clean",
    treatment: "Unheated",
    certification: "SSEF · Gübelin",
    availability: "Available",
    description:
      "A legendary Kashmir sapphire with the distinctive velvety blue that has defined the pinnacle of colored gemstone collecting for generations.",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1200&q=80",
      "https://images.unsplash.com/photo-1617038260897-41a89fa42ca0?w=1200&q=80",
    ],
    featured: true,
  },
  {
    slug: "pigeon-blood-ruby",
    name: "Pigeon Blood Burmese Ruby",
    type: "Ruby",
    carat: 4.76,
    measurements: "9.8 × 8.4 × 5.6 mm",
    origin: "Mogok, Myanmar",
    color: "Pigeon Blood Red",
    clarity: "Eye Clean",
    treatment: "Unheated",
    certification: "Gübelin · GRS",
    availability: "Available",
    description:
      "A vivid pigeon blood ruby from the fabled Mogok Valley — the benchmark against which all investment-grade rubies are measured.",
    image:
      "https://images.unsplash.com/photo-1603561596112-0a132b757442?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1603561596112-0a132b757442?w=1200&q=80",
    ],
  },
  {
    slug: "colombian-emerald",
    name: "Colombian Emerald",
    type: "Emerald",
    carat: 7.21,
    measurements: "13.6 × 10.2 × 7.8 mm",
    origin: "Muzo, Colombia",
    color: "Vivid Green",
    clarity: "Minor Inclusions",
    treatment: "Minor Oil",
    certification: "GIA · AGL",
    availability: "Available",
    description:
      "A vivid Muzo emerald displaying the rich, saturated green that has made Colombian emeralds the most sought-after in the world.",
    image:
      "https://images.unsplash.com/photo-1611591437287-460b61211702?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1611591437287-460b61211702?w=1200&q=80",
    ],
  },
  {
    slug: "paraiba-tourmaline",
    name: "Paraíba Tourmaline",
    type: "Tourmaline",
    carat: 3.84,
    measurements: "8.6 × 7.2 × 4.8 mm",
    origin: "Paraíba, Brazil",
    color: "Neon Blue-Green",
    clarity: "Loupe Clean",
    treatment: "None",
    certification: "GIA · AGL",
    availability: "Reserved",
    description:
      "An electrifying Paraíba tourmaline with the neon glow that has captivated collectors and set auction records globally.",
    image:
      "https://images.unsplash.com/photo-1615485508054-68f778490346?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1615485508054-68f778490346?w=1200&q=80",
    ],
  },
  {
    slug: "spinel-red-mahenge",
    name: "Mahenge Red Spinel",
    type: "Spinel",
    carat: 9.15,
    measurements: "13.2 × 11.6 × 7.4 mm",
    origin: "Mahenge, Tanzania",
    color: "Vivid Red",
    clarity: "Loupe Clean",
    treatment: "None",
    certification: "Gübelin · SSEF",
    availability: "Available",
    description:
      "A magnificent Mahenge spinel rivaling the finest rubies in color and brilliance — increasingly recognized as a premier investment gem.",
    image:
      "https://images.unsplash.com/photo-1602751584552-8ba173e9a4a8?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1602751584552-8ba173e9a4a8?w=1200&q=80",
    ],
  },
];

export function getGemstoneBySlug(slug: string): Gemstone | undefined {
  return GEMSTONES.find((g) => g.slug === slug);
}

export function getFeaturedGemstones(): Gemstone[] {
  return GEMSTONES.filter((g) => g.featured);
}
