import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function NavLink({ href, children, onClick, className }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "text-sm tracking-wide text-off-white/80 transition-colors hover:text-white",
        className,
      )}
    >
      {children}
    </a>
  );
}
