import type { NextRequest } from "next/server";
import { requireAuth } from "@/lib/auth/requireAuth";
import { getHeroDoc, upsertHero } from "@/lib/services/cmsService";
import { heroSchema } from "@/lib/validations/cms";
import { zodErrorMessage } from "@/lib/validations/helpers";
import { jsonError, jsonOk, revalidateSite } from "@/lib/api/response";

export async function GET() {
  try {
    return jsonOk(await getHeroDoc());
  } catch {
    return jsonError("Failed to fetch hero", 500);
  }
}

export async function PUT(request: NextRequest) {
  const { user, error } = requireAuth(request);
  if (!user) return error!;

  try {
    const parsed = heroSchema.safeParse(await request.json());
    if (!parsed.success) return jsonError(zodErrorMessage(parsed.error));
    const doc = await upsertHero(parsed.data);
    revalidateSite();
    return jsonOk(doc);
  } catch {
    return jsonError("Failed to update hero", 500);
  }
}
