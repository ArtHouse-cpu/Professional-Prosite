import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Star,
  User,
  Briefcase,
  Wrench,
  ShoppingBag,
  BookOpen,
  Share2,
  Mail,
  BadgeCheck,
  MoreHorizontal,
  MapPin,
  ExternalLink,
  Download,
} from "lucide-react";
import { useProsite } from "./PrositeProvider";

const professions = [
  "Designers",
  "Creators",
  "Photographers",
  "Filmmakers",
  "Artists",
  "Musicians",
  "Writers",
  "Coaches",
];

const avatarStack = [
  "https://images.unsplash.com/photo-1675726205553-4e348f24da2c?crop=entropy&cs=srgb&fm=jpg&w=80&h=80&fit=crop",
  "https://images.unsplash.com/photo-1762291629616-3e2c044c79a0?crop=entropy&cs=srgb&fm=jpg&w=80&h=80&fit=crop",
  "https://images.pexels.com/photos/8089650/pexels-photo-8089650.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop",
  "https://images.unsplash.com/photo-1576280314550-773c50583407?crop=entropy&cs=srgb&fm=jpg&w=80&h=80&fit=crop",
];

const GOLD_NFC_CARD =
  "https://res.cloudinary.com/dzwto9zbu/image/upload/v1780505654/ChatGPT_Image_Jun_3_2026_10_09_45_PM_veceg4.png";

const profileModules = [
  { icon: User, label: "About Me" },
  { icon: Briefcase, label: "Projects" },
  { icon: Wrench, label: "Services" },
  { icon: Star, label: "Reviews" },
  { icon: ShoppingBag, label: "Products" },
  { icon: BookOpen, label: "Resources" },
  { icon: Share2, label: "Socials" },
  { icon: Mail, label: "Contact" },
];

const arcNodes = [
  { label: "DESIGNERS", y: 8 },
  { label: "CREATORS", y: 18 },
  { label: "PHOTOGRAPHERS", y: 30, active: true },
  { label: "FILMMAKERS", y: 42 },
  { label: "ARTISTS", y: 54 },
  { label: "MUSICIANS", y: 66 },
  { label: "WRITERS", y: 78 },
  { label: "COACHES", y: 90 },
];

const VerifiedBadge = ({ className = "h-3.5 w-3.5" }) => (
  <BadgeCheck className={`${className} shrink-0 text-prosite-electric`} />
);

const TorusGraphic = () => (
  <div className="relative h-[72px] w-[72px] shrink-0">
    <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.35),transparent_55%)]" />
    <div
      className="absolute inset-1 rounded-full"
      style={{
        background:
          "conic-gradient(from 210deg, #60A5FA, #A855F7, #2563EB, #C4B5FD, #3B82F6, #60A5FA)",
        WebkitMask: "radial-gradient(circle, transparent 52%, black 54%)",
        mask: "radial-gradient(circle, transparent 52%, black 54%)",
      }}
    />
    <div className="absolute inset-[18px] rounded-full bg-[#0A0A12]/80 shadow-inner" />
  </div>
);

const ProfessionArc = () => (
  <div
    className="pointer-events-none absolute -right-2 top-1/2 z-0 hidden h-[92%] w-[130px] -translate-y-1/2 sm:block lg:-right-4 lg:w-[150px]"
    aria-hidden
  >
    <svg
      className="absolute inset-0 h-full w-full overflow-visible"
      viewBox="0 0 150 420"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M 18 24 Q 72 210 18 396"
        stroke="url(#heroArcGradient)"
        strokeWidth="1.25"
        strokeDasharray="3 7"
        opacity="0.45"
      />
      <defs>
        <linearGradient id="heroArcGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#9333EA" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      {arcNodes.map((node, i) => {
        const y = 24 + (i / (arcNodes.length - 1)) * 372;
        const x = 18 + Math.sin((i / (arcNodes.length - 1)) * Math.PI) * 54;
        return (
          <g key={node.label}>
            <circle
              cx={x}
              cy={y}
              r={node.active ? 4.5 : 3}
              fill={node.active ? "#3B82F6" : "rgba(255,255,255,0.22)"}
              className={node.active ? "drop-shadow-[0_0_6px_rgba(59,130,246,0.9)]" : ""}
            />
          </g>
        );
      })}
    </svg>

    <div className="relative flex h-full flex-col justify-between py-3 pl-10">
      {arcNodes.map((node) => (
        <div
          key={node.label}
          className={`flex items-center gap-1.5 ${
            node.active ? "translate-x-0" : "translate-x-1"
          }`}
        >
          {node.active && (
            <span className="h-1.5 w-1.5 rounded-full bg-prosite-electric shadow-[0_0_6px_rgba(59,130,246,0.9)]" />
          )}
          {node.active ? (
            <span className="rounded-full border border-prosite-electric/35 bg-prosite-royal/15 px-2.5 py-1 text-[7px] font-semibold uppercase tracking-[0.14em] text-white/90">
              {node.label}
            </span>
          ) : (
            <span className="text-[7px] font-medium uppercase tracking-[0.12em] text-white/30">
              {node.label}
            </span>
          )}
        </div>
      ))}
    </div>
  </div>
);

