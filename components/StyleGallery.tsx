import GalleryImageTile from "@/components/GalleryImageTile";
import SectionWrapper from "@/components/SectionWrapper";

type GalleryImage = {
  src: string;
  alt: string;
};

type Props = {
  images: GalleryImage[];
  id?: string;
};

/** Uniform grid inspiration gallery (category pages). */
export default function StyleGallery({ images, id = "style-gallery" }: Props) {
  if (!images.length) return null;

  return (
    <SectionWrapper animate={false} id={id} className="scroll-mt-28">
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.28em] text-[#F4A300]">Inspiration</p>
        <h2 className="mt-2 text-3xl font-semibold">Style gallery</h2>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-5">
        {images.map((img, idx) => (
          <GalleryImageTile key={`${img.src}-${idx}`} src={img.src} alt={img.alt} priority={idx < 3} />
        ))}
      </div>
    </SectionWrapper>
  );
}
