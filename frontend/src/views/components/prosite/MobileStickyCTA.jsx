import React, { useState } from "react";
import { useProsite } from "./PrositeProvider";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Calendar, ArrowRight, Gem, Sparkle } from "lucide-react";

export default function MobileStickyCTA() {
  const { openCheckout, isCheckoutOpen } = useProsite();
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  // Handle scroll events
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (isCheckoutOpen) return;
    
    // Calculate if we are near the bottom of the page (past FAQ)
    // 800px is roughly the height of the FinalCTA + Footer on mobile
    const isNearBottom = latest + window.innerHeight >= document.documentElement.scrollHeight - 800;

    // Show after scrolling past Hero section (around 600px) AND not near the bottom
    if (latest > 600 && !isNearBottom) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  // Also react immediately if checkout opens/closes while scrolled down
  React.useEffect(() => {
    if (isCheckoutOpen) {
      setVisible(false);
    } else if (scrollY.get() > 600) {
      setVisible(true);
    }
  }, [isCheckoutOpen, scrollY]);

  return (
    <motion.div
      className="md:hidden fixed bottom-4 left-4 right-4 z-50 pointer-events-none"
      initial={{ y: 150, opacity: 0 }}
      animate={visible ? { y: 0, opacity: 1 } : { y: 150, opacity: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 25 }}
    >
      <button
        onClick={openCheckout}
        className="w-full flex items-center justify-between p-2 rounded-[28px] pointer-events-auto transition-transform active:scale-95 bg-white text-black shadow-[0_12px_40px_-12px_rgba(59,130,246,0.5)]"
      >
        <div className="flex items-center gap-3">
          <div className="relative h-[60px] w-[60px] rounded-[22px] bg-gradient-to-br from-[#536DFE] to-[#3D5AFE] flex items-center justify-center shrink-0 shadow-inner">
            <Gem className="h-7 w-7 text-white stroke-[1.5]" />
            <Sparkle className="absolute top-1.5 right-1.5 h-3.5 w-3.5 text-white/90 fill-white" strokeWidth={0} />
          </div>
          <div className="text-left flex flex-col justify-center gap-1">
            <span className="font-display font-bold text-[21px] leading-none text-black">
              Get &nbsp;Prosite
            </span>
            <span className="font-body text-[13.5px] leading-none text-black/50 tracking-normal">
              One payment. Lifetime identity.
            </span>
          </div>
        </div>
        <div className="h-[52px] w-[52px] rounded-full flex items-center justify-center shrink-0 mr-1 border border-black/5 bg-white shadow-sm">
          <ArrowRight className="h-5 w-5 text-[#3D5AFE] stroke-[2.5]" />
        </div>
      </button>
    </motion.div>
  );
}
