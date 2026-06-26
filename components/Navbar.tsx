"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navGroups } from "@/lib/siteData";

type Props = {
  logoUrl?: string;
  companyName?: string;
};

export default function Navbar({ logoUrl = "/logo-griham.jpeg", companyName = "GRIHAM" }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const textColor = scrolled ? "text-[#1F3D3B]" : "text-white";
  const navLinks = navGroups[0]?.links ?? [];

  const isActiveLink = (href: string) => {
    if (href === "/blog") return pathname === "/blog" || pathname.startsWith("/blog/");
    if (href === "/contact") return pathname === "/contact";
    return pathname === href;
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-[100] px-2 py-2.5 md:px-4 md:py-3">
      <nav
        className={`mx-auto flex min-h-[3.75rem] max-w-7xl items-center justify-between rounded-2xl border px-3 py-2.5 transition-all md:min-h-[4rem] md:px-4 md:py-3 ${
          scrolled
            ? "border-[#1F3D3B]/10 bg-[#FAF9F6]/95 shadow-lg backdrop-blur-md"
            : "border-white/20 bg-[#0f2a28]/45 backdrop-blur-md"
        }`}
      >
        <Link href="/" className="flex shrink-0 items-center gap-2 md:gap-2.5">
          <Image
            src={logoUrl}
            alt={`${companyName} logo`}
            width={48}
            height={48}
            className="h-9 w-9 rounded-full object-cover ring-2 ring-white/40 md:h-10 md:w-10"
            priority
          />
          <span className={`text-lg font-bold tracking-[0.16em] md:text-xl ${textColor}`}>{companyName}</span>
        </Link>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition lg:hidden ${
            scrolled
              ? "border-[#1F3D3B]/15 bg-white/80 text-[#1F3D3B] hover:bg-white"
              : "border-white/25 bg-white/10 text-white hover:bg-white/15"
          }`}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
          {mobileOpen ? (
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M5 5L15 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M15 5L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M3 5H17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M3 10H17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M3 15H17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          )}
        </button>

        <div className="hidden flex-1 items-center lg:grid lg:grid-cols-[1fr_auto]">
          <div className="flex flex-wrap items-center justify-center gap-x-2 md:gap-x-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`inline-flex h-8 items-center whitespace-nowrap rounded-full px-2 text-[11px] font-medium leading-none transition md:px-2.5 md:text-sm ${
                  isActiveLink(link.href)
                    ? "bg-[#F4A300]/20 text-[#F4A300]"
                    : `${textColor} hover:bg-white/10 hover:text-[#F4A300]`
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/book-consultation"
            className="glow-button ml-3 inline-flex h-8 shrink-0 items-center justify-self-end whitespace-nowrap rounded-full bg-[#F4A300] px-3 text-[11px] font-semibold leading-none text-[#1F3D3B] transition hover:bg-[#ffb61f] md:ml-4 md:px-3.5 md:text-xs"
          >
            Book Free Consultation
          </Link>
        </div>
      </nav>

      {mobileOpen ? (
        <div
          id="mobile-nav"
          className="mx-auto mt-2 max-w-7xl rounded-2xl border border-[#1F3D3B]/10 bg-[#FAF9F6]/95 p-3 shadow-lg backdrop-blur-md lg:hidden"
        >
          <div className="grid gap-2">
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                    isActiveLink(link.href) ? "bg-[#F4A300]/15 text-[#1F3D3B]" : "text-[#1F3D3B] hover:bg-[#1F3D3B]/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Link
              href="/book-consultation"
              className="mt-1 inline-flex h-11 items-center justify-center rounded-xl bg-[#F4A300] px-5 text-sm font-semibold text-[#1F3D3B] transition hover:bg-[#ffb61f]"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
