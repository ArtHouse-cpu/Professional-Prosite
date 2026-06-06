import React from "react";
import {
  Camera,
  Film,
  Brush,
  Music,
  Palette,
  PenTool,
  Video,
  Layers,
  Aperture,
  Mic2,
  Scissors,
  Wand2,
} from "lucide-react";

const items = [
  { icon: Camera, label: "Photographers" },
  { icon: Film, label: "Filmmakers" },
  { icon: Brush, label: "Illustrators" },
  { icon: Music, label: "Music Producers" },
  { icon: Palette, label: "Designers" },
  { icon: PenTool, label: "Tattoo Artists" },
  { icon: Video, label: "Video Editors" },
  { icon: Layers, label: "Motion Designers" },
  { icon: Aperture, label: "UI/UX Designers" },
  { icon: Mic2, label: "Content Creators" },
  { icon: Scissors, label: "Creative Agencies" },
  { icon: Wand2, label: "Freelancers" },
];

export default function CreatorMarquee() {
  const list = [...items, ...items];
  return (
    <section data-testid="creator-marquee" className="relative py-12 sm:py-14 overflow-hidden border-y border-white/[0.05]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-prosite-bg to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-prosite-bg to-transparent z-10" />
      </div>
      <div className="text-center text-[10.5px] uppercase tracking-[0.28em] text-white/40 mb-7 font-body">
        Designed for every kind of creative
      </div>
      <div className="relative overflow-hidden">
        <div className="flex gap-8 sm:gap-12 marquee whitespace-nowrap will-change-transform">
          {list.map(({ icon: Icon, label }, i) => (
            <div key={i} className="inline-flex items-center gap-2.5 shrink-0">
              <Icon className="h-4 w-4 text-prosite-electric/80" strokeWidth={1.6} />
              <span className="font-display text-xl sm:text-2xl text-white/55">{label}</span>
              <span className="text-white/15 ml-3">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
