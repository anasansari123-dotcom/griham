import { NextResponse, type NextRequest } from "next/server";
import { requireAuth } from "@/lib/auth/requireAuth";
import { upsertSettings, getSettingsDoc } from "@/lib/services/cmsService";
import { settingsSchema } from "@/lib/validations/cms";
import { zodErrorMessage } from "@/lib/validations/helpers";
import { jsonError, jsonOk, revalidateSite } from "@/lib/api/response";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const doc = await getSettingsDoc();
    return jsonOk(doc);
  } catch (error) {
    console.error(error);
    return jsonError("Failed to fetch settings", 500);
  }
}

async function saveSettings(request: NextRequest) {
  const { user, error } = requireAuth(request);
  if (!user) return error!;

  try {
    const body = await request.json();
    const parsed = settingsSchema.safeParse(body);
    if (!parsed.success) return jsonError(zodErrorMessage(parsed.error));

    await upsertSettings(parsed.data);
    revalidateSite();
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return jsonError("Failed to update settings", 500);
  }
}

export async function PUT(request: NextRequest) {
  return saveSettings(request);
}

export async function POST(request: NextRequest) {
  return saveSettings(request);
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      Allow: "GET, PUT, POST, OPTIONS",
    },
  });
}
