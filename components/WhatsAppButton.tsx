export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917022970608?text=Hi%20GRIHAM%2C%20I%20want%20a%20free%20consultation."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(37,211,102,0.35)] transition hover:scale-105 hover:bg-[#20bf5a]"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#25D366]">
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .18 5.32.18 11.88c0 2.1.55 4.16 1.6 5.97L0 24l6.33-1.66a11.87 11.87 0 0 0 5.73 1.46h.01c6.56 0 11.88-5.32 11.88-11.88 0-3.17-1.23-6.15-3.43-8.44ZM12.07 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.76.99 1-3.67-.24-.38a9.84 9.84 0 0 1-1.51-5.27c0-5.46 4.44-9.9 9.91-9.9 2.64 0 5.12 1.02 6.99 2.9a9.83 9.83 0 0 1 2.9 7c0 5.46-4.45 9.9-9.9 9.9Zm5.43-7.43c-.3-.15-1.77-.87-2.05-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.24-.45-2.37-1.42-.87-.78-1.47-1.74-1.64-2.03-.17-.3-.02-.45.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.21 5.09 4.5.71.31 1.27.5 1.7.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.69.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
        </svg>
      </span>
      {/* <span className="flex flex-col leading-tight">
        <span>WhatsApp</span>
        <span className="text-xs font-medium text-white/90">+91 7022970608</span>
      </span> */}
    </a>
  );
}
