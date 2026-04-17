import CategoryPageTemplate from "@/components/CategoryPageTemplate";

const items = [
  {
    title: "Textured Luxe",
    subtitle: "Depth-rich premium texture",
    image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Minimal Geometric",
    subtitle: "Modern clean patterns",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Classic Motif",
    subtitle: "Elegant timeless designs",
    image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=900&q=80",
  },
];

export default function WallpapersPage() {
  return (
    <CategoryPageTemplate
      title="Wallpapers"
      subtitle="Elevate your walls with premium textures, patterns, and designer finishes for feature walls, bedrooms, living rooms, and workspaces."
      badges={["Moisture-resistant options", "Premium texture", "Designer patterns", "Professional installation"]}
      highlights={[
        "Instantly upgrades plain walls into statement surfaces.",
        "Available in subtle, bold, and luxury themed design collections.",
        "Low-maintenance finishes with durable color retention.",
      ]}
      idealFor={[
        "Feature walls in living rooms and bedrooms.",
        "Home office and studio backdrops.",
        "Boutique interiors, cafes, and reception zones.",
      ]}
      items={items}
      faqs={[
        {
          question: "Can wallpapers be used in rental homes?",
          answer: "Yes, we can recommend options that are easier to replace while preserving the wall finish.",
        },
        {
          question: "Do you help choose patterns based on room size?",
          answer: "Yes, our team suggests scale and color combinations that match your room dimensions and lighting.",
        },
        {
          question: "Are these easy to maintain?",
          answer: "Most premium wallpapers are wipe-friendly and built for everyday maintenance.",
        },
      ]}
    />
  );
}
