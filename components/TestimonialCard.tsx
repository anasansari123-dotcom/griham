import Image from "next/image";
import type { ReviewItem } from "@/lib/testimonials";

type Props = {
  review: ReviewItem;
};

export default function TestimonialCard({ review }: Props) {
  return (
    <blockquote className="flex h-full flex-col rounded-2xl border border-[#1F3D3B]/10 bg-white/90 p-6 shadow-sm">
      <p className="text-[#F4A300]">
        {"★".repeat(5)} <span className="text-[#1F3D3B]/70">({review.rating})</span>
      </p>
      <p className="mt-3 flex-1 text-[#1F3D3B]/85">&quot;{review.quote}&quot;</p>
      <footer className="mt-5 flex items-center gap-3 border-t border-[#1F3D3B]/10 pt-4">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-[#F4A300]/30">
          {review.image ? (
            <Image
              src={review.image}
              alt={review.name}
              fill
              unoptimized
              className="object-cover"
              sizes="48px"
            />
          ) : null}
        </div>
        <div>
          <p className="text-sm font-semibold text-[#1F3D3B]">{review.name}</p>
          {review.meta ? <p className="text-xs text-[#1F3D3B]/60">{review.meta}</p> : null}
        </div>
      </footer>
    </blockquote>
  );
}
