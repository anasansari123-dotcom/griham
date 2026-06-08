import CurtainCategoryFilters from "@/components/CurtainCategoryFilters";
import GalleryImageTile from "@/components/GalleryImageTile";
import SectionWrapper from "@/components/SectionWrapper";
import {
  curtainCategories,
  getCategoryByParam,
  getCategoryWhatsAppUrl,
  type CurtainFilterOption,
} from "@/lib/curtainsData";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

type Props = {
  params: { filter: string };
};

export function generateStaticParams() {
  return curtainCategories.map((category) => ({ filter: category.param }));
}

export function generateMetadata({ params }: Props): Metadata {
  const category = getCategoryByParam(params.filter);
  if (!category) return { title: "Curtain style not found" };

  return {
    title: `${category.name} Curtains`,
    description: category.description,
  };
}

export default function CurtainCategoryPage({ params }: Props) {
  const category = getCategoryByParam(params.filter);
  if (!category) notFound();
  if (category.param === "all") redirect("/curtains");

  const bookWhatsAppUrl = getCategoryWhatsAppUrl(category, "book");
  const activeFilter = category.tag as CurtainFilterOption;

  return (
    <div className="mx-auto max-w-7xl space-y-10 px-4 py-10 sm:px-6 md:space-y-14 md:py-14">
      <div className="grid gap-5 sm:gap-6 md:gap-8 md:grid-cols-[240px_1fr]">
        <CurtainCategoryFilters activeFilter={activeFilter} />
        <div className="min-w-0 space-y-10 md:space-y-14">
          <SectionWrapper animate={false} className="rounded-3xl border border-[#1F3D3B]/10 bg-white/90 p-6 md:p-8">
            <Link href="/curtains" className="text-sm font-semibold text-[#F4A300] hover:text-[#ffb61f]">
              ← Back to Curtains
            </Link>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#F4A300]">{category.name}</p>
            <h1 className="mt-2 text-3xl font-semibold text-[#1F3D3B] md:text-5xl">{category.name}</h1>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#1F3D3B]/75 md:text-base">{category.description}</p>
            <p className="mt-3 text-sm text-[#1F3D3B]/65">
              Real install photos from our <span className="font-semibold text-[#1F3D3B]">{category.name}</span>{" "}
              collection.
            </p>
            <div className="relative mt-6 h-56 overflow-hidden rounded-2xl sm:h-72 md:h-[22rem]">
              <Image
                src={category.heroImage}
                alt={category.name}
                fill
                unoptimized={category.heroImage.startsWith("/")}
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1152px"
              />
            </div>
          </SectionWrapper>

          <SectionWrapper animate={false} className="rounded-3xl border border-[#1F3D3B]/10 bg-white/90 p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#F4A300]">Gallery</p>
            <h2 className="mt-2 text-2xl font-semibold text-[#1F3D3B] md:text-3xl">{category.name} — style inspiration</h2>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-5">
              {category.gallery.map((src, idx) => (
                <GalleryImageTile
                  key={`${src}-${idx}`}
                  src={src}
                  alt={`${category.name} inspiration ${idx + 1}`}
                  priority={idx === 0}
                />
              ))}
            </div>
          </SectionWrapper>

          <SectionWrapper animate={false} className="rounded-3xl border border-[#1F3D3B]/10 bg-white/90 p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-[#1F3D3B]">Key highlights</h2>
            <ul className="mt-4 space-y-2">
              {category.highlights.map((line) => (
                <li key={line} className="rounded-xl bg-[#FAF9F6] px-4 py-3 text-sm text-[#1F3D3B]/80">
                  {line}
                </li>
              ))}
            </ul>
          </SectionWrapper>

          <SectionWrapper animate={false} className="rounded-3xl bg-[#1F3D3B] p-8 text-white md:p-10">
            <h2 className="text-2xl font-semibold md:text-3xl">Questions about {category.name} curtains?</h2>
            <p className="mt-3 max-w-2xl text-sm text-white/80 md:text-base">
              Chat with GRIHAM on WhatsApp for fabric options, measurements, pricing, and installation. We will help you
              choose the right curtains for your room.
            </p>
            <div className="mt-6">
              <a
                href={bookWhatsAppUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#20bf5a]"
              >
                Book on WhatsApp
              </a>
            </div>
          </SectionWrapper>
        </div>
      </div>
    </div>
  );
}
