import { cn } from "@/lib/utils";

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  as?: "input" | "textarea" | "select";
  options?: Array<{ value: string; label: string }>;
  autoComplete?: string;
}

const controlClass =
  "w-full rounded border border-white/20 bg-white/5 px-4 py-3 text-sm text-off-white placeholder:text-off-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-safety-orange";

export function FormField({
  label,
  name,
  type = "text",
  required = false,
  as = "input",
  options,
  autoComplete,
}: FormFieldProps) {
  const id = `field-${name}`;

  return (
    <label htmlFor={id} className="flex flex-col gap-2 text-sm">
      <span className={cn("font-medium text-off-white")}>
        {label}
        {required ? <span className="text-safety-orange"> *</span> : null}
      </span>
      {as === "textarea" ? (
        <textarea
          id={id}
          name={name}
          required={required}
          rows={4}
          className={controlClass}
        />
      ) : as === "select" ? (
        <select id={id} name={name} required={required} className={controlClass}>
          <option value="">Select a service</option>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          autoComplete={autoComplete}
          className={controlClass}
        />
      )}
    </label>
  );
}
