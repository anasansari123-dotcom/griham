import Link from "next/link";
import Card from "@/components/Card";
import SectionWrapper from "@/components/SectionWrapper";

type ShowcaseItem = {
  title: string;
  image: string;
  subtitle?: string;
};

type Props = {
  title: string;
  subtitle: string;
  badges: string[];
  highlights: string[];
  idealFor: string[];
  items: ShowcaseItem[];
  faqs: { question: string; answer: string }[];
};

export default function CategoryPageTemplate({
  title,
  subtitle,
  badges,
  highlights,
  idealFor,
  items,
  faqs,
}: Props) {
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
        <h2 className="mb-6 text-3xl font-semibold">Popular Options</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <Card key={item.title} title={item.title} image={item.image} subtitle={item.subtitle ?? "Premium Finish"} showConsultationButton />
          ))}
        </div>
      </SectionWrapper>

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
