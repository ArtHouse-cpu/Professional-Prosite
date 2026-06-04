import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bell,
  Mail,
  ShoppingBag,
  GraduationCap,
  Calendar,
  Users,
  Sparkles,
  Play,
  Link2,
  Hash,
  Folder,
  FileText,
} from "lucide-react";
import { useProsite } from "./PrositeProvider";

const Notif = ({ icon: Icon, title, sub, accent = "blue", className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 10, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    className={`glass-strong rounded-xl sm:rounded-2xl px-2.5 py-2 sm:px-3.5 sm:py-2.5 flex items-center gap-2 sm:gap-3 w-[180px] sm:w-auto sm:min-w-[210px] shadow-lg backdrop-blur-md border border-white/10 ${className}`}
  >
    <div
      className={`h-7 w-7 sm:h-8 sm:w-8 shrink-0 rounded-lg sm:rounded-xl flex items-center justify-center ${
        accent === "purple"
          ? "bg-prosite-purple/15 text-prosite-neon"
          : accent === "gold"
          ? "bg-amber-500/15 text-amber-300"
          : "bg-prosite-royal/15 text-prosite-electric"
      }`}
    >
      <Icon className="h-3 w-3 sm:h-4 sm:w-4" />
    </div>
    <div className="leading-tight overflow-hidden">
      <div className="text-[10px] sm:text-[12px] font-semibold text-white truncate">{title}</div>
      <div className="text-[9px] sm:text-[10.5px] text-white/55 truncate mt-0.5">{sub}</div>
    </div>
  </motion.div>
);

const ChaosChip = ({ icon: Icon, label, rot, x, y, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.7, rotate: rot - 15 }}
    animate={{ opacity: 1, scale: 1, rotate: rot }}
    transition={{ delay, duration: 0.7, ease: "easeOut" }}
    style={{ left: x, top: y }}
    className="absolute glass rounded-xl px-3 py-2 flex items-center gap-2 shadow-2xl"
  >
    <motion.div
      animate={{ y: [0, -6, 0, 4, 0] }}
      transition={{ duration: 6 + delay * 3, repeat: Infinity, ease: "easeInOut" }}
      className="flex items-center gap-2"
    >
      <Icon className="h-3.5 w-3.5 text-white/70" />
      <span className="text-[11px] text-white/80 font-medium whitespace-nowrap">{label}</span>
    </motion.div>
  </motion.div>
);

