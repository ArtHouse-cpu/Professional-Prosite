import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Crown, ShieldCheck, Lock, ArrowRight, Sparkles, Nfc } from "lucide-react";
import { toast, Toaster } from "sonner";

const NFC_IMG = "https://static.prod-images.emergentagent.com/jobs/62fc2aec-7228-49b1-af3a-7d731b78ca16/images/5a4b8330a8bbad2d51c269ca085e0dc24f6df79f1c1314ebc2271512f6869659.png";

const included = [
  "Beautiful Prosite",
  "Mobile Apps",
  "AI Assistant",
  "Super Inbox",
  "Sell Products & Services",
  "Sell Courses & Tickets",
  "Unlimited Sharing",
  "Lifetime Access",
];

export default function CheckoutModal({ open, onClose }) {
  const [nfc, setNfc] = useState(true);
  const [step, setStep] = useState("review"); // review | details | success
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open) {
      setStep("review");
      setLoading(false);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const base = 899;
  const nfcAddon = 999;
  const total = base + (nfc ? nfcAddon : 0);
  const saved = (1799 - base) + (nfc ? 2500 - nfcAddon : 0);

  const handlePay = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast.error("Please enter your name and email to continue.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep("success");
    }, 1400);
  };

  return (
    <>
      <Toaster theme="dark" position="top-center" toastOptions={{ style: { background: "#0A0A12", border: "1px solid rgba(255,255,255,0.08)", color: "#fff" } }} />
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center"
            data-testid="checkout-modal"
          >
            {/* Backdrop */}
            <div
              data-testid="checkout-backdrop"
              onClick={onClose}
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full sm:max-w-[920px] mx-auto rounded-t-3xl sm:rounded-3xl glass-strong overflow-hidden max-h-[92vh] flex flex-col"
            >
              {/* Glow */}
              <div className="pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full radial-blue" />
              <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full radial-purple" />

              {/* Header */}
              <div className="relative flex items-center justify-between px-6 sm:px-8 py-5 border-b border-white/[0.06]">
                <div className="flex items-center gap-2.5">
                  <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-prosite-royal to-prosite-purple flex items-center justify-center">
                    <Sparkles className="h-3.5 w-3.5 text-white" />
                  </div>
                  <div>
                    <div className="font-display text-base leading-none">Prosite Checkout</div>
                    <div className="text-[10.5px] text-white/45 mt-1 flex items-center gap-1.5">
                      <Lock className="h-3 w-3" /> Encrypted · 256-bit secure
                    </div>
                  </div>
                </div>
                <button
                  data-testid="checkout-close-btn"
                  onClick={onClose}
                  aria-label="Close checkout"
                  className="h-9 w-9 rounded-full glass flex items-center justify-center hover:bg-white/[0.08]"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {step !== "success" ? (
                <div className="relative grid grid-cols-1 md:grid-cols-5 gap-0 overflow-y-auto">
                  {/* Left — Summary */}
                  <div className="md:col-span-3 p-6 sm:p-8 border-b md:border-b-0 md:border-r border-white/[0.06]">
                    <div className="inline-flex items-center gap-1.5 glass rounded-full px-3 py-1 text-[10.5px] uppercase tracking-[0.2em] text-amber-200">
                      <Crown className="h-3 w-3" /> Lifetime Membership
                    </div>
                    <div className="mt-5 flex items-baseline gap-3">
                      <span className="font-display text-[56px] sm:text-[64px] leading-none tracking-tight text-gradient-luxe">₹{base}</span>
                      <span className="text-white/40 line-through font-body">₹1,799</span>
                      <span className="text-[11.5px] text-emerald-300/90 font-body">50% off</span>
                    </div>
                    <div className="mt-1 text-[12.5px] text-white/55">One-time · Lifetime access · No subscriptions</div>

                    <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-2.5">
                      {included.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-[13px] text-white/85 font-body">
                          <Check className="h-3.5 w-3.5 text-prosite-electric" strokeWidth={2.4} />
                          {f}
                        </div>
                      ))}
                    </div>

                    {/* NFC add-on */}
                    <button
                      type="button"
                      data-testid="checkout-toggle-nfc"
                      onClick={() => setNfc((v) => !v)}
                      className={`mt-7 w-full text-left rounded-2xl p-4 border transition ${
                        nfc ? "border-amber-300/40 bg-amber-300/[0.04]" : "border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04]"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="relative h-16 w-24 rounded-lg overflow-hidden bg-black/40 ring-1 ring-amber-200/30">
                          <img src={NFC_IMG} alt="NFC card" className="absolute inset-0 h-full w-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <Nfc className="h-3.5 w-3.5 text-amber-300" />
                            <span className="text-[13.5px] font-semibold">Lifetime Gold Metal NFC Card</span>
                          </div>
                          <div className="mt-1 text-[11.5px] text-white/55">Tap to share your Prosite anywhere.</div>
                          <div className="mt-1 flex items-baseline gap-2">
                            <span className="text-white/40 line-through text-[12px]">₹2,500</span>
                            <span className="text-gradient-gold font-display text-[18px]">₹{nfcAddon}</span>
                          </div>
                        </div>
                        <div className={`h-5 w-5 rounded-md flex items-center justify-center ring-1 ${
                          nfc ? "bg-amber-300 ring-amber-300" : "bg-transparent ring-white/25"
                        }`}>
                          {nfc && <Check className="h-3.5 w-3.5 text-black" strokeWidth={3} />}
                        </div>
                      </div>
                    </button>

                    <div className="mt-5 flex items-center gap-3 text-[11.5px] text-white/45">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                      30-day creator guarantee · Refund if you don't love it.
                    </div>
                  </div>

                  {/* Right — Total + form */}
                  <div className="md:col-span-2 p-6 sm:p-8 bg-black/30">
                    <div className="text-[10.5px] uppercase tracking-[0.22em] text-white/45 mb-4">Order Summary</div>
                    <div className="space-y-2.5 text-[13px] text-white/80 font-body">
                      <div className="flex items-center justify-between">
                        <span>Lifetime Membership</span>
                        <span>₹{base}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Gold NFC Card {nfc ? "" : "(not added)"}</span>
                        <span className={nfc ? "" : "text-white/35"}>{nfc ? `₹${nfcAddon}` : "—"}</span>
                      </div>
                      <div className="flex items-center justify-between text-white/50 text-[11.5px]">
                        <span>You save</span>
                        <span className="text-emerald-300/90">−₹{saved}</span>
                      </div>
                    </div>
                    <div className="my-5 h-px bg-white/[0.06]" />
                    <div className="flex items-end justify-between">
                      <span className="text-[12.5px] uppercase tracking-[0.18em] text-white/55">Total · One-time</span>
                      <span data-testid="checkout-total" className="font-display text-3xl text-gradient-luxe">₹{total}</span>
                    </div>

                    <form onSubmit={handlePay} className="mt-6 space-y-3" data-testid="checkout-form">
                      <Field
                        label="Full name"
                        placeholder="e.g. Mira Patel"
                        value={form.name}
                        onChange={(v) => setForm({ ...form, name: v })}
                        testid="checkout-input-name"
                      />
                      <Field
                        label="Email"
                        type="email"
                        placeholder="you@studio.com"
                        value={form.email}
                        onChange={(v) => setForm({ ...form, email: v })}
                        testid="checkout-input-email"
                      />
                      <Field
                        label="Phone (optional)"
                        placeholder="+91 ..."
                        value={form.phone}
                        onChange={(v) => setForm({ ...form, phone: v })}
                        testid="checkout-input-phone"
                      />
                      <button
                        type="submit"
                        data-testid="checkout-pay-btn"
                        disabled={loading}
                        className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-6 py-3.5 font-semibold text-[14px] hover:bg-white/95 transition disabled:opacity-70 ring-glow"
                      >
                        {loading ? (
                          <>
                            <span className="h-3 w-3 rounded-full border-2 border-black/70 border-t-transparent animate-spin" />
                            Securing your lifetime…
                          </>
                        ) : (
                          <>
                            Pay ₹{total} · Lifetime
                            <ArrowRight className="h-4 w-4" />
                          </>
                        )}
                      </button>
                      <div className="text-[10.5px] text-white/40 text-center font-body">
                        This is a mock checkout for demo purposes — no payment will be charged.
                      </div>
                    </form>
                  </div>
                </div>
              ) : (
                <SuccessView nfc={nfc} total={total} onClose={onClose} />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const Field = ({ label, value, onChange, type = "text", placeholder, testid }) => (
  <label className="block">
    <span className="block text-[10.5px] uppercase tracking-[0.2em] text-white/45 mb-1.5">{label}</span>
    <input
      data-testid={testid}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-prosite-electric focus:bg-white/[0.06] outline-none px-3.5 py-2.5 text-[13.5px] text-white placeholder:text-white/30 transition font-body"
    />
  </label>
);

const SuccessView = ({ nfc, total, onClose }) => (
  <div className="relative p-10 sm:p-14 text-center" data-testid="checkout-success">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full radial-blue" />
    </div>
    <div className="relative">
      <div className="mx-auto h-16 w-16 rounded-2xl glass-strong flex items-center justify-center ring-glow">
        <Check className="h-7 w-7 text-emerald-400" strokeWidth={2.5} />
      </div>
      <h3 className="mt-6 font-display text-3xl sm:text-4xl tracking-tight">
        Welcome to <span className="font-editorial italic text-prosite-neon">Prosite</span>.
      </h3>
      <p className="mt-3 text-white/55 font-body text-[14px] max-w-md mx-auto">
        Your lifetime membership is reserved {nfc ? "and your Gold NFC Card will ship soon." : "."}{" "}
        We've sent a confirmation to your email.
      </p>
      <div className="mt-6 inline-flex items-center gap-2 glass rounded-full px-3.5 py-1.5 text-[11.5px] text-white/70">
        <Lock className="h-3 w-3" /> Total paid · ₹{total} · Lifetime
      </div>
      <div className="mt-8">
        <button
          onClick={onClose}
          data-testid="checkout-success-close"
          className="rounded-full bg-white text-black px-6 py-3 font-semibold text-[13.5px]"
        >
          Continue exploring
        </button>
      </div>
    </div>
  </div>
);
