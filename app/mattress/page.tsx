import CategoryPageTemplate from "@/components/CategoryPageTemplate";
import { mattressGalleryImages, mattressItems } from "@/lib/mattressData";
import { mattressReviews } from "@/lib/testimonials";

export default function MattressPage() {
  return (
    <CategoryPageTemplate
      title="Mattress"
      subtitle="Supportive mattresses designed for deeper sleep with orthopedic, latex, and hybrid options tailored to your posture and comfort preference."
      badges={["Back support options", "Breathable layers", "Multiple firmness levels", "Sleep consultation"]}
      features={[
        { title: "Posture-focused support", desc: "Recommendations based on sleep position and support needs for better daily comfort." },
        { title: "Breathable comfort layers", desc: "Material options for airflow and comfortable sleep experience, especially for warm weather." },
        { title: "Balanced motion control", desc: "Options that reduce partner disturbance and improve uninterrupted sleep." },
      ]}
      // specs={[
      //   { label: "Best for", value: "Back support, deeper sleep comfort, couples, premium bedrooms" },
      //   { label: "Firmness", value: "Soft, medium, firm (as per recommendation)" },
      //   { label: "Types", value: "Orthopedic, latex feel, hybrid (as per selection)" },
      //   { label: "Care", value: "Rotation and basic care for long-term performance" },
      // ]}
      processSteps={[
        { title: "Share sleep preference", desc: "Tell us your posture needs and comfort preference (soft/medium/firm)." },
        { title: "Shortlist & finalize", desc: "We recommend type and firmness with size guidance for your bed." },
        { title: "Setup guidance", desc: "Care and usage guidance for longer life and consistent support." },
      ]}
      highlights={[
        "Improves sleep quality with posture-focused design.",
        "Available in soft, medium, and firm comfort profiles.",
        "Built using high-resilience and breathable material layers.",
      ]}
      items={mattressItems}
      searchPlaceholder="Search by firmness or type..."
      // contentSections={[
      //   {
      //     title: "Choosing firmness",
      //     body: "Back sleepers typically prefer medium-firm support. Side sleepers often like slightly softer comfort. We guide firmness based on posture and comfort preference.",
      //   },
      //   {
      //     title: "Material layers",
      //     body: "Options include latex feel, hybrid builds, and breathable top layers for comfort. We recommend based on weather, heat retention, and usage.",
      //   },
      //   {
      //     title: "Motion control",
      //     body: "For couples, we recommend structures that reduce motion transfer so sleep stays uninterrupted.",
      //   },
      //   {
      //     title: "Care & longevity",
      //     body: "We share rotation and care practices for longer life and consistent support over years.",
      //   },
      // ]}
      galleryImages={mattressGalleryImages}
      reviews={mattressReviews}
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
