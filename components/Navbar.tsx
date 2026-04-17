"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navGroups } from "@/lib/siteData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const textColor = scrolled ? "text-[#1F3D3B]" : "text-white";
  const navLinks = navGroups[0]?.links ?? [];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 py-3 md:px-5">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-4 py-3 transition-all md:px-5 ${
          scrolled
            ? "border-[#1F3D3B]/10 bg-[#FAF9F6]/95 shadow-lg backdrop-blur-md"
            : "border-white/20 bg-[#0f2a28]/45 backdrop-blur-md"
        }`}
      >
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-griham.jpeg"
            alt="GRIHAM logo"
            width={54}
            height={54}
            className="h-11 w-11 rounded-full object-cover ring-2 ring-white/40"
            priority
          />
          <span className={`text-2xl font-bold tracking-[0.18em] ${textColor}`}>GRIHAM</span>
        </Link>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition lg:hidden ${
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
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M5 5L15 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M15 5L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M3 5H17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M3 10H17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M3 15H17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          )}
        </button>

        <div className="hidden flex-1 items-center lg:grid lg:grid-cols-[1fr_auto]">
          <div className="flex items-center justify-center gap-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`inline-flex h-10 items-center whitespace-nowrap rounded-full px-3 text-sm font-medium leading-none transition ${
                  pathname === link.href
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
            className="glow-button ml-3 inline-flex h-11 items-center justify-self-end whitespace-nowrap rounded-full bg-[#F4A300] px-5 text-sm font-semibold leading-none text-[#1F3D3B] transition hover:bg-[#ffb61f]"
          >
            Book Free Consultation
          </Link>
        </div>
      </nav>

      {mobileOpen ? (
        <div
          id="mobile-nav"
          className="mx-auto mt-3 max-w-7xl rounded-2xl border border-[#1F3D3B]/10 bg-[#FAF9F6]/95 p-3 shadow-lg backdrop-blur-md lg:hidden"
        >
          <div className="grid gap-2">
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                    pathname === link.href ? "bg-[#F4A300]/15 text-[#1F3D3B]" : "text-[#1F3D3B] hover:bg-[#1F3D3B]/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Link
              href="/book-consultation"
              className="mt-1 inline-flex h-12 items-center justify-center rounded-xl bg-[#F4A300] px-5 text-sm font-semibold text-[#1F3D3B] transition hover:bg-[#ffb61f]"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
