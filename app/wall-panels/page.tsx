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
  {
    title: "Soft Fabric Panel",
    subtitle: "Comfort + subtle acoustics",
    image: "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Stone Texture Panel",
    subtitle: "Premium architectural look",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Minimal Groove Panel",
    subtitle: "Clean modern lines",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
  },
];

const galleryImages = panels.map((item, idx) => ({
  src: item.image,
  alt: `${item.title} wall panel inspiration ${idx + 1}`,
}));

export default function WallPanelsPage() {
  return (
    <CategoryPageTemplate
      title="Wall Panels"
      subtitle="Statement-ready wall panels that add depth, warmth, and character for living rooms, TV units, reception areas, and accent walls."
      badges={["Acoustic-friendly options", "Easy maintenance", "Custom finishes", "Professional fitment"]}
      features={[
        { title: "Premium depth & texture", desc: "Instantly elevates interiors with layered finishes—wood slats, fluted, 3D textures, and modern looks." },
        { title: "Wiring-friendly planning", desc: "Ideal for TV walls—helps conceal wires and creates a clean organized focal point." },
        { title: "Fast, clean installation", desc: "Professional fitment with aligned seams and finishing so the wall looks seamless." },
      ]}
      specs={[
        { label: "Best for", value: "TV unit walls, accent walls, reception areas, bedrooms" },
        { label: "Popular styles", value: "Wood slats, fluted, 3D textures, stone look, fabric feel" },
        { label: "Acoustic options", value: "Available for media rooms and lounges (as per selection)" },
        { label: "Maintenance", value: "Wipe-friendly finishes; care guidance per texture" },
      ]}
      processSteps={[
        { title: "Wall assessment", desc: "Share measurements + photos. We plan layout, panel type, and wiring points if required." },
        { title: "Finish selection", desc: "Confirm texture and shade to match sofa, curtains, and flooring for a premium theme." },
        { title: "Fitment & handover", desc: "Clean installation with aligned edges and final checks." },
      ]}
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
      searchPlaceholder="Search by panel style or finish..."
      contentSections={[
        {
          title: "Material choices",
          body: "Pick from wood slats, fluted patterns, 3D textures, or fabric-like finishes. We guide you on what works best for your room lighting and usage.",
        },
        {
          title: "TV unit & wiring",
          body: "Panels are great for organizing wiring and creating a clean TV wall. We plan cutouts and concealed routing for a neat premium finish.",
        },
        {
          title: "Acoustic comfort",
          body: "For lounges and media rooms, acoustic-friendly options help reduce echo and improve sound comfort in daily use.",
        },
        {
          title: "Maintenance",
          body: "Most finishes are wipe-friendly with simple upkeep. We share care guidelines for the selected texture.",
        },
      ]}
      galleryImages={galleryImages}
      reviews={[
        { quote: "Our TV wall looks premium now. Clean finish and the panel texture added real depth to the room.", name: "Rohit M.", rating: "5.0", meta: "TV unit wall" },
        { quote: "The team suggested the right fluted design and it matched our sofa and curtains perfectly.", name: "Sneha P.", rating: "4.9", meta: "Living room" },
        { quote: "Fast installation, very neat work. It hides the wiring and looks super elegant.", name: "Karthik S.", rating: "5.0", meta: "Accent wall" },
      ]}
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
