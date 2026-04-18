import CategoryPageTemplate from "@/components/CategoryPageTemplate";

const items = [
  { title: "Heritage Teak Bed", subtitle: "Solid wood classic", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=80" },
  { title: "Storage Platform Bed", subtitle: "Utility-focused design", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80" },
  { title: "Minimal Frame Bed", subtitle: "Modern clean profile", image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=900&q=80" },
  { title: "Upholstered Headboard", subtitle: "Soft premium finish", image: "https://images.unsplash.com/photo-1616627561839-074385245ff6?auto=format&fit=crop&w=900&q=80" },
  { title: "Floating Platform", subtitle: "Modern luxury vibe", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80" },
  { title: "Compact Storage Bed", subtitle: "Space-smart solution", image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=900&q=80" },
];

const galleryImages = items.map((item, idx) => ({
  src: item.image,
  alt: `${item.title} bed inspiration ${idx + 1}`,
}));

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
      specs={[
        { label: "Best for", value: "Master bedrooms, guest rooms, compact rooms requiring storage" },
        { label: "Storage types", value: "Hydraulic lift, drawer storage (as per selection)" },
        { label: "Customization", value: "Size, headboard style, finish, storage configuration" },
        { label: "Durability", value: "High-strength frames with premium finishing (as per model)" },
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
      idealFor={[
        "Master bedrooms requiring statement bed designs.",
        "Compact rooms where under-bed storage matters.",
        "Guest rooms with durable long-term furniture needs.",
      ]}
      items={items}
      searchPlaceholder="Search by bed style or feature..."
      contentSections={[
        {
          title: "Storage configurations",
          body: "Choose hydraulic lift storage or drawer storage depending on daily usage and ease of access.",
        },
        {
          title: "Headboard styling",
          body: "Minimal, wooden, or upholstered headboards can be coordinated with curtains and wall finishes for a premium look.",
        },
        {
          title: "Sizing",
          body: "We help select the right bed size based on room measurements and clearance for side tables and circulation.",
        },
        {
          title: "Durability",
          body: "High-strength frames and premium finishing ensure long-term stability and clean aesthetics.",
        },
      ]}
      galleryImages={galleryImages}
      reviews={[
        { quote: "The storage bed is sturdy and the finish looks premium. Installation was quick and clean.", name: "Sanjay N.", rating: "5.0", meta: "Storage bed" },
        { quote: "They helped us choose the right size for our room. The headboard styling looks classy.", name: "Divya R.", rating: "4.9", meta: "Master bedroom" },
        { quote: "Great quality and comfort-focused design. Fits perfectly with our mattress and decor.", name: "Rahul K.", rating: "5.0", meta: "Beds" },
      ]}
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
