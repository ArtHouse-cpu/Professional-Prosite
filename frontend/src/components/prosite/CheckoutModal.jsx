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
  const [nfc, setNfc] = useState(false);
  const [step, setStep] = useState("review"); // review | otp | password | basic-details | payment | success
  const [form, setForm] = useState({ name: "", email: "", phone: "", otp: "", password: "", confirmPassword: "", city: "", creatorType: "Creator" });
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState("");
  const [profileId, setProfileId] = useState("");
  const [user, setUser] = useState(null);
  const [couponInput, setCouponInput] = useState("");
  const [couponLoading, setCouponLoading] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState({
    code: "LP50",
    discount: 50,
    discountType: "percentage",
    timer: 0
  });
  const [couponError, setCouponError] = useState("");
  const [userStatus, setUserStatus] = useState(null);
  const [verificationMode, setVerificationMode] = useState(""); // "" | "otp" | "password"

  const BACKEND_URL = process.env.REACT_APP_API_URL || "https://www.1atives.com";
    (typeof window !== "undefined" && window.location.hostname === "localhost"
      ? "http://localhost:3000"
      : "https://www.1atives.com");

  const fetchCurrentUser = async (authToken, modeParam, emailParam) => {
    setLoading(true);
    try {
      const res = await fetch(`${BACKEND_URL}/api/auth/user`, {
        headers: { "Authorization": `Bearer ${authToken}` },
        credentials: "include"
      });
      const data = await res.json();
      if (data.success && data.user) {
        setUser(data.user);
        setForm((prev) => ({
          ...prev,
          email: data.user.email || emailParam || prev.email,
          phone: data.user.phone || prev.phone,
          name: data.user.fullName || prev.name,
          city: data.user.city || prev.city,
          creatorType: data.user.creatorType || prev.creatorType || "Creator"
        }));

        const needsDetails = !data.user.fullName || data.user.fullName === "Incomplete Profile" || !data.user.city || !data.user.phone;

        if (data.user.plan?.status === "active") {
          if (needsDetails) {
            setStep("basic-details");
            return;
          }
          toast.info("You already have an active membership to Atives!");
          setTimeout(() => {
            window.location.href = `${BACKEND_URL}?token=${encodeURIComponent(authToken)}`;
          }, 2000);
          return;
        }

        // Always proceed directly to payment setup first for non-active plan users
        await setupAndPay(authToken, data.user);
      } else {
        localStorage.removeItem("token");
        setToken("");
        setStep("review");
      }
    } catch (err) {
      console.error("Error fetching current user:", err);
      setStep("review");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (open) {
      const params = new URLSearchParams(window.location.search);
      const tokenParam = params.get("token");
      const modeParam = params.get("mode");
      const emailParam = params.get("email");
      const errorParam = params.get("error");

      if (tokenParam || modeParam || emailParam || errorParam) {
        const url = new URL(window.location.href);
        url.searchParams.delete("token");
        url.searchParams.delete("mode");
        url.searchParams.delete("email");
        url.searchParams.delete("error");
        url.searchParams.delete("checkout");
        window.history.replaceState({}, document.title, url.pathname + url.search);
      }

      if (errorParam) {
        toast.error("Google authentication failed. Please try again.");
      }

      if (tokenParam) {
        localStorage.setItem("token", tokenParam);
        setToken(tokenParam);
        fetchCurrentUser(tokenParam, modeParam, emailParam);
      } else {
        const localToken = localStorage.getItem("token");
        if (localToken) {
          setToken(localToken);
          fetchCurrentUser(localToken);
        } else {
          setStep("review");
          setLoading(false);
        }
      }
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    if (step !== "review") {
      setVerificationMode("");
    }
  }, [step]);

  const base = 1798;
  const original = 1798;

  let netPrice = base;
  if (appliedCoupon) {
    if (appliedCoupon.discountType === "percentage") {
      netPrice = original * (1 - appliedCoupon.discount / 100);
    } else {
      netPrice = original - appliedCoupon.discount;
    }
    netPrice = Math.max(0, Math.round(netPrice));
  }

  const saved = original - netPrice;

  // NFC Calculations based on reference image
  const originalMembership = 1798;
  const originalNfc = 2500;
  const originalTotal = originalMembership + (nfc ? originalNfc : 0);

  if (nfc) {
    netPrice += 899;
  }

  const totalSaved = originalTotal - netPrice;

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const triggerRazorpay = async (authToken, pId, user) => {
    setLoading(true);
    try {
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        toast.error("Failed to load Razorpay SDK. Check your internet connection.");
        return;
      }

      // Create order in backend
      const res = await fetch(`${BACKEND_URL}/api/payment/razorpay/create-order`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${authToken}`
        },
        body: JSON.stringify({
          amount: netPrice,
          productinfo: "Start Membership" + (nfc ? " + NFC Card" : ""),
          paymentType: "direct",
          customerInfo: {
            name: form.name || user?.fullName || "Anurag Tiwari",
            email: form.email || user?.email || "justinanurag0.2@gmail.com",
            contact: form.phone || user?.phone || "+916200950087"
          },
          planDuration: null,
          plan: "start"
        })
      });

      const orderData = await res.json();
      if (!orderData.success) {
        toast.error(orderData.error || "Order creation failed");
        return;
      }

      const options = {
        key: orderData.razorpayKeyId,
        amount: orderData.order.amount,
        currency: orderData.order.currency,
        name: "Atives",
        description: "Start Membership Lifetime Access" + (nfc ? " + NFC Card" : ""),
        order_id: orderData.order.id,
        handler: async function (response) {
          setLoading(true);
          try {
            const verifyRes = await fetch(`${BACKEND_URL}/api/payment/razorpay/verify`, {
              method: "POST",
              credentials: "include",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${authToken}`
              },
              body: JSON.stringify({
                ...response,
                token: authToken
              })
            });

            const verifyData = await verifyRes.json();
            if (verifyData.success) {
              // Activate membership
              const activateRes = await fetch(`${BACKEND_URL}/api/profile/setup/membership/activate`, {
                method: "PUT",
                credentials: "include",
                headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${authToken}`
                },
                body: JSON.stringify({
                  plan: "start",
                  profileId: pId,
                  couponUsed: appliedCoupon,
                  nfcPurchased: nfc,
                  paymentData: {
                    paymentId: response.razorpay_payment_id,
                    orderId: response.razorpay_order_id,
                    amount: netPrice,
                    currency: "INR",
                    status: "captured",
                    method: verifyData.paymentDetails?.method || "Online"
                  }
                })
              });
              const activateData = await activateRes.json();
              if (activateData.success) {
                toast.success("Payment successful! Lifetime access granted.");
                const needsDetails = !user || !user.fullName || user.fullName === "Incomplete Profile" || !user.city || !user.phone;
                if (needsDetails) {
                  setStep("basic-details");
                } else {
                  setStep("success");
                }
              } else {
                toast.error(activateData.error || "Failed to activate membership.");
              }
            } else {
              toast.error(verifyData.error || "Payment verification failed.");
            }
          } catch (err) {
            toast.error("Failed to verify payment signature.");
          } finally {
            setLoading(false);
          }
        },
        prefill: {
          name: form.name || user?.fullName || "",
          email: form.email || user?.email || "",
          contact: form.phone || user?.phone || "",
        },
        theme: {
          color: "#0A0A12",
        },
        modal: {
          ondismiss: function () {
            toast.info("Payment cancelled.");
          }
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      toast.error("Error setting up payment: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const triggerSendOtp = async (pattern) => {
    try {
      const res = await fetch(`${BACKEND_URL}/api/auth/send-otp`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contact: form.email,
          type: "email",
          pattern: pattern,
          checkMembership: true
        }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success(`OTP code sent to your email (${pattern === 'login' ? 'Login' : 'Signup'})!`);
        setVerificationMode("otp");
      } else {
        toast.error(data.error || "Failed to send OTP.");
      }
    } catch (err) {
      toast.error("Failed to connect to authentication server.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const returnUrl = `${window.location.origin}${window.location.pathname}?checkout=true`;
      const res = await fetch(`${BACKEND_URL}/api/auth/google?returnUrl=${encodeURIComponent(returnUrl)}`, {
        credentials: "include"
      });
      const data = await res.json();
      if (data.authUrl) {
        window.location.href = data.authUrl;
      } else {
        toast.error(data.error || "Failed to initiate Google login");
        setLoading(false);
      }
    } catch (err) {
      toast.error("Authentication server communication failed.");
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    setUser(null);
    setUserStatus(null);
    setVerificationMode("");
    setForm({ name: "", email: "", phone: "", otp: "", password: "", confirmPassword: "", city: "", creatorType: "Creator" });
    toast.info("Logged out successfully.");
  };

  const handlePay = async (e) => {
    e.preventDefault();
    if (!form.email) {
      toast.error("Please enter your email to continue.");
      return;
    }
    setLoading(true);
    try {
      const checkRes = await fetch(`${BACKEND_URL}/api/auth/check-email?email=${encodeURIComponent(form.email)}`, {
        credentials: "include"
      });
      const statusData = await checkRes.json();
      setUserStatus(statusData);

      if (statusData.success) {
        if (statusData.exists && statusData.hasBasicDetails) {
          if (statusData.hasPassword) {
            setVerificationMode("password");
            setLoading(false);
          } else {
            toast.info("Google login account detected. You can log in via Google or request an OTP.");
            await triggerSendOtp("login");
          }
        } else if (statusData.exists && !statusData.hasBasicDetails) {
          await triggerSendOtp("login");
        } else {
          await triggerSendOtp("signup");
        }
      } else {
        toast.error(statusData.error || "Failed to check email status");
        setLoading(false);
      }
    } catch (err) {
      toast.error("API error. Ensure the Next.js backend is running.");
      setLoading(false);
    }
  };

  const setupAndPay = async (authToken, user) => {
    setLoading(true);
    try {
      let activeProfileId = user?.plan?.profileId;
      if (!activeProfileId) {
        // Create profile type (step 1)
        const userTypeRes = await fetch(`${BACKEND_URL}/api/profile/setup/user-type`, {
          method: "PUT",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${authToken}`
          },
          body: JSON.stringify({
            profileType: "professional"
          })
        });
        const userTypeData = await userTypeRes.json();
        if (!userTypeData.success) {
          throw new Error(userTypeData.error || "Failed to initialize profile type");
        }
        activeProfileId = userTypeData.profileId;
      }
      setProfileId(activeProfileId);

      // Save plan info
      const saveRes = await fetch(`${BACKEND_URL}/api/profile/setup/membership`, {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${authToken}`
        },
        body: JSON.stringify({
          plan: "start",
          profileId: activeProfileId
        })
      });
      const saveResData = await saveRes.json();
      if (!saveResData.success) {
        throw new Error(saveResData.error || "Failed to save plan in profile");
      }

      // Directly execute payment or activation without showing the "payment" step
      if (netPrice === 0) {
        const activateRes = await fetch(`${BACKEND_URL}/api/profile/setup/membership/activate`, {
          method: "PUT",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${authToken}`
          },
          body: JSON.stringify({
            plan: "start",
            profileId: activeProfileId,
            couponUsed: appliedCoupon,
            nfcPurchased: nfc,
            paymentData: {
              paymentId: `free_${Date.now()}`,
              orderId: `free_${Date.now()}`,
              amount: 0,
              currency: "INR",
              status: "captured",
              method: "free_coupon"
            }
          })
        });
        const activateData = await activateRes.json();
        if (activateData.success) {
          toast.success("Lifetime access activated using free coupon!");
          const needsDetails = !user || !user.fullName || user.fullName === "Incomplete Profile" || !user.city || !user.phone;
          if (needsDetails) {
            setStep("basic-details");
          } else {
            setStep("success");
          }
        } else {
          toast.error(activateData.error || "Failed to activate membership.");
        }
      } else {
        await triggerRazorpay(authToken, activeProfileId, user);
      }
    } catch (err) {
      toast.error(err.message || "Error setting up membership profile");
    } finally {
      setLoading(false);
    }
  };

  const applyCouponCode = async (code) => {
    if (!code.trim()) return;
    setCouponLoading(true);
    setCouponError("");
    
    // Intercept client-side hardcoded coupon LP50
    if (code.trim().toUpperCase() === "LP50") {
      setAppliedCoupon({
        code: "LP50",
        discount: 50,
        discountType: "percentage",
        timer: null,
        startTime: new Date().toISOString()
      });
      toast.success('Coupon "LP50" applied successfully!');
      setCouponInput("");
      setCouponLoading(false);
      return;
    }

    try {
      const res = await fetch(`${BACKEND_URL}/api/coupon/get?code=${encodeURIComponent(code.trim())}&plan=start`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      const data = await res.json();
      if (data.success) {
        const coupon = data.data;
        setAppliedCoupon({
          code: coupon.code,
          discount: coupon.effectiveDiscount || coupon.discount,
          discountType: coupon.effectiveDiscountType || coupon.discountType,
          timer: coupon.timer,
          startTime: new Date().toISOString()
        });
        toast.success(`Coupon "${coupon.code}" applied successfully!`);
        setCouponInput("");
      } else {
        setCouponError(data.error || "Invalid coupon code");
        toast.error(data.error || "Invalid coupon code");
      }
    } catch (err) {
      setCouponError("Failed to verify coupon code");
      toast.error("Failed to verify coupon code");
    } finally {
      setCouponLoading(false);
    }
  };

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    applyCouponCode(couponInput);
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponError("");
    toast.info("Coupon removed.");
  };

  const handlePayOrActivate = async () => {
    if (netPrice === 0) {
      setLoading(true);
      try {
        const activateRes = await fetch(`${BACKEND_URL}/api/profile/setup/membership/activate`, {
          method: "PUT",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify({
            plan: "start",
            profileId: profileId,
            couponUsed: appliedCoupon,
            nfcPurchased: nfc,
            paymentData: {
              paymentId: `free_${Date.now()}`,
              orderId: `free_${Date.now()}`,
              amount: 0,
              currency: "INR",
              status: "captured",
              method: "free_coupon"
            }
          })
        });
        const activateData = await activateRes.json();
        if (activateData.success) {
          toast.success("Lifetime access activated using free coupon!");
          const needsDetails = !user || !user.fullName || user.fullName === "Incomplete Profile" || !user.city || !user.phone;
          if (needsDetails) {
            setStep("basic-details");
          } else {
            setStep("success");
          }
        } else {
          toast.error(activateData.error || "Failed to activate membership.");
        }
      } catch (err) {
        toast.error("Failed to activate free membership.");
      } finally {
        setLoading(false);
      }
    } else {
      triggerRazorpay(token, profileId, user);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (!form.otp) {
      toast.error("Please enter the OTP.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${BACKEND_URL}/api/auth/verify-otp`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          contact: form.email, 
          type: "email", 
          otp: form.otp, 
          pattern: userStatus?.exists ? "login" : "signup" 
        }),
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem("token", data.token);
        setToken(data.token);
        await fetchCurrentUser(data.token);
      } else {
        toast.error(data.error || "Invalid OTP.");
        setLoading(false);
      }
    } catch (err) {
      toast.error("API error during OTP verification.");
      setLoading(false);
    }
  };

  const handlePasswordLogin = async (e) => {
    e.preventDefault();
    if (!form.password) {
      toast.error("Please enter your password.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${BACKEND_URL}/api/auth/login`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contact: form.email,
          password: form.password,
          type: "email"
        })
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem("token", data.token);
        setToken(data.token);
        await fetchCurrentUser(data.token);
      } else {
        toast.error(data.error || "Invalid password.");
        setLoading(false);
      }
    } catch (err) {
      toast.error("Failed to connect to authentication server.");
      setLoading(false);
    }
  };

  const handleBasicDetailsSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.city || !form.creatorType) {
      toast.error("Please fill in all basic profile fields.");
      return;
    }

    if (form.password) {
      if (form.password.length < 6) {
        toast.error("Password must be at least 6 characters.");
        return;
      }
      if (!/[A-Z]/.test(form.password) || !/[a-z]/.test(form.password) || !/\d/.test(form.password) || !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(form.password)) {
        toast.error("Password must contain at least 1 uppercase, 1 lowercase, 1 digit, and 1 special character.");
        return;
      }
      if (form.password !== form.confirmPassword) {
        toast.error("Passwords do not match.");
        return;
      }
    }

    setLoading(true);
    try {
      const body = {
        email: form.email,
        fullName: form.name,
        phone: form.phone,
        city: form.city,
        creatorType: form.creatorType,
      };
      if (form.password) {
        body.password = form.password;
      }

      const res = await fetch(`${BACKEND_URL}/api/auth/signup/complete`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(body)
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Profile details completed!");
        setUser(data.user);
        if (data.token) {
          localStorage.setItem("token", data.token);
          setToken(data.token);
        }
        setStep("success");
      } else {
        toast.error(data.error || "Failed to complete signup.");
        setLoading(false);
      }
    } catch (err) {
      toast.error("Failed to connect to authentication server.");
      setLoading(false);
    }
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
              {step === "review" ? (
                <div className="relative grid grid-cols-1 md:grid-cols-5 gap-0 overflow-y-auto">
                  {/* Left — Summary */}
                  <div className="md:col-span-3 p-6 sm:p-8 border-b md:border-b-0 md:border-r border-white/[0.06]">
                    <div className="inline-flex items-center gap-1.5 glass rounded-full px-3 py-1 text-[10.5px] uppercase tracking-[0.2em] text-amber-200">
                      <Crown className="h-3 w-3" /> Lifetime Membership
                    </div>
                    
                    {/* Big Price Display from reference image */}
                    <div className="mt-5 flex items-baseline gap-3 flex-wrap">
                      <span className="font-display text-[56px] sm:text-[64px] leading-none tracking-tight text-gradient-luxe">
                        ₹{appliedCoupon ? Math.max(0, Math.round(1798 - saved)) : 1798}
                      </span>
                      {appliedCoupon ? (
                        <>
                          <span className="line-through text-white/30 text-xl font-normal ml-2">₹1,798</span>
                          <span className="text-emerald-400 text-sm font-semibold ml-2">
                            {appliedCoupon.discountType === "percentage"
                              ? `${appliedCoupon.discount}% off`
                              : `₹${appliedCoupon.discount} off`}
                          </span>
                        </>
                      ) : (
                        <span className="text-white/30 text-[13px] ml-1 font-body">One-time payment</span>
                      )}
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

                    <div className="mt-5 flex items-center gap-3 text-[11.5px] text-white/45">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                      30-day creator guarantee · Refund if you don't love it.
                    </div>

                    {/* NFC Card Visual Selection from reference image */}
                    <div 
                      onClick={() => setNfc(!nfc)}
                      className={`mt-7 p-5 rounded-3xl border transition-all duration-300 flex items-center justify-between gap-4 cursor-pointer relative overflow-hidden ${
                        nfc 
                          ? "border-amber-500/60 bg-amber-500/[0.03] shadow-lg shadow-amber-500/[0.02]" 
                          : "border-white/[0.08] bg-white/[0.01] hover:border-white/20"
                      }`}
                    >
                      {/* Ambient Glow behind image if selected */}
                      {nfc && <div className="absolute -left-10 top-0 bottom-0 w-32 bg-amber-500/5 rounded-full blur-xl pointer-events-none" />}
                      
                      <div className="flex items-center gap-4 relative">
                        <div className="relative h-20 w-32 shrink-0 rounded-xl overflow-hidden border border-white/10 bg-black/40 flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-105">
                          <img src={NFC_IMG} alt="NFC Card Preview" className="h-full w-full object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                          <span className="absolute bottom-1.5 left-2.5 text-[8px] font-mono tracking-widest text-white/80 uppercase">Atives Pass</span>
                        </div>
                        <div className="text-left">
                          <div className="text-[13px] font-bold text-white flex items-center gap-1.5 font-display">
                            <Nfc className={`h-4 w-4 ${nfc ? "text-amber-400" : "text-white/60"}`} /> 
                            Lifetime Gold Metal NFC Card
                          </div>
                          <p className="text-[10px] text-white/55 mt-1 leading-relaxed max-w-[200px] font-body">
                            Tap to share your Prosite anywhere.
                          </p>
                          <div className="mt-2.5 flex items-baseline gap-2">
                            <span className="line-through text-[10px] text-white/30 font-body">₹2,500</span>
                            <span className="text-[12px] font-bold text-amber-400 font-display">₹899</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-center shrink-0">
                        <div className={`h-6 w-6 rounded-full border flex items-center justify-center transition-all ${
                          nfc 
                            ? "bg-amber-400 border-amber-400 text-black shadow-lg shadow-amber-400/20" 
                            : "border-white/20 bg-black/20"
                        }`}>
                          {nfc && <Check className="h-3.5 w-3.5" strokeWidth={3.5} />}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right — Total + form */}
                  <div className="md:col-span-2 p-6 sm:p-8 bg-black/30">
                    {/* Order Summary styled from reference image */}
                    <div className="space-y-3.5 text-[13px] text-white/80 font-body">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-white/40 mb-1">Order Summary</div>
                      
                      <div className="flex items-center justify-between">
                        <span>Lifetime Start Membership</span>
                        <span>₹{appliedCoupon ? Math.max(0, Math.round(1798 - saved)) : 1798}</span>
                      </div>
                      
                      {nfc && (
                        <div className="flex items-center justify-between text-amber-400 animate-fade-in">
                          <span>Gold NFC Card</span>
                          <span className="font-semibold">₹899</span>
                        </div>
                      )}
                      
                      {totalSaved > 0 && (
                        <div className="flex items-center justify-between text-emerald-400 font-semibold animate-fade-in">
                          <span>You save</span>
                          <span>-₹{totalSaved}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="my-5 h-px bg-white/[0.06]" />
                    
                    <div className="flex items-end justify-between">
                      <span className="text-[12px] font-semibold uppercase tracking-wider text-white/45">Total · One-time</span>
                      <span data-testid="checkout-total" className="font-display text-4xl text-gradient-luxe">₹{netPrice}</span>
                    </div>

                    <form onSubmit={
                      token
                        ? (e) => { e.preventDefault(); setupAndPay(token, user); }
                        : verificationMode === "otp"
                        ? handleVerifyOtp
                        : verificationMode === "password"
                        ? handlePasswordLogin
                        : handlePay
                    } className="mt-6 space-y-3" data-testid="checkout-form">
                      <Field
                        label="Email"
                        type="email"
                        placeholder="you@studio.com"
                        value={form.email}
                        onChange={(v) => setForm({ ...form, email: v })}
                        testid="checkout-input-email"
                        disabled={verificationMode !== "" || !!token}
                      />

                      {verificationMode === "otp" && (
                        <div className="space-y-3 animate-fade-in text-left">
                          <Field
                            label="OTP (Check email inbox or spam)"
                            placeholder="123456"
                            value={form.otp}
                            onChange={(v) => setForm({ ...form, otp: v })}
                          />
                          <div className="flex flex-col gap-2 pt-1 text-center font-body">
                            {userStatus?.exists && userStatus?.hasPassword && (
                              <button
                                type="button"
                                onClick={() => setVerificationMode("password")}
                                className="text-xs text-prosite-electric hover:underline transition"
                              >
                                Login with password instead
                              </button>
                            )}
                            <button
                              type="button"
                              onClick={() => {
                                setVerificationMode("");
                                setForm((prev) => ({ ...prev, otp: "" }));
                              }}
                              className="text-xs text-white/40 hover:text-white/60 transition"
                            >
                              Change email address
                            </button>
                          </div>
                        </div>
                      )}

                      {verificationMode === "password" && (
                        <div className="space-y-3 animate-fade-in text-left">
                          <Field
                            label="Password"
                            type="password"
                            placeholder="••••••••"
                            value={form.password}
                            onChange={(v) => setForm({ ...form, password: v })}
                          />
                          <div className="flex flex-col gap-2 pt-1 text-center font-body">
                            <button
                              type="button"
                              onClick={() => triggerSendOtp("login")}
                              className="text-xs text-prosite-electric hover:underline transition"
                            >
                              Verify with OTP instead
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                setVerificationMode("");
                                setForm((prev) => ({ ...prev, password: "" }));
                              }}
                              className="text-xs text-white/40 hover:text-white/60 transition"
                            >
                              Change email address
                            </button>
                          </div>
                        </div>
                      )}

                      <button
                        type="submit"
                        data-testid="checkout-pay-btn"
                        disabled={loading}
                        className="w-full mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-6 py-3.5 font-semibold text-[14px] hover:bg-white/95 transition disabled:opacity-70 ring-glow"
                      >
                        {loading ? (
                          <>
                            <span className="h-3 w-3 rounded-full border-2 border-black/70 border-t-transparent animate-spin" />
                            {verificationMode !== "" ? "Verifying..." : "Checking..."}
                          </>
                        ) : (
                          <>
                            {verificationMode === "otp"
                              ? "Verify OTP & Continue"
                              : verificationMode === "password"
                              ? "Verify Password & Continue"
                              : `Continue to Pay ₹${netPrice}`}
                            <ArrowRight className="h-4 w-4" />
                          </>
                        )}
                      </button>
                      <div className="text-[10.5px] text-white/40 text-center font-body">
                        {token
                          ? "Click to proceed directly to payment."
                          : verificationMode === "otp"
                          ? `We've sent a 6-digit code to ${form.email}`
                          : verificationMode === "password"
                          ? `Enter your password to verify your account`
                          : "This will check your account status and send an OTP."}
                      </div>
                      {!!token && (
                        <div className="text-center pt-2">
                          <button
                            type="button"
                            onClick={handleLogout}
                            className="text-xs text-white/40 hover:text-white/60 transition hover:underline"
                          >
                            Change email / Log out
                          </button>
                        </div>
                      )}
                    </form>
                  </div>
                </div>
              ) : step === "basic-details" ? (
                <div className="p-8 sm:p-12 max-w-sm mx-auto">
                  <h3 className="text-2xl font-display text-center mb-2 font-bold animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-prosite-royal to-prosite-purple">Complete Profile</h3>
                  <p className="text-white/60 text-center mb-6 text-[12px]">Please fill in your basic details to complete your Atives profile.</p>
                  <form onSubmit={handleBasicDetailsSubmit} className="space-y-4 text-left">
                    <Field
                      label="Full Name"
                      placeholder="Jane Doe"
                      value={form.name}
                      onChange={(v) => setForm({ ...form, name: v })}
                    />
                    <Field
                      label="Phone Number"
                      placeholder="+916200950087"
                      value={form.phone}
                      onChange={(v) => setForm({ ...form, phone: v })}
                    />
                    <Field
                      label="City"
                      placeholder="Mumbai"
                      value={form.city}
                      onChange={(v) => setForm({ ...form, city: v })}
                    />
                    <label className="block">
                      <span className="block text-[10.5px] uppercase tracking-[0.2em] text-white/45 mb-1.5 font-body">Profile Type</span>
                      <select
                        value={form.creatorType}
                        onChange={(e) => setForm({ ...form, creatorType: e.target.value })}
                        className="w-full rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-prosite-electric focus:bg-white/[0.06] outline-none px-3.5 py-2.5 text-[13.5px] text-white transition font-body"
                      >
                        <option value="Creator" className="bg-[#0A0A12] text-white">Creator / Professional</option>
                        <option value="Business" className="bg-[#0A0A12] text-white">Business / Freelancer</option>
                        <option value="Institute" className="bg-[#0A0A12] text-white">Institute / Academy</option>
                        <option value="Community" className="bg-[#0A0A12] text-white">Community / Brand</option>
                      </select>
                    </label>

                    {!userStatus?.exists && (
                      <>
                        <Field
                          label="Password"
                          type="password"
                          placeholder="Create password"
                          value={form.password}
                          onChange={(v) => setForm({ ...form, password: v })}
                        />
                        <Field
                          label="Confirm Password"
                          type="password"
                          placeholder="Re-type password"
                          value={form.confirmPassword}
                          onChange={(v) => setForm({ ...form, confirmPassword: v })}
                        />
                      </>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-6 py-3.5 font-semibold text-[14px] hover:bg-white/95 transition disabled:opacity-70 ring-glow"
                    >
                      {loading ? (
                        <>
                          <span className="h-3 w-3 rounded-full border-2 border-black/70 border-t-transparent animate-spin" />
                          Completing...
                        </>
                      ) : (
                        <>
                          Complete Profile & Finish
                          <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              ) : step === "payment" ? (
                <div className="p-10 sm:p-14 text-center">
                  <h3 className="text-2xl font-display mb-4">Complete Payment</h3>
                  
                  <div className="max-w-xs mx-auto p-4 mb-6 rounded-2xl border border-white/[0.08] bg-white/[0.02]">
                    <div className="text-[10.5px] uppercase tracking-[0.2em] text-white/45 mb-1.5">Order Total</div>
                    <div className="font-display text-4xl text-gradient-luxe">₹{netPrice}</div>
                    {appliedCoupon && (
                      <div className="text-xs text-emerald-400 mt-1">
                        Coupon Applied: {appliedCoupon.code} ({" "}
                        {appliedCoupon.discountType === "percentage"
                          ? `-${appliedCoupon.discount}%`
                          : `-₹${appliedCoupon.discount}`}{" "}
                        off )
                      </div>
                    )}
                    <div className="text-[11.5px] text-white/55 mt-2 font-body font-medium flex items-center justify-center gap-1.5">
                      Lifetime Access {nfc && <span className="text-prosite-electric font-semibold animate-fade-in">+ NFC Card</span>}
                    </div>
                  </div>

                  <div className="max-w-xs mx-auto space-y-4">
                    <button
                      onClick={handlePayOrActivate}
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-6 py-3.5 font-semibold text-[14px] hover:bg-white/95 transition disabled:opacity-70 ring-glow"
                    >
                      {loading ? (
                        <>
                          <span className="h-3 w-3 rounded-full border-2 border-black/70 border-t-transparent animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          {netPrice === 0 ? "Activate Membership" : "Pay Now with Razorpay"}
                          <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </button>
                    
                    <button
                      onClick={() => setStep("review")}
                      className="text-xs text-white/40 hover:text-white/60 transition"
                    >
                      Back to Start
                    </button>
                  </div>
                </div>
              ) : (
                <SuccessView nfc={nfc} total={netPrice} email={form.email || user?.email} onClose={onClose} backendUrl={BACKEND_URL} />
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

const SuccessView = ({ nfc, total, email, onClose, backendUrl }) => {
  const token = localStorage.getItem("token") || "";

  const whatsappMessage = `Hello Atives, my email is ${email || ""}. My membership has been successfully activated. Amount: ₹${total}.`;
  const whatsappUrl = `https://api.whatsapp.com/send?phone=916200950087&text=${encodeURIComponent(whatsappMessage)}`;

  useEffect(() => {
    // Attempt automatic popup for WhatsApp in a new tab after 1.5 seconds
    const waTimer = setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 1500);

    // Auto-redirect to Atives in current tab after 4.5 seconds
    const redirectTimer = setTimeout(() => {
      window.location.href = `${backendUrl}?token=${encodeURIComponent(token)}`;
    }, 4500);

    return () => {
      clearTimeout(waTimer);
      clearTimeout(redirectTimer);
    };
  }, [token, backendUrl, whatsappUrl]);

  return (
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
          Your lifetime membership is now active. We've sent a confirmation to your email.
        </p>
        <div className="mt-6 inline-flex items-center gap-2 glass rounded-full px-3.5 py-1.5 text-[11.5px] text-white/70">
          <Lock className="h-3 w-3" /> Total paid · ₹{total} · Lifetime
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-600 text-white px-6 py-3.5 font-semibold text-[13.5px] hover:bg-emerald-700 transition shadow-lg shadow-emerald-600/20"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.118-2.905-6.993-1.876-1.875-4.357-2.907-6.995-2.908-5.44 0-9.866 4.42-9.87 9.865-.001 1.836.486 3.633 1.414 5.203L1.875 22.18l6.182-1.622zM18.06 14.93c-.33-.165-1.956-.967-2.257-1.077-.3-.11-.52-.165-.74.165-.22.33-.85 1.077-1.04 1.3-.19.22-.38.242-.71.077-1.59-.795-2.678-1.456-3.766-3.324-.22-.38.22-.352.63-1.177.07-.143.035-.269-.018-.38-.052-.11-.47-1.127-.643-1.543-.17-.406-.358-.352-.49-.352-.13-.006-.28-.006-.43-.006-.15 0-.396.055-.604.28-.21.22-.8.78-.8 1.9s.815 2.203.926 2.35c.11.147 1.605 2.45 3.89 3.435.545.233 1.076.39 1.447.507.55.174 1.05.15 1.445.09.44-.066 1.957-.8 2.234-1.57.276-.77.276-1.43.195-1.57-.08-.14-.3-.223-.63-.388z" />
            </svg>
            Send WhatsApp Message
          </a>
          <a
            href={`${backendUrl}?token=${encodeURIComponent(token)}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] text-white px-6 py-3.5 font-semibold text-[13.5px] hover:bg-white/[0.06] transition"
          >
            Redirecting to 1atives.com...
          </a>
        </div>
      </div>
    </div>
  );
};
