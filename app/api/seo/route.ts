import type { NextRequest } from "next/server";
import { requireAuth } from "@/lib/auth/requireAuth";
import { getSeoDoc, upsertSeo } from "@/lib/services/cmsService";
import { seoSchema } from "@/lib/validations/cms";
import { zodErrorMessage } from "@/lib/validations/helpers";
import { jsonError, jsonOk, revalidateSite } from "@/lib/api/response";

export async function GET() {
  try {
    return jsonOk(await getSeoDoc());
  } catch {
    return jsonError("Failed to fetch SEO", 500);
  }
}

export async function PUT(request: NextRequest) {
  const { user, error } = requireAuth(request);
  if (!user) return error!;

  try {
    const parsed = seoSchema.safeParse(await request.json());
    if (!parsed.success) return jsonError(zodErrorMessage(parsed.error));
    const doc = await upsertSeo(parsed.data);
    revalidateSite();
    return jsonOk(doc);
  } catch {
    return jsonError("Failed to update SEO", 500);
  }
}
