import { connectDB } from "@/lib/db/connect";
import { Settings, type ISettings } from "@/lib/models/Settings";
import { Hero, type IHero } from "@/lib/models/Hero";
import { About, type IAbout } from "@/lib/models/About";
import { Service } from "@/lib/models/Service";
import { Gallery } from "@/lib/models/Gallery";
import { Testimonial } from "@/lib/models/Testimonial";
import { Seo, type ISeo } from "@/lib/models/Seo";
import { User } from "@/lib/models/User";

async function getSingleton<T>(model: { findOne: () => Promise<T | null> }, defaults: T): Promise<T> {
  await connectDB();
  const doc = await model.findOne();
  return doc ?? defaults;
}

export async function getSettingsDoc() {
  return getSingleton(Settings, null as unknown as ISettings);
}

export async function upsertSettings(data: Partial<ISettings>) {
  await connectDB();
  return Settings.findOneAndUpdate({}, { $set: data }, { upsert: true, new: true, setDefaultsOnInsert: true }).lean();
}

export async function getHeroDoc() {
  return getSingleton(Hero, null as unknown as IHero);
}

export async function upsertHero(data: Partial<IHero>) {
  await connectDB();
  return Hero.findOneAndUpdate({}, { $set: data }, { upsert: true, new: true, setDefaultsOnInsert: true }).lean();
}

export async function getAboutDoc() {
  return getSingleton(About, null as unknown as IAbout);
}

export async function upsertAbout(data: Partial<IAbout>) {
  await connectDB();
  return About.findOneAndUpdate({}, { $set: data }, { upsert: true, new: true, setDefaultsOnInsert: true }).lean();
}

export async function getSeoDoc() {
  return getSingleton(Seo, null as unknown as ISeo);
}

export async function upsertSeo(data: Partial<ISeo>) {
  await connectDB();
  return Seo.findOneAndUpdate({}, { $set: data }, { upsert: true, new: true, setDefaultsOnInsert: true }).lean();
}

export async function listServices() {
  await connectDB();
  return Service.find().sort({ displayOrder: 1, createdAt: 1 }).lean();
}

export async function createService(data: Parameters<typeof Service.create>[0]) {
  await connectDB();
  return Service.create(data);
}

export async function updateService(id: string, data: Record<string, unknown>) {
  await connectDB();
  return Service.findByIdAndUpdate(id, data, { new: true }).lean();
}

export async function deleteService(id: string) {
  await connectDB();
  return Service.findByIdAndDelete(id).lean();
}

export async function listGallery() {
  await connectDB();
  return Gallery.find().sort({ displayOrder: 1, createdAt: 1 }).lean();
}

export async function createGalleryItem(data: Parameters<typeof Gallery.create>[0]) {
  await connectDB();
  return Gallery.create(data);
}

export async function updateGalleryItem(id: string, data: Record<string, unknown>) {
  await connectDB();
  return Gallery.findByIdAndUpdate(id, data, { new: true }).lean();
}

export async function deleteGalleryItem(id: string) {
  await connectDB();
  return Gallery.findByIdAndDelete(id).lean();
}

export async function listTestimonials(page?: string) {
  await connectDB();
  const filter = page ? { page } : {};
  return Testimonial.find(filter).sort({ displayOrder: 1, createdAt: 1 }).lean();
}

export async function createTestimonial(data: Parameters<typeof Testimonial.create>[0]) {
  await connectDB();
  return Testimonial.create(data);
}

export async function updateTestimonial(id: string, data: Record<string, unknown>) {
  await connectDB();
  return Testimonial.findByIdAndUpdate(id, data, { new: true }).lean();
}

export async function deleteTestimonial(id: string) {
  await connectDB();
  return Testimonial.findByIdAndDelete(id).lean();
}

export async function findUserByUsername(username: string) {
  await connectDB();
  return User.findOne({ username }).lean();
}

export async function createUser(username: string, passwordHash: string) {
  await connectDB();
  return User.create({ username, passwordHash });
}

export async function countUsers() {
  await connectDB();
  return User.countDocuments();
}
