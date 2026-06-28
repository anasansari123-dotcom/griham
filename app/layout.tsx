import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import SiteShell from "@/components/SiteShell";
import { getSeoContent, getSiteSettings } from "@/lib/cms/getContent";
import Script from "next/script";

export const dynamic = "force-dynamic";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeoContent();
  return {
    metadataBase: new URL("https://www.grihamdecor.in"),
    title: {
      default: seo.title,
      template: "%s | GRIHAM",
    },
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: "https://www.grihamdecor.in",
      siteName: "GRIHAM",
      locale: "en_IN",
      type: "website",
      ...(seo.ogImage ? { images: [{ url: seo.ogImage }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      ...(seo.ogImage ? { images: [seo.ogImage] } : {}),
    },
    icons: {
      icon: [{ url: seo.favicon, type: "image/jpeg" }],
      apple: [{ url: seo.favicon, type: "image/jpeg" }],
      shortcut: [seo.favicon],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSiteSettings();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-[#FAF9F6] text-[#1F3D3B]">
        <Script
          id="griham-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              name: settings.companyName,
              url: settings.contactWebsite,
              telephone: settings.contactPhone,
              address: {
                "@type": "PostalAddress",
                streetAddress: settings.storeAddress,
                addressLocality: "Brookefield, Bengaluru",
                addressRegion: "Karnataka",
                postalCode: "560037",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: settings.storeCoordinates.lat,
                longitude: settings.storeCoordinates.lng,
              },
              hasMap: settings.mapOpenUrl,
              areaServed: "Bengaluru",
              knowsAbout: [
                "Curtains",
                "Wallpapers",
                "Wall Panels",
                "Sofa",
                "Beds",
                "Mattress",
                "Wooden Flooring",
              ],
            }),
          }}
        />
        <SiteShell settings={settings}>{children}</SiteShell>
      </body>
    </html>
  );
}
