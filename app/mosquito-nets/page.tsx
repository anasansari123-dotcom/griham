import CategoryPageTemplate from "@/components/CategoryPageTemplate";
import { homeDecorReviews } from "@/lib/testimonials";

const items = [
  { title: "Accent Decor Set", subtitle: "Vases, frames, and soft accents", image: "https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=900&q=80" },
  { title: "Statement Decor Corner", subtitle: "Layered premium styling", image: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?auto=format&fit=crop&w=900&q=80" },
  { title: "Functional Decor Pairing", subtitle: "Style with utility balance", image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80" },
  { title: "Dining Table Styling", subtitle: "Centerpieces and accents", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80" },
  { title: "Shelf & Console Decor", subtitle: "Layered premium look", image: "https://images.unsplash.com/photo-1527030280862-64139fba04ca?auto=format&fit=crop&w=900&q=80" },
  { title: "Soft Furnishing Accents", subtitle: "Textures that elevate", image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=900&q=80" },
];

const galleryImages = items.map((item, idx) => ({
  src: item.image,
  alt: `${item.title} home decor inspiration ${idx + 1}`,
}));

export default function MosquitoNetsPage() {
  return (
    <CategoryPageTemplate
      title="Home Decor"
      subtitle="Curated decor pieces and styling combinations that complete your home with warmth, character, and a cohesive premium look."
      badges={["Curated styling", "Modern + classic themes", "Space-smart decor", "Custom recommendation"]}
      features={[
        { title: "Theme-based curation", desc: "Modern minimal, earthy luxe, or classic premium—decor is curated to fit one consistent theme." },
        { title: "Layered styling", desc: "We balance height, texture, and negative space to make the room look premium—not cluttered." },
        { title: "Room-to-room consistency", desc: "Decor that ties into curtains, sofa fabrics, wall finishes, and flooring for a complete home look." },
      ]}
      specs={[
        { label: "Best for", value: "Living room consoles, shelves, foyer styling, dining accents" },
        { label: "Styling approach", value: "Layering: height + texture + spacing balance" },
        { label: "Theme support", value: "Minimal, earthy, luxe, classic (as per preference)" },
        { label: "Budget options", value: "Practical to premium ranges (tiered recommendations)" },
      ]}
      processSteps={[
        { title: "Share room photos", desc: "We understand existing furniture and wall tones to build a cohesive decor plan." },
        { title: "Curate & shortlist", desc: "We recommend decor pieces and placement guidance (what to place and where)." },
        { title: "Style & finalize", desc: "Final adjustments for a clean, premium finish and clutter-free balance." },
      ]}
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
      searchPlaceholder="Search by decor type or room..."
      contentSections={[
        {
          title: "Theme planning",
          body: "Pick a consistent palette (warm neutrals, earthy luxe, or modern minimal) and we curate decor pieces that keep the home cohesive.",
        },
        {
          title: "Layering method",
          body: "We balance height, textures, and negative space using vases, frames, books, and soft accents for a premium finish.",
        },
        {
          title: "Space-smart picks",
          body: "Compact homes benefit from fewer, high-impact decor pieces. We recommend what to place and what to avoid to reduce clutter.",
        },
        {
          title: "Room pairing",
          body: "Decor is coordinated with curtains, sofa fabrics, and wall finishes so everything looks planned — not random.",
        },
      ]}
      galleryImages={galleryImages}
      reviews={homeDecorReviews}
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
