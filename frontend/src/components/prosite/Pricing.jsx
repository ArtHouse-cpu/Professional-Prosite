import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Crown } from "lucide-react";
import { useProsite } from "./PrositeProvider";

const features = [
  "Lifetime Access",
  "Beautiful Prosite",
  "Mobile Apps (iOS + Android)",
  "AI Assistant",
  "Super Inbox",
  "Portfolio Showcase",
  "Sell Products",
  "Sell Courses",
  "Sell Event Tickets",
  "Sell Services",
  "Get Hired/Leads",
  "Insights & Analytics",
  "QR + NFC Sharing",
  "Monetize Network",
];

export default function Pricing() {
  const { openCheckout } = useProsite();
  return (
    <section id="pricing" data-testid="pricing-section" className="relative py-28 sm:py-36">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-[11px] uppercase tracking-[0.22em] text-prosite-neon/80 font-body mb-4">
            Special offer
          </div>
          <h2 className="font-display text-[40px] sm:text-[60px] lg:text-[72px] leading-[0.95] tracking-tight">
            One payment. <br />
            <span className="font-editorial italic text-gradient-luxe">Lifetime identity.</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative max-w-3xl mx-auto"
        >
          <div className="absolute -inset-6 rounded-[3rem] bg-[radial-gradient(60%_60%_at_50%_50%,rgba(37,99,235,0.18),transparent_70%)]" />
          <div className="relative rounded-[2rem] glass-strong p-7 sm:p-10 ring-glow overflow-hidden">
            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full radial-blue" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full radial-purple" />

            <div className="relative flex items-center justify-between mb-6">
              <div className="inline-flex items-center gap-1.5 glass rounded-full px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-amber-200">
                <Crown className="h-3.5 w-3.5" />
                Lifetime Membership
              </div>
              <div className="inline-flex items-center gap-1.5 glass rounded-full px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-emerald-300">
                <Sparkles className="h-3.5 w-3.5" />
                50% Launch Offer
              </div>
            </div>

            <div className="relative flex items-end gap-4 flex-wrap">
              <div className="flex items-baseline gap-3 relative">
                <span className="font-display text-[72px] sm:text-[96px] leading-none tracking-tight text-gradient-luxe relative overflow-hidden">
                  ₹899
                  <motion.span
                    aria-hidden
                    initial={{ x: "-120%" }}
                    whileInView={{ x: "220%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.8, delay: 0.6, ease: "easeOut" }}
                    className="absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/35 to-transparent skew-x-12 pointer-events-none"
                  />
                </span>
                <span className="font-body text-white/40 line-through text-2xl">₹1,798</span>
              </div>
              <div className="text-[12.5px] text-white/55 font-body pb-2">
                one-time · billed once · own it forever
              </div>
            </div>

            <div className="relative mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-2.5 text-[13.5px] text-white/85 font-body">
                  <div className="h-5 w-5 rounded-full bg-prosite-royal/20 flex items-center justify-center">
                    <Check className="h-3 w-3 text-prosite-electric" strokeWidth={2.5} />
                  </div>
                  {f}
                </div>
              ))}
            </div>

            <div className="relative mt-9 flex justify-center sm:justify-end">
              <button
                data-testid="pricing-cta-start-membership"
                onClick={openCheckout}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-7 py-3.5 font-semibold text-[15px] hover:bg-white/95 transition ring-glow"
              >
                Get Prosite →
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
