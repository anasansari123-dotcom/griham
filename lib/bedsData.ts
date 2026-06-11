type BedFolder = "floating-platform" | "heritage-teak" | "minimal-frame" | "storage-platform" | "upholstered";

const bedImg = (folder: BedFolder, file: string) => `/images/beds/${folder}/${file}`;

const floatingPlatformGallery = [
  "FP1.jpg",
  "FP2.jpg",
  "FP3.jpg",
  "FP4.jpg",
  "FP5.jpg",
  "FP6.jpg",
  "FP7.jpg",
  "FP8.jpg",
].map((file) => bedImg("floating-platform", file));

const heritageTeakGallery = ["HT1.jpg", "HT2.jpg", "HT3.png", "HT4.jpg", "HT5.png", "HT6.jpg"].map((file) =>
  bedImg("heritage-teak", file),
);

const minimalFrameGallery = [
  "MF1.jpg",
  "MF2.jpg",
  "MF3.jpg",
  "MF4.jpg",
  "MF5.jpg",
  "MF6.jpg",
  "MF7.jpg",
  "MF8.jpg",
].map((file) => bedImg("minimal-frame", file));

const storagePlatformGallery = ["SP1.jpg", "SP2.jpg", "SP3.jpg", "SP4.jpg", "SP5.jpg", "SP6.jpg"].map((file) =>
  bedImg("storage-platform", file),
);

const upholsteredGallery = [
  "UB1.jpg",
  "UB2.jpg",
  "UB3.jpg",
  "UB4.jpg",
  "UB5.jpg",
  "UB6.jpg",
  "UB7.jpg",
  "UB8.jpg",
  "UB9.jpg",
  "UB10.jpg",
  "UB11.jpg",
].map((file) => bedImg("upholstered", file));

export const bedItems = [
  {
    title: "Heritage Teak Bed",
    subtitle: "Solid wood classic",
    image: bedImg("heritage-teak", "HT1.jpg"),
  },
  {
    title: "Storage Platform Bed",
    subtitle: "Utility-focused design",
    image: bedImg("storage-platform", "SP1.jpg"),
  },
  {
    title: "Minimal Frame Bed",
    subtitle: "Modern clean profile",
    image: bedImg("minimal-frame", "MF1.jpg"),
  },
  {
    title: "Upholstered Bed",
    subtitle: "Soft premium finish",
    image: bedImg("upholstered", "UB1.jpg"),
  },
  {
    title: "Floating Platform",
    subtitle: "Modern luxury vibe",
    image: bedImg("floating-platform", "FP1.jpg"),
  },
];

export const bedGalleryImages = [
  ...heritageTeakGallery,
  ...storagePlatformGallery,
  ...minimalFrameGallery,
  ...upholsteredGallery,
  ...floatingPlatformGallery,
].map((src, idx) => ({
  src,
  alt: `Bed inspiration ${idx + 1}`,
}));
