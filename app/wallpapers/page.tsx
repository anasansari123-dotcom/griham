import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";

const items = [
  "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=900&q=80",
];

export default function WallpapersPage() {
  return (
    <SectionWrapper className="mx-auto max-w-7xl px-6 py-14">
      <h1 className="mb-7 text-4xl font-semibold">Designer Wallpapers</h1>
      <p className="-mt-4 mb-8 max-w-2xl text-sm text-[#1F3D3B]/75 sm:text-base">
        Elevate your walls with premium textures, patterns, and finishes—perfect for feature walls, bedrooms, living rooms, and boutique spaces.
      </p>
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {items.map((image, idx) => (
          <div key={image} className="group relative mb-5 overflow-hidden rounded-2xl">
            <Image src={image} alt={`Wallpaper ${idx + 1}`} width={700} height={1000} className="h-auto w-full transition duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-[#1F3D3B]/0 transition group-hover:bg-[#1F3D3B]/40" />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
