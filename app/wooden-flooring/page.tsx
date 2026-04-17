import CategoryPageTemplate from "@/components/CategoryPageTemplate";

const items = [
  { title: "Natural Oak", subtitle: "Warm timeless grains", image: "/images/wooden-flooring/natural-oak.png" },
  { title: "Walnut Matte", subtitle: "Contemporary deep tone", image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=900&q=80" },
  { title: "Teak Rustic", subtitle: "Classic premium texture", image: "/images/wooden-flooring/teak-rustic.png" },
];

export default function WoodenFlooringPage() {
  return (
    <CategoryPageTemplate
      title="Wooden Flooring"
      subtitle="Natural wooden flooring finishes that bring warmth and elegance, crafted for durability, low maintenance, and a premium timeless look."
      badges={["Scratch-resistant options", "Matte and glossy finishes", "Expert installation", "Long-term durability"]}
      highlights={[
        "Adds natural warmth and visual continuity to interiors.",
        "Improves premium value perception of the overall home.",
        "Available in multiple tones to suit modern and classic themes.",
      ]}
      idealFor={[
        "Living rooms and master bedrooms with premium styling.",
        "Apartment renovations requiring fast aesthetic upgrades.",
        "Office cabins and lounge spaces with elegant ambiance.",
      ]}
      items={items}
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
