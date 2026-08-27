import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark" | "forest";
}

const toneClass = {
  light: "bg-off-white text-dark-forest",
  dark: "bg-dark-forest text-off-white",
  forest: "bg-forest text-white",
} as const;

export function Section({
  id,
  children,
  className,
  tone = "light",
}: SectionProps) {
  return (
    <section
      id={id}
      data-section={id}
      className={cn("relative py-16 sm:py-24 lg:py-32", toneClass[tone], className)}
    >
      {children}
    </section>
  );
}
