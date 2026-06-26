"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { aboutSchema } from "@/lib/validations/cms";
import { z } from "zod";
import ImageUploadField from "@/components/admin/ImageUploadField";
import { useToast } from "@/components/admin/ToastProvider";

type FormValues = z.infer<typeof aboutSchema>;

export default function AboutAdminPage() {
  const { showToast } = useToast();
  const { register, handleSubmit, reset, setValue, watch, formState: { isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(aboutSchema),
  });

  useEffect(() => {
    fetch("/api/about").then((r) => r.json()).then((json) => json.success && json.data && reset(json.data));
  }, [reset]);

  async function onSubmit(values: FormValues) {
    const res = await fetch("/api/about", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
    const json = await res.json();
    showToast(json.success ? "success" : "error", json.success ? "About saved" : json.message);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-3xl space-y-4">
      <h1 className="text-3xl font-semibold">About Section</h1>
      <div>
        <label className="mb-1 block text-sm font-semibold">Heading</label>
        <input {...register("heading")} className="w-full rounded-lg border border-[#1F3D3B]/20 px-3 py-2" />
      </div>
      <div>
        <label className="mb-1 block text-sm font-semibold">Description</label>
        <textarea {...register("description")} rows={5} className="w-full rounded-lg border border-[#1F3D3B]/20 px-3 py-2" />
      </div>
      <ImageUploadField label="About Image" value={watch("image")} onUploaded={(url) => setValue("image", url, { shouldDirty: true })} />
      <input type="hidden" {...register("image")} />
      <button type="submit" disabled={isSubmitting} className="rounded-full bg-[#F4A300] px-5 py-2.5 font-semibold text-[#1F3D3B]">Save About</button>
    </form>
  );
}
