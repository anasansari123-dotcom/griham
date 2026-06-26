import mongoose, { Schema, type Model } from "mongoose";

export type IUser = {
  username: string;
  passwordHash: string;
  createdAt: Date;
  updatedAt: Date;
};

const UserSchema = new Schema<IUser>(
  {
    username: { type: String, required: true, unique: true, trim: true },
    passwordHash: { type: String, required: true },
  },
  { timestamps: true },
);

export const User: Model<IUser> = mongoose.models.User ?? mongoose.model<IUser>("User", UserSchema);
