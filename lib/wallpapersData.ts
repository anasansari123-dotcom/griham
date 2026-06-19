import { contactWhatsApp } from "@/lib/siteData";

type WallpaperFolder = "classic-motif" | "minimal-geometric" | "nature-inspired" | "soft-neutrals" | "textured-luxe";

const wpImg = (folder: WallpaperFolder, file: string) => `/images/wallpapers/${folder}/${file}`;

const classicMotifGallery = [
  "CM1.jpg", "CM2.jpg", "CM3.jpg", "CM4.jpg", "CM5.jpg", "CM6.jpg", "CM7.jpg", "CM8.jpg", "CM9.jpg",
].map((file) => wpImg("classic-motif", file));

const minimalGeometricGallery = [
  "MG1.jpg", "MG2.jpg", "MG3.jpg", "MG4.jpg", "MG5.JPG", "MG6.jpg", "MG7.jpg", "MG8.jpg", "MG9.jpg",
  "MG10.jpg", "MG11.jpg", "MG12.jpg", "MG13.jpg", "MG14.jpg", "MG15.jpg", "MG16.jpg", "MG17.jpg", "MG18.jpg",
].map((file) => wpImg("minimal-geometric", file));

const natureInspiredGallery = [
  "NI1.jpg", "NI2.jpg", "NI3.jpg", "NI4.jpg", "NI5.jpg", "NI6.jpg", "NI7.jpg", "NI8.jpg", "NI9.jpg",
  "NI10.jpg", "NI11.jpg", "NI12.jpg", "NI13.jpg", "NI14.jpg",
].map((file) => wpImg("nature-inspired", file));

const softNeutralsGallery = [
  "SN1.jpg", "SN2.jpg", "SN3.jpg", "SN4.jpg", "SN5.jpg", "SN6.jpg", "SN7.jpg", "SN8.jpg", "SN9.jpg",
].map((file) => wpImg("soft-neutrals", file));

const texturedLuxeGallery = [
  "TL1.jpg", "TL2.jpg", "TL3.jpg", "TL4.jpg", "TL5.jpg", "TL6.jpg", "TL7.jpg", "TL8.jpg", "TL9.jpg",
  "TL10.jpg", "TL11.jpg", "TL12.jpg", "TL13.jpg", "TL14.jpg", "TL15.jpg", "TL16.jpg", "TL17.jpg", "TI18.jpg",
].map((file) => wpImg("textured-luxe", file));

const categoryGalleryByFilter: Record<Exclude<WallpaperFilterOption, "All">, string[]> = {
  "Textured Luxe": texturedLuxeGallery,
  "Minimal Geometric": minimalGeometricGallery,
  "Classic Motif": classicMotifGallery,
  "Soft Neutrals": softNeutralsGallery,
  "Nature Inspired": natureInspiredGallery,
};

export const wallpaperFilterOptions = [
  "All",
  "Textured Luxe",
  "Minimal Geometric",
  "Classic Motif",
  "Soft Neutrals",
  "Nature Inspired",
] as const;

export type WallpaperFilterOption = (typeof wallpaperFilterOptions)[number];

export type WallpaperCategory = {
  param: string;
  name: string;
  tag: WallpaperFilterOption;
  description: string;
  highlights: string[];
  heroImage: string;
  gallery: string[];
};

export const wallpaperItems = [
  { title: "Textured Luxe", subtitle: "Depth-rich premium texture", image: wpImg("textured-luxe", "TL1.jpg"), tag: "Textured Luxe" as const },
  { title: "Minimal Geometric", subtitle: "Modern clean patterns", image: wpImg("minimal-geometric", "MG1.jpg"), tag: "Minimal Geometric" as const },
  { title: "Classic Motif", subtitle: "Elegant timeless designs", image: wpImg("classic-motif", "CM1.jpg"), tag: "Classic Motif" as const },
  { title: "Soft Neutrals", subtitle: "Warm minimal palettes", image: wpImg("soft-neutrals", "SN1.jpg"), tag: "Soft Neutrals" as const },
  { title: "Nature Inspired", subtitle: "Organic tones and motifs", image: wpImg("nature-inspired", "NI1.jpg"), tag: "Nature Inspired" as const },
];

