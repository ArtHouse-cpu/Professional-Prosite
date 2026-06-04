import React from "react";
import { motion } from "framer-motion";
import { Star, TrendingUp, Inbox, ShoppingBag, Users, UserPlus, Globe, Volume2, VolumeX } from "lucide-react";
import CountUp from "./CountUp";

const testimonials = [
  {
    quote:
      "I stopped sending 6 different links. Brands started replying within an hour. My Prosite did 80% of the pitching.",
    name: "Mira Patel",
    role: "Editorial Photographer · Mumbai",
    img: "https://images.unsplash.com/photo-1675726205553-4e348f24da2c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0JTIwZGFyayUyMG1vb2R5fGVufDB8fHx8MTc3OTk2NDQ1OHww&ixlib=rb-4.1.0&q=85",
    video: "https://res.cloudinary.com/dzwto9zbu/video/upload/v1780572271/Artist___Sanya_joined_Atives_Created_her_Unified_Portfolio_Earned_Big._hgbdz6.mp4", // Replace with real vertical video
  },
  {
    quote:
      "It feels like an app, not a portfolio. Clients keep asking who built it. The NFC card is my favorite trick at events.",
    name: "Arjun Verma",
    role: "Motion Designer · Bengaluru",
    img: "https://images.unsplash.com/photo-1762291629616-3e2c044c79a0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwzfHxjcmVhdGl2ZSUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0JTIwZGFyayUyMG1vb2R5fGVufDB8fHx8MTc3OTk2NDQ1OHww&ixlib=rb-4.1.0&q=85",
     video: "https://res.cloudinary.com/dzwto9zbu/video/upload/v1780587971/Soulful_Mixed_Media_Art_by_Shiuli___Lifetime_PRO_Member_on_Atives___Join_the_Creative_Revolution_qvdzze.mp4",
  },
  {
    quote:
      "I sold 47 course seats in the first week of switching. The checkout, the reviews, the trust — it just compounds.",
    name: "Sneha Iyer",
    role: "Illustrator & Educator · Pune",
    img: "https://images.pexels.com/photos/8089650/pexels-photo-8089650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
     video: "https://res.cloudinary.com/dzwto9zbu/video/upload/v1780587989/lavanya_P._Artist_1_oryczo.mp4",
  },
  {
    quote:
      "Lifetime pricing was the easiest creative purchase I've made. It pays for itself with one client inquiry.",
    name: "Rohan D'Souza",
    role: "Filmmaker · Goa",
    img: "https://images.unsplash.com/photo-1576280314550-773c50583407?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwzfHxmaWxtJTIwZGlyZWN0b3IlMjBjaW5lbWF0aWMlMjBsaWdodGluZ3xlbnwwfHx8fDE3Nzk5NjQ0NTh8MA&ixlib=rb-4.1.0&q=85",
     video: "https://res.cloudinary.com/dzwto9zbu/video/upload/v1780588023/Bahaar_Testimonial_8k_1_jmj6p8.mp4",
  },
  {
    quote:
      "Lifetime pricing was the easiest creative purchase I've made. It pays for itself with one client inquiry.",
    name: "Rohan D'Souza",
    role: "Filmmaker · Goa",
    img: "https://images.unsplash.com/photo-1576280314550-773c50583407?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwzfHxmaWxtJTIwZGlyZWN0b3IlMjBjaW5lbWF0aWMlMjBsaWdodGluZ3xlbnwwfHx8fDE3Nzk5NjQ0NTh8MA&ixlib=rb-4.1.0&q=85",
     video: "https://res.cloudinary.com/dzwto9zbu/video/upload/v1780587936/Self-Taught_Charcoal_Artist_Featured_in_India_Today___Meet_Preeti___Lifetime_PRO_at_Atives_calvqz.mp4",
  },
];

