import ProductCategoryFilters from "@/components/ProductCategoryFilters";
import ProductCategoryPageLayout from "@/components/ProductCategoryPageLayout";
import {
  getWallpaperCategoryByParam,
  getWallpaperCategoryWhatsAppUrl,
  wallpaperCategories,
  wallpaperFilterOptions,
  filterHref,
  type WallpaperFilterOption,
} from "@/lib/wallpapersData";
import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

type Props = { params: { filter: string } };

export function generateStaticParams() {
  return wallpaperCategories.map((category) => ({ filter: category.param }));
}

export function generateMetadata({ params }: Props): Metadata {
  const category = getWallpaperCategoryByParam(params.filter);
  if (!category) return { title: "Wallpaper style not found" };
  return { title: `${category.name} Wallpapers`, description: category.description };
}

export default function WallpaperCategoryPage({ params }: Props) {
  const category = getWallpaperCategoryByParam(params.filter);
  if (!category) notFound();
  if (category.param === "all") redirect("/wallpapers");

  return (
    <ProductCategoryPageLayout
      baseHref="/wallpapers"
      productLabel="Wallpapers"
      category={category}
      whatsAppUrl={getWallpaperCategoryWhatsAppUrl(category)}
      filters={
        <ProductCategoryFilters
          filters={wallpaperFilterOptions}
          activeFilter={category.tag as WallpaperFilterOption}
          getHref={filterHref}
          ariaLabel="Wallpaper style filters"
        />
      }
    />
  );
}
