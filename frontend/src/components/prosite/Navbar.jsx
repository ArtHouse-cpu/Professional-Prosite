import React from "react";
import { Sparkles } from "lucide-react";
import { useProsite } from "./PrositeProvider";

export default function Navbar() {
  const { openCheckout } = useProsite();
  return (
    <nav
      data-testid="prosite-navbar"
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(1200px,92vw)]"
    >
      <div className="glass-strong rounded-full px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#hero" data-testid="navbar-logo" className="flex items-center gap-2.5">
          <div className="relative h-7 w-7 rounded-lg bg-gradient-to-br from-prosite-royal via-prosite-electric to-prosite-purple flex items-center justify-center">
            <Sparkles className="h-3.5 w-3.5 text-white" strokeWidth={2.4} />
            <div className="absolute inset-0 rounded-lg blur-md bg-prosite-royal/40 -z-10" />
          </div>
          <span className="font-display text-lg tracking-tight">Prosite</span>
        </a>
        <div className="hidden md:flex items-center gap-7 text-[13px] text-white/65 font-body">
          <a href="#features" className="hover:text-white transition-colors" data-testid="nav-features">Features</a>
          <a href="#monetize" className="hover:text-white transition-colors" data-testid="nav-monetize">Monetize</a>
          <a href="#nfc" className="hover:text-white transition-colors" data-testid="nav-nfc">NFC Card</a>
          <a href="#pricing" className="hover:text-white transition-colors" data-testid="nav-pricing">Pricing</a>
        </div>
        <button
          data-testid="navbar-cta-start-membership"
          onClick={openCheckout}
          className="group relative inline-flex items-center gap-2 rounded-full bg-white text-black px-4 sm:px-5 py-2 text-[13px] font-semibold hover:bg-white/90 transition-all"
        >
          <span>Start Membership</span>
          <span className="text-prosite-royal">→</span>
        </button>
      </div>
    </nav>
  );
}
