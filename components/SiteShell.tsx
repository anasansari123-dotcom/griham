"use client";

import { usePathname } from "next/navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { SiteSettingsView } from "@/lib/cms/getContent";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  settings: SiteSettingsView;
};

export default function SiteShell({ children, settings }: Props) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <AnimatedBackground />
      <Navbar logoUrl={settings.logoUrl} companyName={settings.companyName} />
      <PageTransition>
        <main className="pt-[4.75rem] md:pt-28">{children}</main>
      </PageTransition>
      <Footer settings={settings} />
      <WhatsAppButton whatsAppUrl={settings.contactWhatsApp} />
    </>
  );
}
