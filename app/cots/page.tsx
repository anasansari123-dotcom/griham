import CategoryPageTemplate from "@/components/CategoryPageTemplate";
import ProductAllStylesGrid from "@/components/ProductAllStylesGrid";
import ProductCategoryFilters from "@/components/ProductCategoryFilters";
import {
  bedFilterOptions,
  bedGalleryImages,
  bedItems,
  categoryPageHref,
  filterHref,
} from "@/lib/bedsData";
import { bedsReviews } from "@/lib/testimonials";

export default function CotsPage() {
  return (
    <CategoryPageTemplate
      title="Beds"
      subtitle="Solid wood and engineered-frame bed designs focused on comfort, durability, and clean aesthetics across storage, minimal, and heritage styles."
      badges={["Storage options", "Durable frame build", "Custom sizes", "Elegant headboard styles"]}
      features={[
        { title: "Room-fit sizing", desc: "We recommend bed size based on clearance for side tables and smooth movement around the bed." },
        { title: "Storage options", desc: "Hydraulic lift or drawer storage options for compact rooms and organized premium bedrooms." },
        { title: "Finish coordination", desc: "Headboard and finish options aligned to curtains, wall finishes, and flooring tones." },
      ]}
      processSteps={[
        { title: "Measure & plan", desc: "Share room size and layout. We suggest optimal bed size and storage type." },
        { title: "Select style", desc: "Finalize headboard/finish that matches the room palette and lighting." },
        { title: "Deliver & install", desc: "Professional installation with alignment checks and finishing." },
      ]}
      highlights={[
        "Designed for both posture support and visual elegance.",
        "Multiple storage and headboard configurations available.",
        "Premium finish options to match your room theme.",
      ]}
      items={[]}
      enableSearch={false}
      catalogSection={
        <div className="grid gap-5 sm:gap-6 md:gap-8 md:grid-cols-[240px_1fr]">
          <ProductCategoryFilters
            filters={bedFilterOptions}
            activeFilter="All"
            getHref={filterHref}
            ariaLabel="Bed style filters"
          />
          <div className="min-w-0">
            <ProductAllStylesGrid
              productTitle="Bed"
              items={bedItems}
              getDetailHref={(tag) => categoryPageHref(tag as (typeof bedFilterOptions)[number])}
            />
          </div>
        </div>
      }
      galleryImages={bedGalleryImages}
      reviews={bedsReviews}
      faqs={[
        {
          question: "Can beds be customized to mattress size?",
          answer: "Yes, we offer made-to-size options based on your preferred mattress dimensions.",
        },
        {
          question: "Do you offer storage bed variants?",
          answer: "Yes, hydraulic and drawer-style storage variants are available.",
        },
        {
          question: "Which finish is easiest to maintain?",
          answer: "Matte laminate and protected wood finishes are popular for daily low-maintenance use.",
        },
      ]}
    />
  );
}
