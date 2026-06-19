import CategoryPageTemplate from "@/components/CategoryPageTemplate";
import ProductAllStylesGrid from "@/components/ProductAllStylesGrid";
import ProductCategoryFilters from "@/components/ProductCategoryFilters";
import {
  categoryPageHref,
  filterHref,
  wallPanelFilterOptions,
  wallPanelGalleryImages,
  wallPanelItems,
} from "@/lib/wallPanelsData";
import { wallPanelsReviews } from "@/lib/testimonials";

export default function WallPanelsPage() {
  return (
    <CategoryPageTemplate
      title="Wall Panels"
      subtitle="Statement-ready wall panels that add depth, warmth, and character for living rooms, TV units, reception areas, and accent walls."
      badges={["Acoustic-friendly options", "Easy maintenance", "Custom finishes", "Professional fitment"]}
      features={[
        {
          title: "Premium depth & texture",
          desc: "Instantly elevates interiors with layered finishes—wood slats, fluted, 3D textures, and modern looks.",
        },
        {
          title: "Wiring-friendly planning",
          desc: "Ideal for TV walls—helps conceal wires and creates a clean organized focal point.",
        },
        {
          title: "Fast, clean installation",
          desc: "Professional fitment with aligned seams and finishing so the wall looks seamless.",
        },
      ]}
      specs={[
        { label: "Best for", value: "TV unit walls, accent walls, reception areas, bedrooms" },
        { label: "Popular styles", value: "Wood slats, fluted, 3D textures, stone look, fabric feel" },
        { label: "Acoustic options", value: "Available for media rooms and lounges (as per selection)" },
        { label: "Maintenance", value: "Wipe-friendly finishes; care guidance per texture" },
      ]}
      processSteps={[
        {
          title: "Wall assessment",
          desc: "Share measurements + photos. We plan layout, panel type, and wiring points if required.",
        },
        {
          title: "Finish selection",
          desc: "Confirm texture and shade to match sofa, curtains, and flooring for a premium theme.",
        },
        { title: "Fitment & handover", desc: "Clean installation with aligned edges and final checks." },
      ]}
      highlights={[
        "Creates a premium layered interior feel instantly.",
        "Helps conceal uneven surfaces and wiring zones cleanly.",
        "Available in wood, fluted, and modern textured looks.",
      ]}
      items={[]}
      enableSearch={false}
      catalogSection={
        <div className="grid gap-5 sm:gap-6 md:gap-8 md:grid-cols-[240px_1fr]">
          <ProductCategoryFilters
            filters={wallPanelFilterOptions}
            activeFilter="All"
            getHref={filterHref}
            ariaLabel="Wall panel style filters"
          />
          <div className="min-w-0">
            <ProductAllStylesGrid
              productTitle="Wall Panel"
              items={wallPanelItems}
              getDetailHref={(tag) => categoryPageHref(tag as (typeof wallPanelFilterOptions)[number])}
            />
          </div>
        </div>
      }
      galleryImages={wallPanelGalleryImages}
      contentSections={[
        {
          title: "Material choices",
          body: "Pick from wood slats, fluted patterns, 3D textures, or fabric-like finishes. We guide you on what works best for your room lighting and usage.",
        },
        {
          title: "TV unit & wiring",
          body: "Panels are great for organizing wiring and creating a clean TV wall. We plan cutouts and concealed routing for a neat premium finish.",
        },
        {
          title: "Acoustic comfort",
          body: "For lounges and media rooms, acoustic-friendly options help reduce echo and improve sound comfort in daily use.",
        },
        {
          title: "Maintenance",
          body: "Most finishes are wipe-friendly with simple upkeep. We share care guidelines for the selected texture.",
        },
      ]}
      reviews={wallPanelsReviews}
      faqs={[
        {
          question: "Do wall panels require major wall changes?",
          answer: "In most projects, no major civil work is needed and fitment can be completed efficiently.",
        },
        {
          question: "Can I match panel color with furniture?",
          answer: "Yes, we help you align panel textures and shades with existing furniture and flooring.",
        },
        {
          question: "Are wall panels durable in daily use?",
          answer: "Yes, with quality material and proper installation, they stay durable and easy to maintain.",
        },
      ]}
    />
  );
}
