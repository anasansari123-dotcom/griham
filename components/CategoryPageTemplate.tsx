"use client";

import Link from "next/link";
import Image from "next/image";
import Card from "@/components/Card";
import SectionWrapper from "@/components/SectionWrapper";
import StyleGallery from "@/components/StyleGallery";
import TestimonialCard from "@/components/TestimonialCard";
import { withReviewAvatars, type ReviewItem } from "@/lib/testimonials";
import { useMemo, useState } from "react";

type ShowcaseItem = {
  title: string;
  image: string;
  subtitle?: string;
  tag?: string;
};

type FeatureItem = {
  title: string;
  desc: string;
};

type SolutionsSection = {
  eyebrow?: string;
  title: string;
  items: FeatureItem[];
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
  items: ShowcaseItem[];
  galleryImages?: { src: string; alt: string }[];
  contentSections?: { title: string; body: string }[];
  features?: FeatureItem[];
  specs?: SpecItem[];
  processSteps?: { title: string; desc: string }[];
  enableSearch?: boolean;
  searchPlaceholder?: string;
  filters?: string[];
  allItems?: ShowcaseItem[];
  enableProductPreview?: boolean;
  productImageFit?: "cover" | "contain";
  reviews?: ReviewItem[];
  faqs: { question: string; answer: string }[];
  featuresEyebrow?: string;
  featuresTitle?: string;
  solutionsSection?: SolutionsSection;
  heroImage?: { src: string; alt: string };
};

export default function CategoryPageTemplate({
  title,
  subtitle,
  badges,
  highlights,
  items,
  galleryImages = [],
  contentSections = [],
  features = [],
  specs = [],
  processSteps = [],
  enableSearch = true,
  searchPlaceholder,
  filters,
  allItems,
  enableProductPreview = false,
  productImageFit = "cover",
  reviews = [],
  faqs,
  featuresEyebrow = "Features",
  featuresTitle = "Premium features you'll notice",
  solutionsSection,
  heroImage,
}: Props) {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState(filters?.[0] ?? "All");
  const normalizedQuery = query.trim().toLowerCase();
  const normalizedActiveFilter = activeFilter.trim().toLowerCase();

  const reviewItems = useMemo(() => withReviewAvatars(reviews), [reviews]);

  const filteredItems = useMemo(() => {
    const isAllFilter = filters?.length && normalizedActiveFilter === "all";
    let result = isAllFilter && allItems?.length ? allItems : items;
    if (filters?.length && !isAllFilter) {
      result = items.filter((it) => it.tag?.trim().toLowerCase() === normalizedActiveFilter);
    }
    if (enableSearch && normalizedQuery) {
      result = result.filter((it) =>
        `${it.title} ${it.subtitle ?? ""} ${it.tag ?? ""}`.toLowerCase().includes(normalizedQuery),
      );
    }
    return result;
  }, [allItems, enableSearch, filters, items, normalizedActiveFilter, normalizedQuery]);

  return (
    <div className="mx-auto max-w-7xl space-y-10 px-6 py-10 md:space-y-14 md:py-14">
      <SectionWrapper
        className={`rounded-3xl border border-[#1F3D3B]/10 bg-white/90 p-6 md:p-8 ${heroImage ? "overflow-hidden" : ""}`}
      >
        <div className={heroImage ? "grid items-center gap-8 lg:grid-cols-2" : ""}>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#F4A300]">{title}</p>
            <h1 className="mt-2 text-3xl font-semibold text-[#1F3D3B] md:text-5xl">{title} Collection</h1>
            <p className="mt-4 max-w-3xl text-sm text-[#1F3D3B]/75 md:text-base">{subtitle}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-[#1F3D3B]/15 bg-[#FAF9F6] px-3 py-1 text-xs text-[#1F3D3B]/80"
                >
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
          </div>
          {heroImage ? (
            <div className="relative h-56 overflow-hidden rounded-2xl sm:h-64 lg:h-72">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                fill
                unoptimized
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          ) : null}
        </div>
      </SectionWrapper>

      <div className={filters?.length ? "grid gap-5 sm:gap-6 md:gap-8 md:grid-cols-[240px_1fr]" : ""}>
      {filters?.length ? (
        <aside className="h-fit rounded-2xl border border-[#1F3D3B]/10 bg-white/80 p-4 md:p-5">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-sm uppercase tracking-widest text-[#1F3D3B]/70">Filters</h2>
            <span className="text-xs text-[#1F3D3B]/50 md:hidden">Tap</span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 md:block md:space-y-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
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
      ) : null}
      <div className="min-w-0">
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold sm:mb-6 sm:text-4xl">{filters?.length ? `Popular ${title} Styles` : "Popular Options"}</h2>
            <p className="-mt-2 max-w-2xl text-sm text-[#1F3D3B]/75 sm:-mt-3 sm:text-base">
              {filters?.length
                ? "Filter by style to quickly find the right look for your living room, lounge, or complete home upgrade."
                : "Browse premium options and book a consultation for exact measurements, finishes, and pricing guidance."}
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
        <div key={activeFilter} className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {filteredItems.map((item, idx) => (
            <Card
              key={`${activeFilter}-${item.image}-${idx}`}
              title={item.title}
              image={item.image}
              subtitle={item.tag ?? item.subtitle ?? "Premium Finish"}
              showConsultationButton
              enableImagePreview={enableProductPreview}
              imageFit={productImageFit}
              priorityImage={idx < 6}
            />
          ))}
        </div>
        {filteredItems.length === 0 ? (
          <p className="mt-5 text-sm text-[#1F3D3B]/70">
            {enableSearch && normalizedQuery
              ? `No results found for “${query}”.`
              : filters?.length
                ? `No ${title.toLowerCase()} found for this category yet.`
                : null}
          </p>
        ) : null}
      </div>
      </div>

      {features.length ? (
        <SectionWrapper className="rounded-3xl border border-[#1F3D3B]/10 bg-white/90 p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.28em] text-[#F4A300]">{featuresEyebrow}</p>
          <h2 className="mt-2 text-3xl font-semibold text-[#1F3D3B] md:text-4xl">{featuresTitle}</h2>
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

      {!solutionsSection && highlights.length > 0 ? (
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
      ) : null}

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

      {solutionsSection ? (
        <SectionWrapper className="rounded-3xl border border-[#1F3D3B]/10 bg-white/90 p-6 md:p-8">
          {solutionsSection.eyebrow ? (
            <p className="text-xs uppercase tracking-[0.28em] text-[#F4A300]">{solutionsSection.eyebrow}</p>
          ) : null}
          <h2 className="mt-2 text-3xl font-semibold text-[#1F3D3B] md:text-4xl">{solutionsSection.title}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {solutionsSection.items.map((item) => (
              <div key={item.title} className="rounded-2xl bg-[#FAF9F6] p-5">
                <h3 className="text-lg font-semibold text-[#1F3D3B]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#1F3D3B]/75">{item.desc}</p>
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

      <StyleGallery images={galleryImages} />

      {reviewItems.length ? (
        <SectionWrapper animate={false}>
          <div className="mb-6">
            <p className="text-xs uppercase tracking-[0.28em] text-[#F4A300]">Reviews</p>
            <h2 className="mt-2 text-3xl font-semibold">What customers say</h2>
          </div>
          <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
            {reviewItems.map((review) => (
              <TestimonialCard key={`${review.name}-${review.rating}-${review.quote.slice(0, 12)}`} review={review} />
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
