import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  imageFit?: "cover" | "contain";
};

export default function GalleryImageTile({
  src,
  alt,
  className = "",
  priority = false,
  imageFit = "cover",
}: Props) {
  const isLocal = src.startsWith("/");
  const isContain = imageFit === "contain";

  return (
    <div
      className={`group relative aspect-[4/5] overflow-hidden rounded-2xl border border-[#1F3D3B]/10 bg-[#1F3D3B]/5 sm:rounded-3xl ${isContain ? "bg-[#FAF9F6]" : ""} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        unoptimized={isLocal}
        className={`object-center transition duration-500 ${
          isContain
            ? "object-contain p-2 group-hover:scale-[1.02]"
            : "object-cover scale-[1.08] group-hover:scale-[1.12]"
        }`}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    </div>
  );
}
