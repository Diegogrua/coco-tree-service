import { COMPANY } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface LogoProps {
  href?: string;
  className?: string;
  inverted?: boolean;
}

export function Logo({ href = "#hero", className, inverted = false }: LogoProps) {
  return (
    <a
      href={href}
      className={cn(
        "font-display text-2xl tracking-wide leading-none",
        inverted ? "text-off-white" : "text-dark-forest",
        className,
      )}
    >
      {COMPANY.name}
    </a>
  );
}
