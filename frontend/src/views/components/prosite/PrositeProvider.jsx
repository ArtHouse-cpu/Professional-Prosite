import React, { createContext, useContext, useState, useEffect } from "react";
import CheckoutModal from "./CheckoutModal";
import DemoModal from "./DemoModal";

const PrositeCtx = createContext(null);

export const useProsite = () => useContext(PrositeCtx);

export default function PrositeProvider({ children }) {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("checkout") === "true") {
      setCheckoutOpen(true);
    }
  }, []);

  return (
    <PrositeCtx.Provider
      value={{
        isCheckoutOpen: checkoutOpen,
        openCheckout: () => setCheckoutOpen(true),
        closeCheckout: () => setCheckoutOpen(false),
        isDemoOpen: demoOpen,
        openDemo: () => setDemoOpen(true),
        closeDemo: () => setDemoOpen(false),
      }}
    >
      {children}
      <CheckoutModal open={checkoutOpen} onClose={() => setCheckoutOpen(false)} />
      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </PrositeCtx.Provider>
  );
}
