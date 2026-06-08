import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";
import TestimonialCard from "@/components/TestimonialCard";
import { homeReviews } from "@/lib/testimonials";
import { homeCollectionCategories } from "@/lib/siteData";

const trustPoints = [
  { value: "500+", label: "Premium Projects" },
  { value: "24/7", label: "Design Support" },
  { value: "10Y", label: "Craft Promise" },
];

const uspItems = [
  { title: "Premium Quality", desc: "We use high-grade materials that stay beautiful for years." },
  { title: "Made to Measure", desc: "Every product can be tailored to your room size and style." },
  { title: "Expert Installation", desc: "Skilled teams ensure clean fitting and finishing." },
  { title: "Transparent Pricing", desc: "Clear package options and no hidden surprises." },
];

const processSteps = [
  {
    title: "Share Your Requirements",
    desc: "Tell us your room size, budget, and preferred look so we can shortlist relevant options.",
  },
  {
    title: "Consultation & Planning",
    desc: "Our team discusses layouts, material combinations, space management, and design concepts tailored to your needs.",
  },
  {
    title: "Get Home Visit Management",
    desc: "Schedule expert home visits for measurements, consultations, and personalized recommendations for your interiors.",
  },
  {
    title: "Approve and Install",
    desc: "Finalize materials, timeline, and pricing, then our team handles delivery and installation.",
  },
];

const differentiators = [
  {
    title: "Direct Sourcing",
    desc: "We source fabrics directly from manufacturers, bypassing wholesalers and middlemen. This allows us to offer better prices and pass the savings on to our customers.",
  },
  {
    title: "Design Consultation",
    desc: "We provide personalized design consultation based on your space, lighting, style preferences, and functional needs to help you choose the perfect combination of products.",
  },
  {
    title: "In-House Manufacturing",
    desc: "All products are crafted through our in-house manufacturing process, ensuring better quality control, precise finishing, and timely delivery without third-party dependency.",
  },
  {
    title: "Automated Processes",
    desc: "Our reliable automated systems streamline production, eliminating manual errors and delivering consistent, high-quality results.",
  },
  {
    title: "Premium Products & Raw Materials",
    desc: "We use premium-quality products and raw materials from trusted brands like D’Decor and other leading suppliers, backed by 5+ years warranty support.",
  },
];

const faqs = [
  {
    q: "Can I choose only one category, like curtains?",
    a: "Yes. You can start with a single category or combine multiple categories as a complete home package.",
  },
  {
    q: "Do you provide custom sizing?",
    a: "Yes. Most products are available in made-to-measure options based on your room measurements.",
  },
  {
    q: "How long does installation take?",
    a: "Timelines depend on scope, but small upgrades are usually faster while full-home packages are scheduled phase-wise.",
  },
  {
    q: "Do you help with style matching?",
    a: "Absolutely. Our team curates options around your taste, existing furniture, and budget target.",
  },
];

