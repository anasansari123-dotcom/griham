import SectionWrapper from "@/components/SectionWrapper";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Effortless Control",
    desc: "Smartphone, voice, Alexa & Google Home — control drapes from anywhere.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="18" r="1" fill="currentColor" />
        <path d="M10 6h4M10 9h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Worry-Free Experience",
    desc: "5-year motor warranty with professional installation included.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path
          d="M12 3l7 3v5c0 4.2-2.8 7.4-7 9-4.2-1.6-7-4.8-7-9V6l7-3z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M9.5 12l2 2 3.5-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Customizable Designs",
    desc: "Wide fabric, style & finish options to match your interiors.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path
          d="M4 18V6l4-2 4 2 4-2 4 2v12l-4-2-4 2-4-2-4 2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M8 4v12M12 6v12M16 4v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const integrations = ["Smartphone app", "Amazon Alexa", "Google Home", "Scheduled scenes"];

export default function MotorizedCurtainsSection() {
  return (
    <SectionWrapper animate={false} className="overflow-hidden">
      <div className="relative overflow-hidden rounded-[2rem] border border-[#1F3D3B]/15 bg-[#FAF9F6] shadow-[0_24px_60px_-20px_rgba(31,61,59,0.25)]">
        {/* Top accent bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#1F3D3B] via-[#F4A300] to-[#1F3D3B]" />

        <div className="grid lg:grid-cols-12 lg:items-stretch">
          {/* Visual panel — full-bleed image */}
          <div className="relative min-h-[300px] overflow-hidden bg-[#1F3D3B] sm:min-h-[360px] lg:col-span-5 lg:min-h-0">
            <Image
              src="/motorized-curtains.webp"
              alt="Hand holding remote to control motorized living room curtains"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#1F3D3B]/30 via-transparent to-transparent lg:bg-gradient-to-br lg:from-[#1F3D3B]/20 lg:via-transparent lg:to-[#1F3D3B]/10"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, #F4A300 1px, transparent 0)",
                backgroundSize: "20px 20px",
              }}
              aria-hidden
            />
          </div>

          {/* Content panel */}
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:col-span-7 lg:p-10 xl:p-12">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#1F3D3B] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F4A300] sm:text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F4A300]" />
                Smart Living
              </span>
              <span className="rounded-full border border-[#F4A300]/40 bg-[#F4A300]/10 px-3 py-1 text-xs font-semibold text-[#1F3D3B]">
                Premium add-on
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-semibold leading-tight text-[#1F3D3B] sm:text-4xl xl:text-[2.5rem]">
              Motorized Curtains
              <span className="mt-1 block text-[#F4A300]">Ultimate Convenience</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#1F3D3B]/75 sm:text-base">
              Upgrade to motorised drapes — open and close your windows with a tap, a voice command, or an automated
              schedule tailored to your routine.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {integrations.map((name) => (
                <span
                  key={name}
                  className="rounded-lg border border-[#1F3D3B]/10 bg-white px-3 py-1.5 text-xs font-medium text-[#1F3D3B]/80 shadow-sm"
                >
                  {name}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/book-consultation"
                className="inline-flex items-center justify-center rounded-full bg-[#F4A300] px-6 py-3 text-sm font-semibold text-[#1F3D3B] shadow-md shadow-[#F4A300]/25 transition hover:bg-[#ffb61f] hover:shadow-lg"
              >
                Explore Motorized Curtains
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#1F3D3B]/15 bg-white px-6 py-3 text-sm font-semibold text-[#1F3D3B] transition hover:border-[#1F3D3B]/30 hover:bg-[#1F3D3B]/5"
              >
                Ask for a demo
              </Link>
            </div>
          </div>
        </div>

        {/* Feature strip */}
        <div className="border-t border-[#1F3D3B]/10 bg-white px-4 py-6 sm:px-8 sm:py-8">
          <div className="grid gap-4 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-2xl border border-[#1F3D3B]/10 bg-[#FAF9F6] p-5 transition hover:-translate-y-0.5 hover:border-[#F4A300]/40 hover:shadow-md"
              >
                <div className="absolute -right-4 -top-4 text-6xl font-bold text-[#1F3D3B]/[0.04] transition group-hover:text-[#F4A300]/10">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="relative flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1F3D3B] text-[#F4A300] transition group-hover:bg-[#F4A300] group-hover:text-[#1F3D3B]">
                    {feature.icon}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-[#1F3D3B]">{feature.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#1F3D3B]/70">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
