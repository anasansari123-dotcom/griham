import { contactWhatsApp } from "@/lib/siteData";

const img = (name: string) => `/images/curtains/${name}.png`;

/** Curated installs for the Style gallery on /curtains — one highlight per style + top installs */
export const styleGalleryImages = [
  { src: img("C1"), alt: "Full-height curtains in a spacious living room" },
  { src: img("C4"), alt: "Printed curtains with soft natural light" },
  { src: img("C9"), alt: "Kids room curtains with playful prints" },
  { src: img("C13"), alt: "Solid-tone curtains in a minimal living room" },
  { src: img("C16"), alt: "Indian traditional curtains in a heritage living hall" },
  { src: img("C19"), alt: "Bold printed curtains on a feature window" },
  { src: img("C3"), alt: "Sheer and blackout layered curtains in a modern living room" },
  { src: img("C25"), alt: "Luxury woven texture curtains in a formal lounge" },
  { src: img("C27"), alt: "Premium full-height curtains on a ceiling track" },
];

export type CurtainItem = {
  slug: string;
  name: string;
  image: string;
  tag?: string;
  description: string;
  highlights: string[];
  idealFor: string[];
  gallery: string[];
};

export function getCurtainBySlug(slug: string) {
  return curtainsData.find((item) => item.slug === slug);
}

