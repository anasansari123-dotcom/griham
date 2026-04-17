import Card from "@/components/Card";
import SectionWrapper from "@/components/SectionWrapper";

const items = [
  { title: "Heritage Teak Cot", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=80" },
  { title: "Storage Platform Cot", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80" },
  { title: "Minimal Frame Cot", image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=900&q=80" },
];

export default function CotsPage() {
  return (
    <SectionWrapper className="mx-auto max-w-7xl px-6 py-14">
      <h1 className="mb-6 text-4xl font-semibold">Cots</h1>
      <p className="-mt-4 mb-8 max-w-2xl text-sm text-[#1F3D3B]/75 sm:text-base">
        Solid wood and engineered-frame cot designs focused on comfort, durability, and clean aesthetics—choose storage, minimal, or heritage styles.
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item) => <Card key={item.title} title={item.title} image={item.image} />)}
      </div>
    </SectionWrapper>
  );
}
