import type { NextRequest } from "next/server";
import { requireAuth } from "@/lib/auth/requireAuth";
import { createGalleryItem, listGallery } from "@/lib/services/cmsService";
import { gallerySchema } from "@/lib/validations/cms";
import { zodErrorMessage } from "@/lib/validations/helpers";
import { jsonError, jsonOk, revalidateSite } from "@/lib/api/response";

export async function GET() {
  try {
    return jsonOk(await listGallery());
  } catch {
    return jsonError("Failed to fetch gallery", 500);
  }
}

export async function POST(request: NextRequest) {
  const { user, error } = requireAuth(request);
  if (!user) return error!;

  try {
    const parsed = gallerySchema.safeParse(await request.json());
    if (!parsed.success) return jsonError(zodErrorMessage(parsed.error));
    const doc = await createGalleryItem(parsed.data);
    revalidateSite();
    return jsonOk(doc, 201);
  } catch {
    return jsonError("Failed to create gallery item", 500);
  }
}
