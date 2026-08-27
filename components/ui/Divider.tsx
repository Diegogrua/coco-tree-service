import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
}

export function Divider({ className }: DividerProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("h-px w-16 bg-current/30", className)}
    />
  );
}
