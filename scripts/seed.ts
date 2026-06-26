import "dotenv/config";
import { hashPassword } from "../lib/auth/password";
import { connectDB } from "../lib/db/connect";
import { About } from "../lib/models/About";
import { Hero } from "../lib/models/Hero";
import { Seo } from "../lib/models/Seo";
import { Service } from "../lib/models/Service";
import { Settings } from "../lib/models/Settings";
import { Testimonial } from "../lib/models/Testimonial";
import { User } from "../lib/models/User";
import { homeCollectionCategories, socialLinks, storeAddress, contactPhone, contactEmail, contactWhatsApp, businessHours, storeGoogleMapsPlaceUrl, storeCoordinates } from "../lib/siteData";
import { homeReviews } from "../lib/testimonials";

async function seed() {
  await connectDB();

  const username = process.env.ADMIN_USERNAME || "admin";
  const password = process.env.ADMIN_PASSWORD || "admin123";

  const existingUsers = await User.countDocuments();
  if (!existingUsers) {
    await User.create({ username, passwordHash: await hashPassword(password) });
    console.log(`Admin user created: ${username}`);
  }

  await Settings.findOneAndUpdate(
    {},
    {
      companyName: "GRIHAM",
      phone: contactPhone,
      mobile: contactPhone,
      whatsApp: contactWhatsApp,
      email: contactEmail,
      address: storeAddress,
      googleMapsLink: storeGoogleMapsPlaceUrl,
      facebook: socialLinks.find((s) => s.icon === "facebook")?.href ?? "",
      instagram: socialLinks.find((s) => s.icon === "instagram")?.href ?? "",
      linkedin: "",
      workingHours: businessHours,
      emergencyContact: contactPhone,
      logoUrl: "/logo-griham.jpeg",
      mapLat: storeCoordinates.lat,
      mapLng: storeCoordinates.lng,
    },
    { upsert: true, new: true },
  );

  await Hero.findOneAndUpdate(
    {},
    {
      badge: "Premium Furnishing",
      heading: "Premium Home Furnishings.",
      subheading:
        "Explore curtains, wallpapers, wall panels, sofa, beds, mattress, and wooden flooring with one coordinated design partner.",
      buttonText: "Explore Collections",
      buttonLink: "#our-collection",
      secondaryButtonText: "Book Free Consultation",
      secondaryButtonLink: "/book-consultation",
      backgroundImage: "/images/hero-poster.jpg",
      backgroundVideo: "/Create_a_high-quality_202604162307.mp4",
    },
    { upsert: true, new: true },
  );

  await About.findOneAndUpdate(
    {},
    {
      heading: "How We Stand Different Than Others",
      description: "Better sourcing, in-house craftsmanship, and premium materials — built into every GRIHAM project.",
      image: "",
    },
    { upsert: true, new: true },
  );

  await Seo.findOneAndUpdate(
    {},
    {
      title: "GRIHAM | Premium Home Decor & Interiors",
      description:
        "Discover premium home furnishing collections from GRIHAM: curtains, wallpapers, wall panels, sofas, beds, mattresses, and wooden flooring.",
      keywords: [
        "premium home decor",
        "curtains",
        "wallpapers",
        "wall panels",
        "sofa",
        "beds",
        "mattress",
        "wooden flooring",
        "interior consultation",
        "Bengaluru home decor",
      ],
      ogImage: "",
      favicon: "/logo-griham.jpeg",
    },
    { upsert: true, new: true },
  );

  const serviceCount = await Service.countDocuments();
  if (!serviceCount) {
    await Service.insertMany(
      homeCollectionCategories.map((item, index) => ({
        name: item.name,
        description: "View Collection",
        image: item.image,
        href: item.href,
        alt: item.alt,
        displayOrder: index,
      })),
    );
  }

  const testimonialCount = await Testimonial.countDocuments({ page: "home" });
  if (!testimonialCount) {
    await Testimonial.insertMany(
      homeReviews.map((review, index) => ({
        name: review.name,
        designation: review.meta ?? "",
        photo: review.image ?? "",
        rating: review.rating,
        review: review.quote,
        page: "home",
        displayOrder: index,
      })),
    );
  }

  console.log("Database seeded successfully.");
  process.exit(0);
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
