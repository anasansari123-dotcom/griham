import Card from "@/components/Card";
import SectionWrapper from "@/components/SectionWrapper";

const items = [
  { title: "Sliding Mesh Shield", image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80" },
  { title: "Invisible Window Net", image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=900&q=80" },
  { title: "Premium Door Net", image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80" },
];

export default function MosquitoNetsPage() {
  return (
    <SectionWrapper className="mx-auto max-w-7xl px-6 py-14">
      <h1 className="mb-6 text-4xl font-semibold">Mosquito Nets</h1>
      <p className="-mt-4 mb-8 max-w-2xl text-sm text-[#1F3D3B]/75 sm:text-base">
        Sleek, breathable net solutions for windows and doors—designed for airflow, easy maintenance, and reliable protection for everyday living.
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item) => <Card key={item.title} title={item.title} image={item.image} />)}
      </div>
    </SectionWrapper>
  );
}
