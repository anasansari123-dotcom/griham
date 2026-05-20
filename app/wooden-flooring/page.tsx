import CategoryPageTemplate from "@/components/CategoryPageTemplate";
import { woodenFlooringReviews } from "@/lib/testimonials";

const items = [
  { title: "Natural Oak", subtitle: "Warm timeless grains", image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80" },
  { title: "Walnut Matte", subtitle: "Contemporary deep tone", image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=900&q=80" },
  { title: "Teak Rustic", subtitle: "Classic premium texture", image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80" },
  { title: "Ash Grey", subtitle: "Modern cool tone", image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=900&q=80" },
  { title: "Honey Maple", subtitle: "Bright warm finish", image: "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?auto=format&fit=crop&w=900&q=80" },
  { title: "Dark Espresso", subtitle: "Luxury deep shade", image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=900&q=80" },
];

const galleryImages = items.map((item, idx) => ({
  src: item.image,
  alt: `${item.title} wooden flooring inspiration ${idx + 1}`,
}));

export default function WoodenFlooringPage() {
  return (
    <CategoryPageTemplate
      title="Wooden Flooring"
      subtitle="Natural wooden flooring finishes that bring warmth and elegance, crafted for durability, low maintenance, and a premium timeless look."
      badges={["Scratch-resistant options", "Matte and glossy finishes", "Expert installation", "Long-term durability"]}
      features={[
        { title: "Premium tone selection", desc: "Warm or deep luxury tones recommended based on lighting and wall palette for a cohesive finish." },
        { title: "Durable surface options", desc: "Scratch-resistant options for high traffic and practical daily maintenance." },
        { title: "Professional installation", desc: "Surface assessment + installation method planning for a stable and premium result." },
      ]}
      specs={[
        { label: "Best for", value: "Living rooms, bedrooms, lounges, office cabins" },
        { label: "Finish types", value: "Matte / glossy options (as per selection)" },
        { label: "Durability", value: "Scratch-resistant options available; depends on finish" },
        { label: "Maintenance", value: "Dry mop + recommended cleaners for long-term look" },
      ]}
      processSteps={[
        { title: "Assess existing floor", desc: "We check floor condition and recommend best installation approach." },
        { title: "Choose tone & finish", desc: "Finalize tone based on lighting and matching with furniture and walls." },
        { title: "Install & handover", desc: "Clean installation and maintenance guidance for a premium finish." },
      ]}
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
      searchPlaceholder="Search by tone or finish..."
      contentSections={[
        {
          title: "Tone selection",
          body: "Warm tones (oak/maple) make rooms feel inviting. Dark tones (walnut/espresso) add luxury depth. We help you choose based on lighting and wall colors.",
        },
        {
          title: "Wear & durability",
          body: "Scratch-resistant options are ideal for high-traffic areas. We recommend finishes based on pets, kids, and daily usage.",
        },
        {
          title: "Installation planning",
          body: "We assess existing flooring and level conditions, then recommend the right installation approach for a stable finish.",
        },
        {
          title: "Maintenance",
          body: "Simple dry mopping and recommended cleaners keep the floor looking premium. We share care guidance based on selected finish.",
        },
      ]}
      galleryImages={galleryImages}
      reviews={woodenFlooringReviews}
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
