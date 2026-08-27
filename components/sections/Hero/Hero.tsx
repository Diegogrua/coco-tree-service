import { Container } from "@/components/layout/Container";
import { HeroBackground } from "@/components/sections/Hero/HeroBackground";
import { HeroContent } from "@/components/sections/Hero/HeroContent";
import { ScrollIndicator } from "@/components/sections/Hero/ScrollIndicator";

export function Hero() {
  return (
    <section
      id="hero"
      data-hero
      className="relative isolate min-h-[100svh] overflow-hidden bg-dark-forest text-off-white"
    >
      <HeroBackground />
      <Container className="relative z-10 flex min-h-[100svh] items-end pb-24 pt-32 sm:pb-32">
        <HeroContent />
      </Container>
      <ScrollIndicator />
    </section>
  );
}
