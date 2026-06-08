const wp = (id: string) => `/images/wall-panels/${id}.jpg`;

export const wallPanelItems = [
  { title: "Wood Slat Accent", subtitle: "Warm linear texture", image: wp("W1") },
  { title: "3D Sculpted Panel", subtitle: "Depth and visual drama", image: wp("W18") },
  { title: "Matte Fluted Panel", subtitle: "Contemporary luxury finish", image: wp("W36") },
  { title: "Soft Fabric Panel", subtitle: "Comfort + subtle acoustics", image: wp("W54") },
  { title: "Stone Texture Panel", subtitle: "Premium architectural look", image: wp("W72") },
  { title: "Minimal Groove Panel", subtitle: "Clean modern lines", image: wp("W90") },
];

const wallPanelGalleryIds = ["W1", "W15", "W28", "W42", "W55", "W68", "W82", "W96", "W111"] as const;

export const wallPanelGalleryImages = wallPanelGalleryIds.map((id) => ({
  src: wp(id),
  alt: `Custom wall panel design ${id}`,
}));
