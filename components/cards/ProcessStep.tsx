import type { ProcessStepItem } from "@/types";

interface ProcessStepProps {
  step: ProcessStepItem;
}

export function ProcessStep({ step }: ProcessStepProps) {
  return (
    <article
      data-reveal
      data-process-step={step.number}
      className="grid gap-4 border-t border-white/15 py-8 sm:grid-cols-[96px_1fr] sm:gap-8 lg:py-12"
    >
      <p className="font-display text-4xl text-safety-orange">{step.number}</p>
      <div>
        <h3 className="font-display text-3xl tracking-wide sm:text-4xl">
          {step.title}
        </h3>
        <p className="mt-4 max-w-2xl text-base leading-7 text-off-white/75">
          {step.description}
        </p>
      </div>
    </article>
  );
}
