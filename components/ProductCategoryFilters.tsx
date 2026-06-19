import Link from "next/link";

type Props<T extends string> = {
  filters: readonly T[];
  activeFilter?: T;
  getHref: (filter: T) => string;
  ariaLabel: string;
};

export default function ProductCategoryFilters<T extends string>({
  filters,
  activeFilter,
  getHref,
  ariaLabel,
}: Props<T>) {
  return (
    <aside className="h-fit rounded-2xl border border-[#1F3D3B]/10 bg-white/80 p-4 md:p-5">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-sm uppercase tracking-widest text-[#1F3D3B]/70">Filters</h2>
        <span className="text-xs text-[#1F3D3B]/50 md:hidden">Tap</span>
      </div>
      <nav className="mt-4 flex flex-wrap gap-2 md:block md:space-y-2" aria-label={ariaLabel}>
        {filters.map((filter) => (
          <Link
            key={filter}
            href={getHref(filter)}
            className={`block rounded-full border px-3 py-2 text-xs transition sm:px-4 sm:text-sm md:w-full md:rounded-xl md:text-left ${
              activeFilter === filter
                ? "border-[#F4A300] bg-[#F4A300]/10 text-[#1F3D3B]"
                : "border-[#1F3D3B]/10 hover:border-[#F4A300]"
            }`}
          >
            {filter}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
