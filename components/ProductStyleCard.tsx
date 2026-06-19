"use client";

import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  image: string;
  subtitle?: string;
  tag?: string;
  detailHref: string;
  priorityImage?: boolean;
};

export default function ProductStyleCard({
  title,
  image,
  subtitle,
  tag,
  detailHref,
  priorityImage = false,
}: Props) {
  const isLocalImage = image.startsWith("/");

  return (
    <article className="group overflow-hidden rounded-3xl border border-[#1F3D3B]/10 bg-white/90 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-44 overflow-hidden sm:h-56">
        <Image
          src={image}
          alt={title}
          fill
          unoptimized={isLocalImage}
          priority={priorityImage}
          className="object-cover object-center transition duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 hidden items-center justify-center bg-[#1F3D3B]/40 opacity-0 transition duration-300 group-hover:opacity-100 md:flex">
          <Link
            href={detailHref}
            className="rounded-full bg-[#F4A300] px-5 py-2.5 text-sm font-semibold text-[#1F3D3B] shadow-sm transition hover:bg-[#ffb61f]"
          >
            More details
          </Link>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-[#1F3D3B]">{title}</h3>
        {tag ? <p className="mt-1 text-sm text-[#F4A300]">{tag}</p> : null}
        {subtitle ? <p className="mt-1 text-sm text-[#1F3D3B]/70">{subtitle}</p> : null}
        <Link href={detailHref} className="mt-3 inline-block text-sm font-semibold text-[#F4A300] hover:text-[#ffb61f] md:hidden">
          More details →
        </Link>
      </div>
    </article>
  );
}
