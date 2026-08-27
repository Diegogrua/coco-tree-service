import { services } from "@/data/services";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Services() {
  const [featured, ...rest] = services;

  return (
    <Section id="services" tone="light">
      <Container>
        <SectionHeader
          eyebrow="What we do"
          title="Services for the full job, not just the cut"
          description="Every service is built around a clean site, controlled methods, and a clear result for the property."
        />
        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featured ? (
            <div className="md:col-span-2 lg:col-span-2">
              <ServiceCard service={featured} featured />
            </div>
          ) : null}
          {rest.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
