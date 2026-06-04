import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Image as ImageIcon,
  Inbox,
  Briefcase,
  ShoppingBag,
  Users,
  Crown,
  ArrowDownRight,
  TrendingUp,
} from "lucide-react";
import CountUp from "./CountUp";

const withoutPath = [
  {
    year: "Y1",
    label: "Fragmentation",
    value: "Work scattered across platforms",
  },
  {
    year: "Y2",
    label: "Inconsistency",
    value: "Different profiles tell different stories",
  },
  {
    year: "Y3",
    label: "Friction",
    value: "People need to search to understand you",
  },
  {
    year: "Y4",
    label: "Obscurity",
    value: "Great work becomes harder to discover",
  },
  {
    year: "Y5",
    label: "Repetition",
    value: "Explaining yourself again and again",
  },
  {
    year: "Y6",
    label: "Dependence",
    value: "Visibility relies on algorithms",
  },
  {
    year: "Y7",
    label: "Forgettable",
    value: "Recognition fades between platforms",
  },
];


const withProsite = [
  {
    icon: ImageIcon,
    year: "Day 1",
    label: "Identity",
    value: "One professional destination",
  },
  {
    icon: Inbox,
    year: "Week 2",
    label: "Clarity",
    value: "Everything important in one place",
  },
  {
    icon: Briefcase,
    year: "Month 3",
    label: "Credibility",
    value: "A stronger first impression",
  },
  {
    icon: ShoppingBag,
    year: "Month 6",
    label: "Discoverability",
    value: "Easier to find and share",
  },
  {
    icon: Users,
    year: "Year 1",
    label: "Recognition",
    value: "Work becomes memorable",
  },
  {
    icon: Crown,
    year: "Year 2",
    label: "Reputation",
    value: "Value compounds over time",
  },
];

// SVG path lengths used for stroke animation
const FALL = "M0,40 C120,55 220,80 360,120 C480,160 600,170 720,180";
const RISE = "M0,170 C120,150 220,110 360,80 C480,55 600,30 720,12";

