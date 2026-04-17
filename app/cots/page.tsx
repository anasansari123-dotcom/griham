import CategoryPageTemplate from "@/components/CategoryPageTemplate";

const items = [
  { title: "Heritage Teak Bed", subtitle: "Solid wood classic", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=80" },
  { title: "Storage Platform Bed", subtitle: "Utility-focused design", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80" },
  { title: "Minimal Frame Bed", subtitle: "Modern clean profile", image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=900&q=80" },
];

export default function CotsPage() {
  return (
    <CategoryPageTemplate
      title="Beds"
      subtitle="Solid wood and engineered-frame bed designs focused on comfort, durability, and clean aesthetics across storage, minimal, and heritage styles."
      badges={["Storage options", "Durable frame build", "Custom sizes", "Elegant headboard styles"]}
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
