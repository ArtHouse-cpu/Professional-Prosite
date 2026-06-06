import React from "react";
import { motion } from "framer-motion";

export default function Fomo() {
  return (
    <section data-testid="fomo-section" className="relative py-36 sm:py-48 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_50%,rgba(37,99,235,0.18)_0%,rgba(5,5,10,0)_70%)]" />
      <div className="absolute inset-0 grain pointer-events-none" />
      <div className="relative max-w-[1100px] mx-auto px-5 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 glass rounded-full px-3.5 py-1.5 text-[11px] uppercase tracking-[0.2em] text-white/65 font-body mb-8"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400 pulse-dot" />
          The Next Decade of Creative Identity
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="font-display text-[40px] sm:text-[68px] lg:text-[88px] leading-[0.92] tracking-tight text-balance"
        >
          The creators building their <span className="font-editorial italic text-prosite-neon">identity</span> today
          <br />
          will own <span className="text-gradient-luxe">attention</span> tomorrow.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-8 max-w-2xl mx-auto text-white/55 font-body text-base sm:text-lg leading-relaxed"
        >
          Most creatives still look scattered online. The ones building memorable professional
          identities now will quietly dominate opportunities, clients, and culture for years.
        </motion.p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          <div className="rounded-3xl glass p-6 sm:p-8 text-left">
            <div className="text-[10.5px] uppercase tracking-[0.22em] text-red-300/80 mb-3">Invisible Creator</div>
            <div className="font-display text-2xl text-white/65 leading-tight">Forgotten between scroll sessions.</div>
            <div className="mt-4 text-[12.5px] text-white/40 font-body">
              Talented. Talented elsewhere. Still untracked.
            </div>
          </div>
          <div className="rounded-3xl glass p-6 sm:p-8 text-left ring-glow relative overflow-hidden">
            <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full radial-blue" />
            <div className="relative text-[10.5px] uppercase tracking-[0.22em] text-emerald-300/90 mb-3">
              Admired Modern Creator
            </div>
            <div className="relative font-display text-2xl leading-tight">
              Owns a name people quote.
            </div>
            <div className="relative mt-4 text-[12.5px] text-white/60 font-body">
              One link. Trust at first tap.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
