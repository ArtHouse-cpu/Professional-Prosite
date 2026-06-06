import React from "react";
import { motion } from "framer-motion";
import { Star, TrendingUp, Inbox, ShoppingBag, Users, UserPlus, Globe, Volume2, VolumeX } from "lucide-react";
import CountUp from "./CountUp";

const videoTestimonials = [
  { video: "https://res.cloudinary.com/dzwto9zbu/video/upload/v1780572271/Artist___Sanya_joined_Atives_Created_her_Unified_Portfolio_Earned_Big._hgbdz6.mp4" },
  { video: "https://res.cloudinary.com/dzwto9zbu/video/upload/v1780587971/Soulful_Mixed_Media_Art_by_Shiuli___Lifetime_PRO_Member_on_Atives___Join_the_Creative_Revolution_qvdzze.mp4" },
  { video: "https://res.cloudinary.com/dzwto9zbu/video/upload/v1780587989/lavanya_P._Artist_1_oryczo.mp4" },
  { video: "https://res.cloudinary.com/dzwto9zbu/video/upload/v1780588023/Bahaar_Testimonial_8k_1_jmj6p8.mp4" },
  { video: "https://res.cloudinary.com/dzwto9zbu/video/upload/v1780587936/Self-Taught_Charcoal_Artist_Featured_in_India_Today___Meet_Preeti___Lifetime_PRO_at_Atives_calvqz.mp4" },
  { video: "https://res.cloudinary.com/dzwto9zbu/video/upload/v1780640748/Ritika_Joined_Atives_as_Pro_got_her_Free_Prosite_Pro_kit._atives_creativecommunity_prokit_jmlaoj.mp4" },
  { video: "https://res.cloudinary.com/dzwto9zbu/video/upload/v1780640756/Pro_kit_received_qw4xsp.mp4" },
  { video: "https://res.cloudinary.com/dzwto9zbu/video/upload/v1780640765/The_wait_is_over-_Sanya_finally_got_her_Pro_Kit_ugr8kh.mp4" },
  { video: "https://res.cloudinary.com/dzwto9zbu/video/upload/v1780640769/Richa_Joined_as_Pro_got_her_Free_Portfolio_Pro_Kit._atives_creativecommunity_ativeprosite_hpwatt.mp4" },
  { video: "https://res.cloudinary.com/dzwto9zbu/video/upload/v1780640773/SID_Collab_Pro_Kit_1_rhrfg6.mp4" },
  { video: "https://res.cloudinary.com/dzwto9zbu/video/upload/v1780640773/SID_Collab_Pro_Kit_1_rhrfg6.mp4" },
];

const textTestimonials = [
  {
    quote: "I stopped sending 6 different links. Brands started replying within an hour. My Prosite did 80% of the pitching.",
    name: "Mira Patel",
    role: "Editorial Photographer • Mumbai",
    img: "https://images.unsplash.com/photo-1675726205553-4e348f24da2c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0JTIwZGFyayUyMG1vb2R5fGVufDB8fHx8MTc3OTk2NDQ1OHww&ixlib=rb-4.1.0&q=85",
  },
  {
    quote: "It feels like an app, not a portfolio. Clients keep asking who built it. The NFC card is my favorite trick at events.",
    name: "Arjun Verma",
    role: "Motion Designer • Bengaluru",
    img: "https://images.unsplash.com/photo-1762291629616-3e2c044c79a0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwzfHxjcmVhdGl2ZSUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0JTIwZGFyayUyMG1vb2R5fGVufDB8fHx8MTc3OTk2NDQ1OHww&ixlib=rb-4.1.0&q=85",
  },
  {
    quote: "I sold 47 course seats in the first week of switching. The checkout, the reviews, the trust — it just compounds.",
    name: "Sneha Iyer",
    role: "Illustrator & Educator • Pune",
    img: "https://images.pexels.com/photos/8089650/pexels-photo-8089650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    quote: "Lifetime pricing was the easiest creative purchase I've made. It pays for itself with one client inquiry.",
    name: "Rohan D'Souza",
    role: "Filmmaker • Goa",
    img: "https://images.unsplash.com/photo-1576280314550-773c50583407?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwzfHxmaWxtJTIwZGlyZWN0b3IlMjBjaW5lbWF0aWMlMjBsaWdodGluZ3xlbnwwfHx8fDE3Nzk5NjQ0NTh8MA&ixlib=rb-4.1.0&q=85",
  }
];

const metrics = [
  { icon: Users, label: "Served", value: <CountUp end={50} prefix="+" suffix="K" /> },
  { icon: UserPlus, label: "Joined", value: <CountUp end={10} prefix="+" suffix="K" /> },
  { icon: TrendingUp, label: "Generated", value: <CountUp end={500} prefix="+" suffix="K" /> },
  { icon: Globe, label: "Countries", value: <CountUp end={3} /> },
];