const PhoneMockup = () => (
  <motion.div
    initial={{ opacity: 0, y: 24, rotate: 0 }}
    animate={{ opacity: 1, y: 0, rotate: -8 }}
    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
    className="relative z-10 mx-auto w-[252px] sm:w-[278px]"
    style={{ perspective: "1200px" }}
  >
    <div className="absolute -inset-10 rounded-[3rem] bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.2),transparent_68%)]" />

    <div className="relative rounded-[2.5rem] border-[6px] border-[#14141C] bg-[#08080E] shadow-[0_50px_90px_-25px_rgba(0,0,0,0.75),0_0_0_1px_rgba(255,255,255,0.06)]">
      <div className="absolute left-1/2 top-3 z-20 h-[22px] w-[34%] -translate-x-1/2 rounded-full bg-black" />

      <div className="overflow-hidden rounded-[2rem] bg-[#08080E] px-3 pb-3 pt-10">
        {/* Top nav */}
        <div className="mb-3 flex items-center justify-between px-0.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white">
            <img
              src="https://res.cloudinary.com/dzwto9zbu/image/upload/v1779959585/Atives_Logo_1_mpnssp.png"
              alt=""
              className="h-4 w-4 object-contain"
            />
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[11px] font-semibold text-white">Rohan Mehta</span>
            <VerifiedBadge className="h-3.5 w-3.5" />
          </div>
          <MoreHorizontal className="h-4 w-4 text-white/50" />
        </div>

        {/* Hero banner card */}
        <div className="mb-3 overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-[#12121A] to-[#0C0C14] p-3">
          <div className="flex items-center justify-between gap-2">
            <p className="font-display text-[13px] font-bold uppercase leading-[1.15] tracking-tight text-white">
              Designing Brands That{" "}
              <span className="text-gradient-luxe">Connect.</span>
            </p>
            <TorusGraphic />
          </div>
        </div>

        {/* Profile row */}
        <div className="mb-3 flex items-start gap-3">
          <div className="h-[76px] w-[76px] shrink-0 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#12121A]">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=srgb&fm=jpg&w=152&h=152&fit=crop"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-1 justify-between gap-1 pt-1">
            {[
              { v: "48", l: "Projects" },
              { v: "2.3K", l: "Followers" },
              { v: "120", l: "Reviews" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <p className="text-[13px] font-bold leading-none text-white">{s.v}</p>
                <p className="mt-1 text-[8px] text-white/40">{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Name, role, bio, location */}
        <div className="mb-3 px-0.5">
          <div className="flex items-center gap-1">
            <p className="font-display text-[15px] font-bold text-white">Rohan Mehta</p>
            <VerifiedBadge className="h-4 w-4" />
          </div>
          <p className="mt-0.5 text-[11px] font-semibold text-prosite-electric">
            Graphic Designer
          </p>
          <p className="mt-1.5 text-[9.5px] leading-relaxed text-white/45">
            Crafting visual identities that tell stories and drive results for brands
            worldwide.
          </p>
          <div className="mt-1.5 flex items-center gap-1 text-[9px] text-white/35">
            <MapPin className="h-3 w-3 shrink-0" />
            <span>Mumbai, India</span>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="mb-3 space-y-2">
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-prosite-royal to-prosite-electric py-2.5 text-[11px] font-semibold text-white shadow-[0_8px_24px_rgba(37,99,235,0.35)]"
          >
            Work With Me
            <ExternalLink className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] py-2.5 text-[11px] font-semibold text-white/80"
          >
            View Portfolio
            <Download className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Module grid */}
        <div className="grid grid-cols-4 gap-1.5">
          {profileModules.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center gap-1 rounded-xl border border-white/[0.06] bg-white/[0.025] px-1 py-2.5"
            >
              <Icon className="h-3.5 w-3.5 text-white/55" strokeWidth={1.75} />
              <span className="text-center text-[7px] leading-tight text-white/40">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Feature Graphic */}
        <div className="mt-3">
          <img
            src="https://res.cloudinary.com/dzwto9zbu/image/upload/v1780726612/ChatGPT_Image_Jun_6_2026_11_46_39_AM_c87t8s.png"
            alt="Feature Graphic"
            className="w-full h-auto rounded-xl object-cover border border-white/10"
          />
        </div>
      </div>
    </div>
  </motion.div>
);

const NFCCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 20, rotate: 14 }}
    animate={{ opacity: 1, y: 0, rotate: 14 }}
    transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
    className="absolute -bottom-6 left-2 z-30 sm:-bottom-8 sm:left-4 lg:left-8"
  >
    <div className="relative w-[148px] sm:w-[168px]">
      <div className="absolute -inset-4 rounded-2xl bg-[radial-gradient(circle,rgba(245,158,11,0.22),transparent_70%)]" />
      <div className="relative overflow-hidden rounded-2xl border border-amber-500/25 bg-gradient-to-br from-[#2A2218] via-[#1A1510] to-[#0F0D0A] p-3 shadow-[0_24px_48px_rgba(0,0,0,0.55)]">
        <div className="relative mb-2.5 flex h-[88px] items-center justify-center overflow-hidden rounded-xl">
          <img
            src={GOLD_NFC_CARD}
            alt="NFC Prosite card"
            className="h-full w-full object-contain drop-shadow-[0_8px_20px_rgba(245,158,11,0.25)]"
          />
        </div>
        <p className="font-display text-[13px] font-bold text-white">Rohan Mehta</p>
        <p className="text-[10px] text-white/45">Graphic Designer</p>
      </div>
    </div>
  </motion.div>
);

