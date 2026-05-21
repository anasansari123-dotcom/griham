import type { MetadataRoute } from "next";

const BASE_URL = "https://www.grihamdecor.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/curtains",
    "/wallpapers",
    "/wall-panels",
    "/sofa",
    "/cots",
    "/mosquito-nets",
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