export default function Home() {
  const collectionItems = homeCollectionCategories;

  return (
    <div className="space-y-14 pb-20">
      <SectionWrapper className="relative -mt-[4.75rem] min-h-screen w-full overflow-hidden border-y border-[#1F3D3B]/10 shadow-2xl md:-mt-28">
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
              Premium Furnishing
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">
              Premium Home Furnishings.
            </h1>
            <p className="mt-5 max-w-2xl text-base text-white/85 md:text-lg">
              Explore curtains, wallpapers, wall panels, sofa, beds, home decor, mattress, and wooden flooring with one coordinated design partner.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#our-collection" className="glow-button rounded-full bg-[#F4A300] px-6 py-3 font-semibold text-[#1F3D3B]">
                Explore Collections
              </Link>
              <Link href="/book-consultation" className="rounded-full border border-white/40 px-6 py-3 font-semibold text-white hover:bg-white hover:text-[#1F3D3B]">
                Book Free Consultation
              </Link>
            </div>
            <div className="mt-6 flex max-w-4xl flex-wrap gap-2">
              {collectionItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="rounded-full border border-white/35 bg-white/10 px-4 py-1.5 text-sm text-white/95 backdrop-blur-sm transition hover:bg-white hover:text-[#1F3D3B]"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="mt-8 grid max-w-2xl grid-cols-3 gap-3">
              {trustPoints.map((item) => (
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
        <SectionWrapper id="our-collection" className="scroll-mt-28 rounded-3xl border border-[#1F3D3B]/10 bg-white/80 p-6 shadow-sm">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.28em] text-[#F4A300]">Our Collection</p>
          <h2 className="mt-2 text-center text-4xl font-semibold">Everything You Need for a Beautiful Home</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8">
            {collectionItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                aria-label={`View ${item.name} collection`}
                className="group rounded-xl border border-[#1F3D3B]/10 bg-white p-2 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative h-28 overflow-hidden rounded-lg">
                  <Image src={item.image} alt={item.alt} fill className="object-cover transition group-hover:scale-105" />
                </div>
                <h3 className="mt-3 text-sm font-semibold text-[#1F3D3B]">{item.name}</h3>
                <p className="text-xs text-[#1F3D3B]/65">View Collection</p>
              </Link>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper className="grid gap-4 rounded-2xl border border-[#1F3D3B]/10 bg-white/70 p-6 md:grid-cols-4">
          {uspItems.map((usp) => (
            <div key={usp.title} className="flex items-start gap-3 rounded-xl bg-[#FAF9F6] p-4">
              <div className="mt-1 h-9 w-9 rounded-full bg-[#1F3D3B] text-center text-lg leading-9 text-[#F4A300]">✦</div>
              <div>
                <h3 className="font-semibold">{usp.title}</h3>
                <p className="mt-1 text-xs text-[#1F3D3B]/70">{usp.desc}</p>
              </div>
            </div>
          ))}
        </SectionWrapper>

        <SectionWrapper className="rounded-3xl border border-[#1F3D3B]/10 bg-[#1F3D3B] p-8 text-white">
          <p className="text-xs uppercase tracking-[0.28em] text-[#F4A300]">How it works</p>
          <h2 className="mt-2 text-3xl font-semibold">Simple consultation to installation workflow</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step.title} className="rounded-2xl border border-white/15 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-[#F4A300]">Step {index + 1}</p>
                <h3
                  className={`mt-2 font-semibold leading-tight ${
                    step.title === "Get Home Visit Management"
                      ? "text-[0.8125rem] leading-snug sm:text-sm lg:text-[0.8125rem] lg:whitespace-nowrap xl:text-base"
                      : "text-lg"
                  }`}
                >
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-white/80">{step.desc}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper className="rounded-3xl border border-[#1F3D3B]/10 bg-white/90 p-6 md:p-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#F4A300]">Why GRIHAM</p>
              <h2 className="mt-2 text-3xl font-semibold text-[#1F3D3B] md:text-4xl">How We Stand Different Than Others</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#1F3D3B]/70 md:text-base">
                Better sourcing, in-house craftsmanship, and premium materials — built into every GRIHAM project.
              </p>
            </div>
            <Link
              href="/book-consultation"
              className="shrink-0 rounded-full bg-[#F4A300] px-5 py-2.5 text-sm font-semibold text-[#1F3D3B] transition hover:bg-[#ffb61f]"
            >
              Book Free Consultation
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item, index) => (
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

        <SectionWrapper animate={false}>
          <div className="mb-6">
            <p className="text-xs uppercase tracking-[0.28em] text-[#F4A300]">Best reviews</p>
            <h2 className="mt-2 text-3xl font-semibold">Trusted by premium homeowners</h2>
          </div>
          <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
            {homeReviews.map((review) => (
              <TestimonialCard key={review.name} review={review} />
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper className="rounded-3xl border border-[#1F3D3B]/10 bg-white p-8">
          <p className="text-xs uppercase tracking-[0.28em] text-[#F4A300]">Quick answers</p>
          <h2 className="mt-2 text-3xl font-semibold">Frequently asked questions</h2>
          <div className="mt-6 space-y-3">
            {faqs.map((faq) => (
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
