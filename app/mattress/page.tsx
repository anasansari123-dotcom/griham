import CategoryPageTemplate from "@/components/CategoryPageTemplate";

const items = [
  { title: "Orthopedic Comfort", subtitle: "Firm posture support", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80" },
  { title: "Latex Natural Sleep", subtitle: "Breathable responsive feel", image: "https://images.unsplash.com/photo-1616627561839-074385245ff6?auto=format&fit=crop&w=900&q=80" },
  { title: "Hybrid Plush Support", subtitle: "Balanced comfort + support", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
];

export default function MattressPage() {
  return (
    <CategoryPageTemplate
      title="Mattress"
      subtitle="Supportive mattresses designed for deeper sleep with orthopedic, latex, and hybrid options tailored to your posture and comfort preference."
      badges={["Back support options", "Breathable layers", "Multiple firmness levels", "Sleep consultation"]}
      highlights={[
        "Improves sleep quality with posture-focused design.",
        "Available in soft, medium, and firm comfort profiles.",
        "Built using high-resilience and breathable material layers.",
      ]}
      idealFor={[
        "Users with back pain and posture support needs.",
        "Couples seeking motion-balanced sleep surfaces.",
        "Premium bedrooms requiring long-term comfort.",
      ]}
      items={items}
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
