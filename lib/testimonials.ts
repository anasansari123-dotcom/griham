export type ReviewItem = {
  quote: string;
  name: string;
  rating: string;
  meta?: string;
  image?: string;
};

const avatarCrop = "auto=format&fit=crop&w=200&h=200&q=80&facepad=2";

function unsplashAvatar(photoId: string) {
  return `https://images.unsplash.com/${photoId}?${avatarCrop}`;
}

function pexelsAvatar(photoId: number) {
  return `https://images.pexels.com/photos/${photoId}/pexels-photo-${photoId}.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop`;
}

/** Curated South Asian / Indian portrait photos — one unique face per reviewer. */
const reviewerAvatars: Record<string, string> = {
  "Priya Sharma": unsplashAvatar("photo-1724128187740-c70f811cdaf1"),
  "Arjun Reddy": pexelsAvatar(1681010),
  "Neha Kapoor": pexelsAvatar(1181519),
  "Kavita Menon": unsplashAvatar("photo-1724128190202-80ce103d74f5"),
  "Manoj Tiwari": pexelsAvatar(2379004),
  "Reshma Iyer": pexelsAvatar(1181690),
  "Ananya Gupta": unsplashAvatar("photo-1724128189881-271a2a828bb9"),
  "Vikram Rao": pexelsAvatar(1516680),
  "Meera Sundaram": unsplashAvatar("photo-1638734922465-461059520ead"),
  "Deepa Krishnan": pexelsAvatar(1181686),
  "Gautham Nair": pexelsAvatar(3775131),
  "Ishita Verma": unsplashAvatar("photo-1724128186704-2f4fa3004ba8"),
  "Aakash Patel": pexelsAvatar(3760853),
  "Pooja Desai": pexelsAvatar(1181692),
  "Harish Malhotra": pexelsAvatar(3184619),
  "Nithin Kumar": pexelsAvatar(1684759),
  "Lakshmi Priya": unsplashAvatar("photo-1724128194895-de4301fc3fa6"),
  "Suresh Babu": pexelsAvatar(532220),
  "Shreya Joshi": unsplashAvatar("photo-1724128188868-df77f9efd48d"),
  "Kiran Hegde": pexelsAvatar(1043474),
  "Naveen Shetty": pexelsAvatar(937481),
  "Sanjay Kumar": pexelsAvatar(1222271),
  "Divya Ranganathan": pexelsAvatar(1181717),
  "Rahul Khanna": pexelsAvatar(1043471),
  "Rohit Menon": unsplashAvatar("photo-1633332755192-727a05c4013b"),
  "Sneha Pillai": unsplashAvatar("photo-1580894900447-988edcb37ea3"),
  "Karthik Subramanian": pexelsAvatar(774909),
};

export function withReviewAvatars(reviews: ReviewItem[]): ReviewItem[] {
  return reviews.map((review) => ({
    ...review,
    image: reviewerAvatars[review.name] ?? review.image,
  }));
}

export const homeReviews: ReviewItem[] = withReviewAvatars([
  {
    quote: "Outstanding quality and finish. The curtains and sofa elevated our entire living room.",
    name: "Priya Sharma",
    rating: "5.0",
    meta: "HSR Layout, Bengaluru",
  },
  {
    quote: "Very smooth consultation and installation. Designs were elegant, minimal, and exactly our style.",
    name: "Arjun Reddy",
    rating: "5.0",
    meta: "Whitefield, Bengaluru",
  },
  {
    quote: "GRIHAM delivered a luxury look with practical comfort. Highly recommended for premium interiors.",
    name: "Neha Kapoor",
    rating: "4.9",
    meta: "Indiranagar, Bengaluru",
  },
]);

export const curtainsReviews: ReviewItem[] = withReviewAvatars([
  {
    quote: "The curtain fabric and fall look premium. Installation was quick and neat.",
    name: "Kavita Menon",
    rating: "5.0",
    meta: "Custom curtains · Jayanagar",
  },
  {
    quote: "They suggested the right sheer + blackout layering for our bedroom. Perfect balance of light and privacy.",
    name: "Manoj Tiwari",
    rating: "4.9",
    meta: "Bedroom curtains · Marathahalli",
  },
  {
    quote: "Great coordination with our wall colours and sofa. The room looks complete now.",
    name: "Reshma Iyer",
    rating: "5.0",
    meta: "Living room · Bellandur",
  },
]);

