"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const links = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/settings", label: "Website Settings" },
  { href: "/admin/hero", label: "Hero Section" },
  { href: "/admin/about", label: "About Section" },
  { href: "/admin/services", label: "Services" },
  { href: "/admin/gallery", label: "Gallery" },
  { href: "/admin/testimonials", label: "Testimonials" },
  { href: "/admin/contact", label: "Contact Details" },
  { href: "/admin/logo", label: "Logo" },
  { href: "/admin/seo", label: "SEO Settings" },
];

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function AdminSidebar({ open, onClose }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition md:hidden ${open ? "visible opacity-100" : "invisible opacity-0"}`}
        onClick={onClose}
        aria-hidden={!open}
      />
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-[#1F3D3B]/10 bg-[#1F3D3B] text-white transition-transform duration-200 md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="border-b border-white/10 px-5 py-6">
          <p className="text-xs uppercase tracking-[0.28em] text-[#F4A300]">GRIHAM CMS</p>
          <h1 className="mt-1 text-lg font-semibold">Admin Panel</h1>
        </div>
        <nav className="flex-1 space-y-1 overflow-y-auto p-4">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`block rounded-lg px-3 py-2 text-sm transition ${
                  active ? "bg-[#F4A300] font-semibold text-[#1F3D3B]" : "text-white/85 hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <button
            type="button"
            onClick={logout}
            className="mt-4 w-full rounded-lg px-3 py-2 text-left text-sm text-white/85 transition hover:bg-white/10"
          >
            Logout
          </button>
        </nav>
      </aside>
    </>
  );
}
