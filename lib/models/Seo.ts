import mongoose, { Schema, type Model } from "mongoose";

export type ISeo = {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  favicon: string;
  updatedAt: Date;
};

const SeoSchema = new Schema<ISeo>(
  {
    title: { type: String, default: "GRIHAM | Premium Home Decor & Interiors" },
    description: { type: String, default: "" },
    keywords: { type: [String], default: [] },
    ogImage: { type: String, default: "" },
    favicon: { type: String, default: "/logo-griham.jpeg" },
  },
  { timestamps: { createdAt: false, updatedAt: true } },
);

export const Seo: Model<ISeo> = mongoose.models.Seo ?? mongoose.model<ISeo>("Seo", SeoSchema);
