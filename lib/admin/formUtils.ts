import type { FieldErrors, FieldValues } from "react-hook-form";

export function formatFormErrors(errors: FieldErrors<FieldValues>) {
  const first = Object.values(errors)[0];
  if (first && typeof first === "object" && "message" in first && first.message) {
    return String(first.message);
  }
  return "Please fill all required fields correctly.";
}

export async function adminFetch(input: RequestInfo | URL, init?: RequestInit) {
  return fetch(input, {
    credentials: "same-origin",
    ...init,
    headers: {
      ...(init?.headers ?? {}),
    },
  });
}

export async function readAdminJson<T>(response: Response) {
  const json = (await response.json()) as { success: boolean; message?: string; data?: T };
  return json;
}
