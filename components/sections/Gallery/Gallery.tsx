import { galleryItems } from "@/data/gallery";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { GalleryItem } from "@/components/cards/GalleryItem";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Gallery() {
  return (
    <Section id="gallery" tone="light" className="overflow-hidden">
      <Container>
        <SectionHeader
          eyebrow="Work in the field"
          title="The result is the property, not the pile"
        />
      </Container>
      <div
        data-gallery-pin
        className="mx-auto mt-16 max-w-7xl px-4 sm:px-8 lg:px-16"
      >
        <div
          data-gallery-track
          className="grid grid-cols-1 gap-4 md:grid-cols-12"
        >
          {galleryItems.map((item) => (
            <GalleryItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </Section>
  );
}
