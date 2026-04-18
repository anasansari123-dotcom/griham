"use client";

import Link from "next/link";
import Card from "@/components/Card";
import SectionWrapper from "@/components/SectionWrapper";
import Image from "next/image";
import { useMemo, useState } from "react";

type ShowcaseItem = {
  title: string;
  image: string;
  subtitle?: string;
};

type FeatureItem = {
  title: string;
  desc: string;
};

type SpecItem = {
  label: string;
  value: string;
};

type Props = {
  title: string;
  subtitle: string;
  badges: string[];
  highlights: string[];
  idealFor: string[];
  items: ShowcaseItem[];
  galleryImages?: { src: string; alt: string }[];
  contentSections?: { title: string; body: string }[];
  features?: FeatureItem[];
  specs?: SpecItem[];
  processSteps?: { title: string; desc: string }[];
  enableSearch?: boolean;
  searchPlaceholder?: string;
  reviews?: { quote: string; name: string; rating: string; meta?: string }[];
  faqs: { question: string; answer: string }[];
};

export default function CategoryPageTemplate({
  title,
  subtitle,
  badges,
  highlights,
  idealFor,
  items,
  galleryImages = [],
  contentSections = [],
  features = [],
  specs = [],
  processSteps = [],
  enableSearch = true,
  searchPlaceholder,
  reviews = [],
  faqs,
}: Props) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();

  const filteredItems = useMemo(() => {
    if (!enableSearch || !normalizedQuery) return items;
    return items.filter((it) => `${it.title} ${it.subtitle ?? ""}`.toLowerCase().includes(normalizedQuery));
  }, [enableSearch, items, normalizedQuery]);

  return (
    <div className="mx-auto max-w-7xl space-y-10 px-6 py-10 md:space-y-14 md:py-14">
      <SectionWrapper className="rounded-3xl border border-[#1F3D3B]/10 bg-white/90 p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#F4A300]">{title}</p>
        <h1 className="mt-2 text-3xl font-semibold text-[#1F3D3B] md:text-5xl">{title} Collection</h1>
        <p className="mt-4 max-w-3xl text-sm text-[#1F3D3B]/75 md:text-base">{subtitle}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {badges.map((badge) => (
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

      <SectionWrapper>
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold">Popular Options</h2>
            <p className="mt-2 max-w-2xl text-sm text-[#1F3D3B]/70">
              Browse premium options and book a consultation for exact measurements, finishes, and pricing guidance.
            </p>
          </div>
          {enableSearch ? (
            <div className="w-full md:w-[340px]">
              <label className="sr-only" htmlFor="category-search">
                Search
              </label>
              <input
                id="category-search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={searchPlaceholder ?? `Search ${title.toLowerCase()}...`}
                className="h-11 w-full rounded-2xl border border-[#1F3D3B]/15 bg-white px-4 text-sm outline-none transition focus:border-[#F4A300] focus:ring-2 focus:ring-[#F4A300]/20"
              />
            </div>
          ) : null}
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {filteredItems.map((item) => (
            <Card key={item.title} title={item.title} image={item.image} subtitle={item.subtitle ?? "Premium Finish"} showConsultationButton />
          ))}
        </div>
        {enableSearch && normalizedQuery && filteredItems.length === 0 ? (
          <p className="mt-5 text-sm text-[#1F3D3B]/70">No results found for “{query}”.</p>
        ) : null}
      </SectionWrapper>

      {features.length ? (
        <SectionWrapper className="rounded-3xl border border-[#1F3D3B]/10 bg-white/90 p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.28em] text-[#F4A300]">Features</p>
          <h2 className="mt-2 text-3xl font-semibold">Premium features you’ll notice</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl bg-[#FAF9F6] p-5">
                <h3 className="text-lg font-semibold text-[#1F3D3B]">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#1F3D3B]/75">{f.desc}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>
      ) : null}

      <SectionWrapper className="grid gap-6 rounded-3xl border border-[#1F3D3B]/10 bg-white/80 p-6 md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-semibold">Why choose this category?</h3>
          <div className="mt-4 space-y-2">
            {highlights.map((highlight) => (
              <p key={highlight} className="rounded-xl bg-[#FAF9F6] px-4 py-3 text-sm text-[#1F3D3B]/80">
                {highlight}
              </p>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Best suited for</h3>
          <div className="mt-4 space-y-2">
            {idealFor.map((item) => (
              <p key={item} className="rounded-xl bg-[#FAF9F6] px-4 py-3 text-sm text-[#1F3D3B]/80">
                {item}
              </p>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {specs.length ? (
        <SectionWrapper className="rounded-3xl border border-[#1F3D3B]/10 bg-[#1F3D3B] p-6 text-white md:p-8">
          <p className="text-xs uppercase tracking-[0.28em] text-[#F4A300]">Specifications</p>
          <h2 className="mt-2 text-3xl font-semibold">Key specs (at a glance)</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {specs.map((s) => (
              <div key={s.label} className="flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold">{s.label}</p>
                <p className="text-sm text-white/80">{s.value}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>
      ) : null}

      {processSteps.length ? (
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
      ) : null}

      {contentSections.length ? (
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
      ) : null}

      {galleryImages.length ? (
        <SectionWrapper>
          <div className="mb-6">
            <p className="text-xs uppercase tracking-[0.28em] text-[#F4A300]">Inspiration</p>
            <h2 className="mt-2 text-3xl font-semibold">Style gallery</h2>
          </div>
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {galleryImages.map((img) => (
              <div key={img.src} className="group relative mb-5 overflow-hidden rounded-3xl border border-[#1F3D3B]/10 bg-white/80 shadow-sm">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={900}
                  height={1200}
                  className="h-auto w-full transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[#1F3D3B]/0 transition group-hover:bg-[#1F3D3B]/10" />
              </div>
            ))}
          </div>
        </SectionWrapper>
      ) : null}

      {reviews.length ? (
        <SectionWrapper>
          <div className="mb-6">
            <p className="text-xs uppercase tracking-[0.28em] text-[#F4A300]">Reviews</p>
            <h2 className="mt-2 text-3xl font-semibold">What customers say</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {reviews.map((review) => (
              <blockquote key={`${review.name}-${review.rating}-${review.quote.slice(0, 12)}`} className="rounded-2xl border border-[#1F3D3B]/10 bg-white/90 p-6 shadow-sm">
                <p className="text-[#F4A300]">
                  {"★".repeat(5)} <span className="text-[#1F3D3B]/70">({review.rating})</span>
                </p>
                <p className="mt-3 text-[#1F3D3B]/85">&quot;{review.quote}&quot;</p>
                <footer className="mt-4 text-sm font-semibold text-[#1F3D3B]">
                  - {review.name}
                  {review.meta ? <span className="font-normal text-[#1F3D3B]/60"> · {review.meta}</span> : null}
                </footer>
              </blockquote>
            ))}
          </div>
        </SectionWrapper>
      ) : null}

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
