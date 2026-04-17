import Card from "@/components/Card";
import SectionWrapper from "@/components/SectionWrapper";

const items = [
  { title: "Orthopedic Comfort", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80" },
  { title: "Latex Natural Sleep", image: "https://images.unsplash.com/photo-1616627561839-074385245ff6?auto=format&fit=crop&w=900&q=80" },
  { title: "Hybrid Plush Support", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
];

export default function MattressPage() {
  return (
    <SectionWrapper className="mx-auto max-w-7xl px-6 py-14">
      <h1 className="mb-6 text-4xl font-semibold">Mattress</h1>
      <p className="-mt-4 mb-8 max-w-2xl text-sm text-[#1F3D3B]/75 sm:text-base">
        Supportive mattresses designed for deeper sleep—explore orthopedic, latex, and hybrid comfort options tailored to your posture and lifestyle.
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item) => <Card key={item.title} title={item.title} image={item.image} />)}
      </div>
    </SectionWrapper>
  );
}
