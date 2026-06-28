"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { gallerySchema } from "@/lib/validations/cms";
import { z } from "zod";
import ImageUploadField from "@/components/admin/ImageUploadField";
import { useToast } from "@/components/admin/ToastProvider";
import { adminFetch, formatFormErrors } from "@/lib/admin/formUtils";

type FormValues = z.infer<typeof gallerySchema>;
type GalleryItem = FormValues & { _id: string };

const empty: FormValues = { title: "", category: "General", image: "", displayOrder: 0 };

export default function GalleryAdminPage() {
  const { showToast } = useToast();
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const { register, handleSubmit, reset, setValue, watch, formState: { isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(gallerySchema),
    defaultValues: empty,
  });

  async function load() {
    const json = await (await adminFetch("/api/gallery")).json();
    if (json.success) setItems(json.data);
  }

  useEffect(() => { load(); }, []);

  async function onSubmit(values: FormValues) {
    const res = await adminFetch(editingId ? `/api/gallery/${editingId}` : "/api/gallery", {
      method: editingId ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const json = await res.json();
    showToast(json.success ? "success" : "error", json.success ? "Gallery saved" : json.message || "Failed to save gallery item");
    if (json.success) {
      setEditingId(null);
      reset(empty);
      load();
    }
  }

  const onInvalid = (errors: Parameters<typeof formatFormErrors>[0]) => {
    showToast("error", formatFormErrors(errors));
  };

  async function remove(id: string) {
    if (!confirm("Delete this image?")) return;
    const json = await (await adminFetch(`/api/gallery/${id}`, { method: "DELETE" })).json();
    showToast(json.success ? "success" : "error", json.success ? "Deleted" : json.message);
    if (json.success) load();
  }

  return (
    <div className="grid gap-8 xl:grid-cols-[1fr_420px]">
      <div>
        <h1 className="mb-4 text-3xl font-semibold">Gallery</h1>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item._id} className="rounded-xl border border-[#1F3D3B]/10 bg-white p-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.image} alt={item.title} className="h-36 w-full rounded-lg object-cover" />
              <p className="mt-2 font-semibold">{item.title}</p>
              <p className="text-xs text-[#1F3D3B]/70">{item.category}</p>
              <div className="mt-2 flex gap-2">
                <button type="button" onClick={() => { setEditingId(item._id); reset(item); }} className="text-sm font-semibold text-[#9A6800]">Edit</button>
                <button type="button" onClick={() => remove(item._id)} className="text-sm font-semibold text-red-600">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit, onInvalid)} className="space-y-3 rounded-2xl border border-[#1F3D3B]/10 bg-white p-5">
        <h2 className="text-lg font-semibold">{editingId ? "Edit Image" : "Upload Image"}</h2>
        <input {...register("title")} placeholder="Title" className="w-full rounded-lg border px-3 py-2" />
        <input {...register("category")} placeholder="Category" className="w-full rounded-lg border px-3 py-2" />
        <input type="number" {...register("displayOrder", { valueAsNumber: true })} placeholder="Display order" className="w-full rounded-lg border px-3 py-2" />
        <ImageUploadField label="Gallery Image" value={watch("image")} onUploaded={(url) => setValue("image", url, { shouldDirty: true })} />
        <input type="hidden" {...register("image")} />
        <button type="submit" disabled={isSubmitting} className="rounded-full bg-[#F4A300] px-4 py-2 font-semibold text-[#1F3D3B]">Save</button>
      </form>
    </div>
  );
}