export default function Hero({ chaoticImg, deviceImg }) {
  const { openCheckout, openDemo } = useProsite();

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden"
    >
      {/* Ambient cinematic lighting */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full radial-blue" />
        <div className="absolute top-20 -right-40 h-[700px] w-[700px] rounded-full radial-purple" />
        <div className="absolute inset-0 grain" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-7"
        >
          <div className="glass rounded-full px-3.5 py-1.5 flex items-center gap-2 text-[11.5px] text-white/75 font-body">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 pulse-dot" />
            <span className="tracking-wide uppercase">Special Offer · 50% off Lifetime</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-center text-[44px] sm:text-[64px] lg:text-[88px] leading-[0.92] tracking-tight text-balance"
        >
          <span className="text-gradient-luxe">One Link.</span>
          <br />
          <span className="text-white">Your Entire </span>
          <span className="font-editorial italic text-prosite-neon">Creative</span>
          <span className="text-white"> Identity.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-7 max-w-2xl mx-auto text-center text-white/60 text-base sm:text-lg font-body leading-relaxed"
        >
          Stop sending scattered links. Build one beautiful professional home for your creativity,
          services, products, audience, and opportunities.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <button
            data-testid="hero-cta-start-membership"
            onClick={openCheckout}
            className="group relative inline-flex items-center gap-2.5 rounded-full bg-white text-black px-7 py-3.5 font-semibold text-[15px] hover:bg-white/95 transition-all ring-glow"
          >
            <span>Get Prosite</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            <span className="absolute -inset-1 rounded-full bg-prosite-royal/30 blur-2xl -z-10 opacity-70" />
          </button>
        
        </motion.div>

        {/* Trust row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-7 flex items-center justify-center gap-x-2.5 sm:gap-x-7 text-[8.5px] sm:text-[11.5px] uppercase tracking-[0.12em] sm:tracking-[0.18em] text-white/40 whitespace-nowrap"
        >
          <span>10k+ joined</span>
          <span className="h-1 w-1 rounded-full bg-white/20" />
          <span>Lifetime Access</span>
          <span className="h-1 w-1 rounded-full bg-white/20" />
          <span>Mobile Apps</span>
          <span className="h-1 w-1 rounded-full bg-white/20" />
          <span>Built for Creatives</span>
        </motion.div>

        {/* Split storytelling: chaos vs Prosite */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Chaos side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden h-[440px] sm:h-[520px] glass">
              <img
                src={chaoticImg}
                alt="Scattered messy links"
                className="absolute inset-0 h-full w-full object-cover opacity-60 mix-blend-screen"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/70" />

              {/* Floating chaos chips */}
              <ChaosChip icon={Hash} label="Instagram" rot={-7} x="6%" y="18%" delay={0.2} />
              <ChaosChip icon={Folder} label="Drive folder #4" rot={5} x="55%" y="10%" delay={0.35} />
              <ChaosChip icon={FileText} label="Portfolio_v3.pdf" rot={-3} x="14%" y="46%" delay={0.5} />
              <ChaosChip icon={Link2} label="bit.ly/p0rt-89x" rot={8} x="58%" y="58%" delay={0.65} />
              <ChaosChip icon={Folder} label="Behance" rot={-6} x="10%" y="74%" delay={0.8} />
              <ChaosChip icon={Hash} label="Dropbox / Old" rot={4} x="56%" y="80%" delay={0.95} />

              {/* Label */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                <div className="glass-strong rounded-full px-3 py-1.5 text-[10.5px] uppercase tracking-[0.18em] text-red-300/90">
                  Scattered · Forgotten
                </div>
              </div>
              <div className="absolute bottom-5 left-5 right-5">
                <div className="font-display text-2xl sm:text-3xl leading-tight text-white/85">
                  Your work, lost across 10 places.
                </div>
                <div className="mt-1 text-[12.5px] text-white/50 font-body">
                  Tabs, PDFs, broken links, ignored DMs.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Prosite side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="lg:col-span-7 relative"
          >
            <div className="relative rounded-3xl overflow-hidden h-[360px] sm:h-[520px] glass ring-glow">
              {/* Glow backlight */}
              <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] sm:h-[420px] w-[300px] sm:w-[420px] rounded-full radial-blue" />
                <div className="absolute bottom-0 right-0 h-[200px] sm:h-[260px] w-[200px] sm:w-[260px] rounded-full radial-purple" />
              </div>

              {/* Custom CSS Mockups to replace full image */}
              <div className="absolute inset-0 flex items-center justify-center pt-8 sm:pt-12 overflow-hidden">
                {/* Desktop Mockup */}
                <div className="relative w-[85%] sm:w-[75%] aspect-[16/10] rounded-md sm:rounded-xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#0A0A12] -translate-x-2 sm:-translate-x-8 -translate-y-4 sm:-translate-y-6">
                  <div className="h-4 sm:h-6 bg-[#1A1A24] border-b border-white/5 flex items-center px-2 gap-1.5 shrink-0">
                    <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-red-500/80" />
                    <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-amber-500/80" />
                    <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-green-500/80" />
                  </div>
                  <img
                    src={deviceImg}
                    alt="Prosite Desktop"
                    className="w-full h-[calc(100%-16px)] sm:h-[calc(100%-24px)] object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
                
                {/* Mobile Mockup */}
                <div className="absolute right-[5%] sm:right-[15%] top-[15%] sm:top-[25%] w-[25%] sm:w-[20%] aspect-[9/19] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden border-4 sm:border-[6px] border-[#1A1A24] shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-black ring-1 ring-white/10">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-4 sm:h-5 bg-[#1A1A24] rounded-b-xl z-10" />
                  <img
                    src={deviceImg}
                    alt="Prosite Mobile"
                    className="w-full h-full object-cover object-left scale-150 sm:scale-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating notifications */}
              <div className="absolute top-4 sm:top-6 right-3 sm:right-6 flex flex-col gap-2 scale-90 sm:scale-100 origin-top-right">
                <Notif icon={Mail} title="New Inquiry" sub="Brand identity · ₹85k" delay={0.2} className="-translate-x-4 sm:-translate-x-8" />
                <Notif icon={ShoppingBag} title="Product Sold" sub="Presets pack · ₹1,499" accent="purple" delay={0.4} className="-translate-x-1 sm:-translate-x-3" />
                <Notif icon={Calendar} title="Event Booked" sub="Studio day · seat #14" accent="gold" delay={0.6} />
              </div>
              <div className="absolute bottom-4 sm:bottom-6 left-3 sm:left-6 flex flex-col gap-2 scale-90 sm:scale-100 origin-bottom-left z-20">
                <Notif icon={GraduationCap} title="Course Purchase" sub="Photography 101" accent="purple" delay={0.8} />
                <Notif icon={Users} title="Collab Request" sub="Studio Mira · Mumbai" delay={1} className="translate-x-2 sm:translate-x-4" />
                <Notif icon={Bell} title="Profile Viewed" sub="248 visits today" delay={1.2} className="translate-x-5 sm:translate-x-10" />
              </div>

              {/* Label */}
              <div className="absolute top-4 sm:top-6 left-3 sm:left-6 z-20">
                <div className="glass-strong rounded-full px-2.5 py-1.5 sm:px-3 sm:py-1.5 text-[9px] sm:text-[10.5px] uppercase tracking-[0.15em] sm:tracking-[0.18em] text-emerald-300/90 flex items-center gap-1.5 sm:gap-2 shadow-lg backdrop-blur-md">
                  <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3" /> One Prosite · Everything
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
