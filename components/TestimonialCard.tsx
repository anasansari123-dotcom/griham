import type { ReviewItem } from "@/lib/testimonials";

type Props = {
  review: ReviewItem;
};

function reviewerInitials(name: string) {
  return name
    .replace(/\./g, "")
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function TestimonialCard({ review }: Props) {
  const initials = reviewerInitials(review.name);

  return (
    <blockquote className="flex h-full flex-col rounded-2xl border border-[#1F3D3B]/10 bg-white/90 p-6 shadow-sm">
      <p className="text-[#F4A300]">
        {"★".repeat(5)} <span className="text-[#1F3D3B]/70">({review.rating})</span>
      </p>
      <p className="mt-3 flex-1 text-[#1F3D3B]/85">&quot;{review.quote}&quot;</p>
      <footer className="mt-5 flex items-center gap-3 border-t border-[#1F3D3B]/10 pt-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#1F3D3B] ring-2 ring-[#F4A300]/30">
          <span className="text-sm font-bold text-[#F4A300]">{initials}</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#1F3D3B]">{review.name}</p>
          {review.meta ? <p className="text-xs text-[#1F3D3B]/60">{review.meta}</p> : null}
        </div>
      </footer>
    </blockquote>
  );
}
