import type { MetadataRoute } from "next";
import { bedCategories } from "@/lib/bedsData";
import { curtainCategories } from "@/lib/curtainsData";
import { sofaCategories } from "@/lib/sofaData";
import { wallPanelCategories } from "@/lib/wallPanelsData";
import { wallpaperCategories } from "@/lib/wallpapersData";
import { mattressCategories } from "@/lib/mattressData";
import { woodenFlooringCategories } from "@/lib/woodenFlooringData";

const BASE_URL = "https://www.grihamdecor.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/curtains",
    ...curtainCategories.map((category) => `/curtains/category/${category.param}`),
    "/wallpapers",
    ...wallpaperCategories.map((category) => `/wallpapers/category/${category.param}`),
    "/wall-panels",
    ...wallPanelCategories.map((category) => `/wall-panels/category/${category.param}`),
    "/sofa",
    ...sofaCategories.map((category) => `/sofa/category/${category.param}`),
    "/cots",
    ...bedCategories.map((category) => `/cots/category/${category.param}`),
    "/mattress",
    ...mattressCategories.map((category) => `/mattress/category/${category.param}`),
    "/wooden-flooring",
    ...woodenFlooringCategories.map((category) => `/wooden-flooring/category/${category.param}`),
    "/book-consultation",
    "/contact",
    "/blog",
    ...[
      "how-to-choose-curtains-for-living-room",
      "l-shape-vs-u-shape-sofa-guide",
      "wallpaper-vs-wall-panels",
      "wooden-flooring-care-tips",
      "mattress-buying-guide-better-sleep",
      "home-decor-trends-2026",
    ].map((slug) => `/blog/${slug}`),
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
