import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconProps {
  icon: LucideIcon;
  className?: string;
  "aria-hidden"?: boolean;
}

export function Icon({
  icon: IconComponent,
  className,
  "aria-hidden": ariaHidden = true,
}: IconProps) {
  return (
    <IconComponent
      aria-hidden={ariaHidden}
      className={cn("size-5 shrink-0", className)}
    />
  );
}