export const wallpaperGalleryImages = [
  ...texturedLuxeGallery,
  ...minimalGeometricGallery,
  ...classicMotifGallery,
  ...softNeutralsGallery,
  ...natureInspiredGallery,
].map((src, idx) => ({ src, alt: `Wallpaper inspiration ${idx + 1}` }));

export function filterToParam(filter: string): string {
  if (filter.trim().toLowerCase() === "all") return "all";
  return filter.trim().toLowerCase().replace(/\s+/g, "-");
}

export function paramToFilter(param: string | null | undefined): WallpaperFilterOption | null {
  if (!param) return null;
  const map: Record<string, WallpaperFilterOption> = {
    all: "All",
    "textured-luxe": "Textured Luxe",
    "minimal-geometric": "Minimal Geometric",
    "classic-motif": "Classic Motif",
    "soft-neutrals": "Soft Neutrals",
    "nature-inspired": "Nature Inspired",
  };
  return map[param.trim().toLowerCase()] ?? null;
}

const categoryCopy: Record<WallpaperFilterOption, { description: string; highlights: string[] }> = {
  All: {
    description: "Explore our full wallpaper range — textured luxe, geometric, classic motif, soft neutrals, and nature-inspired designs for every room.",
    highlights: ["Imported waterproof options", "Feature wall and full-room styling", "Custom measurements", "Professional installation"],
  },
  "Textured Luxe": {
    description: "Depth-rich premium textures that add dimension and luxury to feature walls, bedrooms, and living spaces.",
    highlights: ["Rich tactile finishes", "Moisture-resistant options", "Ideal for feature walls", "Premium imported quality"],
  },
  "Minimal Geometric": {
    description: "Clean geometric patterns for modern interiors — balanced scale and crisp lines for contemporary homes.",
    highlights: ["Modern pattern rhythm", "Works in compact rooms", "Easy to pair with furniture", "Designer finishes"],
  },
  "Classic Motif": {
    description: "Elegant timeless motifs inspired by heritage and formal interiors with a refined contemporary finish.",
    highlights: ["Traditional charm", "Formal living spaces", "Warm classic palettes", "Statement wall potential"],
  },
  "Soft Neutrals": {
    description: "Warm minimal palettes that keep rooms calm, airy, and easy to coordinate with existing décor.",
    highlights: ["Understated everyday elegance", "Rent-friendly upgrades", "Bedroom-friendly tones", "Versatile styling"],
  },
  "Nature Inspired": {
    description: "Organic tones and botanical motifs that bring freshness and natural warmth into modern homes.",
    highlights: ["Botanical and earthy themes", "Living room accents", "Calming bedroom looks", "Nature-led palettes"],
  },
};

function buildCategory(filter: WallpaperFilterOption): WallpaperCategory {
  const gallery =
    filter === "All"
      ? wallpaperGalleryImages.map((item) => item.src)
      : categoryGalleryByFilter[filter];
  const copy = categoryCopy[filter];

  return {
    param: filterToParam(filter),
    name: filter === "All" ? "All Wallpaper Styles" : filter,
    tag: filter,
    description: copy.description,
    highlights: copy.highlights,
    heroImage: gallery[0] ?? wallpaperItems[0].image,
    gallery,
  };
}

export const wallpaperCategories = wallpaperFilterOptions.map((filter) => buildCategory(filter));

export function getWallpaperCategoryByParam(param: string) {
  return wallpaperCategories.find((category) => category.param === param.trim().toLowerCase());
}

export function categoryPageHref(filter: WallpaperFilterOption) {
  return `/wallpapers/category/${filterToParam(filter)}`;
}

export function filterHref(filter: WallpaperFilterOption) {
  if (filter === "All") return "/wallpapers";
  return categoryPageHref(filter);
}

export function getWallpaperCategoryWhatsAppUrl(category: WallpaperCategory) {
  const message = [
    "Hi GRIHAM, I would like to book wallpapers.",
    `Style: ${category.name}`,
    "Please share pricing, finish options, and installation timeline.",
  ].join("\n");
  return `${contactWhatsApp}?text=${encodeURIComponent(message)}`;
}