export const curtainsData: CurtainItem[] = [
  {
    slug: "solid-curtain",
    name: "Solid Curtain",
    image: "/CVFQx0LoEk5i8YCfY6U8S.avif",
    tag: "Solid",
    description:
      "Clean solid-tone curtains that bring calm, balanced elegance to any room. Perfect when you want a timeless look that pairs easily with patterned furniture and wall finishes.",
    highlights: [
      "Rich colour options with premium fabric fall",
      "Works for living room, bedroom, and study windows",
      "Custom stitching for width, length, and pleat style",
      "Easy to coordinate with sofas, rugs, and wall panels",
    ],
    idealFor: ["Minimal interiors", "Rent-friendly upgrades", "Rooms needing a calm backdrop"],
    gallery: [img("C13"), img("C12"), img("C25")],
  },
  {
    slug: "printed-curtain-classic",
    name: "Printed Curtain",
    image: "/J3bXmpQwZzacJI4MP_JCk.avif",
    tag: "Printed",
    description:
      "Designer printed curtains that add personality without overwhelming the room. Ideal for feature windows and spaces where you want pattern with premium finish.",
    highlights: [
      "High-quality prints with fade-resistant tones",
      "Layering options with sheers or blackout linings",
      "Made-to-measure for standard and large windows",
      "Style guidance to match your wall and furniture palette",
    ],
    idealFor: ["Living rooms", "Guest bedrooms", "Dining areas with natural light"],
    gallery: [img("C4"), img("C19"), img("C21")],
  },
  {
    slug: "luxury-woven-design-curtains",
    name: "Luxury Woven Design Curtains",
    image: "/SIB7LUTBqFxMSbw3bbPJ3.avif",
    tag: "Luxury Woven",
    description:
      "Luxury woven curtains with textured depth and a refined drape. These designs elevate formal living spaces and master bedrooms with a premium, hotel-inspired feel.",
    highlights: [
      "Textured weave for depth and light play",
      "Premium finishing with neat hems and pleats",
      "Suitable for tall windows and full-height styling",
      "Coordinated hardware recommendations included",
    ],
    idealFor: ["Master bedrooms", "Formal living rooms", "Premium renovation projects"],
    gallery: [img("C27"), img("C25"), img("C12")],
  },
  {
    slug: "indian-traditional-curtains-1",
    name: "Indian & Traditional Curtains",
    image: "/E02KwJXTETaoWsfmQ9sNz.avif",
    tag: "Indian & Traditional",
    description:
      "Indian and traditional curtain styles inspired by classic motifs, warm tones, and festive elegance. Perfect for homes that celebrate heritage with a modern finish.",
    highlights: [
      "Traditional patterns with contemporary tailoring",
      "Custom sizing for arches, doors, and bay windows",
      "Fabric options for light filtering or room darkening",
      "Ideal for pooja rooms, living halls, and guest areas",
    ],
    idealFor: ["Festive home styling", "Traditional interiors", "Family living spaces"],
    gallery: [img("C16"), img("C17"), img("C18")],
  },
  {
    slug: "printed-curtains-modern",
    name: "Printed Curtains",
    image: "/O_oaJzsDb-9kBIG1eC_PD.avif",
    tag: "Printed",
    description:
      "Bold printed curtains for modern homes that need character and contrast. We help you balance print scale with room size so the look stays premium, not busy.",
    highlights: [
      "Scale-balanced prints for small and large rooms",
      "Optional blackout lining for bedrooms",
      "Professional measurement and installation support",
      "Pairs well with neutral sofas and wooden flooring",
    ],
    idealFor: ["Modern apartments", "Teen bedrooms", "Accent window styling"],
    gallery: [img("C18"), img("C21"), img("C4")],
  },
  {
    slug: "indian-traditional-curtains-2",
    name: "Indian & Traditional Curtains",
    image: "/Dgy_d1Pifjlgq1-SuGuPA.avif",
    tag: "Indian & Traditional",
    description:
      "A second traditional collection with richer textures and ceremonial warmth. Designed for homeowners who want classic Indian aesthetics with neat, modern stitching.",
    highlights: [
      "Warm colour palettes with elegant drape",
      "Custom pleats: pencil, french, or ripple fold",
      "Durable fabrics for daily use",
      "On-site consultation for colour matching",
    ],
    idealFor: ["Wedding-season home refresh", "Traditional dining rooms", "Large window halls"],
    gallery: [img("C17"), img("C16"), img("C19")],
  },
  {
    slug: "printed-curtain-soft",
    name: "Printed Curtain",
    image: "/8_RvkvWEJCByjiBCgk6La.avif",
    tag: "Printed",
    description:
      "Soft-print curtains with subtle pattern movement—ideal when you want interest without dominating the room. Great for bedrooms and reading corners.",
    highlights: [
      "Soft prints for restful spaces",
      "Light-filtering and privacy balance",
      "Easy-care fabric recommendations",
      "Custom track or rod setup guidance",
    ],
    idealFor: ["Bedrooms", "Nurseries", "Home offices"],
    gallery: [img("C19"), img("C14"), img("C4")],
  },
  {
    slug: "indian-traditional-curtains-3",
    name: "Indian & Traditional Curtains",
    image: "/17PSMkkPUK5Dvo4ypxDKl.avif",
    tag: "Indian & Traditional",
    description:
      "Heritage-inspired curtains with premium fall for large living spaces. This style works beautifully with wooden furniture, brass accents, and warm lighting.",
    highlights: [
      "Statement traditional look for large windows",
      "Full-length styling with generous fullness",
      "Coordinated tie-backs and accessories on request",
      "Installation by experienced GRIHAM teams",
    ],
    idealFor: ["Villas", "Large living rooms", "Heritage-style homes"],
    gallery: [img("C1"), img("C22"), img("C11")],
  },
  {
    slug: "kids-room-curtains",
    name: "Kids Room Curtains",
    image: img("C9"),
    tag: "Kids Room",
    description:
      "Playful, safe, and easy-care curtains designed for children's rooms. Choose cheerful prints and practical fabrics that handle daily use while keeping the room bright and cozy.",
    highlights: [
      "Fun prints and colours kids love",
      "Safe, non-toxic fabric options on request",
      "Blackout lining available for better sleep",
      "Custom sizes for study nooks and bunk beds",
    ],
    idealFor: ["Kids bedrooms", "Playrooms", "Study areas"],
    gallery: [img("C9"), img("C5"), img("C8")],
  },
];

