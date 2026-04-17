"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  title: string;
  image: string;
  subtitle?: string;
};

export default function Card({ title, image, subtitle }: Props) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className="group overflow-hidden rounded-3xl border border-[#1F3D3B]/10 bg-white/90 shadow-sm hover:shadow-xl"
    >
      <div className="relative h-44 overflow-hidden sm:h-56">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-[#1F3D3B]">{title}</h3>
        {subtitle ? <p className="mt-1 text-sm text-[#1F3D3B]/70">{subtitle}</p> : null}
      </div>
    </motion.article>
  );
}
