import Image from "next/image";
import { cn } from "@/lib/utils";

interface MediaPlaceholderProps {
  src?: string;
  alt: string;
  className?: string;
  tone?: "forest" | "earth" | "canopy";
}

const toneClass = {
  forest:
    "bg-[radial-gradient(ellipse_at_30%_20%,#2f6b45_0%,#173d2b_42%,#101a12_100%)]",
  earth:
    "bg-[radial-gradient(ellipse_at_70%_40%,#5a4634_0%,#173d2b_50%,#101a12_100%)]",
  canopy:
    "bg-[radial-gradient(ellipse_at_50%_0%,#315f25_0%,#173d2b_45%,#0b1f16_100%)]",
} as const;

export function MediaPlaceholder({
  src,
  alt,
  className,
  tone = "forest",
}: MediaPlaceholderProps) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={cn("object-cover", className)}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      data-media-placeholder
      className={cn("h-full w-full", toneClass[tone], className)}
    />
  );
}
