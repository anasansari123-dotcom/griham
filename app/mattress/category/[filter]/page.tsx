import ProductCategoryFilters from "@/components/ProductCategoryFilters";
import ProductCategoryPageLayout from "@/components/ProductCategoryPageLayout";
import {
  filterHref,
  getMattressCategoryByParam,
  getMattressCategoryWhatsAppUrl,
  mattressCategories,
  mattressFilterOptions,
  type MattressFilterOption,
} from "@/lib/mattressData";
import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

type Props = { params: { filter: string } };

export function generateStaticParams() {
  return mattressCategories.map((category) => ({ filter: category.param }));
}

export function generateMetadata({ params }: Props): Metadata {
  const category = getMattressCategoryByParam(params.filter);
  if (!category) return { title: "Mattress style not found" };
  return { title: `${category.name} Mattress`, description: category.description };
}

export default function MattressCategoryPage({ params }: Props) {
  const category = getMattressCategoryByParam(params.filter);
  if (!category) notFound();
  if (category.param === "all") redirect("/mattress");

  return (
    <ProductCategoryPageLayout
      baseHref="/mattress"
      productLabel="Mattress"
      category={category}
      whatsAppUrl={getMattressCategoryWhatsAppUrl(category)}
      filters={
        <ProductCategoryFilters
          filters={mattressFilterOptions}
          activeFilter={category.tag as MattressFilterOption}
          getHref={filterHref}
          ariaLabel="Mattress style filters"
        />
      }
    />
  );
}
