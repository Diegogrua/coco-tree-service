import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  arrow?: boolean;
}

const variantClass = {
  primary:
    "bg-forest text-white hover:bg-[#3d7330] border border-transparent",
  secondary:
    "bg-transparent text-current border border-current hover:bg-white/10",
  ghost: "bg-transparent text-current border border-transparent hover:text-sand",
} as const;

export function Button({
  variant = "primary",
  href,
  arrow = false,
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-12 items-center justify-center gap-2 rounded px-6 text-sm font-medium tracking-wide transition-colors duration-200",
    variantClass[variant],
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      {arrow ? (
        <span aria-hidden="true" data-cta-arrow className="inline-block">
          →
        </span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {content}
    </button>
  );
}