const metrics = [
  {
    icon: Users,
    label: "Served",
    value: <CountUp end={50} prefix="+" suffix="K" />,
  },
  {
    icon: UserPlus,
    label: "Joined",
    value: <CountUp end={10} prefix="+" suffix="K" />,
  },
  {
    icon: TrendingUp,
    label: "Generated",
    value: <CountUp end={500} prefix="+" suffix="K" />,
  },
  {
    icon: Globe,
    label: "Countries",
    value: <CountUp end={3} />,
  },
];

function VideoCard({ t }) {
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
    <>
      <video
        ref={videoRef}
        src={t.video}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 pointer-events-none" />
      
      {/* Mute toggle button */}
      <button
        onClick={toggleMute}
        aria-label="Toggle Volume"
        className="absolute bottom-6 right-6 z-20 h-10 w-10 rounded-full glass bg-black/40 border border-white/10 flex items-center justify-center hover:bg-white/20 transition-all active:scale-95"
      >
        {isMuted ? (
          <VolumeX className="h-5 w-5 text-white" />
        ) : (
          <Volume2 className="h-5 w-5 text-white" />
        )}
      </button>

      <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full justify-between pointer-events-none">
        <div className="flex gap-0.5">
          {[0, 1, 2, 3, 4].map((s) => (
            <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400 drop-shadow-md" />
          ))}
        </div>
        <div>
          <blockquote className="font-editorial italic text-white text-[18px] sm:text-[24px] leading-[1.3] drop-shadow-md mb-4 sm:mb-6">
            “{t.quote}”
          </blockquote>
          <figcaption className="flex items-center gap-3 pr-12">
            <img src={t.img} alt={t.name} className="h-10 w-10 rounded-full object-cover ring-2 ring-white/20" loading="lazy" />
            <div>
              <div className="text-[14px] text-white font-semibold drop-shadow">{t.name}</div>
              <div className="text-[12px] text-white/70 drop-shadow">{t.role}</div>
            </div>
          </figcaption>
        </div>
      </div>
    </>
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

        {/* Testimonials */}
        <div className="mt-12 relative w-full lg:overflow-hidden">
          {/* Subtle edge fade masks for desktop */}
          <div className="hidden lg:block pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#05050A] to-transparent z-10" />
          <div className="hidden lg:block pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#05050A] to-transparent z-10" />
          
          <div className="flex gap-4 sm:gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none hide-scrollbar pb-8 -mx-5 px-[10vw] sm:-mx-8 sm:px-[15vw] lg:mx-0 lg:px-0 lg:w-max lg:[animation:marquee_40s_linear_infinite] lg:hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((t, i) => (
              <motion.figure
                key={t.name + i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i % testimonials.length) * 0.06 }}
                className={`snap-center lg:snap-start shrink-0 w-[80vw] max-w-[320px] sm:max-w-[340px] lg:max-w-[380px] rounded-3xl glass relative overflow-hidden flex flex-col ${
                  t.video ? "h-[480px] sm:h-[520px] lg:h-[560px] p-0" : "p-6 sm:p-8 justify-between h-[480px] sm:h-[520px] lg:h-[560px]"
                }`}
              >
              {t.video ? (
                <VideoCard t={t} />
              ) : (
                <>
                  <div className="flex gap-0.5 mb-5">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <Star key={s} className="h-3.5 w-3.5 fill-amber-300 text-amber-300" />
                    ))}
                  </div>
                  <blockquote className="font-editorial italic text-white text-[20px] sm:text-[22px] leading-[1.35] mb-6">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-auto flex items-center gap-3">
                    <img src={t.img} alt={t.name} className="h-10 w-10 rounded-full object-cover ring-1 ring-white/15" loading="lazy" />
                    <div>
                      <div className="text-[13.5px] text-white font-semibold">{t.name}</div>
                      <div className="text-[11.5px] text-white/45">{t.role}</div>
                    </div>
                  </figcaption>
                </>
              )}
            </motion.figure>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
