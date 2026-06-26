import { getSessionFromCookies } from "@/lib/auth/token";
import { jsonError, jsonOk } from "@/lib/api/response";

export async function GET() {
  const session = await getSessionFromCookies();
  if (!session) return jsonError("Unauthorized", 401);
  return jsonOk({ username: session.username });
}
