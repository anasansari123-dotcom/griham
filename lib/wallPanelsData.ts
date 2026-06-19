import { contactWhatsApp } from "@/lib/siteData";

type WallPanelFolder =
  | "3d-sculpted"
  | "matte-fluted"
  | "minimal-groove"
  | "soft-fabric"
  | "stone-texture"
  | "wood-accent";

const panelImg = (folder: WallPanelFolder, file: string) => `/images/wall-panels/${folder}/${file}`;

const sculptedGallery = Array.from({ length: 24 }, (_, i) => panelImg("3d-sculpted", `DP${i + 1}.jpg`));
const matteFlutedGallery = Array.from({ length: 15 }, (_, i) => {
  const num = i + 1;
  const ext = num === 12 ? ".png" : ".jpg";
  return panelImg("matte-fluted", `MF${num}${ext}`);
});
const minimalGrooveGallery = Array.from({ length: 13 }, (_, i) => panelImg("minimal-groove", `MG${i + 1}.jpg`));
const softFabricGallery = Array.from({ length: 26 }, (_, i) => panelImg("soft-fabric", `SF${i + 1}.jpg`));
const stoneTextureGallery = [
  panelImg("stone-texture", "ST1.png"),
  panelImg("stone-texture", "ST2.png"),
  ...Array.from({ length: 15 }, (_, i) => panelImg("stone-texture", `ST${i + 3}.jpg`)),
];
const woodAccentGallery = [
  panelImg("wood-accent", "WW1.png"),
  ...Array.from({ length: 13 }, (_, i) => panelImg("wood-accent", `WW${i + 2}.jpg`)),
];

const categoryGalleryByFilter: Record<Exclude<WallPanelFilterOption, "All">, string[]> = {
  "Wood Accent Wall": woodAccentGallery,
  "3D Sculpted Panel": sculptedGallery,
  "Matte Fluted Panel": matteFlutedGallery,
  "Soft Fabric Panel": softFabricGallery,
  "Stone Texture Panel": stoneTextureGallery,
  "Minimal Groove Panel": minimalGrooveGallery,
};

export const wallPanelFilterOptions = [
  "All",
  "Wood Accent Wall",
  "3D Sculpted Panel",
  "Matte Fluted Panel",
  "Soft Fabric Panel",
  "Stone Texture Panel",
  "Minimal Groove Panel",
] as const;

export type WallPanelFilterOption = (typeof wallPanelFilterOptions)[number];

export type WallPanelCategory = {
  param: string;
  name: string;
  tag: WallPanelFilterOption;
  description: string;
  highlights: string[];
  heroImage: string;
  gallery: string[];
};

export const wallPanelItems = [
  { title: "Wood Accent Wall", subtitle: "Warm linear texture", image: panelImg("wood-accent", "WW1.png"), tag: "Wood Accent Wall" as const },
  { title: "3D Sculpted Panel", subtitle: "Depth and visual drama", image: panelImg("3d-sculpted", "DP1.jpg"), tag: "3D Sculpted Panel" as const },
  { title: "Matte Fluted Panel", subtitle: "Contemporary luxury finish", image: panelImg("matte-fluted", "MF1.jpg"), tag: "Matte Fluted Panel" as const },
  { title: "Soft Fabric Panel", subtitle: "Comfort + subtle acoustics", image: panelImg("soft-fabric", "SF1.jpg"), tag: "Soft Fabric Panel" as const },
  { title: "Stone Texture Panel", subtitle: "Premium architectural look", image: panelImg("stone-texture", "ST1.png"), tag: "Stone Texture Panel" as const },
  { title: "Minimal Groove Panel", subtitle: "Clean modern lines", image: panelImg("minimal-groove", "MG1.jpg"), tag: "Minimal Groove Panel" as const },
];

export const wallPanelGalleryImages = [
  ...woodAccentGallery,
  ...sculptedGallery,
  ...matteFlutedGallery,
  ...softFabricGallery,
  ...stoneTextureGallery,
  ...minimalGrooveGallery,
].map((src, idx) => ({ src, alt: `Wall panel inspiration ${idx + 1}` }));

