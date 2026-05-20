import CategoryPageTemplate from "@/components/CategoryPageTemplate";
import { sofaReviews } from "@/lib/testimonials";

type SofaItem = {
  title: string;
  subtitle: string;
  tag: string;
  image: string;
};

function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

function pickTwoFromCategory(items: SofaItem[], seed: string): SofaItem[] {
  if (items.length <= 2) return [...items];
  const total = items.length;
  const first = hashString(seed) % total;
  let second = hashString(`${seed}-alt`) % total;
  if (second === first) second = (first + Math.floor(total / 2)) % total;
  return [items[first], items[second]];
}

function shuffleWithSeed<T>(items: T[], seed: string): T[] {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = hashString(`${seed}-${i}`) % (i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function buildModels(
  images: string[],
  captions: string[],
  tag: string,
  subtitle: string,
  basePath: string,
  encodeFileName = false,
): SofaItem[] {
  return images.map((file, index) => ({
    title: captions[index] ?? captions[captions.length - 1],
    subtitle,
    tag,
    image: `${basePath}/${encodeFileName ? encodeURIComponent(file) : file}`,
  }));
}

function buildAllPreview(itemsByCategory: SofaItem[][]): SofaItem[] {
  const pairs = itemsByCategory.map((items, index) => pickTwoFromCategory(items, `sofa-category-${index}`));
  const categoryOrder = shuffleWithSeed(
    pairs.map((_, index) => index),
    "sofa-all-order",
  );
  const preview = new Array(pairs.length * 2) as SofaItem[];

  categoryOrder.forEach((categoryIndex, position) => {
    preview[position] = pairs[categoryIndex][0];
    preview[position + pairs.length] = pairs[categoryIndex][1];
  });

  return preview;
}

const filters = [
  "All",
  "Chesterfield",
  "L shape",
  "Luxury Curved",
  "Recliner",
  "Sofa cum bed",
  "Sofa sets",
  "Sofa with Lounger",
  "U shape",
];

const chesterfieldImages = [
  "0268ab02c7f618da243a068841aaa90b.jpg",
  "31e2f8227fc68edafb361696f18985d8.jpg",
  "5ec448529cf1232ff21e61a759f4364d.jpg",
  "687c46ab0c73f5f230de6727771fa80d.jpg",
  "7c74a821a4474f79658cbb3a52abbdc0.jpg",
  "83e81cdca796a8463acf7100659623e2.jpg",
  "9d8fe63ba442201e30b974a58410fdbc.jpg",
  "c8d8ee15f306db56bd535ff39cc1170b.jpg",
  "chesterfield-design-9.jpg",
  "chesterfield-design-10.jpg",
  "chesterfield-design-11.jpg",
];

const chesterfieldCaptions = [
  "3 Seater Chesterfield",
  "Tufted Chesterfield Sofa",
  "Classic Leather Chesterfield",
  "Premium Velvet Chesterfield",
  "2 Seater Chesterfield",
  "Deep Button Chesterfield",
  "Modern Chesterfield Sofa",
  "Royal Chesterfield Lounge",
  "Brown Leather Chesterfield",
  "Teal Chesterfield Set",
  "Chesterfield with Ottoman",
];

const chesterfieldModels = buildModels(
  chesterfieldImages,
  chesterfieldCaptions,
  "Chesterfield",
  "Premium tufted Chesterfield",
  "/chesterdfield",
);

const lShapeImages = [
  "0f9be19916a8fad53303d34d487af64d.jpg",
  "9a839263a786645426c8601ac84c81b4.jpg",
  "a158d266deaa2985ed633b40c527e99d.jpg",
  "bd40da928545f7f76e0f7fe9bc0c62ab.jpg",
  "cf657526e083f8bfcba3306d61fde95f.jpg",
  "e88ad76e7d21d0f3f02e7c64209ee9bb.jpg",
  "l-shape-design-7.jpg",
  "L shaped.jpg",
  "l-shape-design-9.jpg",
  "l-shape-design-10.jpg",
  "l-shape-design-11.jpg",
];

const lShapeCaptions = [
  "Corner L Shape Sofa",
  "Modular L Shape Sectional",
  "Compact L Shape Sofa",
  "Family L Shape Sofa",
  "Grey L Shape Lounge",
  "Modern L Shape Sofa",
  "Custom L Shape Sofa",
  "Contemporary L Shape",
  "Spacious L Shape Design",
  "Living Room L Shape",
  "Premium L Shape Sofa",
];

const lShapeModels = buildModels(lShapeImages, lShapeCaptions, "L shape", "Spacious corner seating", "/L shape", true);

const luxuryCurvedImages = [
  "09dbe8dd0d3bfe1b8dc2fd0b15514c1d.jpg",
  "11a988152e75fdbbe6b3361ccaffa685.jpg",
  "3e18bae50da97d56897068bc29cb63f4.jpg",
  "42c8d017d131952f6ed0b191aad75fcd.jpg",
  "53c1f4cc64ba5015e1a12819b1a6c45c.jpg",
  "5b6591b3e276574ecbb4ec032bd8c490.jpg",
  "76c40cb602c6b41fcb1dfe1233a7d9bb.jpg",
  "7a83728ab15fcad46493c1ec94e91efa.jpg",
  "87bf4bae4b5c3002dd8ccd3c480fa15e.jpg",
  "8f4a3519c4da4fb1c2398204f16ad465.jpg",
  "9e4192e2bf1a28497cb08f26076ab5c0.jpg",
];

const luxuryCurvedCaptions = [
  "Curved Luxury Sofa",
  "Designer Curved Sectional",
  "Premium Curved Lounge",
  "Modern Curved Sofa",
  "Elegant Curved Settee",
  "Sculpted Curved Sofa",
  "Arc Curved Living Sofa",
  "Velvet Curved Sofa",
  "Statement Curved Sofa",
  "Contemporary Curved Lounge",
  "Luxury Curved Sectional",
];

const luxuryCurvedModels = buildModels(
  luxuryCurvedImages,
  luxuryCurvedCaptions,
  "Luxury Curved",
  "Sculpted premium silhouette",
  "/Luxury curved",
  true,
);

const reclinerImages = [
  "03d837e84d3a5ebda71f6d50d2c85a21.jpg",
  "067ec1142c181124bb258eaee23fd867.jpg",
  "0831864957b31577a0e3cd5a74500616.jpg",
  "recliner-2-seater.jpg",
  "1cc165ef95282b163980b82f1fbb8832.jpg",
  "30917db095131a2827ea21def2a29a1b.jpg",
  "3cd6aaff886cdbe4447b327af6fb4b17.jpg",
  "939c86a376b1186882e22a80146c6238.jpg",
  "95d6d1def525d63b9253f9b1133c2f14.jpg",
  "9b3620ebebfb8ea8aed7c25ed068037d.jpg",
  "a8839ec9a4560e774a54a9a49a183aee.jpg",
];

const reclinerCaptions = [
  "Single Seater Recliner",
  "Power Recliner Sofa",
  "Manual Recliner Chair",
  "2 Seater Recliner",
  "Comfort Recliner Sofa",
  "Wall Hugger Recliner",
  "Leather Recliner Sofa",
  "Fabric Recliner Lounge",
  "Home Theatre Recliner",
  "Compact Recliner Sofa",
  "Premium Recliner Chair",
];

const reclinerModels = buildModels(reclinerImages, reclinerCaptions, "Recliner", "Relaxing recline comfort", "/Recliner");

const sofaCumBedImages = [
  "00852016b42fbed64102ff1363edd04c.jpg",
  "3936e44ed9a2c37e2b31da4507e95dda.jpg",
  "3b037005851b0f51d68d31c11f30ffe4.jpg",
  "3b6bcffa4be45d15342d1d5552e518fc.jpg",
  "6a6136ac1c97030c2ef47d4507c967fc.jpg",
  "81813484b03f54fdef03611e57a62481.jpg",
  "d56ee836e9edd04726fc0050f1ec7c33.jpg",
  "df4d8235c82d889a7c744651a7295063.jpg",
  "e9b8779407b88f8cbfc57146a87ce8b7_1.jpg",
  "fa9536e213f0a45a2f0b476667c7711d.jpg",
  "sofa-cum-bed-design-11.jpg",
];

const sofaCumBedCaptions = [
  "Sofa Cum Bed",
  "Convertible Sofa Bed",
  "3 Seater Sofa Bed",
  "Pull Out Sofa Bed",
  "Compact Sofa Cum Bed",
  "Guest Room Sofa Bed",
  "Fabric Sofa Cum Bed",
  "Modern Sofa Bed",
  "Space Saving Sofa Bed",
  "Premium Sofa Cum Bed",
  "Versatile Sofa Bed",
];

const sofaCumBedModels = buildModels(
  sofaCumBedImages,
  sofaCumBedCaptions,
  "Sofa cum bed",
  "Sofa-to-bed flexibility",
  "/sofa cum bed",
  true,
);

const sofaSetsImages = [
  "1cc1afb21f2dcfc510b67e7386ed1a90.jpg",
  "2a686658ac51a381d93a9461e5767244.jpg",
  "3317809dad91b6726a9aa1fa45a10c5b.jpg",
  "4989dfdf7533e63454a2597f1e4afa3f.jpg",
  "4d563beeb9701ed939dfafa37bf4fa5b.jpg",
  "66088dbb54f305a0289b166a4ae10572.jpg",
  "69aa9b4c4769ba1a287332f3e3f59c43.jpg",
  "8cc5ccb7e5ab15e3e3973a58bf14b814.jpg",
  "ad008cd5f0a406175b7704f1d69847e8.jpg",
  "c7c1de61a7bc540434c19fef4c258a21.jpg",
  "e2186e0ca9da22d1fa948c4a8d7aae20.jpg",
];

const sofaSetsCaptions = [
  "3 Piece Sofa Set",
  "Living Room Sofa Set",
  "Sofa with Accent Chairs",
  "Premium Sofa Set",
  "Modern Sofa Set",
  "Fabric Sofa Set",
  "Leather Sofa Set",
  "Compact Sofa Set",
  "Family Sofa Set",
  "Designer Sofa Set",
  "Complete Sofa Set",
];

const sofaSetsModels = buildModels(
  sofaSetsImages,
  sofaSetsCaptions,
  "Sofa sets",
  "Coordinated living room set",
  "/sofa sets",
  true,
);

const sofaWithLoungerImages = [
  "097fe482014f62a575453cc639ca76b2.jpg",
  "2a156b061ec072589d3147c32a9afb98.jpg",
  "2a8a27f388d4c580b5a15d0bbab22611.jpg",
  "4e4d7d9edf009be568293a307af9477d.jpg",
  "579dec6271b16529a994623a11eca4ff.jpg",
  "68da6b1aa0295e3f3b501fe3efb4389a.jpg",
  "7441ba090b4eacc718c5038a7e435b3f.jpg",
  "7972621cbae92a2603d286ff96c71f5e.jpg",
  "86f30804cbd904a5cdd386d80e6e73e2.jpg",
  "9f64fd687adc9ad66f5ae94631353e19.jpg",
  "a1b33e2911b80f74bfe8e9bfb861bc65.jpg",
];

const sofaWithLoungerCaptions = [
  "Sofa with Lounger",
  "Chaise Lounger Sofa",
  "Corner Lounger Sofa",
  "Extended Lounger Sofa",
  "L Shape with Lounger",
  "Modern Lounger Sofa",
  "Premium Chaise Sofa",
  "Family Lounger Sectional",
  "Compact Lounger Sofa",
  "Designer Lounger Sofa",
  "Luxury Lounger Sofa",
];

const sofaWithLoungerModels = buildModels(
  sofaWithLoungerImages,
  sofaWithLoungerCaptions,
  "Sofa with Lounger",
  "Extended chaise comfort",
  "/sofa with longer",
  true,
);

const uShapeImages = [
  "u-shape-design-1.jpg",
  "3e9c2f1b3ed75fbedef0eadf961bc73b.jpg",
  "5a60be3eb59bdd99d34c849e56fbb505.jpg",
  "7705ac33fcd764bda1feefa53de47593.jpg",
  "afeb419ec46cb0157f013e2bf526dc02.jpg",
  "c88cbfc075e03a2cedd0e53c0fdba869.jpg",
  "c923f54344867ee5d80c3759f80d319c.jpg",
  "c92a57d9ace58698b4b2c1e242b7fa5c.jpg",
  "ce7ec62617c4edc13e274bd04b046dc1.jpg",
  "e48fdb6d4bbd84cedcba95167a387375.jpg",
  "f27ac9722cc4bf6a93f8ea469982d2c5.jpg",
];

const uShapeCaptions = [
  "U Shape Sectional Sofa",
  "Large U Shape Sofa",
  "Modern U Shape Sofa",
  "Family U Shape Sofa",
  "Premium U Shape Sectional",
  "Compact U Shape Sofa",
  "Velvet U Shape Sofa",
  "Living Room U Shape",
  "Designer U Shape Sofa",
  "Spacious U Shape Lounge",
  "Luxury U Shape Sofa",
];

const uShapeModels = buildModels(uShapeImages, uShapeCaptions, "U shape", "Spacious U-layout comfort", "/u shape", true);

const models = [
  ...chesterfieldModels,
  ...lShapeModels,
  ...luxuryCurvedModels,
  ...reclinerModels,
  ...sofaCumBedModels,
  ...sofaSetsModels,
  ...sofaWithLoungerModels,
  ...uShapeModels,
];

const allPreviewModels = buildAllPreview([
  chesterfieldModels,
  lShapeModels,
  luxuryCurvedModels,
  reclinerModels,
  sofaCumBedModels,
  sofaSetsModels,
  sofaWithLoungerModels,
  uShapeModels,
]);

const galleryImages = allPreviewModels.map((item, idx) => ({
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
      allItems={allPreviewModels}
      filters={filters}
      enableProductPreview
      productImageFit="contain"
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
      reviews={sofaReviews}
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
