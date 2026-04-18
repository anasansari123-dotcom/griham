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
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
