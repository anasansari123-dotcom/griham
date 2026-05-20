export type ReviewItem = {
  quote: string;
  name: string;
  rating: string;
  meta?: string;
  image?: string;
};

/** Unique portrait per reviewer — no duplicate faces across the site. */
const reviewerAvatars: Record<string, string> = {
  "Priya S.": "https://randomuser.me/api/portraits/women/44.jpg",
  "Arjun R.": "https://randomuser.me/api/portraits/men/32.jpg",
  "Neha K.": "https://randomuser.me/api/portraits/women/68.jpg",
  "Kavita M.": "https://randomuser.me/api/portraits/women/21.jpg",
  "Manoj T.": "https://randomuser.me/api/portraits/men/15.jpg",
  "Reshma L.": "https://randomuser.me/api/portraits/women/55.jpg",
  "Ananya G.": "https://randomuser.me/api/portraits/women/12.jpg",
  "Vikram R.": "https://randomuser.me/api/portraits/men/75.jpg",
  "Meera S.": "https://randomuser.me/api/portraits/women/33.jpg",
  "Deepa K.": "https://randomuser.me/api/portraits/women/38.jpg",
  "Gautham N.": "https://randomuser.me/api/portraits/men/28.jpg",
  "Ishita V.": "https://randomuser.me/api/portraits/women/62.jpg",
  "Aakash R.": "https://randomuser.me/api/portraits/men/22.jpg",
  "Pooja S.": "https://randomuser.me/api/portraits/women/89.jpg",
  "Harish M.": "https://randomuser.me/api/portraits/men/46.jpg",
  "Nithin K.": "https://randomuser.me/api/portraits/men/61.jpg",
  "Lakshmi R.": "https://randomuser.me/api/portraits/women/52.jpg",
  "Suresh P.": "https://randomuser.me/api/portraits/men/41.jpg",
  "Shreya M.": "https://randomuser.me/api/portraits/women/26.jpg",
  "Kiran P.": "https://randomuser.me/api/portraits/men/18.jpg",
  "Naveen S.": "https://randomuser.me/api/portraits/men/54.jpg",
  "Sanjay N.": "https://randomuser.me/api/portraits/men/36.jpg",
  "Divya R.": "https://randomuser.me/api/portraits/women/71.jpg",
  "Rahul K.": "https://randomuser.me/api/portraits/men/29.jpg",
  "Rohit M.": "https://randomuser.me/api/portraits/men/67.jpg",
  "Sneha P.": "https://randomuser.me/api/portraits/women/47.jpg",
  "Karthik S.": "https://randomuser.me/api/portraits/men/83.jpg",
};

export function withReviewAvatars(reviews: ReviewItem[]): ReviewItem[] {
  return reviews.map((review) => ({
    ...review,
    image: review.image ?? reviewerAvatars[review.name] ?? `https://i.pravatar.cc/300?u=${encodeURIComponent(review.name)}`,
  }));
}

export const homeReviews: ReviewItem[] = withReviewAvatars([
  {
    quote: "Outstanding quality and finish. The curtains and sofa elevated our entire living room.",
    name: "Priya S.",
    rating: "5.0",
  },
  {
    quote: "Very smooth consultation and installation. Designs were elegant, minimal, and exactly our style.",
    name: "Arjun R.",
    rating: "5.0",
  },
  {
    quote: "GRIHAM delivered a luxury look with practical comfort. Highly recommended for premium interiors.",
    name: "Neha K.",
    rating: "4.9",
  },
]);

export const curtainsReviews: ReviewItem[] = withReviewAvatars([
  {
    quote: "The curtain fabric and fall look premium. Installation was quick and neat.",
    name: "Kavita M.",
    rating: "5.0",
    meta: "Curtains",
  },
  {
    quote: "They suggested the right sheer + blackout layering for our bedroom. Perfect balance of light and privacy.",
    name: "Manoj T.",
    rating: "4.9",
    meta: "Bedroom",
  },
  {
    quote: "Great coordination with our wall colors and sofa. The room looks complete now.",
    name: "Reshma L.",
    rating: "5.0",
    meta: "Living room",
  },
]);