export default function Hero() {
  const { openCheckout } = useProsite();

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-32 lg:pb-28 lg:pt-36"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full radial-blue" />
        <div className="absolute -right-40 top-10 h-[700px] w-[700px] rounded-full radial-purple" />
        <div className="absolute inset-0 grain" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-10 xl:gap-16">
          {/* Left — copy */}
          <div className="order-1 text-left">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 sm:mb-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/70 sm:text-[11px]">
                <Zap className="h-3.5 w-3.5 text-prosite-electric" />
                <span>Special Offer</span>
                <span className="text-white/30">•</span>
                <span className="text-prosite-electric/90">50% Off Lifetime</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[40px] font-semibold leading-[0.95] tracking-tight sm:text-[52px] lg:text-[58px] xl:text-[64px]"
            >
              Creative{" "}
              <span className="text-gradient-luxe">Professionals,</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08 }}
              className="mt-4 sm:mt-5"
            >
              <div className="inline-flex max-w-full items-center overflow-x-auto rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <p className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45 sm:text-[11px]">
                  {professions.join(" • ")}
                </p>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 font-display text-[28px] font-semibold leading-[1.05] tracking-tight sm:mt-8 sm:text-[36px] lg:text-[42px] xl:text-[46px]"
            >
              <span className="text-gradient-luxe">Get Hired.</span>{" "}
              <span className="text-gradient-luxe">Sell.</span>{" "}
              <span className="text-gradient-luxe">Manage.</span>
              <br className="hidden sm:block" />
              <span className="text-white"> All With One Prosite.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/55 sm:mt-6 sm:text-base lg:text-[17px]"
            >
              Stop sending scattered links. Build one beautiful professional home for your
              creativity, services, products, audience, and opportunities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.28 }}
              className="mt-8 flex flex-col gap-5 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <button
                data-testid="hero-cta-start-membership"
                onClick={openCheckout}
                className="group relative inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-black transition-all hover:bg-white/95 sm:w-auto ring-glow"
              >
                <span>Get Prosite</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                <span className="absolute -inset-1 -z-10 rounded-full bg-prosite-royal/30 opacity-70 blur-2xl" />
              </button>

              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  {avatarStack.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      className="h-9 w-9 rounded-full border-2 border-prosite-bg object-cover"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="mt-0.5 text-[11px] text-white/45 sm:text-xs">
                    <span className="font-semibold text-white/70">10K+</span> creatives trust
                    Prosite
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right — visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="relative order-2 mx-auto w-full max-w-[560px] lg:max-w-none lg:justify-self-end"
          >
            <div className="relative flex min-h-[520px] items-center justify-center sm:min-h-[580px] lg:min-h-[620px]">
              <ProfessionArc />
              <PhoneMockup />
              <NFCCard />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
