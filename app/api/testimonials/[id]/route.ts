import type { NextRequest } from "next/server";
import { requireAuth } from "@/lib/auth/requireAuth";
import { deleteTestimonial, updateTestimonial } from "@/lib/services/cmsService";
import { testimonialSchema } from "@/lib/validations/cms";
import { zodErrorMessage } from "@/lib/validations/helpers";
import { jsonError, jsonOk, revalidateSite } from "@/lib/api/response";

type Props = { params: { id: string } };

export async function PUT(request: NextRequest, { params }: Props) {
  const { user, error } = requireAuth(request);
  if (!user) return error!;

  try {
    const parsed = testimonialSchema.safeParse(await request.json());
    if (!parsed.success) return jsonError(zodErrorMessage(parsed.error));
    const doc = await updateTestimonial(params.id, parsed.data);
    if (!doc) return jsonError("Testimonial not found", 404);
    revalidateSite();
    return jsonOk(doc);
  } catch {
    return jsonError("Failed to update testimonial", 500);
  }
}

export async function DELETE(request: NextRequest, { params }: Props) {
  const { user, error } = requireAuth(request);
  if (!user) return error!;

  try {
    const doc = await deleteTestimonial(params.id);
    if (!doc) return jsonError("Testimonial not found", 404);
    revalidateSite();
    return jsonOk({ deleted: true });
  } catch {
    return jsonError("Failed to delete testimonial", 500);
  }
}
