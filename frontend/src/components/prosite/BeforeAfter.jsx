import React from "react";
import { motion } from "framer-motion";
import { TrendingDown, TrendingUp } from "lucide-react";

const without = [
  "Struggling for inquiries",
  "Inconsistent clients",
  "DMs ignored",
  "Weak online identity",
  "Hard to explain work",
  "Low confidence",
];
const withProsite = [
  "Premium professional presence",
  "Higher client trust",
  "More inquiries & bookings",
  "Product & course sales",
  "Collaboration requests",
  "Quietly admired",
];

export default function BeforeAfter({ creatorImg }) {
  return (
    <section data-testid="before-after-section" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-[11px] uppercase tracking-[0.22em] text-prosite-neon/80 font-body mb-4">
            The Transformation
          </div>
          <h2 className="font-display text-[40px] sm:text-[64px] lg:text-[80px] leading-[0.92] tracking-tight">
            Same Talent. <br />
            <span className="font-editorial italic text-gradient-luxe">Different Perception.</span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Without */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 rounded-3xl glass p-7 sm:p-9 relative overflow-hidden"
          >
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-red-300/80 mb-5">
              <TrendingDown className="h-3.5 w-3.5" />
              Without Prosite
            </div>
            <div className="font-display text-2xl sm:text-3xl mb-5 text-white/85">
              Invisible to the right people.
            </div>
            <ul className="space-y-2.5">
              {without.map((t) => (
                <li key={t} className="flex items-start gap-3 text-[14px] text-white/55 font-body">
                  <span className="mt-2 h-1 w-3 bg-red-400/70 rounded-full" />
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Portrait — bridge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="lg:col-span-2 relative rounded-3xl overflow-hidden glass min-h-[260px]"
          >
            <img src={creatorImg} alt="Creator" className="absolute inset-0 h-full w-full object-cover opacity-90" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
            <div className="absolute bottom-3 left-3 right-3 text-center">
              <div className="font-editorial italic text-white text-lg">Mira Patel</div>
              <div className="text-[10.5px] uppercase tracking-[0.2em] text-white/60">Photographer</div>
            </div>
          </motion.div>

          {/* With */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-5 rounded-3xl glass p-7 sm:p-9 relative overflow-hidden ring-glow"
          >
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full radial-blue" />
            <div className="relative flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-emerald-300/90 mb-5">
              <TrendingUp className="h-3.5 w-3.5" />
              With Prosite
            </div>
            <div className="relative font-display text-2xl sm:text-3xl mb-5">
              Quietly admired everywhere.
            </div>
            <ul className="relative space-y-2.5">
              {withProsite.map((t) => (
                <li key={t} className="flex items-start gap-3 text-[14px] text-white font-body">
                  <span className="mt-2 h-1 w-3 bg-gradient-to-r from-prosite-royal to-prosite-purple rounded-full" />
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
