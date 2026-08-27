"use client";

import { NAV_LINKS } from "@/lib/constants";
import { NavLink } from "@/components/navigation/NavLink";
import { EstimateTrigger } from "@/components/forms/EstimateTrigger";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <div
      id="mobile-menu"
      hidden={!open}
      className="absolute inset-x-0 top-full border-t border-white/10 bg-dark-forest px-4 py-8 lg:hidden"
    >
      <nav aria-label="Mobile">
        <ul className="flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <NavLink
                href={link.href}
                onClick={onClose}
                className="flex min-h-12 items-center text-base"
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-8">
        <EstimateTrigger className="w-full" />
      </div>
    </div>
  );
}
