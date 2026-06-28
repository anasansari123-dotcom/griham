"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { seoSchema } from "@/lib/validations/cms";
import { z } from "zod";
import ImageUploadField from "@/components/admin/ImageUploadField";
import { useToast } from "@/components/admin/ToastProvider";
import { adminFetch, formatFormErrors } from "@/lib/admin/formUtils";

type FormValues = z.infer<typeof seoSchema>;

export default function SeoAdminPage() {
  const { showToast } = useToast();
  const [keywordsText, setKeywordsText] = useState("");
  const { register, handleSubmit, reset, setValue, watch, formState: { isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(seoSchema),
  });

  useEffect(() => {
    adminFetch("/api/seo")
      .then((r) => r.json())
      .then((json) => {
        if (json.success && json.data) {
          reset(json.data);
          setKeywordsText((json.data.keywords ?? []).join(", "));
        }
      });
  }, [reset]);

  async function onSubmit(values: FormValues) {
    const payload = { ...values, keywords: keywordsText.split(",").map((k) => k.trim()).filter(Boolean) };
    const res = await adminFetch("/api/seo", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    const json = await res.json();
    showToast(json.success ? "success" : "error", json.success ? "SEO saved" : json.message || "Failed to save SEO");
  }

  const onInvalid = (errors: Parameters<typeof formatFormErrors>[0]) => {
    showToast("error", formatFormErrors(errors));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onInvalid)} className="max-w-3xl space-y-4">
      <h1 className="text-3xl font-semibold">SEO Settings</h1>
      <div>
        <label className="mb-1 block text-sm font-semibold">Title</label>
        <input {...register("title")} className="w-full rounded-lg border border-[#1F3D3B]/20 px-3 py-2" />
      </div>
      <div>
        <label className="mb-1 block text-sm font-semibold">Description</label>
        <textarea {...register("description")} rows={4} className="w-full rounded-lg border border-[#1F3D3B]/20 px-3 py-2" />
      </div>
      <div>
        <label className="mb-1 block text-sm font-semibold">Keywords (comma separated)</label>
        <input value={keywordsText} onChange={(e) => setKeywordsText(e.target.value)} className="w-full rounded-lg border border-[#1F3D3B]/20 px-3 py-2" />
      </div>
      <ImageUploadField label="OpenGraph Image" value={watch("ogImage")} onUploaded={(url) => setValue("ogImage", url, { shouldDirty: true })} />
      <ImageUploadField label="Favicon" value={watch("favicon")} onUploaded={(url) => setValue("favicon", url, { shouldDirty: true })} />
      <input type="hidden" {...register("ogImage")} />
      <input type="hidden" {...register("favicon")} />
      <button type="submit" disabled={isSubmitting} className="rounded-full bg-[#F4A300] px-5 py-2.5 font-semibold text-[#1F3D3B]">Save SEO</button>
    </form>
  );
}
