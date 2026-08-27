"use client";

import { Button } from "@/components/ui/Button";
import { useEstimate } from "@/components/forms/EstimateProvider";
import { PRIMARY_CTA_LABEL } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface EstimateTriggerProps {
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  children?: React.ReactNode;
}

export function EstimateTrigger({
  variant = "primary",
  className,
  children = PRIMARY_CTA_LABEL,
}: EstimateTriggerProps) {
  const { openEstimate } = useEstimate();

  return (
    <Button
      variant={variant}
      arrow={variant === "primary"}
      onClick={openEstimate}
      className={cn(className)}
    >
      {children}
    </Button>
  );
}
