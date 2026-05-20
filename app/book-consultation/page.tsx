"use client";

import SectionWrapper from "@/components/SectionWrapper";
import { FormEvent, useMemo, useState } from "react";

const steps = [
  "Share room photos and measurements",
  "Get curated style and material options",
  "Approve budget and timeline",
  "Schedule installation with our experts",
];

const storeAddress =
  "534 Shop 2 1st Cross A E C S B Block, Kundalahalli Main Rd, AECS Layout - C Block, AECS Layout, Brookefield, Bengaluru, Karnataka 560037";

const mapQuery = encodeURIComponent(storeAddress);
const mapEmbedUrl = `https://maps.google.com/maps?q=${mapQuery}&hl=en&z=16&output=embed`;
const mapDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

export default function BookConsultationPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    requirement: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const isValid = useMemo(() => {
    return (
      formData.fullName.trim().length >= 2 &&
      /^\+?[0-9\s-]{10,15}$/.test(formData.phone.trim()) &&
      /\S+@\S+\.\S+/.test(formData.email.trim()) &&
      formData.city.trim().length >= 2 &&
      formData.requirement.trim().length >= 8
    );
  }, [formData]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nextErrors: Record<string, string> = {};

    if (formData.fullName.trim().length < 2) nextErrors.fullName = "Please enter your full name.";
    if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone.trim())) nextErrors.phone = "Please enter a valid phone number.";
    if (!/\S+@\S+\.\S+/.test(formData.email.trim())) nextErrors.email = "Please enter a valid email.";
    if (formData.city.trim().length < 2) nextErrors.city = "Please enter your city.";
    if (formData.requirement.trim().length < 8) nextErrors.requirement = "Please share a few more details.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const message = [
      "New Consultation Request",
      `Name: ${formData.fullName}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email}`,
      `City: ${formData.city}`,
      `Requirement: ${formData.requirement}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/917022970608?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  const fieldClassName =
    "rounded-xl border border-[#1F3D3B]/20 px-4 py-3 outline-none transition focus:border-[#F4A300] focus:ring-2 focus:ring-[#F4A300]/20";

  return (
    <div className="mx-auto max-w-7xl space-y-10 px-6 py-14">
      <SectionWrapper className="rounded-3xl border border-[#1F3D3B]/10 bg-white/85 p-8 shadow-lg">
        <p className="text-xs uppercase tracking-[0.3em] text-[#F4A300]">Free expert support</p>
        <h1 className="mt-3 text-4xl font-bold text-[#1F3D3B]">Book Free Consultation</h1>
        <p className="mt-3 max-w-2xl text-[#1F3D3B]/75">
          Tell us about your space and style goals. Our GRIHAM designers will guide you with premium, eco-friendly decor recommendations.
        </p>
      </SectionWrapper>

      <SectionWrapper className="grid gap-8 md:grid-cols-2">
        <form onSubmit={handleSubmit} className="rounded-3xl border border-[#1F3D3B]/10 bg-white/90 p-7 shadow-md">
          <h2 className="text-2xl font-semibold">Consultation Request</h2>
          <div className="mt-5 grid gap-4">
            <input
              className={fieldClassName}
              placeholder="Full Name"
              value={formData.fullName}
              onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
            />
            {errors.fullName ? <p className="-mt-2 text-xs text-red-600">{errors.fullName}</p> : null}
            <input
              className={fieldClassName}
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
            />
            {errors.phone ? <p className="-mt-2 text-xs text-red-600">{errors.phone}</p> : null}
            <input
              className={fieldClassName}
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
            />
            {errors.email ? <p className="-mt-2 text-xs text-red-600">{errors.email}</p> : null}
            <input
              className={fieldClassName}
              placeholder="City"
              value={formData.city}
              onChange={(e) => setFormData((prev) => ({ ...prev, city: e.target.value }))}
            />
            {errors.city ? <p className="-mt-2 text-xs text-red-600">{errors.city}</p> : null}
            <textarea
              className={`${fieldClassName} min-h-32`}
              placeholder="Tell us what you need (curtains, sofa, wallpapers, etc.)"
              value={formData.requirement}
              onChange={(e) => setFormData((prev) => ({ ...prev, requirement: e.target.value }))}
            />
            {errors.requirement ? <p className="-mt-2 text-xs text-red-600">{errors.requirement}</p> : null}
            <button
              type="submit"
              disabled={!isValid}
              className="glow-button rounded-full bg-[#F4A300] px-6 py-3 font-semibold text-[#1F3D3B] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Submit on WhatsApp
            </button>
            {submitted ? <p className="text-sm text-emerald-700">Request prepared. WhatsApp chat has been opened.</p> : null}
          </div>
        </form>

        <div className="space-y-5 rounded-3xl border border-[#1F3D3B]/10 bg-[#1F3D3B] p-7 text-white shadow-md">
          <h3 className="text-2xl font-semibold">What happens next</h3>
          {steps.map((step, index) => (
            <div key={step} className="rounded-xl border border-white/20 bg-white/10 p-4">
              <p className="text-xs uppercase tracking-widest text-[#F4A300]">Step {index + 1}</p>
              <p className="mt-1">{step}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper animate={false} className="grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl border border-[#1F3D3B]/10 bg-white/90 p-7 shadow-md">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#F4A300]">Visit us</p>
          <h3 className="mt-2 text-2xl font-semibold text-[#1F3D3B]">GRIHAM Studio Address</h3>
          <address className="mt-4 space-y-3 text-sm not-italic leading-relaxed text-[#1F3D3B]/80">
            <p>{storeAddress}</p>
            <p>
              <a href="tel:+917022970608" className="font-semibold text-[#1F3D3B] hover:text-[#F4A300]">
                +91 7022970608
              </a>
            </p>
            <p>
              <a href="https://www.grihamdecor.in" target="_blank" rel="noreferrer" className="hover:text-[#F4A300]">
                www.grihamdecor.in
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
    </div>
  );
}
