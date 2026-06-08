"use client";

import { categoryPageHref, type CurtainFilterOption, type CurtainItem } from "@/lib/curtainsData";
import Image from "next/image";
import Link from "next/link";

type Props = {
  curtain: CurtainItem;
  priorityImage?: boolean;
};

export default function CurtainCard({ curtain, priorityImage = false }: Props) {
  const detailHref = curtain.tag
    ? categoryPageHref(curtain.tag as CurtainFilterOption)
    : categoryPageHref("All");
  const isLocalImage = curtain.image.startsWith("/");

  return (
    <article className="group overflow-hidden rounded-3xl border border-[#1F3D3B]/10 bg-white/90 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-44 overflow-hidden sm:h-56">
        <Image
          src={curtain.image}
          alt={curtain.name}
          fill
          unoptimized={isLocalImage}
          priority={priorityImage}
          className="object-cover transition duration-500 group-hover:scale-110"
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
        <h3 className="text-lg font-semibold text-[#1F3D3B]">{curtain.name}</h3>
        {curtain.tag ? <p className="mt-1 text-sm text-[#F4A300]">{curtain.tag}</p> : null}
        <Link href={detailHref} className="mt-3 inline-block text-sm font-semibold text-[#F4A300] hover:text-[#ffb61f] md:hidden">
          More details →
        </Link>
      </div>
    </article>
  );
}
