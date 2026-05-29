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
    <section id="nfc" data-testid="nfc-section" className="relative py-32 sm:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(245,158,11,0.08)_0%,rgba(5,5,10,0)_70%)]" />

      <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 relative"
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            style={{ perspective: 1200 }}
          >
            <div className="absolute -inset-8 rounded-[3rem] bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.22),transparent_60%)]" />
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass">
              <motion.div
                style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative">
                  <img
                    src={nfcImg}
                    alt="Gold metal NFC card"
                    className="max-h-[78vh] max-w-[78%] object-contain drop-shadow-[0_30px_60px_rgba(245,158,11,0.3)]"
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

              <div className="absolute top-5 left-5 glass-strong rounded-full px-3 py-1.5 text-[10.5px] uppercase tracking-[0.2em] text-amber-200">
                Lifetime · Gold Metal
              </div>
              <div className="absolute bottom-5 right-5 glass rounded-full px-3 py-1.5 text-[10.5px] uppercase tracking-[0.2em] text-white/55">
                Move your cursor →
              </div>
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-amber-300/90 font-body mb-4">
              <Nfc className="h-3.5 w-3.5" />
              The Prosite NFC Card
            </div>
            <h2 className="font-display text-[40px] sm:text-[56px] lg:text-[64px] leading-[0.95] tracking-tight">
              Tap Once. <br />
              <span className="font-editorial italic text-gradient-gold">Leave A Lasting Impression.</span>
            </h2>
            <p className="mt-6 text-white/55 font-body text-base leading-relaxed max-w-md">
              Heavy. Cold. Quietly cinematic. One tap on any iPhone or Android opens your full Prosite —
              instantly. No app downloads. No exchanging numbers. Just unforgettable presence.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {useCases.map((u) => (
                <span key={u} className="glass rounded-full px-3 py-1.5 text-[11.5px] text-white/70 font-body">
                  {u}
                </span>
              ))}
            </div>

            <div className="mt-8 glass-strong rounded-2xl p-5 flex items-center justify-between">
              <div>
                <div className="text-[10.5px] uppercase tracking-[0.22em] text-white/45">Add-On</div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-white/40 line-through font-body text-sm">₹2,500</span>
                  <span className="font-display text-3xl text-gradient-gold">₹999</span>
                </div>
                <div className="mt-1 text-[11.5px] text-white/55">Lifetime · One-time payment</div>
              </div>
              <div className="flex items-center gap-2 text-[11.5px] text-emerald-300/90">
                <Check className="h-3.5 w-3.5" />
                Default selected at checkout
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
