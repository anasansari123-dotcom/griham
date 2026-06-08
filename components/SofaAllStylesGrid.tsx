import SofaCard from "@/components/SofaCard";
import { sofaAllPreviewModels } from "@/lib/sofaData";

export default function SofaAllStylesGrid() {
  return (
    <>
      <h2 className="mb-4 text-2xl font-semibold sm:mb-6 sm:text-4xl">Popular Sofa Styles</h2>
      <p className="-mt-2 mb-6 max-w-2xl text-sm text-[#1F3D3B]/75 sm:-mt-3 sm:text-base">
        Browse every style below. Hover a card and click More details to open that category&apos;s gallery and designs.
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {sofaAllPreviewModels.map((item, idx) => (
          <SofaCard key={`${item.image}-${item.title}-${idx}`} sofa={item} priorityImage={idx < 6} />
        ))}
      </div>
    </>
  );
}
