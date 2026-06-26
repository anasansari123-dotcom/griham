import AdminSidebar from "@/components/admin/AdminSidebar";
import { ToastProvider } from "@/components/admin/ToastProvider";
import type { ReactNode } from "react";

export default function AdminPanelLayout({ children }: { children: ReactNode }) {
  return (
    <ToastProvider>
      <div className="min-h-screen bg-[#FAF9F6] text-[#1F3D3B]">
        <AdminSidebar />
        <div className="md:ml-64">
          <div className="border-b border-[#1F3D3B]/10 bg-white px-6 py-4 md:px-8">
            <p className="text-sm text-[#1F3D3B]/70">Manage website content without redeploying.</p>
          </div>
          <div className="p-6 md:p-8">{children}</div>
        </div>
      </div>
    </ToastProvider>
  );
}
