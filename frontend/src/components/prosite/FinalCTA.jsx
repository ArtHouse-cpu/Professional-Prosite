import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useProsite } from "./PrositeProvider";

export default function FinalCTA() {
  const { openCheckout } = useProsite();
  return (
    <section data-testid="final-cta-section" className="relative py-36 sm:py-48 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[900px] rounded-full radial-blue" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full radial-purple" />
      </div>
      <div className="absolute inset-0 grain pointer-events-none" />

      <div className="relative max-w-[1100px] mx-auto px-5 sm:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="font-display text-[44px] sm:text-[72px] lg:text-[96px] leading-[0.92] tracking-tight text-balance"
        >
          Your Creativity Deserves <br />
          A <span className="font-editorial italic text-gradient-luxe">Better Home.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-8 max-w-2xl mx-auto text-white/60 font-body text-base sm:text-lg leading-relaxed"
        >
          Build a professional identity people admire, clients trust, and opportunities remember.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-12"
        >
          <button
            data-testid="final-cta-start-membership"
            onClick={openCheckout}
            className="group relative inline-flex items-center gap-3 rounded-full bg-white text-black px-10 py-5 font-semibold text-[17px] hover:bg-white/95 transition ring-glow"
          >
            <span>Get Prosite</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            <span className="absolute -inset-3 rounded-full bg-prosite-royal/40 blur-3xl -z-10" />
          </button>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11.5px] uppercase tracking-[0.18em] text-white/40">
            <span>One-time payment</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>Lifetime access</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>No coding</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>Built for creatives</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
