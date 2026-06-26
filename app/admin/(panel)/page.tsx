import Link from "next/link";

const cards = [
  { href: "/admin/settings", title: "Website Settings", desc: "Company info, social links, hours" },
  { href: "/admin/hero", title: "Hero Section", desc: "Homepage banner content" },
  { href: "/admin/about", title: "About Section", desc: "About heading and description" },
  { href: "/admin/services", title: "Services", desc: "Homepage collection cards" },
  { href: "/admin/gallery", title: "Gallery", desc: "Manage gallery images" },
  { href: "/admin/testimonials", title: "Testimonials", desc: "Customer reviews" },
  { href: "/admin/contact", title: "Contact Details", desc: "Phone, email, address, map" },
  { href: "/admin/logo", title: "Logo Management", desc: "Upload or replace logo" },
  { href: "/admin/seo", title: "SEO Settings", desc: "Meta title, description, keywords" },
];

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold">Dashboard</h1>
      <p className="mt-2 text-sm text-[#1F3D3B]/70">Update website content stored in MongoDB.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="rounded-2xl border border-[#1F3D3B]/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#F4A300]/40"
          >
            <h2 className="text-lg font-semibold">{card.title}</h2>
            <p className="mt-2 text-sm text-[#1F3D3B]/70">{card.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
