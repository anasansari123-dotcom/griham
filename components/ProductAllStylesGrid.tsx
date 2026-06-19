import ProductStyleCard from "@/components/ProductStyleCard";

type Item = {
  title: string;
  subtitle?: string;
  image: string;
  tag: string;
};

type Props = {
  productTitle: string;
  items: Item[];
  getDetailHref: (tag: string) => string;
};

export default function ProductAllStylesGrid({ productTitle, items, getDetailHref }: Props) {
  return (
    <>
      <h2 className="mb-4 text-2xl font-semibold sm:mb-6 sm:text-4xl">Popular {productTitle} Styles</h2>
      <p className="-mt-2 mb-6 max-w-2xl text-sm text-[#1F3D3B]/75 sm:-mt-3 sm:text-base">
        Browse every style below. Hover a card and click More details to open that category&apos;s gallery and designs.
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {items.map((item, idx) => (
          <ProductStyleCard
            key={`${item.tag}-${item.image}`}
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            tag={item.tag}
            detailHref={getDetailHref(item.tag)}
            priorityImage={idx < 3}
          />
        ))}
      </div>
    </>
  );
}
