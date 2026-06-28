"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { settingsSchema } from "@/lib/validations/cms";
import { z } from "zod";
import { useToast } from "@/components/admin/ToastProvider";
import { adminFetch, formatFormErrors } from "@/lib/admin/formUtils";

type FormValues = z.infer<typeof settingsSchema>;

export default function SettingsAdminPage() {
  const { showToast } = useToast();
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(settingsSchema),
  });

  useEffect(() => {
    adminFetch("/api/settings")
      .then((r) => r.json())
      .then((json) => {
        if (json.success && json.data) {
          reset({
            companyName: json.data.companyName ?? "",
            phone: json.data.phone ?? "",
            mobile: json.data.mobile ?? "",
            whatsApp: json.data.whatsApp ?? "",
            email: json.data.email ?? "",
            address: json.data.address ?? "",
            googleMapsLink: json.data.googleMapsLink ?? "",
            facebook: json.data.facebook ?? "",
            instagram: json.data.instagram ?? "",
            linkedin: json.data.linkedin ?? "",
            workingHours: json.data.workingHours ?? "",
            emergencyContact: json.data.emergencyContact ?? "",
            logoUrl: json.data.logoUrl ?? "",
            mapLat: Number(json.data.mapLat) || 12.9649257,
            mapLng: Number(json.data.mapLng) || 77.7174075,
          });
        }
      });
  }, [reset]);

  async function onSubmit(values: FormValues) {
    const res = await adminFetch("/api/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const json = await res.json();
    showToast(json.success ? "success" : "error", json.success ? "Settings saved" : json.message || "Failed to save settings");
  }

  const onInvalid = (errors: Parameters<typeof formatFormErrors>[0]) => {
    showToast("error", formatFormErrors(errors));
  };

  const fieldClass = "w-full rounded-lg border border-[#1F3D3B]/20 px-3 py-2 outline-none focus:border-[#F4A300]";

  return (
    <form onSubmit={handleSubmit(onSubmit, onInvalid)} className="max-w-3xl space-y-4">
      <h1 className="text-3xl font-semibold">Website Settings</h1>
      {[
        ["companyName", "Company Name"],
        ["phone", "Phone Number"],
        ["mobile", "Mobile Number"],
        ["whatsApp", "WhatsApp URL"],
        ["email", "Email"],
        ["address", "Address"],
        ["googleMapsLink", "Google Maps Link"],
        ["facebook", "Facebook"],
        ["instagram", "Instagram"],
        ["linkedin", "LinkedIn"],
        ["workingHours", "Working Hours"],
        ["emergencyContact", "Emergency Contact"],
        ["logoUrl", "Logo URL"],
      ].map(([name, label]) => (
        <div key={name}>
          <label className="mb-1 block text-sm font-semibold">{label}</label>
          <input {...register(name as keyof FormValues)} className={fieldClass} />
        </div>
      ))}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-semibold">Map Latitude</label>
          <input type="number" step="any" {...register("mapLat", { valueAsNumber: true })} className={fieldClass} />
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold">Map Longitude</label>
          <input type="number" step="any" {...register("mapLng", { valueAsNumber: true })} className={fieldClass} />
        </div>
      </div>
      <button type="submit" disabled={isSubmitting} className="rounded-full bg-[#F4A300] px-5 py-2.5 font-semibold text-[#1F3D3B]">
        Save Settings
      </button>
    </form>
  );
}
