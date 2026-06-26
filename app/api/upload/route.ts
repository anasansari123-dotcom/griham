import type { NextRequest } from "next/server";
import { requireAuth } from "@/lib/auth/requireAuth";
import { upsertSettings } from "@/lib/services/cmsService";
import { saveUploadedFile } from "@/lib/utils/upload";
import { jsonError, jsonOk, revalidateSite } from "@/lib/api/response";

export async function POST(request: NextRequest) {
  const { user, error } = requireAuth(request);
  if (!user) return error!;

  try {
    const formData = await request.formData();
    const file = formData.get("file");
    if (!(file instanceof File)) return jsonError("No file uploaded");

    const allowed = ["image/jpeg", "image/png", "image/webp", "image/avif", "image/gif", "image/x-icon", "image/vnd.microsoft.icon"];
    if (!allowed.includes(file.type) && !file.name.match(/\.(jpg|jpeg|png|webp|avif|gif|ico)$/i)) {
      return jsonError("Unsupported file type");
    }

    if (file.size > 5 * 1024 * 1024) return jsonError("File must be under 5MB");

    const url = await saveUploadedFile(file);
    const type = formData.get("type");

    if (type === "logo") {
      await upsertSettings({ logoUrl: url });
    }

    revalidateSite();
    return jsonOk({ url });
  } catch (err) {
    console.error(err);
    return jsonError("Upload failed", 500);
  }
}
