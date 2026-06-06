import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Nfc, Check } from "lucide-react";

const useCases = ["Networking events", "Exhibitions", "Client meetings", "Cafes", "Conferences", "Studio visits"];

export default function NFCSection({ nfcImg }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 120, damping: 14 });
  const sy = useSpring(y, { stiffness: 120, damping: 14 });
  const rotY = useTransform(sx, [-1, 1], [-22, 22]);
  const rotX = useTransform(sy, [-1, 1], [14, -14]);
  const shine = useTransform(sx, [-1, 1], ["20%", "80%"]);

  const onMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    x.set(px * 2 - 1);
    y.set(py * 2 - 1);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="nfc" data-testid="nfc-section" className="relative py-20 sm:py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(245,158,11,0.08)_0%,rgba(5,5,10,0)_70%)]" />

      <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 relative order-2 lg:order-1 mt-4 lg:mt-0"
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            style={{ perspective: 1200 }}
          >
            <div className="absolute -inset-4 sm:-inset-8 rounded-[3rem] bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.22),transparent_60%)]" />
            <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden glass">
              <motion.div
                style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/dzwto9zbu/image/upload/v1780505654/ChatGPT_Image_Jun_3_2026_10_09_45_PM_veceg4.png"
                    alt="Gold metal NFC card"
                    className="max-h-[60%] sm:max-h-[78vh] max-w-[85%] sm:max-w-[78%] object-contain drop-shadow-[0_30px_60px_rgba(245,158,11,0.3)]"
                    style={{ maxHeight: "420px" }}
                    loading="lazy"
                  />
                  {/* Specular shine */}
                  <motion.div
                    aria-hidden
                    className="absolute inset-0 pointer-events-none mix-blend-screen"
                    style={{
                      background: useTransform(
                        shine,
                        (v) =>
                          `linear-gradient(115deg, transparent ${parseFloat(v) - 18}%, rgba(255,255,255,0.45) ${v}, transparent ${parseFloat(v) + 18}%)`
                      ),
                    }}
                  />
                </div>
              </motion.div>

              <div className="absolute top-4 sm:top-5 left-4 sm:left-5 glass-strong rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5 text-[9px] sm:text-[10.5px] uppercase tracking-[0.2em] text-amber-200">
                Lifetime · Gold Metal
              </div>
              <div className="hidden sm:block absolute bottom-5 right-5 glass rounded-full px-3 py-1.5 text-[10.5px] uppercase tracking-[0.2em] text-white/55">
                Move your cursor →
              </div>
              <div className="sm:hidden absolute bottom-4 right-4 glass rounded-full px-2.5 py-1 text-[9px] uppercase tracking-[0.2em] text-white/55">
                Touch to rotate
              </div>
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5 order-1 lg:order-2 text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start gap-2 text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-amber-300/90 font-body mb-3 sm:mb-4">
              <Nfc className="h-3.5 w-3.5" />
              The Prosite NFC Card
            </div>
            <h2 className="font-display text-[36px] sm:text-[56px] lg:text-[64px] leading-[1] tracking-tight">
              Tap Once. <br />
              <span className="font-editorial italic text-gradient-gold">Leave A Lasting Impression.</span>
            </h2>
            <p className="mt-4 sm:mt-6 text-white/55 font-body text-[15px] sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
              Heavy. Cold. Quietly cinematic. One tap on any iPhone or Android opens your full Prosite —
              instantly. No app downloads. No exchanging numbers. Just unforgettable presence.
            </p>

            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-1.5 sm:gap-2 max-w-sm mx-auto lg:mx-0">
              {useCases.map((u) => (
                <span key={u} className="glass rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10.5px] sm:text-[11.5px] text-white/70 font-body">
                  {u}
                </span>
              ))}
            </div>

            <div className="mt-8 glass-strong rounded-xl sm:rounded-2xl p-4 sm:p-5 flex items-center justify-center lg:justify-between max-w-xs mx-auto lg:mx-0 lg:max-w-none">
              <div className="text-center lg:text-left">
                <div className="text-[9.5px] sm:text-[10.5px] uppercase tracking-[0.22em] text-white/45">Add-On</div>
                <div className="mt-1 flex items-baseline justify-center lg:justify-start gap-2">
                  <span className="text-white/40 line-through font-body text-xs sm:text-sm">₹2,500</span>
                  <span className="font-display text-2xl sm:text-3xl text-gradient-gold">₹999</span>
                </div>
                <div className="mt-1 text-[10.5px] sm:text-[11.5px] text-white/55">Lifetime · One-time payment</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
