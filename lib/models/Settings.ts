import mongoose, { Schema, type Model } from "mongoose";

export type ISettings = {
  companyName: string;
  phone: string;
  mobile: string;
  whatsApp: string;
  email: string;
  address: string;
  googleMapsLink: string;
  facebook: string;
  instagram: string;
  linkedin: string;
  workingHours: string;
  emergencyContact: string;
  logoUrl: string;
  mapLat: number;
  mapLng: number;
  updatedAt: Date;
};

const SettingsSchema = new Schema<ISettings>(
  {
    companyName: { type: String, default: "GRIHAM" },
    phone: { type: String, default: "" },
    mobile: { type: String, default: "" },
    whatsApp: { type: String, default: "" },
    email: { type: String, default: "" },
    address: { type: String, default: "" },
    googleMapsLink: { type: String, default: "" },
    facebook: { type: String, default: "" },
    instagram: { type: String, default: "" },
    linkedin: { type: String, default: "" },
    workingHours: { type: String, default: "" },
    emergencyContact: { type: String, default: "" },
    logoUrl: { type: String, default: "/logo-griham.jpeg" },
    mapLat: { type: Number, default: 12.9649257 },
    mapLng: { type: Number, default: 77.7174075 },
  },
  { timestamps: { createdAt: false, updatedAt: true } },
);

export const Settings: Model<ISettings> =
  mongoose.models.Settings ?? mongoose.model<ISettings>("Settings", SettingsSchema);
