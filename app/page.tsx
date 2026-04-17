import Image from "next/image";
import Link from "next/link";
import Card from "@/components/Card";
import SectionWrapper from "@/components/SectionWrapper";
import { homeCategories } from "@/lib/siteData";

export default function Home() {
  const collectionItems = homeCategories;

  return (
    <div className="space-y-14 pb-20">
      <SectionWrapper className="relative -mt-24 min-h-screen w-full overflow-hidden border-y border-[#1F3D3B]/10 shadow-2xl">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src="/Create_a_high-quality_202604162307.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#102826]/85 via-[#1F3D3B]/70 to-[#1F3D3B]/35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(244,163,0,0.35),transparent_35%)]" />

        <div className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-28 md:py-32">
          <div>
            <p className="inline-block rounded-full border border-[#F4A300]/50 bg-[#F4A300]/15 px-4 py-1 text-xs uppercase tracking-[0.28em] text-[#F4A300]">
              Premium eco interiors
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">
              Transform your home into a nature-inspired luxury sanctuary.
            </h1>
            <p className="mt-5 max-w-2xl text-base text-white/85 md:text-lg">
              From curated curtains to made-to-measure sofas, GRIHAM blends earthy aesthetics, modern elegance, and premium craftsmanship.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/sofa" className="glow-button rounded-full bg-[#F4A300] px-6 py-3 font-semibold text-[#1F3D3B]">
                Explore Collections
              </Link>
              <Link href="/book-consultation" className="rounded-full border border-white/40 px-6 py-3 font-semibold text-white hover:bg-white hover:text-[#1F3D3B]">
                Book Free Consultation
              </Link>
            </div>
            <div className="mt-8 grid max-w-2xl grid-cols-3 gap-3">
              {[
                { value: "500+", label: "Premium Projects" },
                { value: "24/7", label: "Design Support" },
                { value: "10Y", label: "Craft Promise" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-xl font-semibold text-[#F4A300]">{item.value}</p>
                  <p className="text-xs uppercase tracking-wider text-white/80">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      <div className="mx-auto max-w-7xl space-y-20 px-6">
      <SectionWrapper className="rounded-3xl border border-[#1F3D3B]/10 bg-white/80 p-6 shadow-sm">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.28em] text-[#F4A300]">Our Collection</p>
        <h2 className="mt-2 text-center text-4xl font-semibold">Everything You Need for a Beautiful Home</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8">
          {collectionItems.map((item) => (
            <Link key={item.name} href={item.href} className="group rounded-xl border border-[#1F3D3B]/10 bg-white p-2 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="relative h-28 overflow-hidden rounded-lg">
                <Image src={item.image} alt={item.name} fill className="object-cover transition group-hover:scale-105" />
              </div>
              <h3 className="mt-3 text-sm font-semibold text-[#1F3D3B]">{item.name}</h3>
              <p className="text-xs text-[#1F3D3B]/65">Explore</p>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="grid gap-4 rounded-2xl border border-[#1F3D3B]/10 bg-white/70 p-6 md:grid-cols-4">
        {[
          { title: "Premium Quality", desc: "We use the finest materials for long lasting durability." },
          { title: "Custom Designs", desc: "Tailor-made solutions that match your style perfectly." },
          { title: "Expert Craftsmanship", desc: "Skilled professionals ensuring flawless finishing." },
          { title: "Affordable Luxury", desc: "Premium style and quality at the best prices." },
        ].map((usp) => (
          <div key={usp.title} className="flex items-start gap-3 rounded-xl bg-[#FAF9F6] p-4">
            <div className="mt-1 h-9 w-9 rounded-full bg-[#1F3D3B] text-center text-lg leading-9 text-[#F4A300]">✦</div>
            <div>
              <h3 className="font-semibold">{usp.title}</h3>
              <p className="mt-1 text-xs text-[#1F3D3B]/70">{usp.desc}</p>
            </div>
          </div>
        ))}
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="mb-6 text-3xl font-semibold">Shop by category</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {homeCategories.map((item) => (
            <Link key={item.name} href={item.href}>
              <Card title={item.name} image={item.image} subtitle="View collection" />
            </Link>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.28em] text-[#F4A300]">Best reviews</p>
          <h2 className="mt-2 text-3xl font-semibold">Trusted by premium homeowners</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              quote: "Outstanding quality and finish. The curtains and sofa elevated our entire living room.",
              name: "Priya S.",
              rating: "5.0",
            },
            {
              quote: "Very smooth consultation and installation. Designs were elegant, minimal, and exactly our style.",
              name: "Arjun R.",
              rating: "5.0",
            },
            {
              quote: "GRIHAM delivered a luxury look with practical comfort. Highly recommended for premium interiors.",
              name: "Neha K.",
              rating: "4.9",
            },
          ].map((review) => (
            <blockquote key={review.name} className="rounded-2xl border border-[#1F3D3B]/10 bg-white/90 p-6 shadow-sm">
              <p className="text-[#F4A300]">{"★".repeat(5)} <span className="text-[#1F3D3B]/70">({review.rating})</span></p>
              <p className="mt-3 text-[#1F3D3B]/85">&quot;{review.quote}&quot;</p>
              <footer className="mt-4 text-sm font-semibold text-[#1F3D3B]">- {review.name}</footer>
            </blockquote>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="rounded-3xl bg-[#1F3D3B] p-10 text-center text-white">
        <h2 className="text-3xl font-semibold">Ready to style your space with GRIHAM?</h2>
        <p className="mt-3 text-white/75">Get personalized recommendations from our decor consultants.</p>
        <Link href="/book-consultation" className="glow-button mt-6 inline-block rounded-full bg-[#F4A300] px-6 py-3 font-semibold text-[#1F3D3B]">
          Start Your Design Journey
        </Link>
      </SectionWrapper>
      </div>
    </div>
  );
}