export const curtainFaqs = [
  {
    q: "What services do you offer?",
    a: "We specialize in designing, crafting, and installing custom curtains tailored to your style, space, and preferences. We also offer curtain accessories and hardware to complement your design.",
  },
  {
    q: "Can you make curtains for irregularly shaped windows?",
    a: "Absolutely! We provide solutions for all window shapes and sizes, including arched, bay, and extra-large windows.",
  },
  {
    q: "Do you offer in-home consultations?",
    a: "Yes, we provide in-home consultations to measure your space, discuss fabric options, and recommend designs that suit your interior.",
  },
  {
    q: "What types of fabrics do you use?",
    a: "We offer a wide variety of fabrics, including linen, velvet, silk, cotton, and polyester blends, as well as eco-friendly and blackout materials.",
  },
  {
    q: "Can I supply my own fabric?",
    a: "Yes, we can work with fabric you provide, as long as it meets our material requirements. Contact us for more details.",
  },
  {
    q: "Do you provide samples?",
    a: "Yes, we offer fabric swatches so you can see and feel the materials before making a decision.",
  },
  {
    q: "Can I customize the curtain length and width?",
    a: "Yes, every curtain is made to your exact measurements for a perfect fit.",
  },
  {
    q: "What types of curtain styles do you offer?",
    a: "We create various styles, including pleated, grommet, rod pocket, pinch pleat, and more. Let us know your preferred look!",
  },
  {
    q: "Do you offer motorized or smart curtains?",
    a: "Yes, we provide motorized curtain systems that integrate with smart home setups for added convenience.",
  },
  {
    q: "Do you provide installation services?",
    a: "Yes, we offer professional installation services to ensure your curtains are hung perfectly.",
  },
  {
    q: "How do I clean and maintain my custom curtains?",
    a: "Most of our curtains are dry-clean only, but we'll provide care instructions tailored to your fabric choice.",
  },
  {
    q: "How long does it take to make custom curtains?",
    a: "Production time typically ranges from 2 to 4 weeks, depending on the complexity of your order.",
  },
  {
    q: "How much do custom curtains cost?",
    a: "Pricing varies based on fabric, size, and design. Contact us for a free quote or use our online calculator for an estimate.",
  },
  {
    q: "What is your return or exchange policy?",
    a: "Since all curtains are custom-made, returns or exchanges are limited. However, we'll work to resolve any issues with quality or measurements.",
  },
  {
    q: "How can I place an order?",
    a: "You can place an order through our website, over the phone, or during an in-home consultation.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes, we ship our custom curtains worldwide. Shipping costs and times vary by location.",
  },
  {
    q: "How can I reach customer support?",
    a: "Contact us via email, phone, or our website's live chat. We're here to help with any questions or concerns.",
  },
];

export const curtainFilterOptions = ["All", "Printed", "Indian & Traditional", "Luxury Woven", "Kids Room", "Solid"] as const;

export type CurtainFilterOption = (typeof curtainFilterOptions)[number];

export type CurtainCategory = {
  param: string;
  name: string;
  tag: CurtainFilterOption;
  description: string;
  highlights: string[];
  idealFor: string[];
  heroImage: string;
  gallery: string[];
};

export function filterToParam(filter: string): string {
  if (filter.trim().toLowerCase() === "all") return "all";
  return filter
    .trim()
    .toLowerCase()
    .replace(/\s*&\s*/g, "-")
    .replace(/\s+/g, "-");
}

export function paramToFilter(param: string | null | undefined): CurtainFilterOption | null {
  if (!param) return null;
  const map: Record<string, CurtainFilterOption> = {
    all: "All",
    printed: "Printed",
    "indian-traditional": "Indian & Traditional",
    "luxury-woven": "Luxury Woven",
    "kids-room": "Kids Room",
    solid: "Solid",
  };
  return map[param.trim().toLowerCase()] ?? null;
}

const categoryCopy: Record<
  CurtainFilterOption,
  { description: string; highlights: string[]; idealFor: string[] }
