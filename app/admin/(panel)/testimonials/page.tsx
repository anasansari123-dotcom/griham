"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { testimonialSchema } from "@/lib/validations/cms";
import { z } from "zod";
import ImageUploadField from "@/components/admin/ImageUploadField";
import { useToast } from "@/components/admin/ToastProvider";

type FormValues = z.infer<typeof testimonialSchema>;
type TestimonialItem = FormValues & { _id: string };

const empty: FormValues = { name: "", designation: "", photo: "", rating: "5.0", review: "", page: "home", displayOrder: 0 };

export default function TestimonialsAdminPage() {
  const { showToast } = useToast();
  const [items, setItems] = useState<TestimonialItem[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const { register, handleSubmit, reset, setValue, watch, formState: { isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(testimonialSchema),
    defaultValues: empty,
  });

  async function load() {
    const json = await (await fetch("/api/testimonials")).json();
    if (json.success) setItems(json.data);
  }

  useEffect(() => { load(); }, []);

  async function onSubmit(values: FormValues) {
    const res = await fetch(editingId ? `/api/testimonials/${editingId}` : "/api/testimonials", {
      method: editingId ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const json = await res.json();
    showToast(json.success ? "success" : "error", json.success ? "Testimonial saved" : json.message);
    if (json.success) {
      setEditingId(null);
      reset(empty);
      load();
    }
  }

  async function remove(id: string) {
    if (!confirm("Delete this testimonial?")) return;
    const json = await (await fetch(`/api/testimonials/${id}`, { method: "DELETE" })).json();
    showToast(json.success ? "success" : "error", json.success ? "Deleted" : json.message);
    if (json.success) load();
  }

  return (
    <div className="grid gap-8 xl:grid-cols-[1fr_420px]">
      <div>
        <h1 className="mb-4 text-3xl font-semibold">Testimonials</h1>
        <div className="space-y-3">
          {items.map((item) => (
            <div key={item._id} className="rounded-xl border border-[#1F3D3B]/10 bg-white p-4">
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-[#1F3D3B]/70">{item.designation} · {item.page}</p>
              <p className="mt-2 text-sm">&quot;{item.review}&quot;</p>
              <div className="mt-2 flex gap-2">
                <button type="button" onClick={() => { setEditingId(item._id); reset(item); }} className="text-sm font-semibold text-[#9A6800]">Edit</button>
                <button type="button" onClick={() => remove(item._id)} className="text-sm font-semibold text-red-600">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 rounded-2xl border border-[#1F3D3B]/10 bg-white p-5">
        <h2 className="text-lg font-semibold">{editingId ? "Edit Testimonial" : "Add Testimonial"}</h2>
        <input {...register("name")} placeholder="Name" className="w-full rounded-lg border px-3 py-2" />
        <input {...register("designation")} placeholder="Designation / Location" className="w-full rounded-lg border px-3 py-2" />
        <input {...register("rating")} placeholder="Rating (5.0)" className="w-full rounded-lg border px-3 py-2" />
        <input {...register("page")} placeholder="Page (home, curtains, sofa...)" className="w-full rounded-lg border px-3 py-2" />
        <textarea {...register("review")} placeholder="Review" rows={4} className="w-full rounded-lg border px-3 py-2" />
        <input type="number" {...register("displayOrder", { valueAsNumber: true })} placeholder="Display order" className="w-full rounded-lg border px-3 py-2" />
        <ImageUploadField label="Photo" value={watch("photo")} onUploaded={(url) => setValue("photo", url, { shouldDirty: true })} />
        <input type="hidden" {...register("photo")} />
        <button type="submit" disabled={isSubmitting} className="rounded-full bg-[#F4A300] px-4 py-2 font-semibold text-[#1F3D3B]">Save</button>
      </form>
    </div>
  );
}
