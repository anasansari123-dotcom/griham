"use client";

import { useEffect, useState } from "react";
import ImageUploadField from "@/components/admin/ImageUploadField";
import { useToast } from "@/components/admin/ToastProvider";
import { adminFetch } from "@/lib/admin/formUtils";

export default function LogoAdminPage() {
  const { showToast } = useToast();
  const [logoUrl, setLogoUrl] = useState("/logo-griham.jpeg");
  const [settingsData, setSettingsData] = useState<Record<string, unknown> | null>(null);

  useEffect(() => {
    adminFetch("/api/settings")
      .then((r) => r.json())
      .then((json) => {
        if (json.success && json.data) {
          setSettingsData(json.data);
          if (json.data.logoUrl) setLogoUrl(json.data.logoUrl);
        }
      });
  }, []);

  async function saveLogo(url: string) {
    if (!settingsData) {
      showToast("error", "Settings not loaded yet. Refresh and try again.");
      return;
    }

    const res = await adminFetch("/api/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...settingsData, logoUrl: url }),
    });
    const json = await res.json();
    if (json.success) {
      setLogoUrl(url);
      setSettingsData(json.data);
    }
    showToast(json.success ? "success" : "error", json.success ? "Logo updated" : json.message || "Failed to update logo");
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
