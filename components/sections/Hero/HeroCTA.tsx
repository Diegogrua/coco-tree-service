import { EstimateTrigger } from "@/components/forms/EstimateTrigger";
import { Button } from "@/components/ui/Button";
import { SECONDARY_CTA_LABEL } from "@/lib/constants";

export function HeroCTA() {
  return (
    <div data-hero-cta className="mt-10 flex flex-col gap-4 sm:flex-row">
      <EstimateTrigger />
      <Button href="#services" variant="secondary" className="text-off-white">
        {SECONDARY_CTA_LABEL}
      </Button>
    </div>
  );
}
