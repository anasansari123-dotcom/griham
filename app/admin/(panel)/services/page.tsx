"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { serviceSchema } from "@/lib/validations/cms";
import { z } from "zod";
import ImageUploadField from "@/components/admin/ImageUploadField";
import { useToast } from "@/components/admin/ToastProvider";

type FormValues = z.infer<typeof serviceSchema>;
type ServiceItem = FormValues & { _id: string };

const empty: FormValues = { name: "", description: "", image: "", href: "/", alt: "", displayOrder: 0 };

export default function ServicesAdminPage() {
  const { showToast } = useToast();
  const [items, setItems] = useState<ServiceItem[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const { register, handleSubmit, reset, setValue, watch, formState: { isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(serviceSchema),
    defaultValues: empty,
  });

  async function load() {
    const json = await (await fetch("/api/services")).json();
    if (json.success) setItems(json.data);
  }

  useEffect(() => { load(); }, []);

  function startCreate() {
    setEditingId(null);
    reset(empty);
  }

  function startEdit(item: ServiceItem) {
    setEditingId(item._id);
    reset(item);
  }

  async function onSubmit(values: FormValues) {
    const res = await fetch(editingId ? `/api/services/${editingId}` : "/api/services", {
      method: editingId ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const json = await res.json();
    showToast(json.success ? "success" : "error", json.success ? "Service saved" : json.message);
    if (json.success) {
      startCreate();
      load();
    }
  }

  async function remove(id: string) {
    if (!confirm("Delete this service?")) return;
    const json = await (await fetch(`/api/services/${id}`, { method: "DELETE" })).json();
    showToast(json.success ? "success" : "error", json.success ? "Deleted" : json.message);
    if (json.success) load();
  }

  return (
    <div className="grid gap-8 xl:grid-cols-[1fr_420px]">
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-3xl font-semibold">Services</h1>
          <button type="button" onClick={startCreate} className="rounded-full bg-[#1F3D3B] px-4 py-2 text-sm font-semibold text-white">Add New</button>
        </div>
        <div className="space-y-3">
          {items.map((item) => (
            <div key={item._id} className="flex items-center gap-4 rounded-xl border border-[#1F3D3B]/10 bg-white p-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.image} alt="" className="h-16 w-16 rounded-lg object-cover" />
              <div className="flex-1">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-[#1F3D3B]/70">{item.href}</p>
              </div>
              <div className="flex gap-2">
                <button type="button" onClick={() => startEdit(item)} className="text-sm font-semibold text-[#9A6800]">Edit</button>
                <button type="button" onClick={() => remove(item._id)} className="text-sm font-semibold text-red-600">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="rounded-2xl border border-[#1F3D3B]/10 bg-white p-5 space-y-3">
        <h2 className="text-lg font-semibold">{editingId ? "Edit Service" : "Create Service"}</h2>
        <input {...register("name")} placeholder="Service Name" className="w-full rounded-lg border px-3 py-2" />
        <textarea {...register("description")} placeholder="Description" rows={3} className="w-full rounded-lg border px-3 py-2" />
        <input {...register("href")} placeholder="Link (/curtains)" className="w-full rounded-lg border px-3 py-2" />
        <input {...register("alt")} placeholder="Image alt text" className="w-full rounded-lg border px-3 py-2" />
        <input type="number" {...register("displayOrder", { valueAsNumber: true })} placeholder="Display order" className="w-full rounded-lg border px-3 py-2" />
        <ImageUploadField label="Service Image" value={watch("image")} onUploaded={(url) => setValue("image", url, { shouldDirty: true })} />
        <input type="hidden" {...register("image")} />
        <button type="submit" disabled={isSubmitting} className="rounded-full bg-[#F4A300] px-4 py-2 font-semibold text-[#1F3D3B]">Save</button>
      </form>
    </div>
  );
}
