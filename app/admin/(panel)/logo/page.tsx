"use client";

import { useEffect, useState } from "react";
import ImageUploadField from "@/components/admin/ImageUploadField";
import { useToast } from "@/components/admin/ToastProvider";

export default function LogoAdminPage() {
  const { showToast } = useToast();
  const [logoUrl, setLogoUrl] = useState("/logo-griham.jpeg");

  useEffect(() => {
    fetch("/api/settings").then((r) => r.json()).then((json) => {
      if (json.success && json.data?.logoUrl) setLogoUrl(json.data.logoUrl);
    });
  }, []);

  async function saveLogo(url: string) {
    const res = await fetch("/api/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...(await (await fetch("/api/settings")).json()).data, logoUrl: url }),
    });
    const json = await res.json();
    setLogoUrl(url);
    showToast(json.success ? "success" : "error", json.success ? "Logo updated" : json.message);
  }

  return (
    <div className="max-w-xl">
      <h1 className="text-3xl font-semibold">Logo Management</h1>
      <p className="mt-2 text-sm text-[#1F3D3B]/70">Upload a new logo. It appears in the navbar, footer, and favicon area.</p>
      <div className="mt-6">
        <ImageUploadField label="Site Logo" value={logoUrl} uploadType="logo" onUploaded={saveLogo} />
      </div>
    </div>
  );
}
