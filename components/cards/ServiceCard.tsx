import type { Service } from "@/types";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
  featured?: boolean;
}

export function ServiceCard({ service, featured = false }: ServiceCardProps) {
  return (
    <article
      data-reveal
      className={cn(
        "group relative overflow-hidden rounded bg-dark-forest text-off-white",
        featured ? "min-h-80 sm:min-h-96" : "min-h-72",
      )}
    >
      <div
        data-parallax
        className="absolute inset-0 overflow-hidden transition-transform duration-300 group-hover:scale-105"
      >
        <MediaPlaceholder
          src={service.imageSrc}
          alt={service.imageAlt}
          tone={featured ? "canopy" : "forest"}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-dark-forest via-dark-forest/40 to-transparent" />
      <div className="relative flex h-full min-h-72 flex-col justify-end p-6 sm:p-8">
        <h3 className="font-display text-3xl tracking-wide sm:text-4xl">
          {service.title}
        </h3>
        <p className="mt-3 max-w-md text-sm leading-6 text-off-white/80">
          {service.description}
        </p>
        <span
          aria-hidden="true"
          data-cta-arrow
          className="mt-4 inline-flex text-safety-orange transition-transform duration-200 group-hover:translate-x-1"
        >
          →
        </span>
      </div>
    </article>
  );
}
