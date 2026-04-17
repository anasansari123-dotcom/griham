export type ProductItem = {
  name: string;
  image: string;
  tag?: string;
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

export const homeCategories = [
  { name: "Curtains", href: "/curtains", image: "/image_1.avif" },
  { name: "Wallpapers", href: "/wallpapers", image: "/image_2.avif" },
  { name: "Wall Panels", href: "/wall-panels", image: "/image_3.avif" },
  { name: "Sofa", href: "/sofa", image: "/image_4.avif" },
  { name: "Cots", href: "/cots", image: "/image_5.avif" },
  { name: "Mosquito Nets", href: "/mosquito-nets", image: "/image_6.avif" },
  { name: "Mattress", href: "/mattress", image: "/image_7.avif" },
  { name: "Wooden Flooring", href: "/wooden-flooring", image: "/image_8.avif" },
];

export const curtainsData: ProductItem[] = [
  { name: "Solid Curtain 01", image: "/CVFQx0LoEk5i8YCfY6U8S.avif", tag: "Solid" },
  { name: "Printed Curtain 01", image: "/J3bXmpQwZzacJI4MP_JCk.avif", tag: "Printed" },
  { name: "Embroidered Curtain 01", image: "/SIB7LUTBqFxMSbw3bbPJ3.avif", tag: "Embroidered" },
  { name: "Essential Curtain 01", image: "/E02KwJXTETaoWsfmQ9sNz.avif", tag: "Essential" },
  { name: "Custom Curtain 01", image: "/O_oaJzsDb-9kBIG1eC_PD.avif", tag: "Custom" },
  { name: "Essential Curtain 02", image: "/Dgy_d1Pifjlgq1-SuGuPA.avif", tag: "Essential" },
  { name: "Printed Curtain 02", image: "/8_RvkvWEJCByjiBCgk6La.avif", tag: "Printed" },
  { name: "Essential Curtain 03", image: "/17PSMkkPUK5Dvo4ypxDKl.avif", tag: "Essential" },
];

