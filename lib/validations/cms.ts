import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

export const settingsSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  phone: z.string().min(1, "Phone is required"),
  mobile: z.string(),
  whatsApp: z.string().min(1, "WhatsApp URL is required"),
  email: z.string().email("Enter a valid email"),
  address: z.string().min(1, "Address is required"),
  googleMapsLink: z.string().min(1, "Google Maps link is required"),
  facebook: z.string(),
  instagram: z.string(),
  linkedin: z.string(),
  workingHours: z.string().min(1, "Working hours are required"),
  emergencyContact: z.string(),
  logoUrl: z.string().min(1, "Logo URL is required"),
  mapLat: z.number(),
  mapLng: z.number(),
});

export const heroSchema = z.object({
  badge: z.string().min(1, "Badge is required"),
  heading: z.string().min(1, "Heading is required"),
  subheading: z.string().min(1, "Subheading is required"),
  buttonText: z.string().min(1, "Primary button text is required"),
  buttonLink: z.string().min(1, "Primary button link is required"),
  secondaryButtonText: z.string().min(1, "Secondary button text is required"),
  secondaryButtonLink: z.string().min(1, "Secondary button link is required"),
  backgroundImage: z.string().min(1, "Background image is required"),
  backgroundVideo: z.string(),
});

export const aboutSchema = z.object({
  heading: z.string().min(1, "Heading is required"),
  description: z.string().min(1, "Description is required"),
  image: z.string(),
});

export const serviceSchema = z.object({
  name: z.string().min(1, "Service name is required"),
  description: z.string(),
  image: z.string().min(1, "Service image is required"),
  href: z.string().min(1, "Link is required"),
  alt: z.string(),
  displayOrder: z.number().int().nonnegative(),
});

export const gallerySchema = z.object({
  title: z.string().min(1, "Title is required"),
  category: z.string().min(1, "Category is required"),
  image: z.string().min(1, "Image is required"),
  displayOrder: z.number().int().nonnegative(),
});

export const testimonialSchema = z.object({
  name: z.string().min(1, "Name is required"),
  designation: z.string(),
  photo: z.string(),
  rating: z.string().min(1, "Rating is required"),
  review: z.string().min(1, "Review is required"),
  page: z.string(),
  displayOrder: z.number().int().nonnegative(),
});

export const seoSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  keywords: z.array(z.string()),
  ogImage: z.string(),
  favicon: z.string().min(1, "Favicon is required"),
});
