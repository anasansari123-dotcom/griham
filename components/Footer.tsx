import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/lib/siteData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[#1F3D3B]/10 bg-gradient-to-b from-white to-[#f6f4ee]">
      <div className="w-full px-5 py-12 md:px-8 md:py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <Image
                  src="/logo-griham.jpeg"
                  alt="GRIHAM logo"
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-[#1F3D3B]/10"
                />
                <h3 className="text-xl font-bold tracking-[0.16em] text-[#1F3D3B]">GRIHAM</h3>
              </div>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#1F3D3B]/70">
                Premium home decor with nature-led design language for timeless interiors and refined everyday living.
              </p>
            <Link
              href="/book-consultation"
              className="mt-5 inline-flex rounded-full bg-[#F4A300] px-5 py-2.5 text-sm font-semibold text-[#1F3D3B] transition hover:bg-[#ffb61f] md:hidden"
            >
              Book Free Consultation
            </Link>
              <div className="mt-5 hidden items-center rounded-full border border-[#F4A300]/30 bg-[#F4A300]/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#1F3D3B] md:inline-flex">
                Premium Design Partner
              </div>
            </div>

            <div className="hidden md:block">
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#1F3D3B]/65">Collections</h4>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                {footerLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="text-[#1F3D3B] transition hover:text-[#F4A300]">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

          <div className="hidden md:block">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#1F3D3B]/65">Why GRIHAM</h4>
            <div className="space-y-2 text-sm text-[#1F3D3B]/75">
              <p>Made-to-measure recommendations for your space.</p>
              <p>Premium materials with clean professional installation.</p>
              <p>Consistent style language across all categories.</p>
            </div>
            <Link
              href="/book-consultation"
              className="mt-5 inline-flex rounded-full bg-[#F4A300] px-5 py-2.5 text-sm font-semibold text-[#1F3D3B] transition hover:bg-[#ffb61f]"
            >
              Book Free Consultation
            </Link>
          </div>

          <div className="mt-4 flex flex-col gap-2 border-t border-[#1F3D3B]/10 pt-4 text-xs text-[#1F3D3B]/60 md:col-span-3 md:flex-row md:items-center md:justify-between">
            <p>© {year} GRIHAM. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/blog" className="hover:text-[#1F3D3B]">
                Blog
              </Link>
              <Link href="/book-consultation" className="hover:text-[#1F3D3B]">
                Consultation
              </Link>
              <Link href="/" className="hover:text-[#1F3D3B]">
                Privacy
              </Link>
              <Link href="/" className="hover:text-[#1F3D3B]">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
