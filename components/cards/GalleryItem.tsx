import type { GalleryItemData } from "@/types";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { cn } from "@/lib/utils";

interface GalleryItemProps {
  item: GalleryItemData;
}

const variantClass: Record<NonNullable<GalleryItemData["variant"]>, string> = {
  standard: "md:col-span-4 min-h-64",
  wide: "md:col-span-8 min-h-72",
  tall: "md:col-span-4 min-h-96",
  "before-after": "md:col-span-8 min-h-80",
};

export function GalleryItem({ item }: GalleryItemProps) {
  const layout = variantClass[item.variant ?? "standard"];

  return (
    <figure
      data-reveal
      data-gallery-item={item.variant ?? "standard"}
      className={cn("group relative overflow-hidden rounded", layout)}
    >
      {item.variant === "before-after" ? (
        <div className="grid h-full min-h-80 grid-cols-2">
          <div className="relative">
            <MediaPlaceholder alt={`${item.imageAlt} — before`} tone="earth" />
            <span className="absolute left-4 top-4 text-xs uppercase tracking-[0.2em] text-off-white">
              Before
            </span>
          </div>
          <div className="relative">
            <MediaPlaceholder alt={`${item.imageAlt} — after`} tone="canopy" />
            <span className="absolute left-4 top-4 text-xs uppercase tracking-[0.2em] text-off-white">
              After
            </span>
          </div>
        </div>
      ) : (
        <div className="absolute inset-0 overflow-hidden transition-transform duration-300 group-hover:scale-105">
          <MediaPlaceholder
            src={item.imageSrc}
            alt={item.imageAlt}
            tone="forest"
          />
        </div>
      )}
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark-forest to-transparent p-6 text-off-white">
        <p className="text-xs uppercase tracking-[0.2em] text-sand">{item.category}</p>
        <p className="mt-2 font-display text-2xl tracking-wide">{item.title}</p>
      </figcaption>
    </figure>
  );
}
