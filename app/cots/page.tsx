import CategoryPageTemplate from "@/components/CategoryPageTemplate";
import { bedGalleryImages, bedItems } from "@/lib/bedsData";
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
      // specs={[
      //   { label: "Best for", value: "Master bedrooms, guest rooms, compact rooms requiring storage" },
      //   { label: "Storage types", value: "Hydraulic lift, drawer storage (as per selection)" },
      //   { label: "Customization", value: "Size, headboard style, finish, storage configuration" },
      //   { label: "Durability", value: "High-strength frames with premium finishing (as per model)" },
      // ]}
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
      items={bedItems}
      searchPlaceholder="Search by bed style or feature..."
      // contentSections={[
      //   {
      //     title: "Storage configurations",
      //     body: "Choose hydraulic lift storage or drawer storage depending on daily usage and ease of access.",
      //   },
      //   {
      //     title: "Headboard styling",
      //     body: "Minimal, wooden, or upholstered headboards can be coordinated with curtains and wall finishes for a premium look.",
      //   },
      //   {
      //     title: "Sizing",
      //     body: "We help select the right bed size based on room measurements and clearance for side tables and circulation.",
      //   },
      //   {
      //     title: "Durability",
      //     body: "High-strength frames and premium finishing ensure long-term stability and clean aesthetics.",
      //   },
      // ]}
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
