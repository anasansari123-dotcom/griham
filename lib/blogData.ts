export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-choose-curtains-for-living-room",
    title: "How to Choose the Right Curtains for Your Living Room",
    excerpt:
      "Fabric, fall, and light control tips to help you pick curtains that elevate privacy and style without overpowering the room.",
    category: "Curtains",
    date: "12 May 2026",
    readTime: "5 min read",
    image: "/image_1.avif",
    imageAlt: "Elegant living room curtains",
    content: [
      "Curtains do more than cover windows—they set the mood of your living room. Start by deciding how much natural light you want during the day and how much privacy you need at night.",
      "For bright rooms, layer sheer curtains with blackout panels. For compact spaces, choose light fabrics with a clean vertical fall to make ceilings feel taller.",
      "Color-wise, match undertones with your wall paint and sofa fabric. Warm beige walls pair well with ivory or soft gold drapes, while grey interiors look refined with charcoal or muted green curtains.",
      "Always measure width with fullness (usually 2x to 2.5x the rod width) and finalize drop based on floor finish. A free consultation can help you compare fabrics and hardware before installation.",
    ],
  },
  {
    slug: "l-shape-vs-u-shape-sofa-guide",
    title: "L-Shape vs U-Shape Sofa: Which Layout Fits Your Home?",
    excerpt:
      "Compare seating capacity, room flow, and comfort to find the best sofa configuration for family lounges and compact apartments.",
    category: "Sofa",
    date: "8 May 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Modern L-shape sofa in a living room",
    content: [
      "L-shape sofas are ideal when you want corner seating without blocking movement. They work especially well in medium-sized living rooms with a clear TV wall.",
      "U-shape sofas are better for larger lounges and homes that host guests often. They create a conversation zone and maximize seating, but need generous floor space.",
      "Before choosing, mark walking paths, door swing areas, and side tables. Leave at least 24–30 inches for comfortable movement around the sofa.",
      "Fabric and cushion firmness matter as much as shape. Families with daily use should prioritize easy-clean upholstery and medium-firm cushioning for long-term comfort.",
    ],
  },
  {
    slug: "wallpaper-vs-wall-panels",
    title: "Wallpaper vs Wall Panels: Which Is Better for Your Walls?",
    excerpt:
      "Understand texture, durability, and maintenance differences to create accent walls that look premium and last longer.",
    category: "Walls",
    date: "3 May 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Decorative interior wall finish",
    content: [
      "Wallpapers are perfect for adding pattern, color, and personality quickly. They are a strong choice for bedrooms, feature walls, and rental-friendly refreshes.",
      "Wall panels bring depth and a luxury architectural feel. They are excellent for TV units, headboards, and areas where you want texture without heavy paint work.",
      "In humid zones, prioritize breathable materials and professional installation. For high-touch areas, panels often perform better against scuffs and daily wear.",
      "You can also combine both: wallpaper in private rooms and panels in public zones for a balanced, designer look.",
    ],
  },
  {
    slug: "wooden-flooring-care-tips",
    title: "Wooden Flooring Care Tips for Indian Homes",
    excerpt:
      "Simple maintenance habits to protect wooden flooring from moisture, scratches, and fading while keeping the finish premium.",
    category: "Flooring",
    date: "28 Apr 2026",
    readTime: "4 min read",
    image: "/images/wooden-flooring/wooden-flooring-collection.jpg",
    imageAlt: "Warm wooden flooring in a modern room",
    content: [
      "Wooden flooring looks elegant when maintained consistently. Use soft microfiber mops and avoid excess water during cleaning.",
      "Place mats at entrances to reduce dust and grit. Felt pads under furniture legs help prevent micro-scratches over time.",
      "For seasonal humidity changes, keep indoor ventilation stable. Immediate wipe-up of spills protects joints and surface coating.",
      "Schedule periodic professional checks if your flooring is installed in high-traffic zones or near kitchen openings.",
    ],
  },
  {
    slug: "mattress-buying-guide-better-sleep",
    title: "Mattress Buying Guide for Better Sleep",
    excerpt:
      "Learn how firmness, material, and size selection can improve sleep quality for every family member.",
    category: "Mattress",
    date: "22 Apr 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Comfortable mattress on a styled bed",
    content: [
      "A good mattress supports spinal alignment and temperature comfort. Side sleepers usually prefer medium-soft surfaces, while back sleepers need balanced support.",
      "Memory foam offers pressure relief, while pocket spring systems improve airflow and bounce. Hybrid options combine both benefits.",
      "Always match mattress size with bed frame dimensions and room scale. For couples, motion isolation is an important factor to reduce sleep disturbance.",
      "Test firmness based on daily posture habits, not just showroom feel. A consultation can help map the right model to your sleep profile.",
    ],
  },
  {
    slug: "home-decor-trends-2026",
    title: "Home Decor Trends for 2026: Warm, Functional, Premium",
    excerpt:
      "Explore the latest decor direction—natural textures, layered lighting, and multi-functional furniture for modern Indian homes.",
    category: "Home Decor",
    date: "15 Apr 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Modern home decor styling",
    content: [
      "2026 interiors are moving toward warm minimalism: clean layouts with tactile fabrics, earthy colors, and fewer but bolder accents.",
      "Recliners, sofa-cum-beds, and modular seating are popular because homes now need flexible living and guest-ready spaces.",
      "Lighting layers—ambient, task, and accent—are replacing single overhead lighting for more comfortable evenings.",
      "The best trend is personalization. Mix decor categories thoughtfully so your home feels cohesive, not copied from a catalog.",
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
