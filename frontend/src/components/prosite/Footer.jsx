import React, { useState } from "react";
import {
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import TermsSheet from "./TermsSheet";

export default function Footer() {
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <footer
      data-testid="footer"
      className="relative border-t border-white/[0.06] py-12"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
        {/* Logo */}
        <div className="flex justify-center md:justify-start items-center gap-2.5">
          <div className="h-7 w-7 rounded-lg bg-white flex items-center justify-center">
            <img
              src="https://res.cloudinary.com/dzwto9zbu/image/upload/v1779959585/Atives_Logo_1_mpnssp.png"
              alt="Atives Logo"
              className="h-4 w-4 object-contain"
            />
          </div>

          <div className="flex flex-col text-left">
            <span className="font-display text-lg tracking-tight leading-none">
              Prosite
            </span>
            <span className="text-[12px] text-gray-300 leading-none">
              by Atives
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-[11.5px] text-white/45 font-body text-center order-last md:order-none mt-2 md:mt-0">
          © {new Date().getFullYear()} ATIVES WORLD PVT LTD.
        </div>

        {/* Links + Socials */}
        <div className="flex flex-col md:flex-row justify-center md:justify-end items-center gap-6 md:gap-4 text-[12px] text-white/55 font-body mt-2 md:mt-0">
          <div className="flex items-center gap-6 md:gap-4">
            <button
              onClick={() => setIsTermsOpen(true)}
              className="hover:text-white transition cursor-pointer bg-transparent border-none p-0 text-[13px] md:text-[12px] font-body"
            >
              Terms
            </button>

            <a
              href="https://www.1atives.com/help"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition text-[13px] md:text-[12px]"
            >
              Help
            </a>
          </div>

          <div className="hidden md:block h-4 w-px bg-white/10 mx-2" />

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/company/1atives"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 md:h-8 md:w-8 rounded-full glass border border-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} className="text-white/60 group-hover:text-prosite-neon transition-colors" />
            </a>

            <a
              href="https://instagram.com/1_atives"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 md:h-8 md:w-8 rounded-full glass border border-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300 group"
              aria-label="Instagram"
            >
              <Instagram size={16} className="text-white/60 group-hover:text-prosite-neon transition-colors" />
            </a>

            <a
              href="https://www.youtube.com/@1atives"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 md:h-8 md:w-8 rounded-full glass border border-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300 group"
              aria-label="YouTube"
            >
              <Youtube size={16} className="text-white/60 group-hover:text-prosite-neon transition-colors" />
            </a>
          </div>
        </div>
      </div>

      <TermsSheet
        open={isTermsOpen}
        onOpenChange={setIsTermsOpen}
      />
    </footer>
  );
}