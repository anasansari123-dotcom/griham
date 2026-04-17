"use client";

import Card from "@/components/Card";
import SectionWrapper from "@/components/SectionWrapper";
import { curtainsData } from "@/lib/siteData";
import { useMemo, useState } from "react";

const filters = ["All", "Printed", "Essential", "Embroidered", "Solid", "Custom"];

export default function CurtainsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredCurtains = useMemo(() => {
    if (activeFilter === "All") return curtainsData;
    return curtainsData.filter((item) => item.tag === activeFilter);
  }, [activeFilter]);

  return (
    <div className="mx-auto grid max-w-7xl gap-5 px-4 py-10 sm:gap-6 sm:px-6 md:gap-8 md:py-14 md:grid-cols-[240px_1fr]">
      <aside className="h-fit rounded-2xl border border-[#1F3D3B]/10 bg-white/80 p-4 md:p-5">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-sm uppercase tracking-widest text-[#1F3D3B]/70">Filters</h2>
          <span className="text-xs text-[#1F3D3B]/50 md:hidden">Tap</span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 md:block md:space-y-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-3 py-2 text-xs transition sm:px-4 sm:text-sm md:w-full md:rounded-xl md:text-left ${
                activeFilter === filter
                  ? "border-[#F4A300] bg-[#F4A300]/10 text-[#1F3D3B]"
                  : "border-[#1F3D3B]/10 hover:border-[#F4A300]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </aside>
      <SectionWrapper>
        <h1 className="mb-4 text-2xl font-semibold sm:mb-6 sm:text-4xl">Curtains Collection</h1>
        <p className="-mt-2 mb-6 max-w-2xl text-sm text-[#1F3D3B]/75 sm:-mt-3 sm:text-base">
          Premium curtains crafted for privacy, light control, and a refined finish—choose from printed, essential, embroidered, and custom styles.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {filteredCurtains.map((item) => (
            <Card key={item.name} title={item.name} image={item.image} subtitle={item.tag} />
          ))}
        </div>
        {filteredCurtains.length === 0 ? (
          <p className="mt-5 text-sm text-[#1F3D3B]/70">No curtains found for this category yet.</p>
        ) : null}
      </SectionWrapper>
    </div>
  );
}
