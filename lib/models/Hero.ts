import mongoose, { Schema, type Model } from "mongoose";

export type IHero = {
  badge: string;
  heading: string;
  subheading: string;
  buttonText: string;
  buttonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
  backgroundImage: string;
  backgroundVideo: string;
  updatedAt: Date;
};

const HeroSchema = new Schema<IHero>(
  {
    badge: { type: String, default: "Premium Furnishing" },
    heading: { type: String, default: "Premium Home Furnishings." },
    subheading: { type: String, default: "" },
    buttonText: { type: String, default: "Explore Collections" },
    buttonLink: { type: String, default: "#our-collection" },
    secondaryButtonText: { type: String, default: "Book Free Consultation" },
    secondaryButtonLink: { type: String, default: "/book-consultation" },
    backgroundImage: { type: String, default: "/images/hero-poster.jpg" },
    backgroundVideo: { type: String, default: "/Create_a_high-quality_202604162307.mp4" },
  },
  { timestamps: { createdAt: false, updatedAt: true } },
);

export const Hero: Model<IHero> = mongoose.models.Hero ?? mongoose.model<IHero>("Hero", HeroSchema);