export const sofaReviews: ReviewItem[] = withReviewAvatars([
  {
    quote: "Super comfortable and the fabric recommendation was perfect for daily use. Looks premium.",
    name: "Ananya G.",
    rating: "5.0",
    meta: "Custom sofa",
  },
  {
    quote: "Great build quality and clean finish. The size fits our layout exactly as planned.",
    name: "Vikram R.",
    rating: "4.9",
    meta: "L-shape",
  },
  {
    quote: "Professional experience end-to-end. The sofa complements our wall panels and curtains.",
    name: "Meera S.",
    rating: "5.0",
    meta: "Living room",
  },
]);

export const wallpapersReviews: ReviewItem[] = withReviewAvatars([
  {
    quote: "The wallpaper recommendation was spot-on. It completely transformed our living room feature wall.",
    name: "Deepa K.",
    rating: "5.0",
    meta: "Wallpapers",
  },
  {
    quote: "Great finish and clean installation. The pattern choice looks premium and balanced with our furniture.",
    name: "Gautham N.",
    rating: "5.0",
    meta: "Feature wall",
  },
  {
    quote: "Quick and professional. They helped us pick a design that suits the room size and lighting.",
    name: "Ishita V.",
    rating: "4.9",
    meta: "Bedroom",
  },
]);

export const mattressReviews: ReviewItem[] = withReviewAvatars([
  {
    quote: "We finally sleep better. The firmness recommendation was accurate and support feels great.",
    name: "Aakash R.",
    rating: "5.0",
    meta: "Mattress",
  },
  {
    quote: "Comfortable and premium. They guided us based on posture and preference, not just selling.",
    name: "Pooja S.",
    rating: "4.9",
    meta: "Sleep consultation",
  },
  {
    quote: "Excellent balance of comfort and support. The bedroom feels more premium overall.",
    name: "Harish M.",
    rating: "5.0",
    meta: "Hybrid",
  },
]);

export const woodenFlooringReviews: ReviewItem[] = withReviewAvatars([
  {
    quote: "The flooring tone recommendation was perfect. It made our home feel warmer and more premium.",
    name: "Nithin K.",
    rating: "5.0",
    meta: "Wooden flooring",
  },
  {
    quote: "Neat installation and great guidance on maintenance. The finish looks elegant.",
    name: "Lakshmi R.",
    rating: "4.9",
    meta: "Installation",
  },
  {
    quote: "Quality is top-class. It matches our wall panels and furniture beautifully.",
    name: "Suresh P.",
    rating: "5.0",
    meta: "Living room",
  },
]);

export const homeDecorReviews: ReviewItem[] = withReviewAvatars([
  {
    quote: "The decor suggestions made our living room feel complete. Everything looks curated and premium.",
    name: "Shreya M.",
    rating: "5.0",
    meta: "Home decor",
  },
  {
    quote: "Great eye for styling. They matched pieces to our sofa and wall finish beautifully.",
    name: "Kiran P.",
    rating: "4.9",
    meta: "Room styling",
  },
  {
    quote: "Simple, elegant and not cluttered. Perfect recommendations for a compact home.",
    name: "Naveen S.",
    rating: "5.0",
    meta: "Compact apartment",
  },
]);

export const bedsReviews: ReviewItem[] = withReviewAvatars([
  {
    quote: "The storage bed is sturdy and the finish looks premium. Installation was quick and clean.",
    name: "Sanjay N.",
    rating: "5.0",
    meta: "Storage bed",
  },
  {
    quote: "They helped us choose the right size for our room. The headboard styling looks classy.",
    name: "Divya R.",
    rating: "4.9",
    meta: "Master bedroom",
  },
  {
    quote: "Great quality and comfort-focused design. Fits perfectly with our mattress and decor.",
    name: "Rahul K.",
    rating: "5.0",
    meta: "Beds",
  },
]);

export const wallPanelsReviews: ReviewItem[] = withReviewAvatars([
  {
    quote: "Our TV wall looks premium now. Clean finish and the panel texture added real depth to the room.",
    name: "Rohit M.",
    rating: "5.0",
    meta: "TV unit wall",
  },
  {
    quote: "The team suggested the right fluted design and it matched our sofa and curtains perfectly.",
    name: "Sneha P.",
    rating: "4.9",
    meta: "Living room",
  },
  {
    quote: "Fast installation, very neat work. It hides the wiring and looks super elegant.",
    name: "Karthik S.",
    rating: "5.0",
    meta: "Accent wall",
  },
]);
