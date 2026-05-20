import SectionWrapper from "@/components/SectionWrapper";
import Image from "next/image";

type GalleryImage = {
  src: string;
  alt: string;
};

type Props = {
  images: GalleryImage[];
};

/** Masonry-style inspiration gallery (category pages). Curtains uses its own gallery. */
export default function StyleGallery({ images }: Props) {
  if (!images.length) return null;

  return (
    <SectionWrapper animate={false}>
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.28em] text-[#F4A300]">Inspiration</p>
        <h2 className="mt-2 text-3xl font-semibold">Style gallery</h2>
      </div>
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {images.map((img, idx) => (
          <div
            key={`${img.src}-${idx}`}
            className="group relative mb-5 break-inside-avoid overflow-hidden rounded-2xl [&_span]:!block [&_span]:!h-auto [&_span]:!max-w-full"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={700}
              height={1000}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              unoptimized={img.src.startsWith("/")}
              loading="eager"
              className="block h-auto w-full transition duration-500 group-hover:scale-105"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
