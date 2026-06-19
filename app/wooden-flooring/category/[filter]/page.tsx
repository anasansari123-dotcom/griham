import ProductCategoryFilters from "@/components/ProductCategoryFilters";
import ProductCategoryPageLayout from "@/components/ProductCategoryPageLayout";
import {
  filterHref,
  getWoodenFlooringCategoryByParam,
  getWoodenFlooringCategoryWhatsAppUrl,
  woodenFlooringCategories,
  woodenFlooringFilterOptions,
  type WoodenFlooringFilterOption,
} from "@/lib/woodenFlooringData";
import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

type Props = { params: { filter: string } };

export function generateStaticParams() {
  return woodenFlooringCategories.map((category) => ({ filter: category.param }));
}

export function generateMetadata({ params }: Props): Metadata {
  const category = getWoodenFlooringCategoryByParam(params.filter);
  if (!category) return { title: "Flooring style not found" };
  return { title: `${category.name} Wooden Flooring`, description: category.description };
}

export default function WoodenFlooringCategoryPage({ params }: Props) {
  const category = getWoodenFlooringCategoryByParam(params.filter);
  if (!category) notFound();
  if (category.param === "all") redirect("/wooden-flooring");

  return (
    <ProductCategoryPageLayout
      baseHref="/wooden-flooring"
      productLabel="Wooden Flooring"
      category={category}
      whatsAppUrl={getWoodenFlooringCategoryWhatsAppUrl(category)}
      filters={
        <ProductCategoryFilters
          filters={woodenFlooringFilterOptions}
          activeFilter={category.tag as WoodenFlooringFilterOption}
          getHref={filterHref}
          ariaLabel="Wooden flooring style filters"
        />
      }
    />
  );
}