export default function CareerTrajectory() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="trajectory"
      data-testid="career-trajectory-section"
      className="relative py-28 sm:py-36 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/4 h-[420px] w-[420px] rounded-full radial-purple opacity-70" />
        <div className="absolute -bottom-32 right-1/4 h-[460px] w-[460px] rounded-full radial-blue opacity-70" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <div className="text-[11px] uppercase tracking-[0.22em] text-prosite-neon/85 font-body mb-4">
            Two Trajectories
          </div>
          <h2 className="font-display text-[36px] sm:text-[56px] lg:text-[68px] leading-[0.95] tracking-tight">
            The career path with — <br />
            and without — <span className="font-editorial italic text-gradient-luxe">Prosite.</span>
          </h2>
          <p className="mt-6 text-white/55 font-body text-base sm:text-lg leading-relaxed max-w-2xl">
            Talent doesn't decide trajectory anymore. Identity does. Watch how two equally gifted
            creatives diverge once one of them stops looking scattered online.
          </p>
        </div>

        {/* Trajectory chart */}
        <div ref={ref} className="mt-14 relative rounded-3xl glass p-5 sm:p-8 overflow-hidden">
          <div className="flex items-center justify-between mb-5 text-[11px] uppercase tracking-[0.2em] text-white/45 font-body">
            <span>Career growth · 2 years</span>
            <span>Same talent · different presentation</span>
          </div>

          <div className="relative h-[230px] sm:h-[260px] w-full">
            <svg
              viewBox="0 0 720 230"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full"
            >
              {/* grid */}
              <g stroke="rgba(255,255,255,0.05)" strokeDasharray="3 4">
                {[0, 1, 2, 3, 4].map((i) => (
                  <line key={i} x1="0" x2="720" y1={i * 55 + 5} y2={i * 55 + 5} />
                ))}
              </g>

              {/* Without Prosite — falling line */}
              <motion.path
                d={FALL}
                stroke="rgba(248,113,113,0.55)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.path
                d={FALL}
                stroke="rgba(248,113,113,0.18)"
                strokeWidth="14"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ filter: "blur(8px)" }}
              />

              {/* With Prosite — rising line (gradient) */}
              <defs>
                <linearGradient id="riseGrad" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="50%" stopColor="#A855F7" />
                  <stop offset="100%" stopColor="#F59E0B" />
                </linearGradient>
                <linearGradient id="riseGlow" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#A855F7" stopOpacity="0.35" />
                </linearGradient>
              </defs>

              <motion.path
                d={RISE}
                stroke="url(#riseGlow)"
                strokeWidth="16"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                style={{ filter: "blur(10px)" }}
              />
              <motion.path
                d={RISE}
                stroke="url(#riseGrad)"
                strokeWidth="2.4"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              />

              {/* End markers */}
              <motion.circle
                cx="720" cy="180" r="5"
                fill="#F87171"
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.6, duration: 0.4 }}
              />
              <motion.circle
                cx="720" cy="12" r="6"
                fill="#F59E0B"
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 2, duration: 0.4 }}
              />
              <motion.circle
                cx="720" cy="12" r="14"
                fill="rgba(245,158,11,0.25)"
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: [0, 1, 0.4, 1], scale: [0, 1.4, 1.1, 1.3] } : {}}
                transition={{ delay: 2.2, duration: 2, repeat: Infinity }}
              />
            </svg>

            {/* Floating end labels */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.7, duration: 0.6 }}
              className="absolute right-2 sm:right-3"
              style={{ top: "calc(180/230 * 100% - 38px)" }}
            >
              <div className="glass rounded-xl px-3 py-2 text-right">
                <div className="text-[10px] uppercase tracking-[0.18em] text-red-300/85 flex items-center gap-1 justify-end">
                  <ArrowDownRight className="h-3 w-3" /> Without
                </div>
                <div className="text-[12px] text-white/65 font-body mt-0.5">Same loops · forgotten</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 2.1, duration: 0.6 }}
              className="absolute right-2 sm:right-3 top-0"
            >
              <div className="glass-strong rounded-xl px-3 py-2 text-right ring-glow">
                <div className="text-[10px] uppercase tracking-[0.18em] text-amber-200 flex items-center gap-1 justify-end">
                  <TrendingUp className="h-3 w-3" /> With Prosite
                </div>
                <div className="text-[12px] text-white font-body mt-0.5">
                  <span className="text-white">High Growth</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Year markers */}
          <div className="mt-3 grid grid-cols-4 text-[9px] sm:text-[10.5px] uppercase tracking-[0.18em] text-white/35 font-body">
            <span>Year 0</span>
            <span className="text-center">6 months</span>
            <span className="text-center">Year 1</span>
            <span className="text-right">Year 2</span>
          </div>
        </div>

        {/* Two journey timelines */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
          {/* Without */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl glass p-6 sm:p-8"
          >
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-red-300/80 mb-5 font-body">
              <ArrowDownRight className="h-3.5 w-3.5" />
              Without Prosite
            </div>
            <div className="font-display text-2xl sm:text-3xl text-white/85 mb-7">
              The slow disappearance.
            </div>
            <ol className="relative space-y-5 ml-1.5">
              <span className="absolute left-1.5 top-2 bottom-2 w-px bg-gradient-to-b from-red-400/40 via-red-400/15 to-transparent" />
              {withoutPath.map((p, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative pl-6"
                >
                  <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-red-400/70 ring-4 ring-red-500/10" />
                  <div className="text-[14.5px] text-white/85 font-body">{p.label}</div>
                  <div className="text-[12px] text-white/45 font-body">{p.value}</div>
                </motion.li>
              ))}
            </ol>
          </motion.div>

          {/* With Prosite */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-3xl glass p-6 sm:p-8 relative overflow-hidden ring-glow"
          >
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full radial-blue" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full radial-purple" />

            <div className="relative flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-emerald-300/90 mb-5 font-body">
              <TrendingUp className="h-3.5 w-3.5" />
              With Prosite
            </div>
            <div className="relative font-display text-2xl sm:text-3xl mb-7">
              The cinematic rise.
            </div>
            <ol className="relative space-y-5 ml-1.5">
              <span className="absolute left-1.5 top-2 bottom-2 w-px bg-gradient-to-b from-prosite-royal/70 via-prosite-purple/50 to-amber-400/40" />
              {withProsite.map(({ icon: Icon, year, label, value }, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="relative pl-7 flex items-start gap-3"
                >
                  <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-gradient-to-br from-prosite-electric to-prosite-purple ring-4 ring-prosite-royal/15" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mt-0.5">
                      <Icon className="h-3.5 w-3.5 text-prosite-electric" strokeWidth={1.7} />
                      <span className="text-[14.5px] text-white font-body">{label}</span>
                    </div>
                    <div className="text-[12px] text-white/55 font-body">{value}</div>
                  </div>
                </motion.li>
              ))}
            </ol>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
