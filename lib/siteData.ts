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
  "534 Shop 2 1st Cross A E C S B Block, Kundalahalli Main Rd, AECS Layout - C Block, AECS Layout, Brookefield, Bengaluru, Karnataka 560037";

export const contactPhone = "+91 7022970608";
export const contactPhoneHref = "tel:+917022970608";
export const contactEmail = "contact@grihamdecor.in";
export const contactEmailHref = `mailto:${contactEmail}`;
export const contactWebsite = "https://www.grihamdecor.in";
export const contactWhatsApp = "https://wa.me/917022970608";
export const businessHours = "Mon – Sat: 10:00 AM – 7:00 PM";

const mapQuery = encodeURIComponent(storeAddress);
export const mapEmbedUrl = `https://maps.google.com/maps?q=${mapQuery}&hl=en&z=16&output=embed`;
export const mapDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

export type SocialLink = {
  name: string;
  href: string;
  icon: "instagram" | "facebook" | "whatsapp";
};

export const socialLinks: SocialLink[] = [
  { name: "Instagram", href: "https://www.instagram.com/grihamdecor", icon: "instagram" },
  { name: "Facebook", href: "https://www.facebook.com/grihamdecor", icon: "facebook" },
  { name: "WhatsApp", href: contactWhatsApp, icon: "whatsapp" },
];

export const collectionNavLinks = [
  { href: "/curtains", label: "Curtains" },
  { href: "/wallpapers", label: "Wallpapers" },
  { href: "/wall-panels", label: "Wall Panels" },
  { href: "/sofa", label: "Sofa" },
  { href: "/cots", label: "Beds" },
  { href: "/mosquito-nets", label: "Home Decor" },
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
  { href: "/mosquito-nets", label: "Home Decor" },
  { href: "/mattress", label: "Mattress" },
  { href: "/wooden-flooring", label: "Wooden Flooring" },
  { href: "/blog", label: "Blog" },
];

// Small square tiles in the "Our Collection" grid
export const homeCollectionCategories: HomeCategoryItem[] = [
  {
    name: "Curtains",
    href: "/curtains",
    image: "/image_1.avif",
    alt: "Elegant beige window curtains in a bright living room",
  },
  {
    name: "Wallpapers",
    href: "/wallpapers",
    image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1000&q=80",
    alt: "Decorative patterned wallpaper on a modern interior wall",
  },
  {
    name: "Wall Panels",
    href: "/wall-panels",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1000&q=80",
    alt: "Textured wall panel design in a contemporary home",
  },
  {
    name: "Sofa",
    href: "/sofa",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80",
    alt: "Premium modern sofa in a living room setting",
  },
  {
    name: "Beds",
    href: "/cots",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80",
    alt: "Minimal wooden bed frame with upholstered headboard",
  },
  {
    name: "Home Decor",
    href: "/mosquito-nets",
    image: "https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=1000&q=80",
    alt: "Flower vase and home decor accents on a table",
  },
  {
    name: "Mattress",
    href: "/mattress",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1000&q=80",
    alt: "Comfortable premium mattress on a styled bed setup",
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
    image: "/image_1.avif",
    alt: "Elegant beige window curtains in a bright living room",
  },
  {
    name: "Wallpapers",
    href: "/wallpapers",
    image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1200&q=80",
    alt: "Decorative patterned wallpaper on a modern interior wall",
  },
  {
    name: "Wall Panels",
    href: "/wall-panels",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80",
    alt: "Textured wall panel design in a contemporary home",
  },
  {
    name: "Sofa",
    href: "/sofa",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
    alt: "Premium modern sofa in a living room setting",
  },
  {
    name: "Beds",
    href: "/cots",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    alt: "Minimal wooden bed frame with upholstered headboard",
  },
  {
    name: "Home Decor",
    href: "/mosquito-nets",
    image: "https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=1200&q=80",
    alt: "Flower vase and home decor accents on a table",
  },
  {
    name: "Mattress",
    href: "/mattress",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
    alt: "Comfortable premium mattress on a styled bed setup",
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

export const curtainsData: ProductItem[] = [
  { name: "Solid Curtain", image: "/CVFQx0LoEk5i8YCfY6U8S.avif", tag: "Solid" },
  { name: "Printed Curtain", image: "/J3bXmpQwZzacJI4MP_JCk.avif", tag: "Printed" },
  { name: "Embroidered Curtain", image: "/SIB7LUTBqFxMSbw3bbPJ3.avif", tag: "Embroidered" },
  { name: "Essential Curtain", image: "/E02KwJXTETaoWsfmQ9sNz.avif", tag: "Essential" },
  { name: "Custom Curtain", image: "/O_oaJzsDb-9kBIG1eC_PD.avif", tag: "Custom" },
  { name: "Essential Curtain", image: "/Dgy_d1Pifjlgq1-SuGuPA.avif", tag: "Essential" },
  { name: "Printed Curtain", image: "/8_RvkvWEJCByjiBCgk6La.avif", tag: "Printed" },
  { name: "Essential Curtain", image: "/17PSMkkPUK5Dvo4ypxDKl.avif", tag: "Essential" },
];