export function filterToParam(filter: string): string {
  if (filter.trim().toLowerCase() === "all") return "all";
  return filter.trim().toLowerCase().replace(/\s+/g, "-");
}

export function paramToFilter(param: string | null | undefined): WallPanelFilterOption | null {
  if (!param) return null;
  const map: Record<string, WallPanelFilterOption> = {
    all: "All",
    "wood-accent-wall": "Wood Accent Wall",
    "3d-sculpted-panel": "3D Sculpted Panel",
    "matte-fluted-panel": "Matte Fluted Panel",
    "soft-fabric-panel": "Soft Fabric Panel",
    "stone-texture-panel": "Stone Texture Panel",
    "minimal-groove-panel": "Minimal Groove Panel",
  };
  return map[param.trim().toLowerCase()] ?? null;
}

const categoryCopy: Record<WallPanelFilterOption, { description: string; highlights: string[] }> = {
  All: {
    description: "Explore wood accent, 3D sculpted, fluted, fabric, stone texture, and minimal groove wall panels for accent walls and TV units.",
    highlights: ["TV wall ready layouts", "Acoustic-friendly options", "Custom finishes", "Professional fitment"],
  },
  "Wood Accent Wall": {
    description: "Warm linear wood accent walls that add depth and natural texture to living rooms and lounges.",
    highlights: ["Natural wood warmth", "TV unit styling", "Accent wall focus", "Premium slat looks"],
  },
  "3D Sculpted Panel": {
    description: "3D sculpted panels with dramatic depth and visual interest for statement walls.",
    highlights: ["Bold dimensional texture", "Feature wall impact", "Modern luxury feel", "Designer installations"],
  },
  "Matte Fluted Panel": {
    description: "Matte fluted panels with contemporary luxury rhythm for bedrooms and formal spaces.",
    highlights: ["Fluted vertical texture", "Matte premium finish", "Bedroom feature walls", "Elegant light play"],
  },
  "Soft Fabric Panel": {
    description: "Soft fabric-feel panels with comfort and subtle acoustic benefits for lounges and media rooms.",
    highlights: ["Soft tactile finish", "Acoustic comfort", "Warm lounge styling", "Premium fabric look"],
  },
  "Stone Texture Panel": {
    description: "Stone texture panels with an architectural premium look for reception areas and accent walls.",
    highlights: ["Architectural stone look", "Reception-ready styling", "Durable finishes", "High-impact walls"],
  },
  "Minimal Groove Panel": {
    description: "Minimal groove panels with clean modern lines for understated premium interiors.",
    highlights: ["Clean groove lines", "Modern minimal look", "Easy coordination", "Subtle wall depth"],
  },
};

function buildCategory(filter: WallPanelFilterOption): WallPanelCategory {
  const gallery =
    filter === "All" ? wallPanelGalleryImages.map((item) => item.src) : categoryGalleryByFilter[filter];
  const copy = categoryCopy[filter];

  return {
    param: filterToParam(filter),
    name: filter === "All" ? "All Wall Panel Styles" : filter,
    tag: filter,
    description: copy.description,
    highlights: copy.highlights,
    heroImage: gallery[0] ?? wallPanelItems[0].image,
    gallery,
  };
}

export const wallPanelCategories = wallPanelFilterOptions.map((filter) => buildCategory(filter));

export function getWallPanelCategoryByParam(param: string) {
  return wallPanelCategories.find((category) => category.param === param.trim().toLowerCase());
}

export function categoryPageHref(filter: WallPanelFilterOption) {
  return `/wall-panels/category/${filterToParam(filter)}`;
}

export function filterHref(filter: WallPanelFilterOption) {
  if (filter === "All") return "/wall-panels";
  return categoryPageHref(filter);
}

export function getWallPanelCategoryWhatsAppUrl(category: WallPanelCategory) {
  const message = [
    "Hi GRIHAM, I would like to book wall panels.",
    `Style: ${category.name}`,
    "Please share pricing, finish options, and installation timeline.",
  ].join("\n");
  return `${contactWhatsApp}?text=${encodeURIComponent(message)}`;
}
