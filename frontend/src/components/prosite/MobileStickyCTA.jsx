import React, { useState } from "react";
import { useProsite } from "./PrositeProvider";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

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
        className="w-full flex items-center justify-between p-2.5 rounded-[20px] shadow-2xl pointer-events-auto transition-transform active:scale-95 bg-white text-black"
      >
        <div className="flex items-center gap-3.5">
          <div className="h-[46px] w-[46px] rounded-[14px] flex items-center justify-center border border-black/10" style={{ backgroundColor: "rgba(0,0,0,0.06)" }}>
            <Calendar className="h-[22px] w-[22px] stroke-[2.2]" />
          </div>
          <div className="text-left flex flex-col justify-center">
            <span className="font-display font-bold text-[19px] leading-tight tracking-tight text-black">
              Get Prosite
            </span>
            <span className="font-body text-[15px] leading-tight tracking-tight text-black/60">
              One payment. Lifetime identity.
            </span>
          </div>
        </div>
        <div className="h-[46px] w-[46px] rounded-[14px] flex items-center justify-center border border-black/10" style={{ backgroundColor: "rgba(0,0,0,0.06)" }}>
          <ArrowRight className="h-[22px] w-[22px] stroke-[2.2]" />
        </div>
      </button>
    </motion.div>
  );
}
