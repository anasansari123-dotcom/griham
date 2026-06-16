import type { MetadataRoute } from "next";
import { curtainCategories } from "@/lib/curtainsData";
import { sofaCategories } from "@/lib/sofaData";

const BASE_URL = "https://www.grihamdecor.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/curtains",
    ...curtainCategories.map((category) => `/curtains/category/${category.param}`),
    "/wallpapers",
    "/wall-panels",
    "/sofa",
    ...sofaCategories.map((category) => `/sofa/category/${category.param}`),
    "/cots",
    "/mattress",
    "/wooden-flooring",
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
