import React from "react";
import { motion } from "framer-motion";
import {
  Instagram,
  Youtube,
  Folder,
  FileText,
  Link2,
  Hash,
  Cloud,
  StickyNote,
  Check,
  Briefcase,
  ShoppingBag,
  GraduationCap,
  Calendar,
  Star,
  MessageSquare,
  CreditCard,
  Users, 
  Layout,
} from "lucide-react";

const left = [
  { icon: Instagram, label: "Instagram" },
  { icon: Folder, label: "Behance" },
  { icon: Cloud, label: "Drive Folders" },
  { icon: FileText, label: "PDF Portfolio" },
  { icon: Youtube, label: "YouTube" },
  { icon: Link2, label: "Bio Links" },
  { icon: StickyNote, label: "Notion Page" },
  { icon: Hash, label: "Dropbox" },
];

const right = [
  { icon: Layout, label: "Portfolio" },
  { icon: ShoppingBag, label: "Products" },
  { icon: Briefcase, label: "Services" },
  { icon: Calendar, label: "Events" },
  { icon: GraduationCap, label: "Courses" },
  { icon: Star, label: "Social" },
  { icon: MessageSquare, label: "Contact" },
  { icon: Users, label: "Network" },
];

export default function Comparison() {
  return (
    <section data-testid="comparison-section" className="relative py-24 sm:py-32">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <div className="text-[11px] uppercase tracking-[0.22em] text-prosite-electric/80 font-body mb-4">
            The Switch
          </div>
          <h2 className="font-display text-[36px] sm:text-[56px] lg:text-[68px] leading-[0.95] tracking-tight">
            Stop Sharing 10 Links. <br />
            <span className="text-gradient-luxe">Share One Prosite.</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 items-stretch">
          {/* Chaos */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl glass p-6 sm:p-8 overflow-hidden"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="text-[11px] uppercase tracking-[0.2em] text-red-300/80">Before</div>
              <div className="text-[11px] text-white/35 font-body">creator-workflow.zip</div>
            </div>
            <div className="font-display text-2xl sm:text-3xl mb-6 text-white/85">
              The 10-link mess.
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {left.map(({ icon: Icon, label }, i) => (
                <div
                  key={label}
                  className="glass rounded-xl px-3 py-2.5 flex items-center gap-2.5"
                  style={{ transform: `rotate(${(i % 2 === 0 ? -1 : 1) * 0.6}deg)` }}
                >
                  <Icon className="h-4 w-4 text-white/55" />
                  <span className="text-[12.5px] text-white/70">{label}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-2 text-[12px] text-red-300/80">
              <span className="h-1.5 w-1.5 rounded-full bg-red-400 pulse-dot" />
              <span>Sent 4 messages. Client forgot which link mattered.</span>
            </div>
          </motion.div>

          {/* Prosite */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative rounded-3xl glass p-6 sm:p-8 overflow-hidden ring-glow"
          >
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full radial-blue" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full radial-purple" />

            <div className="relative flex items-center justify-between mb-5">
              <div className="text-[11px] uppercase tracking-[0.2em] text-emerald-300/90">After</div>
              <div className="text-[11px] text-white/45 font-body">pro/itsmkvisuals</div>
            </div>
            <div className="relative font-display text-2xl sm:text-3xl mb-6">
              One link. <span className="font-editorial italic text-prosite-neon">Everything.</span>
            </div>
            <div className="relative grid grid-cols-2 gap-2.5">
              {right.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="glass-strong rounded-xl px-3 py-2.5 flex items-center gap-2.5"
                >
                  <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-prosite-royal/30 to-prosite-purple/30 flex items-center justify-center">
                    <Icon className="h-3.5 w-3.5 text-white" />
                  </div>
                  <span className="text-[12.5px] text-white">{label}</span>
                  <Check className="ml-auto h-3.5 w-3.5 text-emerald-400" />
                </div>
              ))}
            </div>
            <div className="relative mt-6 flex items-center gap-2 text-[12px] text-emerald-300/90">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 pulse-dot" />
              <span>Sent 1 link. Client said “this is gorgeous” in 4 minutes.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
