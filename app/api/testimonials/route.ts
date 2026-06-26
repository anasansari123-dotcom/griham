import type { NextRequest } from "next/server";
import { requireAuth } from "@/lib/auth/requireAuth";
import { createTestimonial, listTestimonials } from "@/lib/services/cmsService";
import { testimonialSchema } from "@/lib/validations/cms";
import { zodErrorMessage } from "@/lib/validations/helpers";
import { jsonError, jsonOk, revalidateSite } from "@/lib/api/response";

export async function GET(request: NextRequest) {
  try {
    const page = request.nextUrl.searchParams.get("page") ?? undefined;
    return jsonOk(await listTestimonials(page));
  } catch {
    return jsonError("Failed to fetch testimonials", 500);
  }
}

export async function POST(request: NextRequest) {
  const { user, error } = requireAuth(request);
  if (!user) return error!;

  try {
    const parsed = testimonialSchema.safeParse(await request.json());
    if (!parsed.success) return jsonError(zodErrorMessage(parsed.error));
    const doc = await createTestimonial(parsed.data);
    revalidateSite();
    return jsonOk(doc, 201);
  } catch {
    return jsonError("Failed to create testimonial", 500);
  }
}
