"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  title: string;
  image: string;
  alt?: string;
  subtitle?: string;
  showConsultationButton?: boolean;
};

export default function Card({ title, image, alt, subtitle, showConsultationButton = false }: Props) {
  const router = useRouter();

  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className="group overflow-hidden rounded-3xl border border-[#1F3D3B]/10 bg-white/90 shadow-sm hover:shadow-xl"
    >
      <div className="relative h-44 overflow-hidden sm:h-56">
        <Image
          src={image}
          alt={alt ?? title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {showConsultationButton ? (
          <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-[#102826]/75 via-[#102826]/20 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <button
              type="button"
              onClick={() => router.push("/book-consultation")}
              className="rounded-full bg-[#F4A300] px-4 py-2 text-xs font-semibold text-[#1F3D3B] shadow-sm transition hover:bg-[#ffb61f]"
            >
              Book Free Consultation
            </button>
          </div>
        ) : null}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-[#1F3D3B]">{title}</h3>
        {subtitle ? <p className="mt-1 text-sm text-[#1F3D3B]/70">{subtitle}</p> : null}
      </div>
    </motion.article>
  );
}
