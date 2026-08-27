import { faqItems } from "@/data/faq";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FaqAccordion } from "@/components/sections/FAQ/FaqAccordion";

export function FAQ() {
  return (
    <Section id="faq" tone="light">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeader
              eyebrow="Questions"
              title="What property owners usually ask"
            />
          </div>
          <div className="lg:col-span-8">
            <FaqAccordion items={faqItems} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
