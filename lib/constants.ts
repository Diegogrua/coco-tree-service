import type { CompanyInfo, NavLinkItem } from "@/types";

export const COMPANY: CompanyInfo = {
  name: "Coco Tree Service",
  shortName: "Coco",
  tagline: "Professional tree care with respect for the land.",
  phoneLabel: "(000) 000-0000",
  phoneHref: "tel:+10000000000",
  email: "hello@cocotreeservice.com",
  location: "Service area to be confirmed",
  hours: "Hours available upon request",
};

export const NAV_LINKS: NavLinkItem[] = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#gallery", label: "Gallery" },
  { href: "#faq", label: "FAQ" },
];

export const PRIMARY_CTA_LABEL = "Get a Free Estimate";
export const SECONDARY_CTA_LABEL = "View Our Services";
