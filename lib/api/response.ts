import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export function jsonOk<T>(data: T, status = 200) {
  return NextResponse.json({ success: true, data }, { status });
}

export function jsonError(message: string, status = 400) {
  return NextResponse.json({ success: false, message }, { status });
}

export function revalidateSite() {
  revalidatePath("/", "layout");
  revalidatePath("/");
  revalidatePath("/contact");
  revalidatePath("/book-consultation");
}
