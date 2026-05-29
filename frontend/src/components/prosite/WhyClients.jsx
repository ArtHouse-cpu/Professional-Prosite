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
  { icon: Sparkles, title: "Looks Premium", sub: "Cinematic dark UI clients screenshot." },
  { icon: Brain, title: "Easy To Remember", sub: "One name. One link. Lifetime." },
  { icon: Eye, title: "Shows Real Work", sub: "Galleries, reels, case studies, reviews." },
  { icon: Phone, title: "Easier To Contact", sub: "Booking, DMs, payments — all built-in." },
  { icon: ShieldCheck, title: "More Professional", sub: "Trust without saying a single word." },
  { icon: Award, title: "Strong Personal Brand", sub: "An identity people respect and recall." },
  { icon: Heart, title: "Easier To Hire", sub: "Decision-makers approve faster." },
];

export default function WhyClients() {
  return (
    <section data-testid="why-clients-section" className="relative py-24 sm:py-32">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <div className="text-[11px] uppercase tracking-[0.22em] text-white/45 font-body mb-4">
            Client Psychology
          </div>
          <h2 className="font-display text-[36px] sm:text-[56px] lg:text-[64px] leading-[0.95] tracking-tight">
            Why Clients <span className="font-editorial italic text-prosite-neon">Trust</span> Prosites Faster
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map(({ icon: Icon, title, sub }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl glass p-5 hover:bg-white/[0.05] transition-colors overflow-hidden"
            >
              <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                   style={{ background: "radial-gradient(160px circle at 30% 0%, rgba(168,85,247,0.18), transparent 70%)" }} />
              <div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-prosite-royal/20 to-prosite-purple/20 flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110">
                <Icon className="h-4.5 w-4.5 text-white" strokeWidth={1.6} />
              </div>
              <div className="relative font-display text-[18px] leading-tight mb-1.5">{title}</div>
              <div className="relative text-[13px] text-white/55 font-body leading-relaxed">{sub}</div>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-prosite-royal/0 group-hover:ring-prosite-royal/30 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
