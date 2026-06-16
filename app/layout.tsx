import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import PageTransition from "@/components/PageTransition";
import WhatsAppButton from "@/components/WhatsAppButton";
import Script from "next/script";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.grihamdecor.in"),
  title: {
    default: "GRIHAM | Premium Home Decor & Interiors",
    template: "%s | GRIHAM",
  },
  description:
    "Discover premium home furnishing collections from GRIHAM: curtains, wallpapers, wall panels, sofas, beds, mattresses, and wooden flooring.",
  keywords: [
    "premium home decor",
    "curtains",
    "wallpapers",
    "wall panels",
    "sofa",
    "beds",
    "mattress",
    "wooden flooring",
    "interior consultation",
    "Bengaluru home decor",
  ],
  openGraph: {
    title: "GRIHAM | Premium Home Decor & Interiors",
    description:
      "Curated premium interiors with expert guidance for curtains, wallpapers, wall panels, sofas, beds, mattresses, and wooden flooring.",
    url: "https://www.grihamdecor.in",
    siteName: "GRIHAM",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GRIHAM | Premium Home Decor & Interiors",
    description:
      "Premium home decor collections with expert consultation and installation support.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
              name: "GRIHAM",
              url: "https://www.grihamdecor.in",
              telephone: "+91 7022970608",
              address: {
                "@type": "PostalAddress",
                streetAddress: "AECS Layout, Brookefield",
                addressLocality: "Bengaluru",
                addressCountry: "IN",
              },
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
        <AnimatedBackground />
        <Navbar />
        <PageTransition>
          <main className="pt-[4.75rem] md:pt-28">{children}</main>
        </PageTransition>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
