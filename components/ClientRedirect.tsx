"use client";

import { useEffect } from "react";

type Props = {
  href: string;
};

export default function ClientRedirect({ href }: Props) {
  useEffect(() => {
    window.location.replace(href);
  }, [href]);

  return (
    <p className="mx-auto max-w-7xl px-6 py-20 text-center text-[#1F3D3B]">
      Redirecting…{" "}
      <a href={href} className="font-semibold text-[#9A6800] underline">
        Continue
      </a>
    </p>
  );
}
