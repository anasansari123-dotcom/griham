import mongoose, { Schema, type Model } from "mongoose";

export type IAbout = {
  heading: string;
  description: string;
  image: string;
  updatedAt: Date;
};

const AboutSchema = new Schema<IAbout>(
  {
    heading: { type: String, default: "How We Stand Different Than Others" },
    description: { type: String, default: "" },
    image: { type: String, default: "" },
  },
  { timestamps: { createdAt: false, updatedAt: true } },
);

export const About: Model<IAbout> = mongoose.models.About ?? mongoose.model<IAbout>("About", AboutSchema);
