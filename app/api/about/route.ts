import type { NextRequest } from "next/server";
import { requireAuth } from "@/lib/auth/requireAuth";
import { getAboutDoc, upsertAbout } from "@/lib/services/cmsService";
import { aboutSchema } from "@/lib/validations/cms";
import { zodErrorMessage } from "@/lib/validations/helpers";
import { jsonError, jsonOk, revalidateSite } from "@/lib/api/response";

export async function GET() {
  try {
    return jsonOk(await getAboutDoc());
  } catch {
    return jsonError("Failed to fetch about", 500);
  }
}

export async function PUT(request: NextRequest) {
  const { user, error } = requireAuth(request);
  if (!user) return error!;

  try {
    const parsed = aboutSchema.safeParse(await request.json());
    if (!parsed.success) return jsonError(zodErrorMessage(parsed.error));
    const doc = await upsertAbout(parsed.data);
    revalidateSite();
    return jsonOk(doc);
  } catch {
    return jsonError("Failed to update about", 500);
  }
}
