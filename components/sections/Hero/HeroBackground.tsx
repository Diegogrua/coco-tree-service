export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        data-hero-layer="background"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,#2f6b45_0%,#173d2b_28%,#101a12_68%,#0b1f16_100%)]"
      />
      <div
        data-hero-layer="midground"
        className="absolute inset-0 opacity-70"
      >
        <svg className="h-full w-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMax slice">
          <path
            fill="#0B1F16"
            d="M0 900V520c80-40 140-180 220-170s110 150 190 140 130-210 220-190 140 170 230 150 150-230 250-200 180 160 330 140v510H0Z"
          />
        </svg>
      </div>
      <div
        data-hero-layer="foreground"
        className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-dark-forest via-dark-forest/80 to-transparent"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark-forest/70 via-dark-forest/25 to-transparent" />
    </div>
  );
}
