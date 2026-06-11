type FlooringFolder = "ash-grey" | "dark-espresso" | "honey-maple" | "natural-oak" | "teak-rustic" | "walnut-matte";

const floorImg = (folder: FlooringFolder, file: string) => `/images/wooden-flooring/${folder}/${file}`;

const ashGreyGallery = [
  "AG1.jpg",
  "AG2.jpg",
  "AG3.jpg",
  "AG4.jpg",
  "AG5.jpg",
  "AG6.jpg",
  "AG7.jpg",
  "AG8.jpg",
  "AG9.jpg",
  "AG10.jpg",
  "AG11.jpg",
  "AG12.jpg",
  "AG13.jpg",
  "AG14.jpg",
].map((file) => floorImg("ash-grey", file));

const darkEspressoGallery = ["DE1.jpg", "DE2.jpg", "DE3.jpg", "DE4.jpg", "DE5.jpg", "DE6.jpg"].map((file) =>
  floorImg("dark-espresso", file),
);

const honeyMapleGallery = ["HM1.jpg", "HM2.jpg", "HM3.jpg", "HM4.jpg", "HM5.jpg", "HM6.jpg", "HM7.jpg"].map((file) =>
  floorImg("honey-maple", file),
);

const naturalOakGallery = [
  "NO1.jpg",
  "NO2.jpg",
  "NO3.jpg",
  "NO4.jpg",
  "NO5.jpg",
  "NO6.jpg",
  "NO7.jpg",
  "NO8.jpg",
  "NO9.jpg",
  "NO10.jpg",
  "NO11.jpg",
  "NO12.jpg",
  "NO13.jpg",
  "NO14.jpg",
  "NO15.jpg",
].map((file) => floorImg("natural-oak", file));

const teakRusticGallery = [
  "TR1.jpg",
  "TR2.jpg",
  "TR3.jpg",
  "TR4.jpg",
  "TR5.jpg",
  "TR6.jpg",
  "TR7.jpg",
  "TR8.jpg",
  "TR9.jpg",
  "TR10.jpg",
  "TR11.jpg",
  "TR12.jpg",
  "TR13.jpg",
].map((file) => floorImg("teak-rustic", file));

const walnutMatteGallery = [
  "WM1.jpg",
  "WM2.jpg",
  "WM3.jpg",
  "WM4.jpg",
  "WM5.jpg",
  "WM6.jpg",
  "WM7.jpg",
  "WM8.jpg",
  "WM9.jpg",
  "WM10.jpg",
  "WM11.jpg",
  "WM12.jpg",
  "WM13.jpg",
].map((file) => floorImg("walnut-matte", file));

export const woodenFlooringItems = [
  {
    title: "Natural Oak",
    subtitle: "Warm timeless grains",
    image: floorImg("natural-oak", "NO1.jpg"),
  },
  {
    title: "Walnut Matte",
    subtitle: "Contemporary deep tone",
    image: floorImg("walnut-matte", "WM1.jpg"),
  },
  {
    title: "Teak Rustic",
    subtitle: "Classic premium texture",
    image: floorImg("teak-rustic", "TR1.jpg"),
  },
  {
    title: "Ash Grey",
    subtitle: "Modern cool tone",
    image: floorImg("ash-grey", "AG1.jpg"),
  },
  {
    title: "Honey Maple",
    subtitle: "Bright warm finish",
    image: floorImg("honey-maple", "HM1.jpg"),
  },
  {
    title: "Dark Espresso",
    subtitle: "Luxury deep shade",
    image: floorImg("dark-espresso", "DE1.jpg"),
  },
];

export const woodenFlooringGalleryImages = [
  ...naturalOakGallery,
  ...walnutMatteGallery,
  ...teakRusticGallery,
  ...ashGreyGallery,
  ...honeyMapleGallery,
  ...darkEspressoGallery,
].map((src, idx) => ({
  src,
  alt: `Wooden flooring inspiration ${idx + 1}`,
}));
