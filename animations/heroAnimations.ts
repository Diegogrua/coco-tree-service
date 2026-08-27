/**
 * Hero motion — Phase 2.
 * Targets: [data-hero], [data-hero-layer], [data-hero-content], [data-hero-cta], [data-scroll-indicator]
 */

export const HERO_MOTION_TARGETS = {
  root: "[data-hero]",
  background: '[data-hero-layer="background"]',
  midground: '[data-hero-layer="midground"]',
  foreground: '[data-hero-layer="foreground"]',
  content: "[data-hero-content]",
  cta: "[data-hero-cta]",
  scrollIndicator: "[data-scroll-indicator]",
} as const;
