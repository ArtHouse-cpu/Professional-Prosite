import React from "react";
import { motion } from "framer-motion";
import {
  Layout,
  Image,
  Bot,
  Inbox,
  Smartphone,
  ShoppingBag,
  Briefcase,
  GraduationCap,
  Ticket,
  BarChart3,
  QrCode,
  Nfc,
  Link2,
  Star,
  GalleryHorizontal,
  CalendarCheck,
  MessageSquare,
  Share2,
  Users,
  Handshake
} from "lucide-react";

const features = [
  { icon: Layout, title: "Beautiful Prosite" },
  { icon: Image, title: "Portfolio Showcase" },
  { icon: Bot, title: "AI Assistant" },
  { icon: Inbox, title: "Super Inbox" },
  { icon: Smartphone, title: "Mobile Apps" },
  { icon: ShoppingBag, title: "Sell Products" },
  { icon: Briefcase, title: "Sell Services" },
  { icon: GraduationCap, title: "Sell Courses" },
  { icon: Ticket, title: "Sell Tickets" },
  { icon: BarChart3, title: "Analytics" },
  { icon: QrCode, title: "QR Sharing" },
  { icon: Nfc, title: "NFC Support" },
  { icon: Link2, title: "Custom Links" },
  { icon: Users, title: "Monetize Network" },
  { icon: GalleryHorizontal, title: "Media Galleries" },
  { icon: Handshake, title: "Get Leads / Hired" },
  { icon: MessageSquare, title: "Unify Contacts" },
  { icon: Share2, title: "Social Integrations" },
];

export default function BentoGrid() {
  return (
    <section id="features" data-testid="bento-grid-section" className="relative py-28 sm:py-36">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-[11px] uppercase tracking-[0.22em] text-prosite-neon/80 font-body mb-4">
            Every Tool. One Identity.
          </div>
          <h2 className="font-display text-[36px] sm:text-[56px] lg:text-[64px] leading-[0.95] tracking-tight">
            Built like a <span className="font-editorial italic">studio</span>.<br />
            Designed like a <span className="text-gradient-luxe">flagship app</span>.
          </h2>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-6 gap-3">
          {/* Featured big card */}
          <div className="lg:col-span-3 lg:row-span-2 rounded-3xl glass p-7 sm:p-8 relative overflow-hidden ring-glow min-h-[300px]">
            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full radial-blue" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full radial-purple" />
            <div className="relative h-full flex flex-col justify-between">
              <div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-white/55 mb-3">Flagship</div>
                <div className="font-display text-[32px] sm:text-[44px] leading-[0.95] tracking-tight">
                  A Prosite that <br />
                  <span className="font-editorial italic text-prosite-neon">works before you speak.</span>
                </div>
                <div className="mt-4 text-[14px] text-white/60 font-body max-w-md leading-relaxed">
                 Professional design, clear storytelling, and built-in credibility that helps people understand your value instantly.
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                {["Professional Identity", "Trusted Presence", "Easy Discovery", "One Link"].map((t) => (
                  <span key={t} className="glass-strong rounded-full px-3 py-1 text-[11.5px] text-white/75">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Auto-Scrolling Rows (Visible only < lg) */}
          <div className="lg:hidden relative overflow-hidden -mx-5 sm:-mx-8 mt-2 pb-6">
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-r from-[#05050A] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-l from-[#05050A] to-transparent z-10 pointer-events-none" />

            <div className="flex flex-col gap-3">
              {/* Upper row: move left */}
              <motion.div 
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
                className="flex gap-3 w-max"
              >
                {[...features.slice(0, 9), ...features.slice(0, 9)].map(({ icon: Icon, title }, i) => (
                  <motion.div
                    key={`top-${i}`}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (i % 9) * 0.05 }}
                    whileHover={{ y: -4 }}
                    className="w-[144px] sm:w-[160px] shrink-0 group relative rounded-2xl glass p-4 min-h-[120px] flex flex-col justify-between hover:bg-white/[0.05] transition-colors overflow-hidden"
                  >
                    <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                         style={{ background: "radial-gradient(120px circle at 50% 0%, rgba(59,130,246,0.25), transparent 70%)" }} />
                    <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-prosite-royal/25 to-prosite-purple/25 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <Icon className="h-4 w-4 text-white" strokeWidth={1.6} />
                    </div>
                    <div className="relative text-[13px] font-medium text-white/85 mt-3 leading-tight transition-colors group-hover:text-white">{title}</div>
                    <span className="absolute top-3 right-3 h-1.5 w-1.5 rounded-full bg-prosite-electric opacity-0 group-hover:opacity-100 transition-opacity pulse-dot" />
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Lower row: move right */}
              <motion.div 
                animate={{ x: ["-50%", "0%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
                className="flex gap-3 w-max"
              >
                {[...features.slice(9, 18), ...features.slice(9, 18)].map(({ icon: Icon, title }, i) => (
                  <motion.div
                    key={`bottom-${i}`}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (i % 9) * 0.05 }}
                    whileHover={{ y: -4 }}
                    className="w-[144px] sm:w-[160px] shrink-0 group relative rounded-2xl glass p-4 min-h-[120px] flex flex-col justify-between hover:bg-white/[0.05] transition-colors overflow-hidden"
                  >
                    <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                         style={{ background: "radial-gradient(120px circle at 50% 0%, rgba(59,130,246,0.25), transparent 70%)" }} />
                    <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-prosite-royal/25 to-prosite-purple/25 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <Icon className="h-4 w-4 text-white" strokeWidth={1.6} />
                    </div>
                    <div className="relative text-[13px] font-medium text-white/85 mt-3 leading-tight transition-colors group-hover:text-white">{title}</div>
                    <span className="absolute top-3 right-3 h-1.5 w-1.5 rounded-full bg-prosite-electric opacity-0 group-hover:opacity-100 transition-opacity pulse-dot" />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Desktop Bento Grid (Visible only lg+) */}
          <div className="hidden lg:contents">
            {features.map(({ icon: Icon, title }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.025 }}
                whileHover={{ y: -4 }}
                className="lg:w-auto lg:col-span-1 shrink-0 group relative rounded-2xl glass p-4 min-h-[120px] flex flex-col justify-between hover:bg-white/[0.05] transition-colors overflow-hidden"
              >
                <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                     style={{ background: "radial-gradient(120px circle at 50% 0%, rgba(59,130,246,0.25), transparent 70%)" }} />
                <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-prosite-royal/25 to-prosite-purple/25 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="h-4 w-4 text-white" strokeWidth={1.6} />
                </div>
                <div className="relative text-[13px] font-medium text-white/85 mt-3 leading-tight transition-colors group-hover:text-white">{title}</div>
                <span className="absolute top-3 right-3 h-1.5 w-1.5 rounded-full bg-prosite-electric opacity-0 group-hover:opacity-100 transition-opacity pulse-dot" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
