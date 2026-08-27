import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { Divider } from "@/components/ui/Divider";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { COMPANY } from "@/lib/constants";

export function Introduction() {
  return (
    <Section id="introduction" tone="dark" className="overflow-hidden">
      <Container>
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6" data-reveal>
            <Badge>The company</Badge>
            <h2 className="mt-6 font-display text-5xl leading-none tracking-wide sm:text-6xl lg:text-7xl">
              {COMPANY.name} is built for careful, professional tree work
            </h2>
            <Divider className="mt-8 bg-safety-orange/80" />
          </div>
          <div className="lg:col-span-5 lg:col-start-8" data-reveal>
            <p className="text-lg leading-8 text-off-white/80">
              From dense canopy to finished ground, every job is planned around
              safety, access, and the trees that remain. The work is technical.
              The approach is respectful of the property and the surrounding
              environment.
            </p>
            <p className="mt-6 text-base leading-7 text-off-white/70">
              Crews use professional equipment — chippers, compact machines, and
              controlled removal methods — so the result is clean, precise, and
              ready for what comes next.
            </p>
          </div>
        </div>
        <div
          data-parallax
          className="relative mt-16 aspect-[16/9] overflow-hidden rounded sm:mt-24"
        >
          <MediaPlaceholder
            alt="Placeholder scene of forest and professional tree-service work"
            tone="canopy"
          />
        </div>
      </Container>
    </Section>
  );
}
