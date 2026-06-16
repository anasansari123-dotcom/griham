const mattressImg = (file: string) => `/images/mattress/${file}`;

export const mattressItems = [
  {
    title: "Orthopedic Comfort",
    subtitle: "Firm posture support",
    image: mattressImg("orthopedic-comfort.jpg"),
  },
  {
    title: "Latex Natural Sleep",
    subtitle: "Breathable responsive feel",
    image: mattressImg("latex-natural-sleep.webp"),
  },
  {
    title: "Hybrid Plush Support",
    subtitle: "Balanced comfort + support",
    image: mattressImg("hybrid-plush-support.jpg"),
  },
  {
    title: "Cooling Gel Comfort",
    subtitle: "Cooler sleep surface",
    image: mattressImg("cooling-gel-comfort.avif"),
  },
  {
    title: "Pocket Spring Support",
    subtitle: "Stable motion control",
    image: mattressImg("pocket-spring-support.webp"),
  },
  {
    title: "Medium Comfort Layer",
    subtitle: "Everyday balanced feel",
    image: mattressImg("medium-comfort-layer.webp"),
  },
];

export const mattressGalleryImages = mattressItems.map((item, idx) => ({
  src: item.image,
  alt: `${item.title} mattress inspiration ${idx + 1}`,
}));
