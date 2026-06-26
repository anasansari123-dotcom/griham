import mongoose, { Schema, type Model, type Types } from "mongoose";

export type ITestimonial = {
  name: string;
  designation: string;
  photo: string;
  rating: string;
  review: string;
  page: string;
  displayOrder: number;
  createdAt: Date;
  updatedAt: Date;
};

export type ITestimonialDocument = ITestimonial & { _id: Types.ObjectId };

const TestimonialSchema = new Schema<ITestimonial>(
  {
    name: { type: String, required: true, trim: true },
    designation: { type: String, default: "" },
    photo: { type: String, default: "" },
    rating: { type: String, default: "5.0" },
    review: { type: String, required: true },
    page: { type: String, default: "home" },
    displayOrder: { type: Number, default: 0 },
  },
  { timestamps: true },
);

export const Testimonial: Model<ITestimonial> =
  mongoose.models.Testimonial ?? mongoose.model<ITestimonial>("Testimonial", TestimonialSchema);
