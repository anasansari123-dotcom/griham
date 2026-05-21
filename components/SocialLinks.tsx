import type { ReactNode } from "react";
import type { SocialLink } from "@/lib/siteData";
import { socialLinks } from "@/lib/siteData";

type Props = {
  links?: SocialLink[];
  size?: "sm" | "md" | "lg";
  className?: string;
  showLabels?: boolean;
  labelClassName?: string;
};

const iconPaths: Record<SocialLink["icon"], ReactNode> = {
  instagram: (
    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 4.5A5.5 5.5 0 1 0 17.5 12 5.5 5.5 0 0 0 12 6.5Zm0 2A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5Zm5.75-6.2a1.25 1.25 0 1 0 1.25 1.25 1.25 1.25 0 0 0-1.25-1.25Z" />
  ),
  facebook: (
    <path d="M14 3h-4a5 5 0 0 0-5 5v3H3v4h2v9h5v-9h3.1L14 11h-4V8.2A1.2 1.2 0 0 1 11.2 7H14V3Z" />
  ),
  whatsapp: (
    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .18 5.32.18 11.88c0 2.1.55 4.16 1.6 5.97L0 24l6.33-1.66a11.87 11.87 0 0 0 5.73 1.46h.01c6.56 0 11.88-5.32 11.88-11.88 0-3.17-1.23-6.15-3.43-8.44ZM12.07 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.76.99 1-3.67-.24-.38a9.84 9.84 0 0 1-1.51-5.27c0-5.46 4.44-9.9 9.91-9.9 2.64 0 5.12 1.02 6.99 2.9a9.83 9.83 0 0 1 2.9 7c0 5.46-4.45 9.9-9.9 9.9Zm5.43-7.43c-.3-.15-1.77-.87-2.05-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.24-.45-2.37-1.42-.87-.78-1.47-1.74-1.64-2.03-.17-.3-.02-.45.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.21 5.09 4.5.71.31 1.27.5 1.7.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.69.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
  ),
};

const sizeClasses = {
  sm: "h-10 w-10 [&_svg]:h-4 [&_svg]:w-4",
  md: "h-12 w-12 [&_svg]:h-5 [&_svg]:w-5",
  lg: "h-14 w-14 [&_svg]:h-6 [&_svg]:w-6",
};

const iconButtonClass =
  "inline-flex shrink-0 items-center justify-center rounded-full border border-[#1F3D3B]/15 bg-white text-[#1F3D3B] shadow-sm transition group-hover:-translate-y-0.5 group-hover:border-[#F4A300]/50 group-hover:bg-[#F4A300]/10";

export default function SocialLinks({
  links = socialLinks,
  size = "md",
  className = "",
  showLabels = false,
  labelClassName = "text-sm text-[#1F3D3B]/75",
}: Props) {
  if (showLabels) {
    return (
      <div className={`flex flex-wrap items-start gap-8 sm:gap-10 ${className}`}>
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Follow GRIHAM on ${link.name}`}
            className="group flex w-[4.5rem] flex-col items-center gap-2.5 text-center sm:w-20"
          >
            <span className={`${iconButtonClass} ${sizeClasses[size]}`}>
              <svg viewBox="0 0 24 24" className="fill-current" aria-hidden="true">
                {iconPaths[link.icon]}
              </svg>
            </span>
            <span className={`w-full text-center leading-tight transition group-hover:text-[#F4A300] ${labelClassName}`}>
              {link.name}
            </span>
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Follow GRIHAM on ${link.name}`}
          title={link.name}
          className={`${iconButtonClass} hover:-translate-y-0.5 hover:border-[#F4A300]/50 hover:bg-[#F4A300]/10 ${sizeClasses[size]}`}
        >
          <svg viewBox="0 0 24 24" className="fill-current" aria-hidden="true">
            {iconPaths[link.icon]}
          </svg>
        </a>
      ))}
    </div>
  );
}
