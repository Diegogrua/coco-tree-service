import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <blockquote className="rounded bg-off-white p-8 text-dark-forest">
      <p className="text-lg leading-8">{testimonial.quote}</p>
      <footer className="mt-6 text-sm uppercase tracking-[0.16em] text-forest">
        {testimonial.author}
        {testimonial.location ? ` · ${testimonial.location}` : null}
      </footer>
    </blockquote>
  );
}
