import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center text-xs font-medium uppercase tracking-[0.2em] text-safety-orange",
        className,
      )}
    >
      {children}
    </span>
  );
}
