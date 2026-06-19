import { contactWhatsApp } from "@/lib/siteData";

type BedFolder = "floating-platform" | "heritage-teak" | "minimal-frame" | "storage-platform" | "upholstered";

const bedImg = (folder: BedFolder, file: string) => `/images/beds/${folder}/${file}`;

const floatingPlatformGallery = ["FP1.jpg", "FP2.jpg", "FP3.jpg", "FP4.jpg", "FP5.jpg", "FP6.jpg", "FP7.jpg", "FP8.jpg"].map(
  (file) => bedImg("floating-platform", file),
);
const heritageTeakGallery = ["HT1.jpg", "HT2.jpg", "HT3.png", "HT4.jpg", "HT5.png", "HT6.jpg"].map((file) =>
  bedImg("heritage-teak", file),
);
const minimalFrameGallery = ["MF1.jpg", "MF2.jpg", "MF3.jpg", "MF4.jpg", "MF5.jpg", "MF6.jpg", "MF7.jpg", "MF8.jpg"].map(
  (file) => bedImg("minimal-frame", file),
);
const storagePlatformGallery = ["SP1.jpg", "SP2.jpg", "SP3.jpg", "SP4.jpg", "SP5.jpg", "SP6.jpg"].map((file) =>
  bedImg("storage-platform", file),
);
const upholsteredGallery = [
  "UB1.jpg", "UB2.jpg", "UB3.jpg", "UB4.jpg", "UB5.jpg", "UB6.jpg", "UB7.jpg", "UB8.jpg", "UB9.jpg", "UB10.jpg", "UB11.jpg",
].map((file) => bedImg("upholstered", file));

const categoryGalleryByFilter: Record<Exclude<BedFilterOption, "All">, string[]> = {
  "Heritage Teak Bed": heritageTeakGallery,
  "Storage Platform Bed": storagePlatformGallery,
  "Minimal Frame Bed": minimalFrameGallery,
  "Upholstered Bed": upholsteredGallery,
  "Floating Platform": floatingPlatformGallery,
};

export const bedFilterOptions = [
  "All",
  "Heritage Teak Bed",
  "Storage Platform Bed",
  "Minimal Frame Bed",
  "Upholstered Bed",
  "Floating Platform",
] as const;

export type BedFilterOption = (typeof bedFilterOptions)[number];

export type BedCategory = {
  param: string;
  name: string;
  tag: BedFilterOption;
  description: string;
  highlights: string[];
  heroImage: string;
  gallery: string[];
};

export const bedItems = [
  { title: "Heritage Teak Bed", subtitle: "Solid wood classic", image: bedImg("heritage-teak", "HT1.jpg"), tag: "Heritage Teak Bed" as const },
  { title: "Storage Platform Bed", subtitle: "Utility-focused design", image: bedImg("storage-platform", "SP1.jpg"), tag: "Storage Platform Bed" as const },
  { title: "Minimal Frame Bed", subtitle: "Modern clean profile", image: bedImg("minimal-frame", "MF1.jpg"), tag: "Minimal Frame Bed" as const },
  { title: "Upholstered Bed", subtitle: "Soft premium finish", image: bedImg("upholstered", "UB1.jpg"), tag: "Upholstered Bed" as const },
  { title: "Floating Platform", subtitle: "Modern luxury vibe", image: bedImg("floating-platform", "FP1.jpg"), tag: "Floating Platform" as const },
];

export const bedGalleryImages = [
  ...heritageTeakGallery,
  ...storagePlatformGallery,
  ...minimalFrameGallery,
  ...upholsteredGallery,
  ...floatingPlatformGallery,
].map((src, idx) => ({ src, alt: `Bed inspiration ${idx + 1}` }));

export function filterToParam(filter: string): string {
  if (filter.trim().toLowerCase() === "all") return "all";
  return filter.trim().toLowerCase().replace(/\s+/g, "-");
}

export function paramToFilter(param: string | null | undefined): BedFilterOption | null {
  if (!param) return null;
  const map: Record<string, BedFilterOption> = {
    all: "All",
    "heritage-teak-bed": "Heritage Teak Bed",
    "storage-platform-bed": "Storage Platform Bed",
    "minimal-frame-bed": "Minimal Frame Bed",
    "upholstered-bed": "Upholstered Bed",
    "floating-platform": "Floating Platform",
  };
  return map[param.trim().toLowerCase()] ?? null;
}

const categoryCopy: Record<BedFilterOption, { description: string; highlights: string[] }> = {
  All: {
    description: "Explore heritage teak, storage platform, minimal frame, upholstered, and floating platform beds crafted for comfort and durability.",
    highlights: ["Custom sizes available", "Storage and headboard options", "Premium frame builds", "Professional installation"],
  },
  "Heritage Teak Bed": {
    description: "Solid wood heritage teak beds with classic craftsmanship and warm timeless appeal.",
    highlights: ["Solid wood construction", "Classic headboard styles", "Durable daily use", "Premium wood finish"],
  },
  "Storage Platform Bed": {
    description: "Utility-focused platform beds with hydraulic or drawer storage for compact premium bedrooms.",
    highlights: ["Hidden storage options", "Space-smart design", "Easy-access mechanisms", "Clean modern lines"],
  },
  "Minimal Frame Bed": {
    description: "Clean modern frame beds with a light visual profile for contemporary bedrooms.",
    highlights: ["Minimal silhouette", "Easy room coordination", "Compact footprint", "Modern headboard options"],
  },
  "Upholstered Bed": {
    description: "Soft upholstered beds with premium fabric finishes and comfortable headboard styling.",
    highlights: ["Soft premium upholstery", "Headboard comfort", "Fabric colour options", "Elegant bedroom look"],
  },
  "Floating Platform": {
    description: "Floating platform beds with a modern luxury vibe and elevated visual lightness.",
    highlights: ["Floating visual effect", "Modern luxury styling", "Statement bedroom design", "Premium platform build"],
  },
};

function buildCategory(filter: BedFilterOption): BedCategory {
  const gallery =
    filter === "All" ? bedGalleryImages.map((item) => item.src) : categoryGalleryByFilter[filter];
  const copy = categoryCopy[filter];

  return {
    param: filterToParam(filter),
    name: filter === "All" ? "All Bed Styles" : filter,
    tag: filter,
    description: copy.description,
    highlights: copy.highlights,
    heroImage: gallery[0] ?? bedItems[0].image,
    gallery,
  };
}

export const bedCategories = bedFilterOptions.map((filter) => buildCategory(filter));

export function getBedCategoryByParam(param: string) {
  return bedCategories.find((category) => category.param === param.trim().toLowerCase());
}

export function categoryPageHref(filter: BedFilterOption) {
  return `/cots/category/${filterToParam(filter)}`;
}

export function filterHref(filter: BedFilterOption) {
  if (filter === "All") return "/cots";
  return categoryPageHref(filter);
}

export function getBedCategoryWhatsAppUrl(category: BedCategory) {
  const message = [
    "Hi GRIHAM, I would like to book a bed.",
    `Style: ${category.name}`,
    "Please share pricing, size options, and delivery timeline.",
  ].join("\n");
  return `${contactWhatsApp}?text=${encodeURIComponent(message)}`;
}
