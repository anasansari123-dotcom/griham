import ProductCategoryFilters from "@/components/ProductCategoryFilters";
import ProductCategoryPageLayout from "@/components/ProductCategoryPageLayout";
import {
  bedCategories,
  filterHref,
  getBedCategoryByParam,
  getBedCategoryWhatsAppUrl,
  bedFilterOptions,
  type BedFilterOption,
} from "@/lib/bedsData";
import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

type Props = { params: { filter: string } };

export function generateStaticParams() {
  return bedCategories.map((category) => ({ filter: category.param }));
}

export function generateMetadata({ params }: Props): Metadata {
  const category = getBedCategoryByParam(params.filter);
  if (!category) return { title: "Bed style not found" };
  return { title: `${category.name}`, description: category.description };
}

export default function BedCategoryPage({ params }: Props) {
  const category = getBedCategoryByParam(params.filter);
  if (!category) notFound();
  if (category.param === "all") redirect("/cots");

  return (
    <ProductCategoryPageLayout
      baseHref="/cots"
      productLabel="Beds"
      category={category}
      whatsAppUrl={getBedCategoryWhatsAppUrl(category)}
      filters={
        <ProductCategoryFilters
          filters={bedFilterOptions}
          activeFilter={category.tag as BedFilterOption}
          getHref={filterHref}
          ariaLabel="Bed style filters"
        />
      }
    />
  );
}
