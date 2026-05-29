import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";

export default function DemoModal({ open, onClose }) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-5"
          data-testid="demo-modal"
        >
          <div onClick={onClose} className="absolute inset-0 bg-black/80 backdrop-blur-lg" />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[1000px] aspect-video rounded-3xl glass-strong overflow-hidden ring-glow"
          >
            <button
              data-testid="demo-close-btn"
              onClick={onClose}
              aria-label="Close demo"
              className="absolute top-4 right-4 h-10 w-10 rounded-full glass-strong flex items-center justify-center z-10 hover:bg-white/[0.08]"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_50%,rgba(37,99,235,0.25)_0%,rgba(5,5,10,0)_70%)]" />

            <div className="relative h-full w-full flex flex-col items-center justify-center text-center px-8">
              <div className="h-20 w-20 rounded-full glass-strong flex items-center justify-center ring-glow mb-6">
                <Play className="h-7 w-7 text-white fill-white ml-0.5" />
              </div>
              <div className="font-display text-3xl sm:text-5xl tracking-tight leading-[0.95]">
                A 90-second tour of <br />
                <span className="font-editorial italic text-prosite-neon">your future Prosite.</span>
              </div>
              <div className="mt-4 max-w-lg text-white/55 font-body text-[14px]">
                Cinematic walkthrough · launching with the public release.
              </div>
              <div className="mt-8 inline-flex items-center gap-2 glass rounded-full px-3.5 py-1.5 text-[11px] uppercase tracking-[0.2em] text-white/55">
                Video preview · Coming soon
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
