export function ScrollIndicator() {
  return (
    <a
      href="#introduction"
      data-scroll-indicator
      className="absolute bottom-8 left-4 z-10 flex min-h-12 items-center gap-3 text-xs uppercase tracking-[0.2em] text-off-white/70 sm:left-8 lg:left-16"
    >
      <span aria-hidden="true" className="block h-8 w-px bg-off-white/50" />
      Scroll
    </a>
  );
}
