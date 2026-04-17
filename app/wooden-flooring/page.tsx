import Card from "@/components/Card";
import SectionWrapper from "@/components/SectionWrapper";

const items = [
  { title: "Natural Oak", image: "/images/wooden-flooring/natural-oak.png" },
  { title: "Walnut Matte", image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=900&q=80" },
  { title: "Teak Rustic", image: "/images/wooden-flooring/teak-rustic.png" },
];

export default function WoodenFlooringPage() {
  return (
    <SectionWrapper className="mx-auto max-w-7xl px-6 py-14">
      <h1 className="mb-6 text-4xl font-semibold">Wooden Flooring</h1>
      <p className="-mt-4 mb-8 max-w-2xl text-sm text-[#1F3D3B]/75 sm:text-base">
        Natural wooden flooring finishes that bring warmth and elegance—crafted for durability, low maintenance, and a premium, timeless look.
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item) => <Card key={item.title} title={item.title} image={item.image} />)}
      </div>
    </SectionWrapper>
  );
}
