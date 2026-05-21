import SectionWrapper from "@/components/SectionWrapper";
import SocialLinks from "@/components/SocialLinks";
import {
  businessHours,
  contactEmail,
  contactEmailHref,
  contactPhone,
  contactPhoneHref,
  contactWebsite,
  mapDirectionsUrl,
  mapEmbedUrl,
  socialLinks,
  storeAddress,
} from "@/lib/siteData";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with GRIHAM—studio address, phone, email, business hours, and social media for premium home decor in Bengaluru.",
};

const contactItems = [
  {
    label: "Phone",
    value: contactPhone,
    href: contactPhoneHref,
  },
  {
    label: "Email",
    value: contactEmail,
    href: contactEmailHref,
  },
  {
    label: "Website",
    value: "www.grihamdecor.in",
    href: contactWebsite,
  },
  {
    label: "Studio Hours",
    value: businessHours,
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-10 px-4 py-10 sm:px-6 md:space-y-14 md:py-14">
      <SectionWrapper className="rounded-3xl border border-[#1F3D3B]/10 bg-white/90 p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#F4A300]">Contact us</p>
        <h1 className="mt-2 text-3xl font-semibold text-[#1F3D3B] md:text-5xl">We&apos;d love to hear from you</h1>
        <p className="mt-4 max-w-3xl text-sm text-[#1F3D3B]/75 md:text-base">
          Visit our Brookefield studio, call or email our team, or connect on social media. We help with curtains, sofas,
          wallpapers, flooring, and complete home styling.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/book-consultation"
            className="inline-flex rounded-full bg-[#F4A300] px-5 py-2.5 text-sm font-semibold text-[#1F3D3B] transition hover:bg-[#ffb61f]"
          >
            Book Free Consultation
          </Link>
          <a
            href={contactPhoneHref}
            className="inline-flex rounded-full border border-[#1F3D3B]/20 px-5 py-2.5 text-sm font-semibold text-[#1F3D3B] transition hover:bg-[#1F3D3B] hover:text-white"
          >
            Call Now
          </a>
        </div>
      </SectionWrapper>

      <SectionWrapper className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {contactItems.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-[#1F3D3B]/10 bg-white/90 p-5 shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F4A300]">{item.label}</p>
            {item.href ? (
              <a
                href={item.href}
                className="mt-3 block text-sm font-semibold leading-relaxed text-[#1F3D3B] transition hover:text-[#F4A300] md:text-base"
              >
                {item.value}
              </a>
            ) : (
              <p className="mt-3 text-sm font-semibold leading-relaxed text-[#1F3D3B] md:text-base">{item.value}</p>
            )}
          </div>
        ))}
      </SectionWrapper>

      <SectionWrapper animate={false} className="grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl border border-[#1F3D3B]/10 bg-white/90 p-7 shadow-md">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#F4A300]">Visit us</p>
          <h2 className="mt-2 text-2xl font-semibold text-[#1F3D3B]">GRIHAM Studio Address</h2>
          <address className="mt-4 space-y-4 text-sm not-italic leading-relaxed text-[#1F3D3B]/80">
            <p>{storeAddress}</p>
            <p>
              <span className="font-semibold text-[#1F3D3B]">Phone: </span>
              <a href={contactPhoneHref} className="hover:text-[#F4A300]">
                {contactPhone}
              </a>
            </p>
            <p>
              <span className="font-semibold text-[#1F3D3B]">Email: </span>
              <a href={contactEmailHref} className="hover:text-[#F4A300]">
                {contactEmail}
              </a>
            </p>
          </address>
          <a
            href={mapDirectionsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex rounded-full bg-[#F4A300] px-5 py-2.5 text-sm font-semibold text-[#1F3D3B] transition hover:bg-[#ffb61f]"
          >
            Get Directions
          </a>
        </div>
        <div className="overflow-hidden rounded-3xl border border-[#1F3D3B]/10 bg-white/90 shadow-md">
          <iframe
            title="GRIHAM studio location on Google Maps"
            src={mapEmbedUrl}
            className="h-64 w-full sm:h-80 md:h-full md:min-h-[320px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </SectionWrapper>

      <SectionWrapper className="rounded-3xl border border-[#1F3D3B]/10 bg-[#1F3D3B] p-8 text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#F4A300]">Stay connected</p>
        <h2 className="mt-2 text-2xl font-semibold md:text-3xl">Follow GRIHAM on social media</h2>
        <p className="mt-3 max-w-2xl text-sm text-white/80">
          Get design inspiration, new collection updates, and behind-the-scenes looks from our studio and installations.
        </p>
        <SocialLinks
          links={socialLinks}
          size="lg"
          showLabels
          className="mt-6"
          labelClassName="text-sm text-white/75"
        />
      </SectionWrapper>
    </div>
  );
}
