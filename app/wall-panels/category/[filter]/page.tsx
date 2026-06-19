import ProductCategoryFilters from "@/components/ProductCategoryFilters";
import ProductCategoryPageLayout from "@/components/ProductCategoryPageLayout";
import {
  filterHref,
  getWallPanelCategoryByParam,
  getWallPanelCategoryWhatsAppUrl,
  wallPanelCategories,
  wallPanelFilterOptions,
  type WallPanelFilterOption,
} from "@/lib/wallPanelsData";
import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

type Props = { params: { filter: string } };

export function generateStaticParams() {
  return wallPanelCategories.map((category) => ({ filter: category.param }));
}

export function generateMetadata({ params }: Props): Metadata {
  const category = getWallPanelCategoryByParam(params.filter);
  if (!category) return { title: "Wall panel style not found" };
  return { title: `${category.name}`, description: category.description };
}

export default function WallPanelCategoryPage({ params }: Props) {
  const category = getWallPanelCategoryByParam(params.filter);
  if (!category) notFound();
  if (category.param === "all") redirect("/wall-panels");

  return (
    <ProductCategoryPageLayout
      baseHref="/wall-panels"
      productLabel="Wall Panels"
      category={category}
      whatsAppUrl={getWallPanelCategoryWhatsAppUrl(category)}
      filters={
        <ProductCategoryFilters
          filters={wallPanelFilterOptions}
          activeFilter={category.tag as WallPanelFilterOption}
          getHref={filterHref}
          ariaLabel="Wall panel style filters"
        />
      }
    />
  );
}
