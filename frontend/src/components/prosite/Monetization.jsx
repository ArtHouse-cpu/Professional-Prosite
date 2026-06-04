import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  ShoppingBag,
  Ticket,
  GraduationCap,
  Briefcase,
  ArrowUpRight,
  Users,
  FolderKanban,
  Target,
  HandHelping,
} from "lucide-react";
import CountUp from "./CountUp";

const sparkPath =
  "M0,40 L18,38 L36,32 L54,30 L72,22 L90,18 L108,10 L126,6 L144,2";

export default function Monetization({ dashboardImg }) {
  return (
    <section
      id="monetize"
      data-testid="monetization-section"
      className="relative py-28 sm:py-36 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="text-[11px] uppercase tracking-[0.22em] text-prosite-electric/80 font-body mb-4">
              Beyond Portfolio
            </div>
            <h2 className="font-display text-[36px] sm:text-[52px] lg:text-[64px] leading-[0.95] tracking-tight">
              Your Creativity Can Do <br />
              More Than Just Get{" "}
              <span className="font-editorial italic text-prosite-neon">
                Likes.
              </span>
            </h2>
            <p className="mt-6 text-white/55 font-body text-base leading-relaxed max-w-md">
              Turn your audience into income. Sell products, tickets, workshops,
              courses, and services — right from your Prosite. No third-party
              tools. No code.
            </p>

            <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-2 sm:gap-3 max-w-md">
              {[
                { icon: ShoppingBag, label: "Sell Products" },
                { icon: Ticket, label: "List Events" },
                { icon: GraduationCap, label: "Launch Courses" },
                { icon: HandHelping, label: "Offer Services" },
                { icon: Users, label: "Monetize Network" },
                { icon: FolderKanban, label: "Show Projects" },
                { icon: Target, label: "Generate Leads" },
                { icon: Briefcase, label: "Get Hired" },
              ].map(({ icon: Icon, label }, index) => (
                <div
                  key={label}
                  className={`glass rounded-xl px-2 py-2 sm:px-3 sm:py-2.5 items-center justify-center sm:justify-start gap-1.5 sm:gap-2.5 w-full h-[42px] sm:h-[48px] ${index >= 4 ? 'hidden sm:flex' : 'flex'}`}
                >
                  <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-prosite-electric shrink-0" />
                  <span className="text-[10.5px] sm:text-[13px] text-white font-body whitespace-nowrap overflow-hidden text-ellipsis">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 relative"
          >
            <div className="absolute -inset-10 radial-blue" />
            <div className="absolute -inset-10 radial-purple opacity-70" />
            <div className="relative rounded-3xl overflow-hidden glass ring-glow">
              <img
                src={dashboardImg}
                alt="Prosite dashboard"
                className="w-full h-[360px] sm:h-auto object-cover object-left sm:object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Floating earnings widget */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="absolute top-1 right-0 sm:top-5 sm:right-5 glass-strong rounded-2xl p-2 sm:p-4 min-w-[200px] sm:min-w-[240px] scale-[0.65] sm:scale-100 origin-top-right"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="text-[10.5px] uppercase tracking-[0.18em] text-white/55">
                    This Month
                  </div>
                  <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
                </div>
                <div className="font-display text-[28px] leading-none text-gradient-luxe">
                  3842
                </div>
                <div className="mt-1 flex items-center justify-between">
                  <div className="text-[11.5px] text-emerald-300/90 font-body">
                    Interactions
                  </div>
                  <svg viewBox="0 0 144 44" className="h-6 w-20">
                    <defs>
                      <linearGradient id="sparkG" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#A855F7" />
                      </linearGradient>
                    </defs>
                    <motion.path
                      d={sparkPath}
                      stroke="url(#sparkG)"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.6, delay: 0.6 }}
                    />
                  </svg>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.55 }}
                className="absolute bottom-1 left-1 sm:bottom-5 sm:left-5 glass-strong rounded-2xl p-3 sm:p-4 min-w-[200px] sm:min-w-[230px] scale-[0.65] sm:scale-100 origin-bottom-left z-10"
              >
                <div className="text-[9.5px] sm:text-[10.5px] uppercase tracking-[0.18em] text-white/55 mb-2 sm:mb-3">
                  Today
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <Row
                    title="✨ Discoveries"
                    right="89"
                    sub="Projects • Products • Gallery"
                  />

                  <Row
                    title="🤝 Connections"
                    right="30"
                    sub="DMs • Email • WhatsApp"
                  />

                  <Row
                    title="💼 Enquiries"
                    right="12"
                    sub="Services • Hiring • Collaborations"
                  />

                  <Row
                    title="🔗 Shares"
                    right="27"
                    sub="Profile • Projects • Products"
                  />
                </div>
                <div className="mt-3 flex items-center gap-1 text-[11px] text-prosite-electric font-body">
                  View all <ArrowUpRight className="h-3 w-3" />
                </div>
              </motion.div>
            </div>
            <div className="flex flex-col sm:flex-row items-center mt-10 justify-center gap-1 sm:gap-6">
              <div className="text-[64px] sm:text-[120px] font-bold text-prosite-neon leading-none">
                ZERO
              </div>

              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <span className="text-2xl sm:text-4xl text-white leading-tight">
                  Commission
                </span>

                <span className="text-2xl sm:text-4xl text-white leading-tight">
                  Forever
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const Row = ({ title, right, sub }) => (
  <div className="flex items-center justify-between gap-3">
    <div className="overflow-hidden pr-2">
      <div className="text-[11px] sm:text-[12.5px] text-white font-medium whitespace-nowrap">{title}</div>
      <div className="text-[9px] sm:text-[10.5px] text-white/45 truncate">{sub}</div>
    </div>
    <div className="text-[11px] sm:text-[12.5px] font-display text-emerald-300/95 shrink-0">
      {right}
    </div>
  </div>
);