export const sofaReviews: ReviewItem[] = withReviewAvatars([
  {
    quote: "Super comfortable and the fabric recommendation was perfect for daily use. Looks premium.",
    name: "Ananya Gupta",
    rating: "5.0",
    meta: "L-shape sofa · Koramangala",
  },
  {
    quote: "Great build quality and clean finish. The size fits our layout exactly as planned.",
    name: "Vikram Rao",
    rating: "4.9",
    meta: "Custom sofa · Electronic City",
  },
  {
    quote: "Professional experience end-to-end. The sofa complements our wall panels and curtains.",
    name: "Meera Sundaram",
    rating: "5.0",
    meta: "Living room · Sarjapur Road",
  },
]);

export const wallpapersReviews: ReviewItem[] = withReviewAvatars([
  {
    quote: "The wallpaper recommendation was spot-on. It completely transformed our living room feature wall.",
    name: "Deepa Krishnan",
    rating: "5.0",
    meta: "Feature wall · Hebbal",
  },
  {
    quote: "Great finish and clean installation. The pattern choice looks premium and balanced with our furniture.",
    name: "Gautham Nair",
    rating: "5.0",
    meta: "Wallpapers · BTM Layout",
  },
  {
    quote: "Quick and professional. They helped us pick a design that suits the room size and lighting.",
    name: "Ishita Verma",
    rating: "4.9",
    meta: "Bedroom · Yelahanka",
  },
]);

export const mattressReviews: ReviewItem[] = withReviewAvatars([
  {
    quote: "We finally sleep better. The firmness recommendation was accurate and support feels great.",
    name: "Aakash Patel",
    rating: "5.0",
    meta: "Mattress · Hennur",
  },
  {
    quote: "Comfortable and premium. They guided us based on posture and preference, not just selling.",
    name: "Pooja Desai",
    rating: "4.9",
    meta: "Sleep consultation · RT Nagar",
  },
  {
    quote: "Excellent balance of comfort and support. The bedroom feels more premium overall.",
    name: "Harish Malhotra",
    rating: "5.0",
    meta: "Hybrid mattress · Banashankari",
  },
]);

export const woodenFlooringReviews: ReviewItem[] = withReviewAvatars([
  {
    quote: "The flooring tone recommendation was perfect. It made our home feel warmer and more premium.",
    name: "Nithin Kumar",
    rating: "5.0",
    meta: "Wooden flooring · JP Nagar",
  },
  {
    quote: "Neat installation and great guidance on maintenance. The finish looks elegant.",
    name: "Lakshmi Priya",
    rating: "4.9",
    meta: "Installation · Malleshwaram",
  },
  {
    quote: "Quality is top-class. It matches our wall panels and furniture beautifully.",
    name: "Suresh Babu",
    rating: "5.0",
    meta: "Living room · Rajajinagar",
  },
]);


export const bedsReviews: ReviewItem[] = withReviewAvatars([
  {
    quote: "The storage bed is sturdy and the finish looks premium. Installation was quick and clean.",
    name: "Sanjay Kumar",
    rating: "5.0",
    meta: "Storage bed · Brookefield",
  },
  {
    quote: "They helped us choose the right size for our room. The headboard styling looks classy.",
    name: "Divya Ranganathan",
    rating: "4.9",
    meta: "Master bedroom · CV Raman Nagar",
  },
  {
    quote: "Great quality and comfort-focused design. Fits perfectly with our mattress and decor.",
    name: "Rahul Khanna",
    rating: "5.0",
    meta: "Beds · Frazer Town",
  },
]);

export const wallPanelsReviews: ReviewItem[] = withReviewAvatars([
  {
    quote: "Our TV wall looks premium now. Clean finish and the panel texture added real depth to the room.",
    name: "Rohit Menon",
    rating: "5.0",
    meta: "TV unit wall · Kadubeesanahalli",
  },
  {
    quote: "The team suggested the right fluted design and it matched our sofa and curtains perfectly.",
    name: "Sneha Pillai",
    rating: "4.9",
    meta: "Living room · Hoodi",
  },
  {
    quote: "Fast installation, very neat work. It hides the wiring and looks super elegant.",
    name: "Karthik Subramanian",
    rating: "5.0",
    meta: "Accent wall · Kundalahalli",
  },
]);
