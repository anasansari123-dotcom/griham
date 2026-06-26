import type { NextRequest } from "next/server";
import { requireAuth } from "@/lib/auth/requireAuth";
import { deleteGalleryItem, updateGalleryItem } from "@/lib/services/cmsService";
import { gallerySchema } from "@/lib/validations/cms";
import { zodErrorMessage } from "@/lib/validations/helpers";
import { jsonError, jsonOk, revalidateSite } from "@/lib/api/response";

type Props = { params: { id: string } };

export async function PUT(request: NextRequest, { params }: Props) {
  const { user, error } = requireAuth(request);
  if (!user) return error!;

  try {
    const parsed = gallerySchema.safeParse(await request.json());
    if (!parsed.success) return jsonError(zodErrorMessage(parsed.error));
    const doc = await updateGalleryItem(params.id, parsed.data);
    if (!doc) return jsonError("Gallery item not found", 404);
    revalidateSite();
    return jsonOk(doc);
  } catch {
    return jsonError("Failed to update gallery item", 500);
  }
}

export async function DELETE(request: NextRequest, { params }: Props) {
  const { user, error } = requireAuth(request);
  if (!user) return error!;

  try {
    const doc = await deleteGalleryItem(params.id);
    if (!doc) return jsonError("Gallery item not found", 404);
    revalidateSite();
    return jsonOk({ deleted: true });
  } catch {
    return jsonError("Failed to delete gallery item", 500);
  }
}
