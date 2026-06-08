"use client";

import { motion } from "framer-motion";

const processSteps = [
  {
    title: "Measurement",
    body: "We take accurate window and door measurements for drop, width, and fullness—so your curtains hang with the right fall and coverage.",
  },
  {
    title: "Fabric selection",
    body: "Choose from premium fabrics based on light control, privacy, texture, and how formal or relaxed you want the room to feel.",
  },
  {
    title: "Design consultation",
    body: "Our team helps you match colours, prints, and layering with your walls, furniture, and overall interior style.",
  },
  {
    title: "Order placement",
    body: "Once you approve fabric, style, and timeline, we confirm your order with clear pricing and production schedule.",
  },
  {
    title: "Tracks / Rods fitting",
    body: "Curtain tracks or rods are installed with proper alignment and smooth operation, ready for your new drapes.",
  },
  {
    title: "Curtains delivery",
    body: "Finished curtains are delivered and fitted with neat pleating and finishing for a complete, polished look.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function CurtainProcessSteps() {
  return (
    <div className="relative mt-6">
      <div
        className="pointer-events-none absolute left-0 right-0 top-[2.75rem] hidden h-0.5 bg-gradient-to-r from-transparent via-[#F4A300]/25 to-transparent lg:block"
        aria-hidden
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {processSteps.map((step, index) => (
          <motion.article
            key={step.title}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            className="group relative overflow-hidden rounded-2xl border border-[#1F3D3B]/10 bg-[#FAF9F6] p-5 shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-[#F4A300]/45 hover:shadow-lg hover:shadow-[#F4A300]/15"
          >
            <div
              className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#F4A300]/0 transition-all duration-500 group-hover:bg-[#F4A300]/10"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#F4A300] to-[#ffb61f] transition-transform duration-500 group-hover:scale-x-100"
              aria-hidden
            />

            <div className="relative flex items-start gap-4">
              <motion.div
                className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#1F3D3B] text-sm font-bold text-[#F4A300] shadow-md transition-colors duration-300 group-hover:bg-[#F4A300] group-hover:text-[#1F3D3B] group-hover:shadow-[#F4A300]/30"
                whileHover={{ scale: 1.08, rotate: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
              >
                <span className="relative z-10">{index + 1}</span>
                <span className="absolute inset-0 rounded-2xl ring-2 ring-[#F4A300]/0 transition-all duration-300 group-hover:ring-[#F4A300]/50" />
              </motion.div>

              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F4A300] transition-transform duration-300 group-hover:translate-x-0.5">
                  Step {index + 1}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-[#1F3D3B] transition-colors duration-300 group-hover:text-[#163230]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#1F3D3B]/75 transition-colors duration-300 group-hover:text-[#1F3D3B]/90">
                  {step.body}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
