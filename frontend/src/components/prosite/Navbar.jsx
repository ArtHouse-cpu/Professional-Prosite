import React, { useState } from "react";
import { Sparkles, Menu, X } from "lucide-react";
import { useProsite } from "./PrositeProvider";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const { openCheckout, isCheckoutOpen } = useProsite();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
      setIsMenuOpen(false); // Close menu if open when scrolling down
    } else {
      setHidden(false);
    }
  });

  if (isCheckoutOpen) return null;

  return (
    <motion.nav
      style={{ x: "-50%" }}
      variants={{
        visible: { y: 0 },
        hidden: { y: "-150%" }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      data-testid="prosite-navbar"
      className="fixed top-4 left-1/2 z-50 w-[min(1200px,92vw)]"
    >
      <div className="glass-strong rounded-full px-4 sm:px-6 py-3 flex items-center justify-between">
        <a
          href="#hero"
          data-testid="navbar-logo"
          className="flex items-center gap-2.5"
        >
          <div className="relative h-7 w-7 rounded-lg bg-white flex items-center justify-center">
            <img
              src="https://res.cloudinary.com/dzwto9zbu/image/upload/v1779959585/Atives_Logo_1_mpnssp.png"
              alt="Atives Logo"
              className="h-4 w-4 object-contain"
            />
            <div className="absolute inset-0 rounded-lg blur-md bg-prosite-royal/40 -z-10" />
          </div>

          <div className="flex flex-col items-start text-left gap-0">
            <span className="font-display text-lg tracking-tight leading-none">
              Prosite
            </span>
            <span className="text-[12px] text-gray-300 leading-none">
              by Atives
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7 text-[13px] text-white/65 font-body">
          <a href="#features" className="hover:text-white transition-colors">Benefits</a>
          <a href="#monetize" className="hover:text-white transition-colors">Monetize</a>
          <a href="#nfc" className="hover:text-white transition-colors">NFC Card</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </div>

        {/* Desktop CTA */}
        <button
          data-testid="navbar-cta-start-membership"
          onClick={openCheckout}
          className="hidden md:inline-flex group relative items-center gap-2 rounded-full bg-white text-black px-4 sm:px-5 py-2 text-[13px] font-semibold hover:bg-white/90 transition-all"
        >
          <span>Get Prosite</span>
          <span className="text-prosite-royal">→</span>
        </button>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex items-center justify-center h-10 w-10 rounded-full bg-black/40 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors"
        >
          {isMenuOpen ? (
            <X className="h-4.5 w-4.5 text-white" />
          ) : (
            <Menu className="h-4.5 w-4.5 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-[calc(100%+12px)] left-0 right-0 glass-strong rounded-3xl p-5 border border-white/10 flex flex-col gap-4 shadow-2xl"
          >
            <div className="flex flex-col gap-4 text-[14px] font-body text-white/70">
              <a href="#features" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors">Benefits</a>
              <a href="#monetize" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors">Monetize</a>
              <a href="#nfc" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors">NFC Card</a>
              <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors">Pricing</a>
              <a href="#faq" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors">FAQ</a>
            </div>
            
            <div className="h-px w-full bg-white/10 my-1" />
            
            <button
              onClick={() => {
                setIsMenuOpen(false);
                openCheckout();
              }}
              className="w-full relative inline-flex justify-center items-center gap-2 rounded-full bg-white text-black px-5 py-3 text-[14px] font-semibold hover:bg-white/90 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              <span>Get Prosite</span>
              <span className="text-prosite-royal">→</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
