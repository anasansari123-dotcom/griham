import mongoose, { Schema, type Model, type Types } from "mongoose";

export type IService = {
  name: string;
  description: string;
  image: string;
  href: string;
  alt: string;
  displayOrder: number;
  createdAt: Date;
  updatedAt: Date;
};

export type IServiceDocument = IService & { _id: Types.ObjectId };

const ServiceSchema = new Schema<IService>(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, default: "" },
    image: { type: String, required: true },
    href: { type: String, default: "/" },
    alt: { type: String, default: "" },
    displayOrder: { type: Number, default: 0 },
  },
  { timestamps: true },
);

export const Service: Model<IService> =
  mongoose.models.Service ?? mongoose.model<IService>("Service", ServiceSchema);
