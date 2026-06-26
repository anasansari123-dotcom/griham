import { NextResponse } from "next/server";
import { AUTH_COOKIE, authCookieOptions, signToken } from "@/lib/auth/token";
import { verifyPassword } from "@/lib/auth/password";
import { findUserByUsername } from "@/lib/services/cmsService";
import { loginSchema } from "@/lib/validations/cms";
import { zodErrorMessage } from "@/lib/validations/helpers";
import { jsonError } from "@/lib/api/response";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = loginSchema.safeParse(body);
    if (!parsed.success) {
      return jsonError(zodErrorMessage(parsed.error), 400);
    }

    const user = await findUserByUsername(parsed.data.username.trim());
    if (!user) return jsonError("Invalid username or password", 401);

    const valid = await verifyPassword(parsed.data.password, user.passwordHash);
    if (!valid) return jsonError("Invalid username or password", 401);

    const token = signToken({ userId: String(user._id), username: user.username });
    const response = NextResponse.json({
      success: true,
      data: { username: user.username },
    });
    response.cookies.set(AUTH_COOKIE, token, authCookieOptions());

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return jsonError("Unable to login", 500);
  }
}
