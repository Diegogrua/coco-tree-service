import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "right";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <header
      data-reveal
      className={cn(
        "max-w-2xl",
        align === "right" && "ml-auto text-right",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-safety-orange">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-5xl leading-none tracking-wide sm:text-6xl lg:text-7xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-6 max-w-xl text-base leading-7 text-current/80 sm:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  );
}
