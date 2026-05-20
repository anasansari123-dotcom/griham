import SectionWrapper from "@/components/SectionWrapper";
import { blogPosts, getBlogPost } from "@/lib/blogData";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) return { title: "Article not found" };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <div className="mx-auto max-w-4xl space-y-10 px-4 py-10 sm:px-6 md:space-y-14 md:py-14">
      <SectionWrapper animate={false} className="rounded-3xl border border-[#1F3D3B]/10 bg-white/90 p-6 md:p-8">
        <Link href="/blog" className="text-sm font-semibold text-[#F4A300] hover:text-[#ffb61f]">
          ← Back to Blog
        </Link>
        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-[#1F3D3B]/60">
          <span className="rounded-full bg-[#F4A300]/15 px-2.5 py-1 font-semibold text-[#1F3D3B]">{post.category}</span>
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
        <h1 className="mt-4 text-3xl font-semibold leading-tight text-[#1F3D3B] md:text-4xl">{post.title}</h1>
        <p className="mt-4 text-base leading-relaxed text-[#1F3D3B]/75">{post.excerpt}</p>
        <div className="relative mt-6 h-56 overflow-hidden rounded-2xl bg-[#FAF9F6] sm:h-72 md:h-80">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            unoptimized={post.image.startsWith("/")}
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
      </SectionWrapper>

      <SectionWrapper animate={false} className="rounded-3xl border border-[#1F3D3B]/10 bg-white/90 p-6 md:p-8">
        <div className="space-y-5">
          {post.content.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="text-base leading-relaxed text-[#1F3D3B]/80">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="mt-8 rounded-2xl bg-[#FAF9F6] p-5">
          <h2 className="text-lg font-semibold text-[#1F3D3B]">Need help choosing products for your home?</h2>
          <p className="mt-2 text-sm text-[#1F3D3B]/75">
            Book a free consultation with GRIHAM experts for curtains, sofas, wall finishes, flooring, and complete room styling.
          </p>
          <Link
            href="/book-consultation"
            className="mt-4 inline-flex rounded-full bg-[#F4A300] px-5 py-2.5 text-sm font-semibold text-[#1F3D3B] transition hover:bg-[#ffb61f]"
          >
            Book Free Consultation
          </Link>
        </div>
      </SectionWrapper>

      {related.length ? (
        <SectionWrapper animate={false}>
          <h2 className="text-2xl font-semibold text-[#1F3D3B]">More articles</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/blog/${item.slug}`}
                className="rounded-2xl border border-[#1F3D3B]/10 bg-white/90 p-4 transition hover:border-[#F4A300]"
              >
                <p className="text-xs font-semibold text-[#F4A300]">{item.category}</p>
                <p className="mt-2 text-sm font-semibold text-[#1F3D3B]">{item.title}</p>
              </Link>
            ))}
          </div>
        </SectionWrapper>
      ) : null}
    </div>
  );
}
