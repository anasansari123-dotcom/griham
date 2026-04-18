import CategoryPageTemplate from "@/components/CategoryPageTemplate";

const models = [
  { title: "Luxe L-Shape", subtitle: "Spacious family comfort", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
  { title: "Nordic Minimal", subtitle: "Clean modern silhouette", image: "/image_5.avif" },
  { title: "Classic Chester", subtitle: "Timeless statement style", image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=900&q=80" },
  { title: "Compact 2-Seater", subtitle: "Space-smart seating", image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80" },
  { title: "Modular Sectional", subtitle: "Flexible layout options", image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=900&q=80" },
  { title: "Bouclé Lounge", subtitle: "Premium texture comfort", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80" },
];

const galleryImages = models.map((item, idx) => ({
  src: item.image,
  alt: `${item.title} sofa inspiration ${idx + 1}`,
}));

export default function SofaPage() {
  return (
    <CategoryPageTemplate
      title="Sofa"
      subtitle="Engineered comfort with made-for-you silhouettes, fabrics, and modular flexibility built for everyday lounging and premium living rooms."
      badges={["10-year frame warranty", "Custom dimensions", "Pet-friendly fabrics", "Modular configurations"]}
      features={[
        { title: "Made-to-measure sizing", desc: "Room-based sizing suggestions for 2-seater, 3-seater, L-shape, or modular layouts." },
        { title: "Premium fabric choices", desc: "Easy-clean and pet-friendly options with curated textures that match curtains and walls." },
        { title: "Comfort build options", desc: "Choose medium to plush comfort with cushioning guidance based on daily use." },
      ]}
      specs={[
        { label: "Best for", value: "Living rooms, lounges, compact apartments, premium seating zones" },
        { label: "Configurations", value: "2/3-seater, L-shape, modular sectional (as per selection)" },
        { label: "Customization", value: "Fabric, color, size, armrest, cushion comfort" },
        { label: "Warranty", value: "Frame warranty available (as per model/package)" },
      ]}
      processSteps={[
        { title: "Share layout", desc: "Send room measurements + usage (family, guests, daily lounging). We suggest best fit models." },
        { title: "Select fabric & comfort", desc: "Finalize fabric texture, color palette, and comfort profile to match your interior theme." },
        { title: "Build & deliver", desc: "Crafting, finishing, and delivery with quality checks and setup guidance." },
      ]}
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
      searchPlaceholder="Search by sofa type or style..."
      contentSections={[
        {
          title: "Sizing & layout planning",
          body: "We recommend 2-seater, 3-seater, L-shape, or modular based on room measurements, TV wall placement, and walking clearance.",
        },
        {
          title: "Fabric selection",
          body: "Choose from easy-clean, pet-friendly, textured premium fabrics and curated colors that match curtains and wall finishes.",
        },
        {
          title: "Comfort build",
          body: "Multi-layer cushioning options (medium to plush) are selected based on daily usage and seating preference.",
        },
        {
          title: "Care guidance",
          body: "We share practical maintenance tips so your sofa stays premium-looking for longer with minimal effort.",
        },
      ]}
      galleryImages={galleryImages}
      reviews={[
        { quote: "Super comfortable and the fabric recommendation was perfect for daily use. Looks premium.", name: "Ananya G.", rating: "5.0", meta: "Custom sofa" },
        { quote: "Great build quality and clean finish. The size fits our layout exactly as planned.", name: "Vikram R.", rating: "4.9", meta: "L-shape" },
        { quote: "Professional experience end-to-end. The sofa complements our wall panels and curtains.", name: "Meera S.", rating: "5.0", meta: "Living room" },
      ]}
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
