export interface NavLinkItem {
  href: string;
  label: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt: string;
}

export interface ProcessStepItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface GalleryItemData {
  id: string;
  title: string;
  category: string;
  imageSrc?: string;
  imageAlt: string;
  variant?: "standard" | "wide" | "tall" | "before-after";
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location?: string;
}

export interface CompanyInfo {
  name: string;
  shortName: string;
  tagline: string;
  phoneLabel: string;
  phoneHref: string;
  email: string;
  location: string;
  hours: string;
}
