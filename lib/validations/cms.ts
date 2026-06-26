import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

export const settingsSchema = z.object({
  companyName: z.string().min(1),
  phone: z.string().min(1),
  mobile: z.string(),
  whatsApp: z.string().min(1),
  email: z.string().email(),
  address: z.string().min(1),
  googleMapsLink: z.string().min(1),
  facebook: z.string(),
  instagram: z.string(),
  linkedin: z.string(),
  workingHours: z.string().min(1),
  emergencyContact: z.string(),
  logoUrl: z.string().min(1),
  mapLat: z.number(),
  mapLng: z.number(),
});

export const heroSchema = z.object({
  badge: z.string().min(1),
  heading: z.string().min(1),
  subheading: z.string().min(1),
  buttonText: z.string().min(1),
  buttonLink: z.string().min(1),
  secondaryButtonText: z.string().min(1),
  secondaryButtonLink: z.string().min(1),
  backgroundImage: z.string().min(1),
  backgroundVideo: z.string(),
});

export const aboutSchema = z.object({
  heading: z.string().min(1),
  description: z.string().min(1),
  image: z.string(),
});

export const serviceSchema = z.object({
  name: z.string().min(1),
  description: z.string(),
  image: z.string().min(1),
  href: z.string().min(1),
  alt: z.string(),
  displayOrder: z.number().int().nonnegative(),
});

export const gallerySchema = z.object({
  title: z.string().min(1),
  category: z.string().min(1),
  image: z.string().min(1),
  displayOrder: z.number().int().nonnegative(),
});

export const testimonialSchema = z.object({
  name: z.string().min(1),
  designation: z.string(),
  photo: z.string(),
  rating: z.string().min(1),
  review: z.string().min(1),
  page: z.string(),
  displayOrder: z.number().int().nonnegative(),
});

export const seoSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  keywords: z.array(z.string()),
  ogImage: z.string(),
  favicon: z.string().min(1),
});
