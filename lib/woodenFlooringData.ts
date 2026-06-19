import { contactWhatsApp } from "@/lib/siteData";

type FlooringFolder = "ash-grey" | "dark-espresso" | "honey-maple" | "natural-oak" | "teak-rustic" | "walnut-matte";

const floorImg = (folder: FlooringFolder, file: string) => `/images/wooden-flooring/${folder}/${file}`;

const ashGreyGallery = [
  "AG1.jpg", "AG2.jpg", "AG3.jpg", "AG4.jpg", "AG5.jpg", "AG6.jpg", "AG7.jpg", "AG8.jpg",
  "AG9.jpg", "AG10.jpg", "AG11.jpg", "AG12.jpg", "AG13.jpg", "AG14.jpg",
].map((file) => floorImg("ash-grey", file));
const darkEspressoGallery = ["DE1.jpg", "DE2.jpg", "DE3.jpg", "DE4.jpg", "DE5.jpg", "DE6.jpg"].map((file) =>
  floorImg("dark-espresso", file),
);
const honeyMapleGallery = ["HM1.jpg", "HM2.jpg", "HM3.jpg", "HM4.jpg", "HM5.jpg", "HM6.jpg", "HM7.jpg"].map((file) =>
  floorImg("honey-maple", file),
);
const naturalOakGallery = [
  "NO1.jpg", "NO2.jpg", "NO3.jpg", "NO4.jpg", "NO5.jpg", "NO6.jpg", "NO7.jpg", "NO8.jpg", "NO9.jpg",
  "NO10.jpg", "NO11.jpg", "NO12.jpg", "NO13.jpg", "NO14.jpg", "NO15.jpg",
].map((file) => floorImg("natural-oak", file));
const teakRusticGallery = [
  "TR1.jpg", "TR2.jpg", "TR3.jpg", "TR4.jpg", "TR5.jpg", "TR6.jpg", "TR7.jpg", "TR8.jpg",
  "TR9.jpg", "TR10.jpg", "TR11.jpg", "TR12.jpg", "TR13.jpg",
].map((file) => floorImg("teak-rustic", file));
const walnutMatteGallery = [
  "WM1.jpg", "WM2.jpg", "WM3.jpg", "WM4.jpg", "WM5.jpg", "WM6.jpg", "WM7.jpg", "WM8.jpg",
  "WM9.jpg", "WM10.jpg", "WM11.jpg", "WM12.jpg", "WM13.jpg",
].map((file) => floorImg("walnut-matte", file));

const categoryGalleryByFilter: Record<Exclude<WoodenFlooringFilterOption, "All">, string[]> = {
  "Natural Oak": naturalOakGallery,
  "Walnut Matte": walnutMatteGallery,
  "Teak Rustic": teakRusticGallery,
  "Ash Grey": ashGreyGallery,
  "Honey Maple": honeyMapleGallery,
  "Dark Espresso": darkEspressoGallery,
};

export const woodenFlooringFilterOptions = [
  "All",
  "Natural Oak",
  "Walnut Matte",
  "Teak Rustic",
  "Ash Grey",
  "Honey Maple",
  "Dark Espresso",
] as const;

export type WoodenFlooringFilterOption = (typeof woodenFlooringFilterOptions)[number];

export type WoodenFlooringCategory = {
  param: string;
  name: string;
  tag: WoodenFlooringFilterOption;
  description: string;
  highlights: string[];
  heroImage: string;
  gallery: string[];
};

export const woodenFlooringItems = [
  { title: "Natural Oak", subtitle: "Warm timeless grains", image: floorImg("natural-oak", "NO1.jpg"), tag: "Natural Oak" as const },
  { title: "Walnut Matte", subtitle: "Contemporary deep tone", image: floorImg("walnut-matte", "WM1.jpg"), tag: "Walnut Matte" as const },
  { title: "Teak Rustic", subtitle: "Classic premium texture", image: floorImg("teak-rustic", "TR1.jpg"), tag: "Teak Rustic" as const },
  { title: "Ash Grey", subtitle: "Modern cool tone", image: floorImg("ash-grey", "AG1.jpg"), tag: "Ash Grey" as const },
  { title: "Honey Maple", subtitle: "Bright warm finish", image: floorImg("honey-maple", "HM1.jpg"), tag: "Honey Maple" as const },
  { title: "Dark Espresso", subtitle: "Luxury deep shade", image: floorImg("dark-espresso", "DE1.jpg"), tag: "Dark Espresso" as const },
];

