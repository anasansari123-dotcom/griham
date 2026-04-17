"use client";

import { motion } from "framer-motion";

const leaves = Array.from({ length: 6 });

export default function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#FAF9F6]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(244,163,0,.2),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(127,183,126,.22),transparent_30%),radial-gradient(circle_at_70%_80%,rgba(31,61,59,.14),transparent_35%)]" />

      <motion.div
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-10 top-12 h-60 w-60 rounded-full bg-[#F4A300]/25 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -80, 0], y: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-0 top-20 h-56 w-56 rounded-full bg-[#7FB77E]/25 blur-3xl"
      />

      <svg className="absolute inset-0 h-full w-full opacity-[0.06] text-[#1F3D3B]">
        <pattern id="house-pattern" x="0" y="0" width="140" height="140" patternUnits="userSpaceOnUse">
          <path d="M25 90 L70 50 L115 90" fill="none" stroke="currentColor" strokeWidth="2" />
          <rect x="40" y="90" width="60" height="38" fill="none" stroke="currentColor" strokeWidth="2" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#house-pattern)" />
      </svg>

      {leaves.map((_, idx) => (
        <motion.svg
          key={idx}
          viewBox="0 0 32 32"
          className="absolute h-6 w-6 text-[#7FB77E]/40"
          style={{ left: `${12 + idx * 15}%`, top: `${15 + (idx % 3) * 20}%` }}
          animate={{ y: [0, -24, 0], rotate: [0, 8, -8, 0] }}
          transition={{ duration: 8 + idx, repeat: Infinity, ease: "easeInOut" }}
        >
          <path fill="currentColor" d="M16 2c7 3 12 11 12 17 0 7-5 11-12 11S4 26 4 19C4 13 9 5 16 2zm0 4c-3 3-6 8-6 12 0 4 2 6 6 6s6-2 6-6c0-4-3-9-6-12z" />
        </motion.svg>
      ))}
    </div>
  );
}
