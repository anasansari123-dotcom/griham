"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { heroSchema } from "@/lib/validations/cms";
import { z } from "zod";
import ImageUploadField from "@/components/admin/ImageUploadField";
import { useToast } from "@/components/admin/ToastProvider";

type FormValues = z.infer<typeof heroSchema>;

export default function HeroAdminPage() {
  const { showToast } = useToast();
  const { register, handleSubmit, reset, setValue, watch, formState: { isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(heroSchema),
  });

  useEffect(() => {
    fetch("/api/hero").then((r) => r.json()).then((json) => json.success && json.data && reset(json.data));
  }, [reset]);

  async function onSubmit(values: FormValues) {
    const res = await fetch("/api/hero", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
    const json = await res.json();
    showToast(json.success ? "success" : "error", json.success ? "Hero saved" : json.message);
  }

  const fieldClass = "w-full rounded-lg border border-[#1F3D3B]/20 px-3 py-2 outline-none focus:border-[#F4A300]";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-3xl space-y-4">
      <h1 className="text-3xl font-semibold">Hero Section</h1>
      {[
        ["badge", "Badge"],
        ["heading", "Heading"],
        ["subheading", "Subheading"],
        ["buttonText", "Primary Button Text"],
        ["buttonLink", "Primary Button Link"],
        ["secondaryButtonText", "Secondary Button Text"],
        ["secondaryButtonLink", "Secondary Button Link"],
        ["backgroundVideo", "Background Video Path"],
      ].map(([name, label]) => (
        <div key={name}>
          <label className="mb-1 block text-sm font-semibold">{label}</label>
          <input {...register(name as keyof FormValues)} className={fieldClass} />
        </div>
      ))}
      <ImageUploadField label="Background Image" value={watch("backgroundImage")} onUploaded={(url) => setValue("backgroundImage", url, { shouldDirty: true })} />
      <input type="hidden" {...register("backgroundImage")} />
      <button type="submit" disabled={isSubmitting} className="rounded-full bg-[#F4A300] px-5 py-2.5 font-semibold text-[#1F3D3B]">Save Hero</button>
    </form>
  );
}
