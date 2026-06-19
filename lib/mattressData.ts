import { contactWhatsApp } from "@/lib/siteData";

const mattressImg = (file: string) => `/images/mattress/${file}`;

const categoryGalleryByFilter: Record<Exclude<MattressFilterOption, "All">, string[]> = {
  "Orthopedic Comfort": [mattressImg("orthopedic-comfort.jpg")],
  "Latex Natural Sleep": [mattressImg("latex-natural-sleep.webp")],
  "Hybrid Plush Support": [mattressImg("hybrid-plush-support.jpg")],
  "Cooling Gel Comfort": [mattressImg("cooling-gel-comfort.avif")],
  "Pocket Spring Support": [mattressImg("pocket-spring-support.webp")],
  "Medium Comfort Layer": [mattressImg("medium-comfort-layer.webp")],
};

export const mattressFilterOptions = [
  "All",
  "Orthopedic Comfort",
  "Latex Natural Sleep",
  "Hybrid Plush Support",
  "Cooling Gel Comfort",
  "Pocket Spring Support",
  "Medium Comfort Layer",
] as const;

export type MattressFilterOption = (typeof mattressFilterOptions)[number];

export type MattressCategory = {
  param: string;
  name: string;
  tag: MattressFilterOption;
  description: string;
  highlights: string[];
  heroImage: string;
  gallery: string[];
};

export const mattressItems = [
  {
    title: "Orthopedic Comfort",
    subtitle: "Firm posture support",
    image: mattressImg("orthopedic-comfort.jpg"),
    tag: "Orthopedic Comfort" as const,
  },
  {
    title: "Latex Natural Sleep",
    subtitle: "Breathable responsive feel",
    image: mattressImg("latex-natural-sleep.webp"),
    tag: "Latex Natural Sleep" as const,
  },
  {
    title: "Hybrid Plush Support",
    subtitle: "Balanced comfort + support",
    image: mattressImg("hybrid-plush-support.jpg"),
    tag: "Hybrid Plush Support" as const,
  },
  {
    title: "Cooling Gel Comfort",
    subtitle: "Cooler sleep surface",
    image: mattressImg("cooling-gel-comfort.avif"),
    tag: "Cooling Gel Comfort" as const,
  },
  {
    title: "Pocket Spring Support",
    subtitle: "Stable motion control",
    image: mattressImg("pocket-spring-support.webp"),
    tag: "Pocket Spring Support" as const,
  },
  {
    title: "Medium Comfort Layer",
    subtitle: "Everyday balanced feel",
    image: mattressImg("medium-comfort-layer.webp"),
    tag: "Medium Comfort Layer" as const,
  },
];

export const mattressGalleryImages = mattressItems.map((item, idx) => ({
  src: item.image,
  alt: `${item.title} mattress inspiration ${idx + 1}`,
}));

export function filterToParam(filter: string): string {
  if (filter.trim().toLowerCase() === "all") return "all";
  return filter.trim().toLowerCase().replace(/\s+/g, "-");
}

export function paramToFilter(param: string | null | undefined): MattressFilterOption | null {
  if (!param) return null;
  const map: Record<string, MattressFilterOption> = {
    all: "All",
    "orthopedic-comfort": "Orthopedic Comfort",
    "latex-natural-sleep": "Latex Natural Sleep",
    "hybrid-plush-support": "Hybrid Plush Support",
    "cooling-gel-comfort": "Cooling Gel Comfort",
    "pocket-spring-support": "Pocket Spring Support",
    "medium-comfort-layer": "Medium Comfort Layer",
  };
  return map[param.trim().toLowerCase()] ?? null;
}

const categoryCopy: Record<MattressFilterOption, { description: string; highlights: string[] }> = {
  All: {
    description:
      "Explore orthopedic, latex, hybrid, cooling gel, pocket spring, and medium comfort mattresses tailored to your posture and sleep preference.",
    highlights: [
      "Posture-focused support options",
      "Soft, medium, and firm profiles",
      "Breathable and motion-control builds",
      "Sleep consultation included",
    ],
  },
  "Orthopedic Comfort": {
    description: "Firm orthopedic mattresses designed for posture support and deeper restorative sleep.",
    highlights: ["Firm back support", "Posture alignment", "Daily comfort", "Ideal for back sleepers"],
  },
  "Latex Natural Sleep": {
    description: "Breathable latex-feel mattresses with responsive comfort and natural airflow.",
    highlights: ["Breathable layers", "Responsive feel", "Warm weather friendly", "Premium comfort"],
  },
  "Hybrid Plush Support": {
    description: "Balanced hybrid builds combining plush comfort with stable underlying support.",
    highlights: ["Balanced comfort + support", "Everyday lounging", "Couple-friendly options", "Premium layering"],
  },
  "Cooling Gel Comfort": {
    description: "Cooling gel comfort layers for a fresher sleep surface in warm climates.",
    highlights: ["Cooler sleep surface", "Heat reduction", "Comfort top layer", "Daily use"],
  },
  "Pocket Spring Support": {
    description: "Pocket spring mattresses with stable motion control for uninterrupted couple sleep.",
    highlights: ["Motion isolation", "Stable spring support", "Partner-friendly", "Durable build"],
  },
  "Medium Comfort Layer": {
    description: "Medium comfort mattresses with an everyday balanced feel for versatile sleepers.",
    highlights: ["Balanced firmness", "All-position comfort", "Easy daily use", "Versatile bedrooms"],
  },
};

function buildCategory(filter: MattressFilterOption): MattressCategory {
  const gallery =
    filter === "All" ? mattressGalleryImages.map((item) => item.src) : categoryGalleryByFilter[filter];
  const copy = categoryCopy[filter];

  return {
    param: filterToParam(filter),
    name: filter === "All" ? "All Mattress Styles" : filter,
    tag: filter,
    description: copy.description,
    highlights: copy.highlights,
    heroImage: gallery[0] ?? mattressItems[0].image,
    gallery,
  };
}

export const mattressCategories = mattressFilterOptions.map((filter) => buildCategory(filter));

export function getMattressCategoryByParam(param: string) {
  return mattressCategories.find((category) => category.param === param.trim().toLowerCase());
}

export function categoryPageHref(filter: MattressFilterOption) {
  return `/mattress/category/${filterToParam(filter)}`;
}

export function filterHref(filter: MattressFilterOption) {
  if (filter === "All") return "/mattress";
  return categoryPageHref(filter);
}

export function getMattressCategoryWhatsAppUrl(category: MattressCategory) {
  const message = [
    "Hi GRIHAM, I would like to book a mattress.",
    `Style: ${category.name}`,
    "Please share pricing, firmness options, and delivery timeline.",
  ].join("\n");
  return `${contactWhatsApp}?text=${encodeURIComponent(message)}`;
}
