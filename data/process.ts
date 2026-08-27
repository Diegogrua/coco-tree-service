import type { ProcessStepItem } from "@/types";

export const processSteps: ProcessStepItem[] = [
  {
    id: "request",
    number: "01",
    title: "Request an estimate",
    description:
      "Tell us about the property and the work you need. We review the details and schedule a visit at a time that works for you.",
  },
  {
    id: "assess",
    number: "02",
    title: "On-site assessment",
    description:
      "We evaluate the trees, access, and surrounding structures so the plan is based on the actual site — not a generic quote.",
  },
  {
    id: "plan",
    number: "03",
    title: "Clear plan and schedule",
    description:
      "You receive a straightforward scope of work, timing, and what to expect on the day of service before any work begins.",
  },
  {
    id: "execute",
    number: "04",
    title: "Professional execution",
    description:
      "The crew completes the job with controlled methods, professional equipment, and continuous attention to safety.",
  },
  {
    id: "finish",
    number: "05",
    title: "Clean site, finished work",
    description:
      "Debris is handled, the site is left in order, and you can see the result of the work without leftover disruption.",
  },
];
