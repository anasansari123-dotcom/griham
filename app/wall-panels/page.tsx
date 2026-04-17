import CategoryPageTemplate from "@/components/CategoryPageTemplate";

const panels = [
  {
    title: "Wood Slat Accent",
    subtitle: "Warm linear texture",
    image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "3D Sculpted Panel",
    subtitle: "Depth and visual drama",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Matte Fluted Panel",
    subtitle: "Contemporary luxury finish",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=80",
  },
];

export default function WallPanelsPage() {
  return (
    <CategoryPageTemplate
      title="Wall Panels"
      subtitle="Statement-ready wall panels that add depth, warmth, and character for living rooms, TV units, reception areas, and accent walls."
      badges={["Acoustic-friendly options", "Easy maintenance", "Custom finishes", "Professional fitment"]}
      highlights={[
        "Creates a premium layered interior feel instantly.",
        "Helps conceal uneven surfaces and wiring zones cleanly.",
        "Available in wood, fluted, and modern textured looks.",
      ]}
      idealFor={[
        "TV back walls and focal living room accents.",
        "Reception zones and office lounges.",
        "Luxury bedroom headboard backdrops.",
      ]}
      items={panels}
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
