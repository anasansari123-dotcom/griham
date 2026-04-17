import SectionWrapper from "@/components/SectionWrapper";

const steps = [
  "Share room photos and measurements",
  "Get curated style and material options",
  "Approve budget and timeline",
  "Schedule installation with our experts",
];

export default function BookConsultationPage() {
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
        <form className="rounded-3xl border border-[#1F3D3B]/10 bg-white/90 p-7 shadow-md">
          <h2 className="text-2xl font-semibold">Consultation Request</h2>
          <div className="mt-5 grid gap-4">
            <input className="rounded-xl border border-[#1F3D3B]/20 px-4 py-3 outline-none focus:border-[#F4A300]" placeholder="Full Name" />
            <input className="rounded-xl border border-[#1F3D3B]/20 px-4 py-3 outline-none focus:border-[#F4A300]" placeholder="Phone Number" />
            <input className="rounded-xl border border-[#1F3D3B]/20 px-4 py-3 outline-none focus:border-[#F4A300]" placeholder="Email Address" />
            <input className="rounded-xl border border-[#1F3D3B]/20 px-4 py-3 outline-none focus:border-[#F4A300]" placeholder="City" />
            <textarea
              className="min-h-32 rounded-xl border border-[#1F3D3B]/20 px-4 py-3 outline-none focus:border-[#F4A300]"
              placeholder="Tell us what you need (curtains, sofa, wallpapers, etc.)"
            />
            <button type="button" className="glow-button rounded-full bg-[#F4A300] px-6 py-3 font-semibold text-[#1F3D3B]">
              Submit Request
            </button>
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

      <SectionWrapper className="grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl border border-[#1F3D3B]/10 bg-white/90 p-7 shadow-md">
          <h3 className="text-2xl font-semibold text-[#1F3D3B]">Visit Our Studio</h3>
          <div className="mt-4 space-y-2 text-[#1F3D3B]/80">
            <p>AECS Layout, Brookefield, Bengaluru</p>
            <p>
              <a href="tel:+917022970608" className="hover:text-[#F4A300]">
                +91 7022970608
              </a>
            </p>
            <p>
              <a href="https://www.grihamdecor.in" target="_blank" rel="noreferrer" className="hover:text-[#F4A300]">
                www.grihamdecor.in
              </a>
            </p>
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl border border-[#1F3D3B]/10 shadow-md">
          <iframe
            title="GRIHAM Location Map"
            src="https://maps.google.com/maps?q=AECS%20Layout%20Brookefield%20Bengaluru&t=&z=14&ie=UTF8&iwloc=&output=embed"
            className="h-[320px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </SectionWrapper>
    </div>
  );
}
