import React from "react";
import { motion } from "framer-motion";
import { Star, TrendingUp, Inbox, ShoppingBag } from "lucide-react";
import CountUp from "./CountUp";

const testimonials = [
  {
    quote:
      "I stopped sending 6 different links. Brands started replying within an hour. My Prosite did 80% of the pitching.",
    name: "Mira Patel",
    role: "Editorial Photographer · Mumbai",
    img: "https://images.unsplash.com/photo-1675726205553-4e348f24da2c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0JTIwZGFyayUyMG1vb2R5fGVufDB8fHx8MTc3OTk2NDQ1OHww&ixlib=rb-4.1.0&q=85",
  },
  {
    quote:
      "It feels like an app, not a portfolio. Clients keep asking who built it. The NFC card is my favorite trick at events.",
    name: "Arjun Verma",
    role: "Motion Designer · Bengaluru",
    img: "https://images.unsplash.com/photo-1762291629616-3e2c044c79a0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwzfHxjcmVhdGl2ZSUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0JTIwZGFyayUyMG1vb2R5fGVufDB8fHx8MTc3OTk2NDQ1OHww&ixlib=rb-4.1.0&q=85",
  },
  {
    quote:
      "I sold 47 course seats in the first week of switching. The checkout, the reviews, the trust — it just compounds.",
    name: "Sneha Iyer",
    role: "Illustrator & Educator · Pune",
    img: "https://images.pexels.com/photos/8089650/pexels-photo-8089650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    quote:
      "Lifetime pricing was the easiest creative purchase I've made. It pays for itself with one client inquiry.",
    name: "Rohan D'Souza",
    role: "Filmmaker · Goa",
    img: "https://images.unsplash.com/photo-1576280314550-773c50583407?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwzfHxmaWxtJTIwZGlyZWN0b3IlMjBjaW5lbWF0aWMlMjBsaWdodGluZ3xlbnwwfHx8fDE3Nzk5NjQ0NTh8MA&ixlib=rb-4.1.0&q=85",
  },
];

const metrics = [
  { icon: Inbox, label: "Avg. inquiries", value: <><span>+</span><CountUp end={312} /><span>%</span></> },
  { icon: ShoppingBag, label: "Creator sales (90d)", value: <><span>₹</span><CountUp end={4.2} decimals={1} /><span> Cr</span></> },
  { icon: TrendingUp, label: "Avg. profile views", value: <><span>+</span><CountUp end={5.7} decimals={1} /><span>×</span></> },
  { icon: Star, label: "Avg. client rating", value: <><CountUp end={4.9} decimals={1} /><span> / 5</span></> },
];

export default function SocialProof() {
  return (
    <section data-testid="social-proof-section" className="relative py-28 sm:py-36">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <div className="text-[11px] uppercase tracking-[0.22em] text-prosite-electric/80 font-body mb-4">
            Already growing
          </div>
          <h2 className="font-display text-[36px] sm:text-[56px] lg:text-[64px] leading-[0.95] tracking-tight">
            Creators are already <br />
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
              <div className="font-display text-[28px] sm:text-[34px] text-gradient-luxe leading-none">
                {value}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="rounded-3xl glass p-7 sm:p-8 relative"
            >
              <div className="flex gap-0.5 mb-5">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star key={s} className="h-3.5 w-3.5 fill-amber-300 text-amber-300" />
                ))}
              </div>
              <blockquote className="font-editorial italic text-white text-[20px] sm:text-[22px] leading-[1.35]">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <img src={t.img} alt={t.name} className="h-10 w-10 rounded-full object-cover ring-1 ring-white/15" loading="lazy" />
                <div>
                  <div className="text-[13.5px] text-white font-semibold">{t.name}</div>
                  <div className="text-[11.5px] text-white/45">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
