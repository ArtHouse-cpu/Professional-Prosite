import React from "react";
import { motion } from "framer-motion";
import {
  LayoutGrid,
  Sparkles,
  Brain,
  Eye,
  Phone,
  ShieldCheck,
  Award,
  Heart,
} from "lucide-react";

const cards = [
  { icon: LayoutGrid, title: "Everything In One Place", sub: "Portfolio, services, products, contact." },
  { icon: ShieldCheck, title: "100% Authentic", sub: "Identity verified with Govt.ID" },
  { icon: Brain, title: "Easy To Remember", sub: "One name. One link. Lifetime." },
  { icon: Eye, title: "Shows Real Work", sub: "Galleries, reels, case studies, reviews." },
  { icon: Phone, title: "Easier To Contact", sub: "Email, Whatsapp, Calls, DMs all built in." },
  { icon: Sparkles, title: "More Professional", sub: "Trust without saying a single word." },
  { icon: Award, title: "Strong Personal Brand", sub: "An identity people respect and recall." },
  { icon: Heart, title: "Easier To Hire", sub: "Decision-makers approve faster." },
];

const Card = ({ icon: Icon, title, sub }) => (
  <div className="group relative rounded-xl sm:rounded-2xl glass p-3.5 sm:p-5 hover:bg-white/[0.05] transition-colors overflow-hidden w-[160px] sm:w-[280px] shrink-0">
    <div className="absolute -inset-px rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
         style={{ background: "radial-gradient(160px circle at 30% 0%, rgba(168,85,247,0.18), transparent 70%)" }} />
    <div className="relative h-7 w-7 sm:h-10 sm:w-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-prosite-royal/20 to-prosite-purple/20 flex items-center justify-center mb-3 sm:mb-5 transition-transform duration-500 group-hover:scale-110">
      <Icon className="h-3.5 w-3.5 sm:h-4.5 sm:w-4.5 text-white" strokeWidth={1.6} />
    </div>
    <div className="relative font-display text-[14px] sm:text-[18px] leading-tight mb-1 sm:mb-1.5">{title}</div>
    <div className="relative text-[10px] sm:text-[13px] text-white/55 font-body leading-relaxed">{sub}</div>
    <div className="absolute inset-0 rounded-xl sm:rounded-2xl ring-1 ring-inset ring-prosite-royal/0 group-hover:ring-prosite-royal/30 transition" />
  </div>
);

const MarqueeRow = ({ items, reverse = false, speed = 35 }) => {
  return (
    <div className="flex w-full overflow-hidden group">
      <motion.div
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: speed, repeat: Infinity }}
        className="flex gap-3 sm:gap-4 w-max"
      >
        {/* Duplicate items for seamless infinite scroll */}
        {[...items, ...items].map((card, i) => (
          <Card key={i} {...card} />
        ))}
      </motion.div>
    </div>
  );
};

export default function WhyClients() {
  const row1 = cards.slice(0, 4);
  const row2 = cards.slice(4, 8);

  return (
    <section data-testid="why-clients-section" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 mb-10 sm:mb-16">
        <div className="max-w-3xl">
          <div className="text-[11px] uppercase tracking-[0.22em] text-white/45 font-body mb-4">
            Client Psychology
          </div>
          <h2 className="font-display text-[32px] sm:text-[56px] lg:text-[64px] leading-[1] tracking-tight">
            Why Clients <span className="font-editorial italic text-prosite-neon">Trust</span> Prosites Faster
          </h2>
        </div>
      </div>

      {/* Marquee Rows */}
      <div className="flex flex-col gap-3 sm:gap-4 w-full relative">
        {/* Subtle edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-prosite-bg to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-prosite-bg to-transparent z-10" />
        
        <MarqueeRow items={row1} speed={40} />
        <MarqueeRow items={row2} speed={45} reverse={true} />
      </div>
    </section>
  );
}