export const woodenFlooringGalleryImages = [
  ...naturalOakGallery,
  ...walnutMatteGallery,
  ...teakRusticGallery,
  ...ashGreyGallery,
  ...honeyMapleGallery,
  ...darkEspressoGallery,
].map((src, idx) => ({ src, alt: `Wooden flooring inspiration ${idx + 1}` }));

export function filterToParam(filter: string): string {
  if (filter.trim().toLowerCase() === "all") return "all";
  return filter.trim().toLowerCase().replace(/\s+/g, "-");
}

export function paramToFilter(param: string | null | undefined): WoodenFlooringFilterOption | null {
  if (!param) return null;
  const map: Record<string, WoodenFlooringFilterOption> = {
    all: "All",
    "natural-oak": "Natural Oak",
    "walnut-matte": "Walnut Matte",
    "teak-rustic": "Teak Rustic",
    "ash-grey": "Ash Grey",
    "honey-maple": "Honey Maple",
    "dark-espresso": "Dark Espresso",
  };
  return map[param.trim().toLowerCase()] ?? null;
}

const categoryCopy: Record<WoodenFlooringFilterOption, { description: string; highlights: string[] }> = {
  All: {
    description: "Explore natural oak, walnut matte, teak rustic, ash grey, honey maple, and dark espresso wooden flooring finishes.",
    highlights: ["Scratch-resistant options", "Matte and glossy finishes", "Expert installation", "Long-term durability"],
  },
  "Natural Oak": {
    description: "Warm timeless oak tones that make living spaces feel inviting and naturally elegant.",
    highlights: ["Warm grain character", "Living room favourite", "Classic interior pairing", "Premium natural look"],
  },
  "Walnut Matte": {
    description: "Contemporary deep walnut matte tones for modern luxury interiors.",
    highlights: ["Deep contemporary tone", "Matte premium finish", "Formal room styling", "Rich visual depth"],
  },
  "Teak Rustic": {
    description: "Classic premium teak rustic texture with warm heritage appeal.",
    highlights: ["Rustic wood character", "Heritage warmth", "Premium texture", "Statement flooring"],
  },
  "Ash Grey": {
    description: "Modern cool ash grey tones for clean contemporary homes.",
    highlights: ["Cool modern palette", "Minimal interiors", "Urban apartment look", "Balanced neutrality"],
  },
  "Honey Maple": {
    description: "Bright warm honey maple finish that keeps rooms airy and welcoming.",
    highlights: ["Bright warm finish", "Compact room friendly", "Everyday elegance", "Light-filled spaces"],
  },
  "Dark Espresso": {
    description: "Luxury deep espresso shade for bold premium interior statements.",
    highlights: ["Luxury dark tone", "High-end renovations", "Strong contrast styling", "Premium depth"],
  },
};

function buildCategory(filter: WoodenFlooringFilterOption): WoodenFlooringCategory {
  const gallery =
    filter === "All" ? woodenFlooringGalleryImages.map((item) => item.src) : categoryGalleryByFilter[filter];
  const copy = categoryCopy[filter];

  return {
    param: filterToParam(filter),
    name: filter === "All" ? "All Wooden Flooring Styles" : filter,
    tag: filter,
    description: copy.description,
    highlights: copy.highlights,
    heroImage: gallery[0] ?? woodenFlooringItems[0].image,
    gallery,
  };
}

export const woodenFlooringCategories = woodenFlooringFilterOptions.map((filter) => buildCategory(filter));

export function getWoodenFlooringCategoryByParam(param: string) {
  return woodenFlooringCategories.find((category) => category.param === param.trim().toLowerCase());
}

export function categoryPageHref(filter: WoodenFlooringFilterOption) {
  return `/wooden-flooring/category/${filterToParam(filter)}`;
}

export function filterHref(filter: WoodenFlooringFilterOption) {
  if (filter === "All") return "/wooden-flooring";
  return categoryPageHref(filter);
}

export function getWoodenFlooringCategoryWhatsAppUrl(category: WoodenFlooringCategory) {
  const message = [
    "Hi GRIHAM, I would like to book wooden flooring.",
    `Style: ${category.name}`,
    "Please share pricing, finish options, and installation timeline.",
  ].join("\n");
  return `${contactWhatsApp}?text=${encodeURIComponent(message)}`;
}
