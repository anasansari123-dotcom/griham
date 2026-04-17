import Image from "next/image";
import Card from "@/components/Card";
import SectionWrapper from "@/components/SectionWrapper";

const timeline = ["Consultation", "Design Finalization", "Material Selection", "Crafting", "Delivery & Setup"];
const usps = ["10-year frame warranty", "Custom dimensions", "Pet-friendly fabrics"];
const models = [
  { title: "Luxe L-Shape", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
  { title: "Nordic Minimal", image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=900&q=80" },
  { title: "Classic Chester", image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=900&q=80" },
];

export default function SofaPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-14 px-6 py-14">
      <SectionWrapper>
        <h1 className="text-4xl font-semibold">Custom Sofa Studio</h1>
        <p className="mt-3 max-w-2xl text-[#1F3D3B]/75">
          Engineered comfort with made-for-you silhouettes, textures, and modular flexibility—built for everyday lounging and premium living rooms.
        </p>
      </SectionWrapper>

      <SectionWrapper className="rounded-2xl border border-[#1F3D3B]/10 bg-white/80 p-8">
        <h2 className="text-2xl font-semibold">Process Timeline</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-5">
          {timeline.map((step, index) => (
            <div key={step} className="rounded-xl border border-[#1F3D3B]/10 bg-[#FAF9F6] p-4">
              <p className="text-xs font-semibold text-[#F4A300]">Step {index + 1}</p>
              <p className="mt-1 text-sm">{step}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="grid gap-5 md:grid-cols-3">
        {usps.map((usp) => (
          <div key={usp} className="rounded-2xl bg-[#1F3D3B] p-6 text-[#FAF9F6]">
            <p className="font-semibold">{usp}</p>
          </div>
        ))}
      </SectionWrapper>

      <SectionWrapper className="grid items-center gap-8 md:grid-cols-2">
        <div className="relative h-80 overflow-hidden rounded-3xl">
          <Image src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1200&q=80" alt="Sofa making" fill className="object-cover" />
        </div>
        <div>
          <h3 className="text-3xl font-semibold">How we craft your sofa</h3>
          <p className="mt-3 text-[#1F3D3B]/75">
            Each piece goes through precision frame build, multi-layer cushioning, hand-stitched upholstery, and quality checks before final installation.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="mb-6 text-3xl font-semibold">Popular Models</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {models.map((model) => (
            <Card key={model.title} title={model.title} image={model.image} subtitle="Customizable" />
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
