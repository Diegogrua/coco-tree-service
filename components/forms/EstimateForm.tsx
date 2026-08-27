"use client";

import { useState } from "react";
import { services } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/forms/FormField";

export function EstimateForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="text-base leading-7 text-off-white/80">
        Thank you. Your estimate request has been noted. A team member will
        follow up using the contact details you provided.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6" noValidate={false}>
      <FormField label="Name" name="name" required autoComplete="name" />
      <FormField
        label="Phone"
        name="phone"
        type="tel"
        required
        autoComplete="tel"
      />
      <FormField
        label="Email"
        name="email"
        type="email"
        required
        autoComplete="email"
      />
      <FormField
        label="Service"
        name="service"
        as="select"
        options={services.map((service) => ({
          value: service.id,
          label: service.title,
        }))}
      />
      <FormField
        label="Project details"
        name="details"
        as="textarea"
      />
      <Button type="submit" arrow>
        Get a Free Estimate
      </Button>
    </form>
  );
}
