"use client";

import Card from "@/components/Card";
import SectionWrapper from "@/components/SectionWrapper";
import { curtainsData } from "@/lib/siteData";
import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const filters = ["All", "Printed", "Essential", "Embroidered", "Solid", "Custom"];

const galleryImages = curtainsData.slice(0, 6).map((item, idx) => ({
  src: item.image,
  alt: `${item.name} curtain design ${idx + 1}`,
}));

export default function CurtainsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const normalizedActiveFilter = activeFilter.trim().toLowerCase();

  const filteredCurtains = useMemo(() => {
    if (normalizedActiveFilter === "all") return curtainsData;
    return curtainsData.filter((item) => item.tag?.trim().toLowerCase() === normalizedActiveFilter);
  }, [normalizedActiveFilter]);

  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 py-10 sm:px-6 md:py-14">
      <SectionWrapper className="rounded-3xl border border-[#1F3D3B]/10 bg-white/90 p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#F4A300]">Curtains</p>
        <h1 className="mt-2 text-3xl font-semibold text-[#1F3D3B] md:text-5xl">Curtains Collection</h1>
        <p className="mt-4 max-w-3xl text-sm text-[#1F3D3B]/75 md:text-base">
          Premium curtains crafted for privacy, light control, and visual elegance. Explore printed, essential, embroidered, solid, and custom styles.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {["Light control", "Thermal comfort", "Custom stitching", "Designer fabrics"].map((badge) => (
            <span key={badge} className="rounded-full border border-[#1F3D3B]/15 bg-[#FAF9F6] px-3 py-1 text-xs text-[#1F3D3B]/80">
              {badge}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/book-consultation" className="rounded-full bg-[#F4A300] px-5 py-2.5 text-sm font-semibold text-[#1F3D3B] hover:bg-[#ffb61f]">
            Book Free Consultation
          </Link>
          <Link href="/" className="rounded-full border border-[#1F3D3B]/20 px-5 py-2.5 text-sm font-semibold text-[#1F3D3B] hover:bg-[#1F3D3B] hover:text-white">
            Explore All Categories
          </Link>
        </div>
      </SectionWrapper>

      <div className="grid gap-5 sm:gap-6 md:gap-8 md:grid-cols-[240px_1fr]">
      <aside className="h-fit rounded-2xl border border-[#1F3D3B]/10 bg-white/80 p-4 md:p-5">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-sm uppercase tracking-widest text-[#1F3D3B]/70">Filters</h2>
          <span className="text-xs text-[#1F3D3B]/50 md:hidden">Tap</span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 md:block md:space-y-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-3 py-2 text-xs transition sm:px-4 sm:text-sm md:w-full md:rounded-xl md:text-left ${
                activeFilter === filter
                  ? "border-[#F4A300] bg-[#F4A300]/10 text-[#1F3D3B]"
                  : "border-[#1F3D3B]/10 hover:border-[#F4A300]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </aside>
      <SectionWrapper>
        <h2 className="mb-4 text-2xl font-semibold sm:mb-6 sm:text-4xl">Popular Curtain Styles</h2>
        <p className="-mt-2 mb-6 max-w-2xl text-sm text-[#1F3D3B]/75 sm:-mt-3 sm:text-base">
          Filter by style to quickly find the right look for your living room, bedroom, or complete home upgrade.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {filteredCurtains.map((item, idx) => (
            <Card key={`${item.name}-${item.image}-${idx}`} title={item.name} image={item.image} subtitle={item.tag} showConsultationButton />
          ))}
        </div>
        {filteredCurtains.length === 0 ? (
          <p className="mt-5 text-sm text-[#1F3D3B]/70">No curtains found for this category yet.</p>
        ) : null}
      </SectionWrapper>
      </div>

      <SectionWrapper className="grid gap-6 rounded-3xl border border-[#1F3D3B]/10 bg-white/80 p-6 md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-semibold">Why choose our curtains?</h3>
          <div className="mt-4 space-y-2">
            {[
              "Premium fabrics with rich fall and long-lasting finish.",
              "Custom measurements for full-length, window, or layered draping.",
              "Options for blackout, sheer, and combination styling.",
            ].map((line) => (
              <p key={line} className="rounded-xl bg-[#FAF9F6] px-4 py-3 text-sm text-[#1F3D3B]/80">
                {line}
              </p>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Best suited for</h3>
          <div className="mt-4 space-y-2">
            {[
              "Living rooms that need statement drapes.",
              "Bedrooms needing privacy and light control.",
              "Workspaces requiring low-glare soft daylight.",
            ].map((line) => (
              <p key={line} className="rounded-xl bg-[#FAF9F6] px-4 py-3 text-sm text-[#1F3D3B]/80">
                {line}
              </p>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="rounded-3xl border border-[#1F3D3B]/10 bg-white/90 p-6 md:p-8">
        <h2 className="text-3xl font-semibold">Details</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Fabric & fall",
              body: "We recommend fabrics based on the room’s light, desired privacy, and how structured or flowy you want the drape to look.",
            },
            {
              title: "Sheer & blackout layering",
              body: "Layered curtains combine soft daylight with nighttime privacy. We help you pick the right combination for bedroom and living areas.",
            },
            {
              title: "Measurement guidance",
              body: "Proper curtain drop and fullness make the biggest difference. We guide measurements for windows, doors, and full-height styling.",
            },
            {
              title: "Hardware & finishing",
              body: "Rods, tracks, rings, and pleat styles are selected to match the room theme and ensure smooth daily operation.",
            },
          ].map((section) => (
            <div key={section.title} className="rounded-2xl bg-[#FAF9F6] p-5">
              <h3 className="text-lg font-semibold text-[#1F3D3B]">{section.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#1F3D3B]/75">{section.body}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.28em] text-[#F4A300]">Inspiration</p>
          <h2 className="mt-2 text-3xl font-semibold">Style gallery</h2>
        </div>
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {galleryImages.map((img) => (
            <div key={img.src} className="group relative mb-5 overflow-hidden rounded-3xl border border-[#1F3D3B]/10 bg-white/80 shadow-sm">
              <Image src={img.src} alt={img.alt} width={900} height={1200} className="h-auto w-full transition duration-500 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-[#1F3D3B]/0 transition group-hover:bg-[#1F3D3B]/10" />
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.28em] text-[#F4A300]">Reviews</p>
          <h2 className="mt-2 text-3xl font-semibold">What customers say</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              quote: "The curtain fabric and fall look premium. Installation was quick and neat.",
              name: "Priya S.",
              rating: "5.0",
              meta: "Curtains",
            },
            {
              quote: "They suggested the right sheer + blackout layering for our bedroom. Perfect balance of light and privacy.",
              name: "Arjun R.",
              rating: "4.9",
              meta: "Bedroom",
            },
            {
              quote: "Great coordination with our wall colors and sofa. The room looks complete now.",
              name: "Neha K.",
              rating: "5.0",
              meta: "Living room",
            },
          ].map((review) => (
            <blockquote key={`${review.name}-${review.rating}-${review.meta}`} className="rounded-2xl border border-[#1F3D3B]/10 bg-white/90 p-6 shadow-sm">
              <p className="text-[#F4A300]">
                {"★".repeat(5)} <span className="text-[#1F3D3B]/70">({review.rating})</span>
              </p>
              <p className="mt-3 text-[#1F3D3B]/85">&quot;{review.quote}&quot;</p>
              <footer className="mt-4 text-sm font-semibold text-[#1F3D3B]">
                - {review.name} <span className="font-normal text-[#1F3D3B]/60">· {review.meta}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="rounded-3xl border border-[#1F3D3B]/10 bg-white p-6 md:p-8">
        <h2 className="text-3xl font-semibold">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-3">
          {[
            {
              q: "Can curtains be customized for odd window sizes?",
              a: "Yes, we provide made-to-measure stitching for standard and non-standard window dimensions.",
            },
            {
              q: "Do you offer both blackout and sheer options?",
              a: "Yes, we offer blackout, sheer, and layered combinations depending on light and privacy needs.",
            },
            {
              q: "Will you help match curtains with wall and sofa colors?",
              a: "Absolutely. We help you coordinate fabrics with the room palette for a balanced premium look.",
            },
          ].map((faq) => (
            <details key={faq.q} className="group rounded-xl border border-[#1F3D3B]/10 bg-[#FAF9F6] p-4">
              <summary className="cursor-pointer list-none pr-6 text-sm font-semibold text-[#1F3D3B]">
                {faq.q}
                <span className="float-right text-[#F4A300] transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-2 text-sm text-[#1F3D3B]/75">{faq.a}</p>
            </details>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
