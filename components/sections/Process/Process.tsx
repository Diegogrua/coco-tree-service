import { processSteps } from "@/data/process";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ProcessStep } from "@/components/cards/ProcessStep";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Process() {
  return (
    <Section id="process" tone="dark">
      <Container>
        <SectionHeader
          eyebrow="How we work"
          title="A clear path from first call to finished ground"
          description="The process is designed to remove uncertainty: assess the site, agree the plan, then execute with control."
        />
        <div data-process-timeline className="mt-8 lg:mt-16">
          {processSteps.map((step) => (
            <ProcessStep key={step.id} step={step} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
