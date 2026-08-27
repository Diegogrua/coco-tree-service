import { HeroCTA } from "@/components/sections/Hero/HeroCTA";

export function HeroContent() {
  return (
    <div
      data-hero-content
      className="relative z-10 max-w-2xl pt-24 sm:pt-32"
    >
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-sand">
        Professional tree service
      </p>
      <h1 className="font-display text-6xl leading-[0.9] tracking-wide text-white sm:text-7xl lg:text-8xl">
        Tree work that respects the land it stands on
      </h1>
      <p className="mt-6 max-w-lg text-base leading-7 text-off-white/85 sm:text-lg">
        Removal, trimming, stump grinding, and land clearing — planned with
        safety first and executed with care for your property.
      </p>
      <HeroCTA />
    </div>
  );
}
