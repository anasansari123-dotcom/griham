import CategoryPageTemplate from "@/components/CategoryPageTemplate";
import { wallpaperGalleryImages, wallpaperItems } from "@/lib/wallpapersData";
import { wallpapersReviews } from "@/lib/testimonials";

export default function WallpapersPage() {
  return (
    <CategoryPageTemplate
      title="Wallpapers"
      subtitle="Elevate your walls with premium textures, patterns, and designer finishes for feature walls, bedrooms, living rooms, and workspaces."
      badges={["Moisture-resistant options", "Premium texture", "Designer patterns", "Professional installation"]}
      featuresEyebrow="Wallpapers"
      featuresTitle="Imported, Waterproof Wallpapers Built to Last"
      features={[
        {
          title: "Imported Quality",
          desc: "Our wallpapers are sourced from the finest manufacturers around the world, ensuring unparalleled style and durability.",
        },
        {
          title: "Waterproof Design",
          desc: "Our wallpapers are specially engineered to withstand moisture, making them perfect for bathrooms, kitchens, and high-traffic areas.",
        },
        {
          title: "2-Year Warranty",
          desc: "We stand behind the quality of our products with a 2-year warranty, giving you peace of mind with every purchase.",
        },
      ]}
      specs={[
        { label: "Best for", value: "Feature walls, bedrooms, living rooms, workspaces" },
        { label: "Finish types", value: "Matte, textured, subtle accents (as per selection)" },
        { label: "Surface requirement", value: "Smooth, clean wall surface recommended" },
        { label: "Maintenance", value: "Wipe-friendly options available; care depends on finish" },
      ]}
      processSteps={[
        { title: "Share wall photos", desc: "Send wall photos + room context. We shortlist designs that suit scale and lighting." },
        { title: "Finalize finish", desc: "Confirm pattern + finish + placement (full wall or feature wall) with premium cohesion." },
        { title: "Install & finish", desc: "Professional installation with clean alignment and finishing details." },
      ]}
      highlights={[]}
      solutionsSection={{
        eyebrow: "Custom solutions",
        title: "Custom Wallpaper Solutions for Your Unique Space",
        items: [
          {
            title: "Personalized Designs",
            desc: "Work with our team to create a one-of-a-kind wallpaper that perfectly complements your style and space.",
          },
          {
            title: "Made-to-Measure",
            desc: "We'll accurately measure your walls to ensure a seamless, custom fit for your wallpaper installation.",
          },
          {
            title: "Expert Guidance",
            desc: "Our design experts will provide tailored advice to help you achieve your desired look and feel.",
          },
        ],
      }}
      items={wallpaperItems}
      galleryImages={wallpaperGalleryImages}
      searchPlaceholder="Search by texture, theme, or finish..."
      contentSections={[
        {
          title: "Finish & texture options",
          body: "Choose from matte, textured, metallic accents, or premium pattern collections. We recommend finishes based on lighting, wall condition, and room usage.",
        },
        {
          title: "Wall readiness",
          body: "For best results, surfaces should be smooth and clean. Our team can guide you on basic prep before installation for a flawless premium finish.",
        },
        {
          title: "Design matching",
          body: "We help you match wallpaper tones with curtains, sofa fabrics, and flooring so the whole space feels consistent and intentional.",
        },
        {
          title: "Maintenance",
          body: "Most options are wipe-friendly. We share care guidance based on the selected material and wall placement.",
        },
      ]}
      reviews={wallpapersReviews}
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
