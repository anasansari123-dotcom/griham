import CategoryPageTemplate from "@/components/CategoryPageTemplate";

const models = [
  { title: "Luxe L-Shape", subtitle: "Spacious family comfort", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
  { title: "Nordic Minimal", subtitle: "Clean modern silhouette", image: "/image_5.avif" },
  { title: "Classic Chester", subtitle: "Timeless statement style", image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=900&q=80" },
];

export default function SofaPage() {
  return (
    <CategoryPageTemplate
      title="Sofa"
      subtitle="Engineered comfort with made-for-you silhouettes, fabrics, and modular flexibility built for everyday lounging and premium living rooms."
      badges={["10-year frame warranty", "Custom dimensions", "Pet-friendly fabrics", "Modular configurations"]}
      highlights={[
        "Balanced support and sink-in comfort for daily use.",
        "Wide fabric, color, and armrest customization options.",
        "Designed to match both compact and spacious layouts.",
      ]}
      idealFor={[
        "Family living rooms with high daily usage.",
        "Compact apartments requiring space-smart seating.",
        "Premium lounge spaces and conversation corners.",
      ]}
      items={models}
      faqs={[
        {
          question: "Can I customize sofa size and fabric?",
          answer: "Yes, you can customize dimensions, fabric type, color, and comfort level.",
        },
        {
          question: "How long does custom sofa production take?",
          answer: "Timeline depends on design complexity and material choice, and we share a clear schedule before confirmation.",
        },
        {
          question: "Do you provide after-sales support?",
          answer: "Yes, we provide support and guidance for care, maintenance, and service requirements.",
        },
      ]}
    />
  );
}
