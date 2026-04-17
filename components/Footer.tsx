import Link from "next/link";
import Image from "next/image";

const links = [
  "curtains",
  "wallpapers",
  "wall-panels",
  "sofa",
  "cots",
  "mosquito-nets",
  "mattress",
  "wooden-flooring",
];

export default function Footer() {
  return (
    <footer className="border-t border-[#1F3D3B]/10 bg-white/80">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 pt-12 pb-24 md:grid-cols-3 md:px-6 md:pb-12">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/logo-griham.jpeg"
              alt="GRIHAM logo"
              width={56}
              height={56}
              className="h-14 w-14 rounded-full object-cover"
            />
            <h3 className="text-xl font-bold tracking-[0.16em] text-[#1F3D3B]">GRIHAM</h3>
          </div>
          <p className="mt-3 max-w-xs text-sm text-[#1F3D3B]/70">
            Premium home decor with nature-led design language for timeless interiors.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#1F3D3B]/70">Collections</h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {links.map((item) => (
              <Link key={item} href={`/${item}`} className="text-[#1F3D3B] hover:text-[#F4A300]">
                {item.replace("-", " ")}
              </Link>
            ))}
          </div>
        </div>
        <div id="consultation">
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#1F3D3B]/70">Consultation</h4>
          <p className="text-sm text-[#1F3D3B]/70">Share your room measurements and style preferences for a curated recommendation.</p>
          <div className="mt-4 space-y-1 text-sm text-[#1F3D3B]/80">
            <p>AECS Layout, Brookefield, Bengaluru</p>
            <a href="tel:+917022970608" className="block hover:text-[#F4A300]">
              +91 7022970608
            </a>
            <a href="https://www.grihamdecor.in" target="_blank" rel="noreferrer" className="block hover:text-[#F4A300]">
              www.grihamdecor.in
            </a>
          </div>
          <Link href="/book-consultation" className="mt-4 inline-block rounded-full bg-[#F4A300] px-5 py-2 text-sm font-semibold text-[#1F3D3B] shadow hover:shadow-lg">
            Book Free Consultation
          </Link>
        </div>
      </div>
    </footer>
  );
}
