export type ProductItem = {
  name: string;
  image: string;
  tag?: string;
};

export type HomeCategoryItem = {
  name: string;
  href: string;
  image: string;
  alt: string;
};

export const storeAddress =
  "Shop 2 1st, AECS Layout, B Block, 534, Kundalahalli Main Rd, AECS Layout - C Block, AECS Layout, Brookefield, Bengaluru, Karnataka 560037, India";

export const contactPhone = "+91 7022970608";
export const contactPhoneHref = "tel:+917022970608";
export const contactEmail = "contact@grihamdecor.in";
export const contactEmailHref = `mailto:${contactEmail}`;
export const contactWebsite = "https://www.grihamdecor.in";
export const contactWhatsApp = "https://wa.me/917022970608";
export const businessHours = "Mon – Sat: 10:00 AM – 7:00 PM";

export const storeCoordinates = {
  lat: 12.9649257,
  lng: 77.7174075,
};

export const storeGoogleMapsPlaceUrl = "https://maps.app.goo.gl/cugzKxJKoRDtWFTe6";

const mapQuery = `${storeCoordinates.lat},${storeCoordinates.lng}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${mapQuery}+(Griham+Decor)&hl=en&z=18&output=embed`;
export const mapOpenUrl = storeGoogleMapsPlaceUrl;
export const mapDirectionsUrl = mapOpenUrl;

export type SocialLink = {
  name: string;
  href: string;
  icon: "instagram" | "facebook" | "whatsapp";
};

export const socialLinks: SocialLink[] = [
  { name: "Instagram", href: "https://www.instagram.com/griham.decor/", icon: "instagram" },
  { name: "Facebook", href: "https://www.facebook.com/grihamdecor", icon: "facebook" },
  { name: "WhatsApp", href: contactWhatsApp, icon: "whatsapp" },
];

export const collectionNavLinks = [
  { href: "/curtains", label: "Curtains" },
  { href: "/wallpapers", label: "Wallpapers" },
  { href: "/wall-panels", label: "Wall Panels" },
  { href: "/sofa", label: "Sofa" },
  { href: "/cots", label: "Beds" },
  { href: "/mattress", label: "Mattress" },
  { href: "/wooden-flooring", label: "Wooden Flooring" },
];

export const mainNavLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const navGroups = [
  {
    title: "Shop",
    links: [...collectionNavLinks, ...mainNavLinks],
  },
];

export const footerLinks = [
  { href: "/curtains", label: "Curtains" },
  { href: "/wallpapers", label: "Wallpapers" },
  { href: "/wall-panels", label: "Wall Panels" },
  { href: "/sofa", label: "Sofa" },
  { href: "/cots", label: "Beds" },
  { href: "/mattress", label: "Mattress" },
  { href: "/wooden-flooring", label: "Wooden Flooring" },
  { href: "/blog", label: "Blog" },
];

// Small square tiles in the "Our Collection" grid
export const homeCollectionCategories: HomeCategoryItem[] = [
  {
    name: "Curtains",
    href: "/curtains",
    image: "/images/collection/curtains.png",
    alt: "Designer printed curtains with premium fabric fall",
  },
  {
    name: "Wallpapers",
    href: "/wallpapers",
    image: "/images/collection/wallpapers.webp",
    alt: "Custom wallpaper pattern for modern interiors",
  },
  {
    name: "Wall Panels",
    href: "/wall-panels",
    image: "/images/collection/wall-panels.png",
    alt: "Floral accent wall panel with slat detailing in a living room",
  },
  {
    name: "Sofa",
    href: "/sofa",
    image: "/images/collection/sofa.png",
    alt: "Luxury curved sectional sofa in a premium living room",
  },
  {
    name: "Beds",
    href: "/cots",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80",
    alt: "Minimal wooden bed frame with upholstered headboard",
  },
  {
    name: "Mattress",
    href: "/mattress",
    image: "/images/collection/mattress.webp",
    alt: "Sleep Lite single mattress with premium comfort layers",
  },
  {
    name: "Wooden Flooring",
    href: "/wooden-flooring",
    image: "/images/wooden-flooring/wooden-flooring-collection.jpg",
    alt: "Warm-tone wooden flooring in a modern interior",
  },
];

// Larger cards in "Shop by category" (can use different imagery)
export const homeShopCategories: HomeCategoryItem[] = [
  {
    name: "Curtains",
    href: "/curtains",
    image: "/images/collection/curtains.png",
    alt: "Designer printed curtains with premium fabric fall",
  },
  {
    name: "Wallpapers",
    href: "/wallpapers",
    image: "/images/collection/wallpapers.webp",
    alt: "Custom wallpaper pattern for modern interiors",
  },
  {
    name: "Wall Panels",
    href: "/wall-panels",
    image: "/images/collection/wall-panels.png",
    alt: "Floral accent wall panel with slat detailing in a living room",
  },
  {
    name: "Sofa",
    href: "/sofa",
    image: "/images/collection/sofa.png",
    alt: "Luxury curved sectional sofa in a premium living room",
  },
  {
    name: "Beds",
    href: "/cots",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    alt: "Minimal wooden bed frame with upholstered headboard",
  },
  {
    name: "Mattress",
    href: "/mattress",
    image: "/images/collection/mattress.webp",
    alt: "Sleep Lite single mattress with premium comfort layers",
  },
  {
    name: "Wooden Flooring",
    href: "/wooden-flooring",
    image: "/images/wooden-flooring/wooden-flooring-collection.jpg",
    alt: "Warm-tone wooden flooring in a modern interior",
  },
];

// Backward-compatible alias used by older imports on the home page.
export const homeCategories = homeCollectionCategories;

