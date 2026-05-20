import SectionWrapper from "@/components/SectionWrapper";
import { blogPosts } from "@/lib/blogData";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Home decor tips, buying guides, and interior ideas from GRIHAM—curtains, sofas, wallpapers, flooring, and more.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-10 px-4 py-10 sm:px-6 md:space-y-14 md:py-14">
      <SectionWrapper className="rounded-3xl border border-[#1F3D3B]/10 bg-white/90 p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#F4A300]">Blog</p>
        <h1 className="mt-2 text-3xl font-semibold text-[#1F3D3B] md:text-5xl">GRIHAM Home Decor Blog</h1>
        <p className="mt-4 max-w-3xl text-sm text-[#1F3D3B]/75 md:text-base">
          Practical ideas, style guides, and expert tips to help you plan curtains, sofas, wall finishes, flooring, and complete
          room makeovers with confidence.
        </p>
        <div className="mt-6">
          <Link
            href="/book-consultation"
            className="inline-flex rounded-full bg-[#F4A300] px-5 py-2.5 text-sm font-semibold text-[#1F3D3B] transition hover:bg-[#ffb61f]"
          >
            Book Free Consultation
          </Link>
        </div>
      </SectionWrapper>

      <SectionWrapper animate={false}>
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.28em] text-[#F4A300]">Latest articles</p>
          <h2 className="mt-2 text-2xl font-semibold text-[#1F3D3B] sm:text-3xl">Read &amp; get inspired</h2>
        </div>
        <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#1F3D3B]/10 bg-white/90 shadow-sm transition hover:shadow-lg"
            >
              <Link href={`/blog/${post.slug}`} className="flex h-full flex-col">
                <div className="relative h-48 shrink-0 overflow-hidden bg-[#FAF9F6] sm:h-52">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    unoptimized={post.image.startsWith("/")}
                    loading="eager"
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#1F3D3B]/60">
                    <span className="rounded-full bg-[#F4A300]/15 px-2.5 py-1 font-semibold text-[#1F3D3B]">{post.category}</span>
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-[#1F3D3B] transition group-hover:text-[#1F3D3B]/80">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 line-clamp-3 text-sm leading-relaxed text-[#1F3D3B]/75">{post.excerpt}</p>
                  <span className="mt-4 inline-flex pt-1 text-sm font-semibold text-[#F4A300]">Read article →</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
