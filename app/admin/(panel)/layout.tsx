"use client";

import AdminSidebar from "@/components/admin/AdminSidebar";
import { ToastProvider } from "@/components/admin/ToastProvider";
import { useState, type ReactNode } from "react";

export default function AdminPanelLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ToastProvider>
      <div className="min-h-screen bg-[#FAF9F6] text-[#1F3D3B]">
        <AdminSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="md:ml-64">
          <div className="sticky top-0 z-30 flex items-center gap-3 border-b border-[#1F3D3B]/10 bg-white px-4 py-4 md:px-8">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="rounded-lg border border-[#1F3D3B]/15 px-3 py-2 text-sm font-semibold md:hidden"
              aria-label="Open menu"
            >
              Menu
            </button>
            <p className="text-sm text-[#1F3D3B]/70">Manage website content without redeploying.</p>
          </div>
          <div className="p-4 sm:p-6 md:p-8">{children}</div>
        </div>
      </div>
    </ToastProvider>
  );
}
