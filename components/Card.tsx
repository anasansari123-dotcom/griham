"use client";

import ImageLightbox from "@/components/ImageLightbox";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  title: string;
  image: string;
  alt?: string;
  subtitle?: string;
  showConsultationButton?: boolean;
  enableImagePreview?: boolean;
  imageFit?: "cover" | "contain";
  priorityImage?: boolean;
};

export default function Card({
  title,
  image,
  alt,
  subtitle,
  showConsultationButton = false,
  enableImagePreview = false,
  imageFit = "cover",
  priorityImage = false,
}: Props) {
  const router = useRouter();
  const [previewOpen, setPreviewOpen] = useState(false);
  const isLocalImage = image.startsWith("/");
  const useMobileLayout = imageFit === "contain";

  return (
    <>
      <motion.article
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ duration: 0.25 }}
        className="group overflow-hidden rounded-3xl border border-[#1F3D3B]/10 bg-white/90 shadow-sm hover:shadow-xl"
      >
        <div
          className={`relative overflow-hidden ${
            useMobileLayout ? "h-52 md:h-44 lg:h-56" : "h-44 sm:h-56"
          }`}
        >
          {enableImagePreview ? (
            <button
              type="button"
              onClick={() => setPreviewOpen(true)}
              className="absolute inset-0 z-10 cursor-zoom-in md:hidden"
              aria-label={`View full image of ${title}`}
            />
          ) : null}
          <Image
            src={image}
            alt={alt ?? title}
            fill
            unoptimized={isLocalImage}
            priority={priorityImage}
            loading="eager"
            className={`h-full w-full transition-transform duration-500 ${
              useMobileLayout
                ? "object-cover object-center group-hover:scale-[1.02] md:group-hover:scale-110"
                : "object-cover group-hover:scale-110"
            }`}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          {showConsultationButton ? (
            <div className="absolute inset-0 hidden items-end justify-center bg-gradient-to-t from-[#102826]/75 via-[#102826]/20 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:flex">
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
      {previewOpen ? <ImageLightbox src={image} alt={alt ?? title} onClose={() => setPreviewOpen(false)} /> : null}
    </>
  );
}
