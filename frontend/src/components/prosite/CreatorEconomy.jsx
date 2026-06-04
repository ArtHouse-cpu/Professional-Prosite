import React from "react";
import { motion } from "framer-motion";
import { Users, Coins, Fingerprint, Compass, Crown } from "lucide-react";

const pillars = [
  { icon: Users, title: "Audience Ownership", sub: "Your community belongs to you — not algorithms." },
  { icon: Coins, title: "Direct Monetization", sub: "Sell directly. Keep more. Skip the middlemen." },
  { icon: Fingerprint, title: "Identity", sub: "A signature presence that feels unmistakably you." },
  { icon: Compass, title: "Discoverability", sub: "One link clients, brands, and curators can find." },
  { icon: Crown, title: "Independence", sub: "Build a career on your terms, not a platform's." },
];

export default function CreatorEconomy() {
  return (
    <section data-testid="creator-economy-section" className="relative py-28 sm:py-36">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <div className="text-[11px] uppercase tracking-[0.22em] text-white/45 font-body mb-4">
            The New Creative Economy
          </div>
          <h2 className="font-display text-[36px] sm:text-[56px] lg:text-[68px] leading-[0.95] tracking-tight">
            Modern Creators Need <br />
            More Than <span className="font-editorial italic text-gradient-luxe">Portfolios.</span>
          </h2>
          <p className="mt-6 text-white/55 font-body text-base leading-relaxed max-w-2xl">
            Your audience should belong to you — not the next algorithm change. Prosite is built for
            the creators rewriting how creative careers work.
          </p>
        </div>

        <div className="mt-10 sm:mt-14 grid grid-cols-2 md:grid-cols-12 gap-3 sm:gap-4">
          {pillars.map(({ icon: Icon, title, sub }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className={`relative rounded-2xl md:rounded-3xl glass p-4 md:p-7 overflow-hidden col-span-1 ${
                i === 0 ? "md:col-span-5" : i === 1 ? "md:col-span-7" : i === 2 ? "md:col-span-4" : i === 3 ? "md:col-span-4" : "md:col-span-4"
              }`}
            >
              <div className="absolute -top-16 -right-16 h-32 w-32 md:h-48 md:w-48 rounded-full radial-blue opacity-60" />
              <div className="relative h-8 w-8 md:h-10 md:w-10 rounded-[10px] md:rounded-xl glass-strong flex items-center justify-center mb-3 md:mb-5">
                <Icon className="h-4 w-4 md:h-[18px] md:w-[18px] text-prosite-electric shrink-0" strokeWidth={1.6} />
              </div>
              <div className="relative font-display text-[15px] md:text-[22px] leading-tight mb-1.5 md:mb-2 pr-2">{title}</div>
              <div className="relative text-[11px] md:text-[13.5px] text-white/55 font-body leading-relaxed">{sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
