import React from "react";
import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer data-testid="footer" className="relative border-t border-white/[0.06] py-12">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="flex items-center gap-2.5">
          <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-prosite-royal via-prosite-electric to-prosite-purple flex items-center justify-center">
            <Sparkles className="h-3.5 w-3.5 text-white" />
          </div>
          <div>
            <div className="font-display text-base">Prosite</div>
            <div className="text-[11px] text-white/40">The professional identity platform</div>
          </div>
        </div>
        <div className="text-[11.5px] text-white/45 font-body text-center">
          © {new Date().getFullYear()} Prosite. Built for creative professionals worldwide.
        </div>
        <div className="flex md:justify-end gap-5 text-[12px] text-white/55 font-body">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#nfc" className="hover:text-white transition">NFC Card</a>
        </div>
      </div>
    </footer>
  );
}
