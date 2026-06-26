"use client";

import { useRef, useState } from "react";
import { useToast } from "@/components/admin/ToastProvider";

type Props = {
  label: string;
  value?: string;
  onUploaded: (url: string) => void;
  uploadType?: "logo" | "image";
};

export default function ImageUploadField({ label, value, onUploaded, uploadType = "image" }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const { showToast } = useToast();

  async function handleFileChange(file?: File | null) {
    if (!file) return;
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      if (uploadType === "logo") formData.append("type", "logo");

      const res = await fetch("/api/upload", { method: "POST", body: formData });
      const json = await res.json();
      if (!json.success) throw new Error(json.message || "Upload failed");
      onUploaded(json.data.url);
      showToast("success", "Image uploaded");
    } catch (error) {
      showToast("error", error instanceof Error ? error.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-[#1F3D3B]">{label}</label>
      {value ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={value} alt="" className="mb-3 h-32 w-full max-w-xs rounded-lg border object-cover" />
      ) : null}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => handleFileChange(e.target.files?.[0])}
      />
      <button
        type="button"
        disabled={uploading}
        onClick={() => inputRef.current?.click()}
        className="rounded-lg border border-[#1F3D3B]/20 px-4 py-2 text-sm font-semibold text-[#1F3D3B] hover:bg-[#FAF9F6] disabled:opacity-50"
      >
        {uploading ? "Uploading..." : "Upload Image"}
      </button>
    </div>
  );
}
