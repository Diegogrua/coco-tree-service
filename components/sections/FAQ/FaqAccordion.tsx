"use client";

import { useId, useState } from "react";
import type { FaqItem } from "@/types";

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);
  const baseId = useId();

  return (
    <div className="divide-y divide-dark-forest/15 border-y border-dark-forest/15">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `${baseId}-${item.id}-panel`;
        const buttonId = `${baseId}-${item.id}-button`;

        return (
          <div key={item.id} data-faq-item>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex min-h-16 w-full items-center justify-between gap-6 py-6 text-left"
                onClick={() => setOpenId(isOpen ? null : item.id)}
              >
                <span className="text-lg font-medium">{item.question}</span>
                <span aria-hidden="true" className="text-2xl text-forest">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-6 pr-12 text-base leading-7 text-dark-forest/75"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
