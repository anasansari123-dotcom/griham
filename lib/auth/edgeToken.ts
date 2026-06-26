import { jwtVerify } from "jose/jwt/verify";
import { AUTH_COOKIE, type AuthTokenPayload } from "@/lib/auth/constants";

export { AUTH_COOKIE };

function getSecretKey() {
  const secret = process.env.JWT_SECRET;
  if (!secret) return null;
  return new TextEncoder().encode(secret);
}

export async function verifyTokenEdge(token: string): Promise<AuthTokenPayload | null> {
  const key = getSecretKey();
  if (!key) return null;

  try {
    const { payload } = await jwtVerify(token, key);
    const userId = payload.userId;
    const username = payload.username;
    if (typeof userId !== "string" || typeof username !== "string") return null;
    return { userId, username };
  } catch {
    return null;
  }
}
