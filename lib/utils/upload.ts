import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";

const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads");

export async function saveUploadedFile(file: File) {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  await mkdir(UPLOAD_DIR, { recursive: true });

  const ext = path.extname(file.name) || ".jpg";
  const filename = `${Date.now()}-${randomUUID()}${ext}`;
  const filepath = path.join(UPLOAD_DIR, filename);
  await writeFile(filepath, buffer);

  return `/uploads/${filename}`;
}
