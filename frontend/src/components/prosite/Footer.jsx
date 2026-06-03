import React, { useState } from "react";
import { Sparkles } from "lucide-react";
import TermsSheet from "./TermsSheet";

export default function Footer() {
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <footer
      data-testid="footer"
      className="relative border-t border-white/[0.06] py-12"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="flex items-center gap-2.5">
          <div className="h-7 w-7 rounded-lg bg-white flex items-center justify-center">
            <img
              src="https://res.cloudinary.com/dzwto9zbu/image/upload/v1779959585/Atives_Logo_1_mpnssp.png"
              alt="Atives Logo"
              className="h-4 w-4 object-contain"
            />
          </div>

          <div className="flex items-end gap-1">
            <span className="font-display text-lg tracking-tight">Prosite</span>
            <span className="text-[10px] text-muted-foreground mb-0.5">
              by Atives
            </span>
          </div>
        </div>
        <div className="text-[11.5px] text-white/45 font-body text-center">
          © {new Date().getFullYear()} Prosite. Built for creative professionals
          worldwide.
        </div>
        <div className="flex md:justify-end gap-5 text-[12px] text-white/55 font-body">
          <button
            onClick={() => setIsTermsOpen(true)}
            className="hover:text-white transition cursor-pointer bg-transparent border-none p-0 text-[12px] font-body"
          >
            Terms
          </button>
          <a href="#features" className="hover:text-white transition">
            Features
          </a>
          <a href="#pricing" className="hover:text-white transition">
            Pricing
          </a>
          <a href="#faq" className="hover:text-white transition">
            FAQ
          </a>
          <a href="#nfc" className="hover:text-white transition">
            NFC Card
          </a>
        </div>
      </div>
      <TermsSheet open={isTermsOpen} onOpenChange={setIsTermsOpen} />
    </footer>
  );
}
