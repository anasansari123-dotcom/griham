import type { NextRequest } from "next/server";
import { requireAuth } from "@/lib/auth/requireAuth";
import { createService, listServices } from "@/lib/services/cmsService";
import { serviceSchema } from "@/lib/validations/cms";
import { zodErrorMessage } from "@/lib/validations/helpers";
import { jsonError, jsonOk, revalidateSite } from "@/lib/api/response";

export async function GET() {
  try {
    return jsonOk(await listServices());
  } catch {
    return jsonError("Failed to fetch services", 500);
  }
}

export async function POST(request: NextRequest) {
  const { user, error } = requireAuth(request);
  if (!user) return error!;

  try {
    const parsed = serviceSchema.safeParse(await request.json());
    if (!parsed.success) return jsonError(zodErrorMessage(parsed.error));
    const doc = await createService(parsed.data);
    revalidateSite();
    return jsonOk(doc, 201);
  } catch {
    return jsonError("Failed to create service", 500);
  }
}
