import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, ShoppingBag, Ticket, GraduationCap, Briefcase, ArrowUpRight } from "lucide-react";
import CountUp from "./CountUp";

const sparkPath = "M0,40 L18,38 L36,32 L54,30 L72,22 L90,18 L108,10 L126,6 L144,2";

export default function Monetization({ dashboardImg }) {
  return (
    <section id="monetize" data-testid="monetization-section" className="relative py-28 sm:py-36 overflow-hidden">
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
              More Than Just Get <span className="font-editorial italic text-prosite-neon">Likes.</span>
            </h2>
            <p className="mt-6 text-white/55 font-body text-base leading-relaxed max-w-md">
              Turn your audience into income. Sell products, tickets, workshops, courses, and services
              — right from your Prosite. No third-party tools. No code.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 max-w-md">
              {[
                { icon: ShoppingBag, label: "Sell Products" },
                { icon: Ticket, label: "Event Tickets" },
                { icon: GraduationCap, label: "Courses" },
                { icon: Briefcase, label: "Services" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="glass rounded-xl px-3 py-2.5 flex items-center gap-2.5">
                  <Icon className="h-4 w-4 text-prosite-electric" />
                  <span className="text-[13px] text-white font-body">{label}</span>
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
              <img src={dashboardImg} alt="Prosite dashboard" className="w-full h-auto object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Floating earnings widget */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="absolute top-5 right-5 glass-strong rounded-2xl p-4 min-w-[240px]"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="text-[10.5px] uppercase tracking-[0.18em] text-white/55">This Month</div>
                  <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
                </div>
                <div className="font-display text-[28px] leading-none text-gradient-luxe">
                  <CountUp end={284500} prefix="₹" />
                </div>
                <div className="mt-1 flex items-center justify-between">
                  <div className="text-[11.5px] text-emerald-300/90 font-body">+38% vs last month</div>
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
                className="absolute bottom-5 left-5 glass-strong rounded-2xl p-4 min-w-[230px]"
              >
                <div className="text-[10.5px] uppercase tracking-[0.18em] text-white/55 mb-3">Today</div>
                <div className="space-y-2">
                  <Row title="Editorial Course" right="₹12,499" sub="3 enrollments" />
                  <Row title="Studio booking" right="₹8,000" sub="2 confirmed" />
                  <Row title="Preset pack" right="₹4,497" sub="9 sales" />
                </div>
                <div className="mt-3 flex items-center gap-1 text-[11px] text-prosite-electric font-body">
                  View all <ArrowUpRight className="h-3 w-3" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const Row = ({ title, right, sub }) => (
  <div className="flex items-center justify-between gap-3">
    <div>
      <div className="text-[12.5px] text-white font-medium">{title}</div>
      <div className="text-[10.5px] text-white/45">{sub}</div>
    </div>
    <div className="text-[12.5px] font-display text-emerald-300/95">{right}</div>
  </div>
);
