"use client";

import { useEffect, useRef } from "react";
import { EstimateForm } from "@/components/forms/EstimateForm";
import { useEstimate } from "@/components/forms/EstimateProvider";

export function EstimateModal() {
  const { isOpen, closeEstimate } = useEstimate();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    closeRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeEstimate();
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeEstimate]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-end justify-center p-4 sm:items-center"
      role="presentation"
    >
      <button
        type="button"
        aria-label="Close estimate form"
        className="absolute inset-0 bg-dark-forest/80"
        onClick={closeEstimate}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="estimate-title"
        className="relative z-10 w-full max-w-lg rounded bg-dark-forest p-8 shadow-2xl"
      >
        <div className="mb-8 flex items-start justify-between gap-4">
          <h2 id="estimate-title" className="font-display text-4xl text-off-white">
            Request an estimate
          </h2>
          <button
            ref={closeRef}
            type="button"
            onClick={closeEstimate}
            className="min-h-12 min-w-12 text-off-white/70 hover:text-white"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <EstimateForm />
      </div>
    </div>
  );
}
