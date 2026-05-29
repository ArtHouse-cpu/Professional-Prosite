import React, { createContext, useContext, useState } from "react";
import CheckoutModal from "./CheckoutModal";
import DemoModal from "./DemoModal";

const PrositeCtx = createContext(null);

export const useProsite = () => useContext(PrositeCtx);

export default function PrositeProvider({ children }) {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <PrositeCtx.Provider
      value={{
        openCheckout: () => setCheckoutOpen(true),
        closeCheckout: () => setCheckoutOpen(false),
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
