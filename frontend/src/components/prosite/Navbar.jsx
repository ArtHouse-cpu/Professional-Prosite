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

 <div className="flex flex-col items-center gap-0">
  <span className="font-display text-lg tracking-tight leading-none">
    Prosite
  </span>
  <span className="text-[12px] text-gray-300 leading-none">
    by Atives
  </span>
</div>
        </a>
        <div className="hidden md:flex items-center gap-7 text-[13px] text-white/65 font-body">
          <a
            href="#features"
            className="hover:text-white transition-colors"
            data-testid="nav-features"
          >
            Benefits
          </a>
          <a
            href="#monetize"
            className="hover:text-white transition-colors"
            data-testid="nav-monetize"
          >
            Monetize
          </a>
          <a
            href="#nfc"
            className="hover:text-white transition-colors"
            data-testid="nav-nfc"
          >
            NFC Card
          </a>
          <a
            href="#pricing"
            className="hover:text-white transition-colors"
            data-testid="nav-pricing"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="hover:text-white transition-colors"
            data-testid="nav-faq"
          >
            FAQ
          </a>
        </div>
        <button
          data-testid="navbar-cta-start-membership"
          onClick={openCheckout}
          className="group relative inline-flex items-center gap-2 rounded-full bg-white text-black px-4 sm:px-5 py-2 text-[13px] font-semibold hover:bg-white/90 transition-all"
        >
          <span>Get Prosite</span>
          <span className="text-prosite-royal">→</span>
        </button>
      </div>
    </nav>
  );
}
