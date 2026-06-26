import type { ZodError } from "zod";

export function zodErrorMessage(error: ZodError) {
  return error.issues[0]?.message ?? "Invalid data";
}
