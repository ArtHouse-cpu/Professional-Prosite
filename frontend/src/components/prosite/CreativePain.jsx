import React from "react";
import { motion } from "framer-motion";

export default function CreativePain() {
  const points = [
    "scattered links",
    "ignored DMs",
    "messy online identity",
    "forgotten by clients",
    "low trust",
    "lost opportunities",
  ];
  return (
    <section data-testid="creative-pain-section" className="relative py-28 sm:py-36">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full radial-purple opacity-60" />
      </div>
      <div className="relative max-w-[1100px] mx-auto px-5 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="font-display text-[36px] sm:text-[56px] lg:text-[72px] leading-[0.95] tracking-tight text-balance"
        >
          Your Creativity Isn't <br className="hidden sm:block" />
          The Problem. <br />
          Your <span className="font-editorial italic text-prosite-neon">Presentation</span> Is.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-8 max-w-2xl text-white/55 font-body text-base sm:text-lg leading-relaxed"
        >
          You may create incredible work. But if your online presence feels scattered, people forget
          you fast. Talent isn't enough anymore — perception decides who gets hired, booked, and
          remembered.
        </motion.p>

        <div className="mt-12 flex flex-wrap gap-2.5">
          {points.map((p, i) => (
            <motion.span
              key={p}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="glass rounded-full px-4 py-1.5 text-[12.5px] text-white/65 font-body capitalize"
            >
              {p}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