function VideoCard({ src }) {
  const [isMuted, setIsMuted] = React.useState(true);
  const videoRef = React.useRef(null);

  const toggleMute = (e) => {
    e.preventDefault();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative h-full w-full rounded-3xl overflow-hidden glass group">
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Mute toggle button */}
      <button
        onClick={toggleMute}
        aria-label="Toggle Volume"
        className="absolute bottom-4 right-4 z-20 h-10 w-10 rounded-full glass bg-black/40 border border-white/10 flex items-center justify-center hover:bg-white/20 transition-all active:scale-95 opacity-0 group-hover:opacity-100 sm:opacity-100"
      >
        {isMuted ? (
          <VolumeX className="h-5 w-5 text-white" />
        ) : (
          <Volume2 className="h-5 w-5 text-white" />
        )}
      </button>
    </div>
  );
}

function TextCard({ t }) {
  return (
    <div className="shrink-0 w-[300px] sm:w-[400px] lg:w-[460px] rounded-2xl glass p-5 sm:p-7 flex flex-col justify-between">
      <div>
        <div className="flex gap-1 mb-4">
          {[0, 1, 2, 3, 4].map((s) => (
            <Star key={s} className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <blockquote className="font-editorial italic text-white text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.45] mb-6">
          “{t.quote}”
        </blockquote>
      </div>
      <figcaption className="flex items-center gap-3">
        <img src={t.img} alt={t.name} className="h-10 w-10 sm:h-11 sm:w-11 rounded-full object-cover ring-1 ring-white/15" loading="lazy" />
        <div>
          <div className="text-[13px] sm:text-[14px] text-white font-semibold">{t.name}</div>
          <div className="text-[11px] sm:text-[12px] text-white/55">{t.role}</div>
        </div>
      </figcaption>
    </div>
  );
}

export default function SocialProof() {
  return (
    <section data-testid="social-proof-section" className="relative py-28 sm:py-36">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <div className="text-[11px] uppercase tracking-[0.22em] text-prosite-electric/80 font-body mb-4">
            Already growing
          </div>
          <h2 className="font-display text-[36px] sm:text-[56px] lg:text-[64px] leading-[0.95] tracking-tight">
            Creatives are already <br />
            <span className="font-editorial italic text-gradient-luxe">growing</span> with Prosites.
          </h2>
        </div>

        {/* Metrics strip */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3">
          {metrics.map(({ icon: Icon, label, value }) => (
            <div key={label} className="rounded-2xl glass p-5">
              <div className="flex items-center gap-2 text-[10.5px] uppercase tracking-[0.2em] text-white/45 mb-3">
                <Icon className="h-3.5 w-3.5" />
                {label}
              </div>
              <div className="font-display text-[28px] sm:text-[34px] text-gradient-luxe leading-none whitespace-nowrap">
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Videos Marquee */}
      <div className="mt-16 relative w-full overflow-hidden max-w-[1920px] mx-auto">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-32 bg-gradient-to-r from-[#05050A] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-32 bg-gradient-to-l from-[#05050A] to-transparent z-10" />
        
        {/* Mobile Video Scroller (Static) */}
        <div 
          className="lg:hidden flex gap-4 sm:gap-6 overflow-x-auto hide-scrollbar pb-8 px-5 sm:px-8 snap-x snap-mandatory"
        >
          {videoTestimonials.map((t, i) => (
            <div
              key={"vid-mob-" + i}
              className="snap-center shrink-0 w-[240px] sm:w-[280px] h-[360px] sm:h-[420px]"
            >
              <VideoCard src={t.video} />
            </div>
          ))}
        </div>

        {/* Desktop Video Marquee (Animated) */}
        <div 
          className="hidden lg:flex gap-6 w-max pb-4 hover:[animation-play-state:paused] px-4 [animation:marquee_50s_linear_infinite]"
        >
          {[...videoTestimonials, ...videoTestimonials, ...videoTestimonials].map((t, i) => (
            <div
              key={"vid-desk-" + i}
              className="shrink-0 lg:w-[320px] lg:h-[480px]"
            >
              <VideoCard src={t.video} />
            </div>
          ))}
        </div>
      </div>

      {/* Text Testimonials Marquee (2 rows) */}
      <div className="mt-8 sm:mt-12 relative w-full overflow-hidden max-w-[1920px] mx-auto">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-32 bg-gradient-to-r from-[#05050A] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-32 bg-gradient-to-l from-[#05050A] to-transparent z-10" />
        
        <div className="flex flex-col gap-4 sm:gap-6">
          {/* Row 1 - Moves Left */}
          <div 
            className="flex gap-4 sm:gap-6 w-max hover:[animation-play-state:paused] pl-8 [animation:marquee_45s_linear_infinite]"
          >
             {[...textTestimonials, ...textTestimonials, ...textTestimonials].map((t, i) => (
               <TextCard key={"text1-" + i} t={t} />
             ))}
          </div>
          
          {/* Row 2 - Moves Right */}
          <div 
            className="flex gap-4 sm:gap-6 w-max hover:[animation-play-state:paused] pr-8 [animation:marquee_45s_linear_infinite_reverse]"
          >
             {[...textTestimonials].reverse().concat([...textTestimonials].reverse(), [...textTestimonials].reverse()).map((t, i) => (
               <TextCard key={"text2-" + i} t={t} />
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}