> = {
  All: {
    description:
      "Explore our full curtain range — solid, printed, traditional, luxury woven, and kids room styles. Every design is made to measure with premium fabrics and professional installation.",
    highlights: [
      "Wide range of fabrics, colours, and pleat styles",
      "Blackout, sheer, and layered combinations",
      "Custom measurements for every window and door",
      "End-to-end consultation, stitching, and fitting",
    ],
    idealFor: ["Complete home upgrades", "Living rooms", "Bedrooms", "All window types"],
  },
  Printed: {
    description:
      "Designer printed curtains that add personality without overwhelming the room. From bold modern prints to soft patterns — made to measure with premium finish.",
    highlights: [
      "High-quality prints with fade-resistant tones",
      "Layering options with sheers or blackout linings",
      "Scale-balanced patterns for any room size",
      "Style guidance to match walls and furniture",
    ],
    idealFor: ["Living rooms", "Guest bedrooms", "Modern apartments", "Accent windows"],
  },
  "Indian & Traditional": {
    description:
      "Indian and traditional curtain styles inspired by classic motifs, warm tones, and festive elegance — tailored with a neat, modern finish.",
    highlights: [
      "Traditional patterns with contemporary stitching",
      "Custom sizing for arches, doors, and bay windows",
      "Warm palettes with premium fabric fall",
      "Ideal for festive and heritage interiors",
    ],
    idealFor: ["Pooja rooms", "Family living halls", "Traditional homes", "Large window halls"],
  },
  "Luxury Woven": {
    description:
      "Luxury woven curtains with textured depth and refined drape. Elevate formal living spaces and master bedrooms with a hotel-inspired feel.",
    highlights: [
      "Textured weave for depth and light play",
      "Premium finishing with neat hems and pleats",
      "Full-height styling for tall windows",
      "Coordinated hardware recommendations",
    ],
    idealFor: ["Master bedrooms", "Formal living rooms", "Premium renovations", "Villas"],
  },
  "Kids Room": {
    description:
      "Playful, safe, and easy-care curtains for children's rooms — cheerful prints and practical fabrics that handle daily use.",
    highlights: [
      "Fun prints and colours kids love",
      "Safe, non-toxic fabric options on request",
      "Blackout lining for better sleep",
      "Custom sizes for study nooks and bunk beds",
    ],
    idealFor: ["Kids bedrooms", "Playrooms", "Study areas", "Nurseries"],
  },
  Solid: {
    description:
      "Clean solid-tone curtains for calm, balanced elegance. Timeless colours that pair easily with any interior style.",
    highlights: [
      "Rich colour options with premium fabric fall",
      "Works for living room, bedroom, and study",
      "Custom stitching for width, length, and pleats",
      "Easy to coordinate with existing décor",
    ],
    idealFor: ["Minimal interiors", "Rent-friendly upgrades", "Offices", "Calm backdrops"],
  },
};

function itemsForFilter(filter: CurtainFilterOption) {
  if (filter === "All") return curtainsData;
  return curtainsData.filter((item) => item.tag === filter);
}

function buildCategory(filter: CurtainFilterOption): CurtainCategory {
  const items = itemsForFilter(filter);
  const installGallery = items.flatMap((item) => [...item.gallery, item.image]);
  const gallery =
    filter === "All"
      ? [...new Set([...styleGalleryImages.map((i) => i.src), ...installGallery])]
      : [...new Set(installGallery)];

  const copy = categoryCopy[filter];

  return {
    param: filterToParam(filter),
    name: filter === "All" ? "All Curtain Styles" : filter,
    tag: filter,
    description: copy.description,
    highlights: copy.highlights,
    idealFor: copy.idealFor,
    heroImage: gallery[0] ?? items[0]?.gallery[0] ?? items[0]?.image ?? "/images/curtains/C3.png",
    gallery,
  };
}

export const curtainCategories: CurtainCategory[] = curtainFilterOptions.map((filter) => buildCategory(filter));

export function getCategoryByParam(param: string) {
  return curtainCategories.find((category) => category.param === param.trim().toLowerCase());
}

export function categoryPageHref(filter: CurtainFilterOption) {
  return `/curtains/category/${filterToParam(filter)}`;
}

export function filterHref(filter: CurtainFilterOption) {
  if (filter === "All") return "/curtains";
  return categoryPageHref(filter);
}

export function getCategoryWhatsAppUrl(category: CurtainCategory, intent: "ask" | "book") {
  const message =
    intent === "book"
      ? [
          "Hi GRIHAM, I would like to book curtains.",
          `Style: ${category.name}`,
          "Please share pricing, fabric options, and installation timeline.",
        ].join("\n")
      : [
          "Hi GRIHAM, I have a question about curtains.",
          `Style: ${category.name}`,
          "Please share more details on fabric, colours, and measurements.",
        ].join("\n");

  return `${contactWhatsApp}?text=${encodeURIComponent(message)}`;
}
