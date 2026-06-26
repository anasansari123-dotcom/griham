import {
  businessHours,
  contactEmail,
  contactPhone,
  contactWebsite,
  contactWhatsApp,
  homeCollectionCategories,
  socialLinks,
  storeAddress,
  storeCoordinates,
  storeGoogleMapsPlaceUrl,
  type HomeCategoryItem,
  type SocialLink,
} from "@/lib/siteData";
import { homeReviews, type ReviewItem } from "@/lib/testimonials";
import {
  getAboutDoc,
  getHeroDoc,
  getSeoDoc,
  getSettingsDoc,
  listServices,
  listTestimonials,
} from "@/lib/services/cmsService";

export type SiteSettingsView = {
  companyName: string;
  storeAddress: string;
  contactPhone: string;
  contactPhoneHref: string;
  contactEmail: string;
  contactEmailHref: string;
  contactWebsite: string;
  contactWhatsApp: string;
  businessHours: string;
  emergencyContact: string;
  logoUrl: string;
  mapOpenUrl: string;
  mapDirectionsUrl: string;
  mapEmbedUrl: string;
  storeCoordinates: { lat: number; lng: number };
  socialLinks: SocialLink[];
};

export type HeroView = {
  badge: string;
  heading: string;
  subheading: string;
  buttonText: string;
  buttonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
  backgroundImage: string;
  backgroundVideo: string;
};

export type AboutView = {
  heading: string;
  description: string;
  image: string;
};

export type SeoView = {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  favicon: string;
};

function phoneHref(phone: string) {
  return `tel:${phone.replace(/\s+/g, "")}`;
}

function defaultSettings(): SiteSettingsView {
  return {
    companyName: "GRIHAM",
    storeAddress,
    contactPhone,
    contactPhoneHref: phoneHref(contactPhone),
    contactEmail,
    contactEmailHref: `mailto:${contactEmail}`,
    contactWebsite,
    contactWhatsApp,
    businessHours,
    emergencyContact: contactPhone,
    logoUrl: "/logo-griham.jpeg",
    mapOpenUrl: storeGoogleMapsPlaceUrl,
    mapDirectionsUrl: storeGoogleMapsPlaceUrl,
    mapEmbedUrl: `https://maps.google.com/maps?q=${storeCoordinates.lat},${storeCoordinates.lng}+(Griham+Decor)&hl=en&z=18&output=embed`,
    storeCoordinates,
    socialLinks,
  };
}

function defaultHero(): HeroView {
  return {
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
  };
}

function defaultAbout(): AboutView {
  return {
    heading: "How We Stand Different Than Others",
    description: "Better sourcing, in-house craftsmanship, and premium materials — built into every GRIHAM project.",
    image: "",
  };
}

function defaultSeo(): SeoView {
  return {
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
  };
}

export async function getSiteSettings(): Promise<SiteSettingsView> {
  try {
    const doc = await getSettingsDoc();
    if (!doc) return defaultSettings();

    const whatsApp = doc.whatsApp || contactWhatsApp;
    const links: SocialLink[] = [
      doc.instagram ? { name: "Instagram", href: doc.instagram, icon: "instagram" } : null,
      doc.facebook ? { name: "Facebook", href: doc.facebook, icon: "facebook" } : null,
      { name: "WhatsApp", href: whatsApp, icon: "whatsapp" },
    ].filter(Boolean) as SocialLink[];

    const lat = doc.mapLat ?? storeCoordinates.lat;
    const lng = doc.mapLng ?? storeCoordinates.lng;
    const mapLink = doc.googleMapsLink || storeGoogleMapsPlaceUrl;

    return {
      companyName: doc.companyName || "GRIHAM",
      storeAddress: doc.address || storeAddress,
      contactPhone: doc.phone || contactPhone,
      contactPhoneHref: phoneHref(doc.phone || contactPhone),
      contactEmail: doc.email || contactEmail,
      contactEmailHref: `mailto:${doc.email || contactEmail}`,
      contactWebsite,
      contactWhatsApp: whatsApp,
      businessHours: doc.workingHours || businessHours,
      emergencyContact: doc.emergencyContact || doc.mobile || doc.phone || contactPhone,
      logoUrl: doc.logoUrl || "/logo-griham.jpeg",
      mapOpenUrl: mapLink,
      mapDirectionsUrl: mapLink,
      mapEmbedUrl: `https://maps.google.com/maps?q=${lat},${lng}+(Griham+Decor)&hl=en&z=18&output=embed`,
      storeCoordinates: { lat, lng },
      socialLinks: links.length ? links : socialLinks,
    };
  } catch {
    return defaultSettings();
  }
}

export async function getHeroContent(): Promise<HeroView> {
  try {
    const doc = await getHeroDoc();
    if (!doc) return defaultHero();
    return {
      badge: doc.badge,
      heading: doc.heading,
      subheading: doc.subheading,
      buttonText: doc.buttonText,
      buttonLink: doc.buttonLink,
      secondaryButtonText: doc.secondaryButtonText,
      secondaryButtonLink: doc.secondaryButtonLink,
      backgroundImage: doc.backgroundImage,
      backgroundVideo: doc.backgroundVideo,
    };
  } catch {
    return defaultHero();
  }
}

export async function getAboutContent(): Promise<AboutView> {
  try {
    const doc = await getAboutDoc();
    if (!doc) return defaultAbout();
    return {
      heading: doc.heading,
      description: doc.description,
      image: doc.image,
    };
  } catch {
    return defaultAbout();
  }
}

export async function getSeoContent(): Promise<SeoView> {
  try {
    const doc = await getSeoDoc();
    if (!doc) return defaultSeo();
    return {
      title: doc.title,
      description: doc.description,
      keywords: doc.keywords ?? [],
      ogImage: doc.ogImage ?? "",
      favicon: doc.favicon || "/logo-griham.jpeg",
    };
  } catch {
    return defaultSeo();
  }
}

export async function getHomeServices(): Promise<HomeCategoryItem[]> {
  try {
    const items = await listServices();
    if (!items.length) return homeCollectionCategories;
    return items.map((item) => ({
      name: item.name,
      href: item.href,
      image: item.image,
      alt: item.alt || item.name,
    }));
  } catch {
    return homeCollectionCategories;
  }
}

export async function getHomeTestimonials(): Promise<ReviewItem[]> {
  try {
    const items = await listTestimonials("home");
    if (!items.length) return homeReviews;
    return items.map((item) => ({
      quote: item.review,
      name: item.name,
      rating: item.rating,
      meta: item.designation,
      image: item.photo || undefined,
    }));
  } catch {
    return homeReviews;
  }
}

export async function getTestimonialsByPage(page: string): Promise<ReviewItem[]> {
  try {
    const items = await listTestimonials(page);
    if (!items.length) return [];
    return items.map((item) => ({
      quote: item.review,
      name: item.name,
      rating: item.rating,
      meta: item.designation,
      image: item.photo || undefined,
    }));
  } catch {
    return [];
  }
}
