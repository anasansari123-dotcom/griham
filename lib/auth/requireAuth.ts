import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getTokenFromRequest, verifyToken } from "@/lib/auth/jwt";

export function unauthorizedResponse(message = "Unauthorized") {
  return NextResponse.json({ success: false, message }, { status: 401 });
}

export function getAuthUser(request: NextRequest) {
  const token = getTokenFromRequest(request);
  if (!token) return null;
  return verifyToken(token);
}

export function requireAuth(request: NextRequest) {
  const user = getAuthUser(request);
  if (!user) return { user: null, error: unauthorizedResponse() };
  return { user, error: null };
}
