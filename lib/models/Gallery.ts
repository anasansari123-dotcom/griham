import mongoose, { Schema, type Model, type Types } from "mongoose";

export type IGallery = {
  title: string;
  category: string;
  image: string;
  displayOrder: number;
  createdAt: Date;
  updatedAt: Date;
};

export type IGalleryDocument = IGallery & { _id: Types.ObjectId };

const GallerySchema = new Schema<IGallery>(
  {
    title: { type: String, required: true, trim: true },
    category: { type: String, default: "General" },
    image: { type: String, required: true },
    displayOrder: { type: Number, default: 0 },
  },
  { timestamps: true },
);

export const Gallery: Model<IGallery> =
  mongoose.models.Gallery ?? mongoose.model<IGallery>("Gallery", GallerySchema);
