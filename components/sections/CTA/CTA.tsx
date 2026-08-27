import { COMPANY } from "@/lib/constants";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { EstimateTrigger } from "@/components/forms/EstimateTrigger";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <Section id="contact" tone="forest" className="overflow-hidden">
      <Container>
        <div
          data-reveal
          className="grid items-end gap-12 lg:grid-cols-12"
        >
          <div className="lg:col-span-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-sand">
              Next step
            </p>
            <h2 className="mt-6 font-display text-5xl leading-none tracking-wide sm:text-6xl lg:text-8xl">
              Ready when the tree is not
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/85">
              Request a free estimate. We will review the work, walk the site,
              and give you a clear plan before anything starts.
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:col-span-4 lg:items-end">
            <EstimateTrigger className="bg-dark-forest hover:bg-[#182418]" />
            <Button href={COMPANY.phoneHref} variant="secondary">
              Call {COMPANY.phoneLabel}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
