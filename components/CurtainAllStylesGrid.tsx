import CurtainCard from "@/components/CurtainCard";
import { curtainsData } from "@/lib/curtainsData";

export default function CurtainAllStylesGrid() {
  return (
    <>
      <h2 className="mb-4 text-2xl font-semibold sm:mb-6 sm:text-4xl">Popular Curtain Styles</h2>
      <p className="-mt-2 mb-6 max-w-2xl text-sm text-[#1F3D3B]/75 sm:-mt-3 sm:text-base">
        Browse every style below. Hover a card and click More details to open that category&apos;s gallery and install
        photos.
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {curtainsData.map((item, idx) => (
          <CurtainCard key={item.slug} curtain={item} priorityImage={idx < 3} />
        ))}
      </div>
    </>
  );
}
