import CategoryPageTemplate from "@/components/CategoryPageTemplate";

const items = [
  { title: "Accent Decor Set", subtitle: "Vases, frames, and soft accents", image: "https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=900&q=80" },
  { title: "Statement Decor Corner", subtitle: "Layered premium styling", image: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?auto=format&fit=crop&w=900&q=80" },
  { title: "Functional Decor Pairing", subtitle: "Style with utility balance", image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80" },
];

export default function MosquitoNetsPage() {
  return (
    <CategoryPageTemplate
      title="Home Decor"
      subtitle="Curated decor pieces and styling combinations that complete your home with warmth, character, and a cohesive premium look."
      badges={["Curated styling", "Modern + classic themes", "Space-smart decor", "Custom recommendation"]}
      highlights={[
        "Adds personality and finishing touch to every room.",
        "Helps tie furniture, walls, and fabrics into one design language.",
        "Layered styling options from minimal to luxury aesthetics.",
      ]}
      idealFor={[
        "Living room corners and console styling.",
        "Bedroom side-table and dresser decor plans.",
        "Dining, entry foyer, and statement shelf styling.",
      ]}
      items={items}
      faqs={[
        {
          question: "Can you suggest decor based on existing furniture?",
          answer: "Yes, our decor picks are matched to your current furniture, wall finishes, and color palette.",
        },
        {
          question: "Do you provide complete room styling?",
          answer: "Yes, we can curate decor combinations for individual rooms or full-home themes.",
        },
        {
          question: "Will decor recommendations fit my budget?",
          answer: "Yes, we provide tiered recommendations across practical, premium, and luxury ranges.",
        },
      ]}
    />
  );
}
