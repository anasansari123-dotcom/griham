type WallpaperFolder = "classic-motif" | "minimal-geometric" | "nature-inspired" | "soft-neutrals" | "textured-luxe";

const wpImg = (folder: WallpaperFolder, file: string) => `/images/wallpapers/${folder}/${file}`;

const classicMotifGallery = [
  "CM1.jpg",
  "CM2.jpg",
  "CM3.jpg",
  "CM4.jpg",
  "CM5.jpg",
  "CM6.jpg",
  "CM7.jpg",
  "CM8.jpg",
  "CM9.jpg",
].map((file) => wpImg("classic-motif", file));

const minimalGeometricGallery = [
  "MG1.jpg",
  "MG2.jpg",
  "MG3.jpg",
  "MG4.jpg",
  "MG5.JPG",
  "MG6.jpg",
  "MG7.jpg",
  "MG8.jpg",
  "MG9.jpg",
  "MG10.jpg",
  "MG11.jpg",
  "MG12.jpg",
  "MG13.jpg",
  "MG14.jpg",
  "MG15.jpg",
  "MG16.jpg",
  "MG17.jpg",
  "MG18.jpg",
].map((file) => wpImg("minimal-geometric", file));

const natureInspiredGallery = [
  "NI1.jpg",
  "NI2.jpg",
  "NI3.jpg",
  "NI4.jpg",
  "NI5.jpg",
  "NI6.jpg",
  "NI7.jpg",
  "NI8.jpg",
  "NI9.jpg",
  "NI10.jpg",
  "NI11.jpg",
  "NI12.jpg",
  "NI13.jpg",
  "NI14.jpg",
].map((file) => wpImg("nature-inspired", file));

const softNeutralsGallery = [
  "SN1.jpg",
  "SN2.jpg",
  "SN3.jpg",
  "SN4.jpg",
  "SN5.jpg",
  "SN6.jpg",
  "SN7.jpg",
  "SN8.jpg",
  "SN9.jpg",
].map((file) => wpImg("soft-neutrals", file));

const texturedLuxeGallery = [
  "TL1.jpg",
  "TL2.jpg",
  "TL3.jpg",
  "TL4.jpg",
  "TL5.jpg",
  "TL6.jpg",
  "TL7.jpg",
  "TL8.jpg",
  "TL9.jpg",
  "TL10.jpg",
  "TL11.jpg",
  "TL12.jpg",
  "TL13.jpg",
  "TL14.jpg",
  "TL15.jpg",
  "TL16.jpg",
  "TL17.jpg",
  "TI18.jpg",
].map((file) => wpImg("textured-luxe", file));

export const wallpaperItems = [
  {
    title: "Textured Luxe",
    subtitle: "Depth-rich premium texture",
    image: wpImg("textured-luxe", "TL1.jpg"),
  },
  {
    title: "Minimal Geometric",
    subtitle: "Modern clean patterns",
    image: wpImg("minimal-geometric", "MG1.jpg"),
  },
  {
    title: "Classic Motif",
    subtitle: "Elegant timeless designs",
    image: wpImg("classic-motif", "CM1.jpg"),
  },
  {
    title: "Soft Neutrals",
    subtitle: "Warm minimal palettes",
    image: wpImg("soft-neutrals", "SN1.jpg"),
  },
  {
    title: "Nature Inspired",
    subtitle: "Organic tones and motifs",
    image: wpImg("nature-inspired", "NI1.jpg"),
  },
];

export const wallpaperGalleryImages = [
  ...texturedLuxeGallery,
  ...minimalGeometricGallery,
  ...classicMotifGallery,
  ...softNeutralsGallery,
  ...natureInspiredGallery,
].map((src, idx) => ({
  src,
  alt: `Wallpaper inspiration ${idx + 1}`,
}));

