"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";

const panels = [
  "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
];

export default function WallPanelsPage() {
  return (
    <SectionWrapper className="mx-auto max-w-7xl px-6 py-10 md:py-14">
      <h1 className="mb-5 text-2xl font-semibold sm:mb-7 sm:text-4xl">Wall Panels</h1>
      <p className="-mt-4 mb-8 max-w-2xl text-sm text-[#1F3D3B]/75 sm:text-base">
        Statement-ready wall panels that add depth, warmth, and character—ideal for living rooms, TV units, reception areas, and accent walls.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {panels.map((image) => (
          <motion.div
            key={image}
            whileHover={{ rotateX: 8, rotateY: -8, scale: 1.02 }}
            transition={{ duration: 0.35 }}
            className="rounded-2xl border border-[#1F3D3B]/10 bg-white/80 p-3 shadow-lg"
            style={{ transformStyle: "preserve-3d" }}
          >
            <Image
              src={image}
              alt="Wall panel"
              width={700}
              height={800}
              className="h-56 w-full rounded-xl object-cover sm:h-64"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
