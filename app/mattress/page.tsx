import CategoryPageTemplate from "@/components/CategoryPageTemplate";
import ProductAllStylesGrid from "@/components/ProductAllStylesGrid";
import ProductCategoryFilters from "@/components/ProductCategoryFilters";
import {
  categoryPageHref,
  filterHref,
  mattressFilterOptions,
  mattressGalleryImages,
  mattressItems,
} from "@/lib/mattressData";
import { mattressReviews } from "@/lib/testimonials";

export default function MattressPage() {
  return (
    <CategoryPageTemplate
      title="Mattress"
      subtitle="Supportive mattresses designed for deeper sleep with orthopedic, latex, and hybrid options tailored to your posture and comfort preference."
      badges={["Back support options", "Breathable layers", "Multiple firmness levels", "Sleep consultation"]}
      features={[
        { title: "Posture-focused support", desc: "Recommendations based on sleep position and support needs for better daily comfort." },
        { title: "Breathable comfort layers", desc: "Material options for airflow and comfortable sleep experience, especially for warm weather." },
        { title: "Balanced motion control", desc: "Options that reduce partner disturbance and improve uninterrupted sleep." },
      ]}
      processSteps={[
        { title: "Share sleep preference", desc: "Tell us your posture needs and comfort preference (soft/medium/firm)." },
        { title: "Shortlist & finalize", desc: "We recommend type and firmness with size guidance for your bed." },
        { title: "Setup guidance", desc: "Care and usage guidance for longer life and consistent support." },
      ]}
      highlights={[
        "Improves sleep quality with posture-focused design.",
        "Available in soft, medium, and firm comfort profiles.",
        "Built using high-resilience and breathable material layers.",
      ]}
      items={[]}
      enableSearch={false}
      catalogSection={
        <div className="grid gap-5 sm:gap-6 md:gap-8 md:grid-cols-[240px_1fr]">
          <ProductCategoryFilters
            filters={mattressFilterOptions}
            activeFilter="All"
            getHref={filterHref}
            ariaLabel="Mattress style filters"
          />
          <div className="min-w-0">
            <ProductAllStylesGrid
              productTitle="Mattress"
              items={mattressItems}
              getDetailHref={(tag) => categoryPageHref(tag as (typeof mattressFilterOptions)[number])}
            />
          </div>
        </div>
      }
      galleryImages={mattressGalleryImages}
      reviews={mattressReviews}
      faqs={[
        {
          question: "How do I choose firmness level?",
          answer: "We recommend firmness based on sleep position, body support requirement, and comfort preference.",
        },
        {
          question: "Can mattress size be customized?",
          answer: "Yes, we can help with standard and custom bed size requirements.",
        },
        {
          question: "How long does mattress performance last?",
          answer: "With proper usage and rotation, premium mattresses provide consistent support for several years.",
        },
      ]}
    />
  );
}
