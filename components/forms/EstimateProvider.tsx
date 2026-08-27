"use client";

import { createContext, useContext, useMemo, useState } from "react";

interface EstimateContextValue {
  isOpen: boolean;
  openEstimate: () => void;
  closeEstimate: () => void;
}

const EstimateContext = createContext<EstimateContextValue | null>(null);

export function EstimateProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo(
    () => ({
      isOpen,
      openEstimate: () => setIsOpen(true),
      closeEstimate: () => setIsOpen(false),
    }),
    [isOpen],
  );

  return (
    <EstimateContext.Provider value={value}>{children}</EstimateContext.Provider>
  );
}

export function useEstimate() {
  const context = useContext(EstimateContext);
  if (!context) {
    throw new Error("useEstimate must be used within EstimateProvider");
  }
  return context;
}
