import CategoryPageTemplate from "@/components/CategoryPageTemplate";
import ProductAllStylesGrid from "@/components/ProductAllStylesGrid";
import ProductCategoryFilters from "@/components/ProductCategoryFilters";
import {
  categoryPageHref,
  filterHref,
  woodenFlooringFilterOptions,
  woodenFlooringGalleryImages,
  woodenFlooringItems,
} from "@/lib/woodenFlooringData";
import { woodenFlooringReviews } from "@/lib/testimonials";

export default function WoodenFlooringPage() {
  return (
    <CategoryPageTemplate
      title="Wooden Flooring"
      subtitle="Natural wooden flooring finishes that bring warmth and elegance, crafted for durability, low maintenance, and a premium timeless look."
      badges={["Scratch-resistant options", "Matte and glossy finishes", "Expert installation", "Long-term durability"]}
      features={[
        { title: "Premium tone selection", desc: "Warm or deep luxury tones recommended based on lighting and wall palette for a cohesive finish." },
        { title: "Durable surface options", desc: "Scratch-resistant options for high traffic and practical daily maintenance." },
        { title: "Professional installation", desc: "Surface assessment + installation method planning for a stable and premium result." },
      ]}
      processSteps={[
        { title: "Assess existing floor", desc: "We check floor condition and recommend best installation approach." },
        { title: "Choose tone & finish", desc: "Finalize tone based on lighting and matching with furniture and walls." },
        { title: "Install & handover", desc: "Clean installation and maintenance guidance for a premium finish." },
      ]}
      highlights={[
        "Adds natural warmth and visual continuity to interiors.",
        "Improves premium value perception of the overall home.",
        "Available in multiple tones to suit modern and classic themes.",
      ]}
      items={[]}
      enableSearch={false}
      catalogSection={
        <div className="grid gap-5 sm:gap-6 md:gap-8 md:grid-cols-[240px_1fr]">
          <ProductCategoryFilters
            filters={woodenFlooringFilterOptions}
            activeFilter="All"
            getHref={filterHref}
            ariaLabel="Wooden flooring style filters"
          />
          <div className="min-w-0">
            <ProductAllStylesGrid
              productTitle="Wooden Flooring"
              items={woodenFlooringItems}
              getDetailHref={(tag) => categoryPageHref(tag as (typeof woodenFlooringFilterOptions)[number])}
            />
          </div>
        </div>
      }
      galleryImages={woodenFlooringGalleryImages}
      reviews={woodenFlooringReviews}
      faqs={[
        {
          question: "Is wooden flooring suitable for Indian weather?",
          answer: "Yes, with the right engineered options and installation method, it performs well across varied conditions.",
        },
        {
          question: "How much maintenance is required?",
          answer: "Routine dry mopping and occasional recommended cleaning are usually enough for upkeep.",
        },
        {
          question: "Can it be installed over existing flooring?",
          answer: "In many cases yes, depending on the surface condition and level uniformity.",
        },
      ]}
    />
  );
}
