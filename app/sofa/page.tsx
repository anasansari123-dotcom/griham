"use client";

import SofaAllStylesGrid from "@/components/SofaAllStylesGrid";
import SofaCategoryFilters from "@/components/SofaCategoryFilters";
import SectionWrapper from "@/components/SectionWrapper";
import StyleGallery from "@/components/StyleGallery";
import TestimonialCard from "@/components/TestimonialCard";
import { filterToParam, paramToFilter, sofaPageContent, sofaStyleGalleryImages } from "@/lib/sofaData";
import { sofaReviews } from "@/lib/testimonials";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

export default function SofaPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-7xl px-4 py-14 text-sm text-[#1F3D3B]/70">Loading sofa...</div>}>
      <SofaPageContent />
    </Suspense>
  );
}

function SofaPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const filterParam = searchParams.get("filter");

  useEffect(() => {
    if (!filterParam) return;
    const filter = paramToFilter(filterParam);
    if (!filter) return;
    if (filter === "All") {
      router.replace("/sofa");
      return;
    }
    router.replace(`/sofa/category/${filterToParam(filter)}`);
  }, [filterParam, router]);

  const { badges, features, specs, processSteps, highlights, contentSections, faqs } = sofaPageContent;

  return (
    <div className="mx-auto max-w-7xl space-y-10 px-4 py-10 sm:px-6 md:space-y-14 md:py-14">
      <SectionWrapper className="rounded-3xl border border-[#1F3D3B]/10 bg-white/90 p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#F4A300]">Sofa</p>
        <h1 className="mt-2 text-3xl font-semibold text-[#1F3D3B] md:text-5xl">Sofa Collection</h1>
        <p className="mt-4 max-w-3xl text-sm text-[#1F3D3B]/75 md:text-base">
          Engineered comfort with made-for-you silhouettes, fabrics, and modular flexibility built for everyday lounging
          and premium living rooms.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {badges.map((badge) => (
            <span key={badge} className="rounded-full border border-[#1F3D3B]/15 bg-[#FAF9F6] px-3 py-1 text-xs text-[#1F3D3B]/80">
              {badge}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/book-consultation"
            className="rounded-full bg-[#F4A300] px-5 py-2.5 text-sm font-semibold text-[#1F3D3B] hover:bg-[#ffb61f]"
          >
            Book Free Consultation
          </Link>
          <Link
            href="/"
            className="rounded-full border border-[#1F3D3B]/20 px-5 py-2.5 text-sm font-semibold text-[#1F3D3B] hover:bg-[#1F3D3B] hover:text-white"
          >
            Explore All Categories
          </Link>
        </div>
      </SectionWrapper>

      <div className="grid gap-5 sm:gap-6 md:gap-8 md:grid-cols-[240px_1fr]">
        <SofaCategoryFilters activeFilter="All" />
        <div className="min-w-0">
          <SofaAllStylesGrid />
        </div>
      </div>

      <SectionWrapper className="rounded-3xl border border-[#1F3D3B]/10 bg-white/90 p-6 md:p-8">
        <p className="text-xs uppercase tracking-[0.28em] text-[#F4A300]">Features</p>
        <h2 className="mt-2 text-3xl font-semibold">Premium features you&apos;ll notice</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl bg-[#FAF9F6] p-5">
              <h3 className="text-lg font-semibold text-[#1F3D3B]">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#1F3D3B]/75">{f.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="rounded-3xl border border-[#1F3D3B]/10 bg-white/80 p-6">
        <h3 className="text-2xl font-semibold">Why choose this category?</h3>
        <div className="mt-4 space-y-2">
          {highlights.map((highlight) => (
            <p key={highlight} className="rounded-xl bg-[#FAF9F6] px-4 py-3 text-sm text-[#1F3D3B]/80">
              {highlight}
            </p>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="rounded-3xl border border-[#1F3D3B]/10 bg-[#1F3D3B] p-6 text-white md:p-8">
        <p className="text-xs uppercase tracking-[0.28em] text-[#F4A300]">Specifications</p>
        <h2 className="mt-2 text-3xl font-semibold">Key specs (at a glance)</h2>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {specs.map((s) => (
            <div
              key={s.label}
              className="flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              <p className="text-sm font-semibold">{s.label}</p>
              <p className="text-sm text-white/80">{s.value}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="rounded-3xl border border-[#1F3D3B]/10 bg-white/90 p-6 md:p-8">
        <p className="text-xs uppercase tracking-[0.28em] text-[#F4A300]">Process</p>
        <h2 className="mt-2 text-3xl font-semibold">From selection to installation</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <div key={step.title} className="rounded-2xl bg-[#FAF9F6] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F4A300]">Step {index + 1}</p>
              <h3 className="mt-2 text-lg font-semibold text-[#1F3D3B]">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#1F3D3B]/75">{step.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="rounded-3xl border border-[#1F3D3B]/10 bg-white/90 p-6 md:p-8">
        <h2 className="text-3xl font-semibold">Details</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {contentSections.map((section) => (
            <div key={section.title} className="rounded-2xl bg-[#FAF9F6] p-5">
              <h3 className="text-lg font-semibold text-[#1F3D3B]">{section.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#1F3D3B]/75">{section.body}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <StyleGallery images={sofaStyleGalleryImages} />

      <SectionWrapper animate={false}>
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.28em] text-[#F4A300]">Reviews</p>
          <h2 className="mt-2 text-3xl font-semibold">What customers say</h2>
        </div>
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
          {sofaReviews.map((review) => (
            <TestimonialCard key={`${review.name}-${review.rating}-${review.meta}`} review={review} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="rounded-3xl border border-[#1F3D3B]/10 bg-white p-6 md:p-8">
        <h2 className="text-3xl font-semibold">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-xl border border-[#1F3D3B]/10 bg-[#FAF9F6] p-4">
              <summary className="cursor-pointer list-none pr-6 text-sm font-semibold text-[#1F3D3B]">
                {faq.question}
                <span className="float-right text-[#F4A300] transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-2 text-sm text-[#1F3D3B]/75">{faq.answer}</p>
            </details>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
