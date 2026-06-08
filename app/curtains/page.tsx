"use client";

import CurtainAllStylesGrid from "@/components/CurtainAllStylesGrid";
import CurtainCategoryFilters from "@/components/CurtainCategoryFilters";
import GalleryImageTile from "@/components/GalleryImageTile";
import CurtainProcessSteps from "@/components/CurtainProcessSteps";
import MotorizedCurtainsSection from "@/components/MotorizedCurtainsSection";
import SectionWrapper from "@/components/SectionWrapper";
import TestimonialCard from "@/components/TestimonialCard";
import { curtainFaqs, filterToParam, paramToFilter, styleGalleryImages } from "@/lib/curtainsData";
import { curtainsReviews } from "@/lib/testimonials";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import Link from "next/link";

const curtainDifferentiators = [
  {
    title: "Direct Sourcing from Manufacturers",
    desc: "We source curtain fabrics directly from manufacturers, helping us deliver premium quality at better prices.",
  },
  {
    title: "Value for Money",
    desc: "Our curtains combine quality, durability, and elegant designs to give you the best value for your investment.",
  },
  {
    title: "Complete Design Consultation",
    desc: "We provide complete curtain design consultation based on your space, interiors, lighting, and styling preferences.",
  },
  {
    title: "In-House Tailoring",
    desc: "Our skilled in-house tailors ensure perfect stitching, precise fitting, and premium finishing for every curtain.",
  },
  {
    title: "Automated Processes",
    desc: "Our automated production process minimizes errors and ensures consistent quality and timely delivery.",
  },
  {
    title: "Premium Hardware",
    desc: "We use premium-quality curtain hardware and accessories for smooth functionality, durability, and a luxury finish.",
  },
];

export default function CurtainsPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-7xl px-4 py-14 text-sm text-[#1F3D3B]/70">Loading curtains...</div>}>
      <CurtainsPageContent />
    </Suspense>
  );
}

function CurtainsPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const filterParam = searchParams.get("filter");

  useEffect(() => {
    if (!filterParam) return;
    const filter = paramToFilter(filterParam);
    if (!filter) return;
    if (filter === "All") {
      router.replace("/curtains");
      return;
    }
    router.replace(`/curtains/category/${filterToParam(filter)}`);
  }, [filterParam, router]);

  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 py-10 sm:px-6 md:py-14">
      <SectionWrapper className="rounded-3xl border border-[#1F3D3B]/10 bg-white/90 p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#F4A300]">Curtains</p>
        <h1 className="mt-2 text-3xl font-semibold text-[#1F3D3B] md:text-5xl">Curtains Collection</h1>
        <p className="mt-4 max-w-3xl text-sm text-[#1F3D3B]/75 md:text-base">
          Premium curtains crafted for privacy, light control, and visual elegance. Explore printed, Indian & traditional,
          luxury woven, kids room, and solid styles.
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
        <CurtainCategoryFilters activeFilter="All" />
        <div className="min-w-0">
          <CurtainAllStylesGrid />
        </div>
      </div>

      <SectionWrapper className="rounded-3xl border border-[#1F3D3B]/10 bg-white/90 p-6 md:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#F4A300]">Why GRIHAM</p>
            <h2 className="mt-2 text-3xl font-semibold text-[#1F3D3B] md:text-4xl">How We Stand Different Than Others</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#1F3D3B]/70 md:text-base">
              From fabric sourcing to installation — every step is built to give you premium curtains at honest value.
            </p>
          </div>
          <Link
            href="/book-consultation"
            className="shrink-0 rounded-full border border-[#1F3D3B]/20 px-5 py-2.5 text-sm font-semibold text-[#1F3D3B] transition hover:bg-[#1F3D3B] hover:text-white"
          >
            Book Free Consultation
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {curtainDifferentiators.map((item, index) => (
            <div
              key={item.title}
              className="group flex h-full flex-col rounded-2xl border border-[#1F3D3B]/10 bg-[#FAF9F6] p-5 transition hover:-translate-y-0.5 hover:border-[#F4A300]/30 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1F3D3B] text-sm font-bold text-[#F4A300] transition group-hover:bg-[#F4A300] group-hover:text-[#1F3D3B]">
                  {index + 1}
                </span>
                <h3 className="text-lg font-semibold leading-snug text-[#1F3D3B]">{item.title}</h3>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#1F3D3B]/75">{item.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <MotorizedCurtainsSection />

      <SectionWrapper className="rounded-3xl border border-[#1F3D3B]/10 bg-white/90 p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#F4A300]">Our process</p>
        <h2 className="mt-2 text-3xl font-semibold text-[#1F3D3B]">From measurement to delivery</h2>
        <p className="mt-3 max-w-2xl text-sm text-[#1F3D3B]/75 md:text-base">
          A simple, guided journey so your curtains fit perfectly and look premium in every room.
        </p>
        <CurtainProcessSteps />
      </SectionWrapper>

      <SectionWrapper animate={false}>
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.28em] text-[#F4A300]">Inspiration</p>
          <h2 className="mt-2 text-3xl font-semibold">Style gallery</h2>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-5">
          {styleGalleryImages.map((img, idx) => (
            <GalleryImageTile key={`${img.src}-${idx}`} src={img.src} alt={img.alt} priority={idx < 3} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper animate={false}>
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.28em] text-[#F4A300]">Reviews</p>
          <h2 className="mt-2 text-3xl font-semibold">What customers say</h2>
        </div>
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
          {curtainsReviews.map((review) => (
            <TestimonialCard key={`${review.name}-${review.rating}-${review.meta}`} review={review} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="rounded-3xl border border-[#1F3D3B]/10 bg-white p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#F4A300]">FAQ</p>
        <h2 className="mt-2 text-3xl font-semibold text-[#1F3D3B]">Frequently Asked Questions</h2>
        <p className="mt-3 max-w-2xl text-sm text-[#1F3D3B]/75">
          Everything you need to know about custom curtains, fabrics, installation, and ordering with GRIHAM.
        </p>
        <div className="mt-6 space-y-3">
          {curtainFaqs.map((faq) => (
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
