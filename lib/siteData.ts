export type ProductItem = {
  name: string;
  image: string;
  tag?: string;
};

export type HomeCategoryItem = {
  name: string;
  href: string;
  image: string;
};

export const navGroups = [
  {
    title: "Shop",
    links: [
      { href: "/curtains", label: "Curtains" },
      { href: "/wallpapers", label: "Wallpapers" },
      { href: "/wall-panels", label: "Wall Panels" },
      { href: "/sofa", label: "Sofa" },
      { href: "/cots", label: "Cots" },
      { href: "/mosquito-nets", label: "Mosquito Nets" },
      { href: "/mattress", label: "Mattress" },
      { href: "/wooden-flooring", label: "Wooden Flooring" },
    ],
  },
];

// Small square tiles in the "Our Collection" grid
export const homeCollectionCategories: HomeCategoryItem[] = [
  { name: "Curtains", href: "/curtains", image: "/image_1.avif" },
  { name: "Wallpapers", href: "/wallpapers", image: "/image_2.avif" },
  { name: "Wall Panels", href: "/wall-panels", image: "/image_3.avif" },
  { name: "Sofa", href: "/sofa", image: "/image_4.avif" },
  { name: "Cots", href: "/cots", image: "/image_5.avif" },
  { name: "Mosquito Nets", href: "/mosquito-nets", image: "/image_6.avif" },
  { name: "Mattress", href: "/mattress", image: "/image_7.avif" },
  { name: "Wooden Flooring", href: "/wooden-flooring", image: "/images/wooden-flooring/wooden-flooring-collection.jpg" },
];

// Larger cards in "Shop by category" (can use different imagery)
export const homeShopCategories: HomeCategoryItem[] = [
  { name: "Curtains", href: "/curtains", image: "/image_1.avif" },
  { name: "Wallpapers", href: "/wallpapers", image: "/image_2.avif" },
  { name: "Wall Panels", href: "/wall-panels", image: "/image_3.avif" },
  { name: "Sofa", href: "/sofa", image: "/image_4.avif" },
  { name: "Cots", href: "/cots", image: "/image_5.avif" },
  { name: "Mosquito Nets", href: "/mosquito-nets", image: "/image_6.avif" },
  { name: "Mattress", href: "/mattress", image: "/image_7.avif" },
  { name: "Wooden Flooring", href: "/wooden-flooring", image: "/images/wooden-flooring/wooden-flooring-collection.jpg" },
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

