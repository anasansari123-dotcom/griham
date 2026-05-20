"use client";

import Image from "next/image";
import { useEffect } from "react";

type Props = {
  src: string;
  alt: string;
  onClose: () => void;
};

export default function ImageLightbox({ src, alt, onClose }: Props) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#102826]/90 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-[101] rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-semibold text-white hover:bg-white/20"
      >
        Close
      </button>
      <div
        className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-2xl bg-[#FAF9F6] p-2 shadow-2xl sm:p-4"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative mx-auto aspect-[4/3] max-h-[78vh] w-full">
          <Image
            src={src}
            alt={alt}
            fill
            unoptimized
            priority
            className="object-contain"
            sizes="100vw"
          />
        </div>
        <p className="mt-3 text-center text-sm font-medium text-[#1F3D3B] sm:text-base">{alt}</p>
      </div>
    </div>
  );
}
