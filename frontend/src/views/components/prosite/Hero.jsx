import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Star,
  User,
  Briefcase,
  Image,
  ShoppingBag,
  GraduationCap,
  Calendar,
  Link2,
  FileText,
  Sparkles,
} from "lucide-react";
import { useProsite } from "./PrositeProvider";

const CtaBlock = ({ openCheckout, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, delay: 0.28 }}
    className={`mt-6 flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-center ${className}`}
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
        {[
          "https://images.unsplash.com/photo-1675726205553-4e348f24da2c?crop=entropy&cs=srgb&fm=jpg&w=80&h=80&fit=crop",
          "https://images.unsplash.com/photo-1762291629616-3e2c044c79a0?crop=entropy&cs=srgb&fm=jpg&w=80&h=80&fit=crop",
          "https://images.pexels.com/photos/8089650/pexels-photo-8089650.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop",
          "https://images.unsplash.com/photo-1576280314550-773c50583407?crop=entropy&cs=srgb&fm=jpg&w=80&h=80&fit=crop",
        ].map((src, i) => (
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
            <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <p className="mt-0.5 text-[11px] text-white/45 sm:text-xs">
          <span className="font-semibold text-white/70">10K+</span> Joined
        </p>
      </div>
    </div>
  </motion.div>
);

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

const profileModules = [
  { icon: User, label: "About Me" },
  { icon: Briefcase, label: "Projects" },
  { icon: Image, label: "Gallery" },
  { icon: ShoppingBag, label: "Store" },
  { icon: GraduationCap, label: "Courses" },
  { icon: Calendar, label: "Events" },
  { icon: Link2, label: "Links" },
  { icon: FileText, label: "Blog" },
];






export default function Hero({ deviceImg, nfcImg }) {
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
        <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-16">
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
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 font-display text-[24px] min-[400px]:text-[28px] font-semibold leading-[1.05] tracking-tight sm:mt-8 sm:text-[36px] lg:text-[42px] xl:text-[46px]"
            >
              <span className="text-gradient-luxe">Get Hired.</span>{" "}
              <span className="text-gradient-luxe">Sell.</span>{" "}
              <span className="text-gradient-luxe">Manage.</span>
              <br className="hidden sm:block" />
              <span className="text-white whitespace-nowrap"> All With One Prosite.</span>
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

            {/* Desktop CTA */}
            <CtaBlock openCheckout={openCheckout} className="hidden lg:flex sm:mt-10" />
          </div>

          {/* Right — visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="relative order-2 mx-auto w-full max-w-[520px] lg:max-w-none lg:justify-self-end"
          >
            <div className="relative flex w-full items-center justify-center lg:min-h-[520px]">
              <img className="w-full h-auto object-contain max-w-[440px] lg:max-w-none" src="https://res.cloudinary.com/dzwto9zbu/image/upload/v1780731114/ChatGPT_Image_Jun_6_2026_01_01_22_PM_n2llfm.png" alt="" />
            
            </div>
          </motion.div>

          {/* Mobile CTA */}
          <div className="order-3 lg:hidden">
            <CtaBlock openCheckout={openCheckout} className="flex" />
          </div>
        </div>
      </div>
    </section>
  );
}
