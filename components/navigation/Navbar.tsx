"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";
import { Icon } from "@/components/ui/Icon";
import { NavLink } from "@/components/navigation/NavLink";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { EstimateTrigger } from "@/components/forms/EstimateTrigger";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      data-navbar
      className="absolute inset-x-0 top-0 z-[100] text-off-white"
    >
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-8 px-4 sm:px-8 lg:px-16">
        <Logo inverted />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden lg:block">
          <EstimateTrigger />
        </div>
        <button
          type="button"
          className="inline-flex min-h-12 min-w-12 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((current) => !current)}
        >
          <Icon icon={open ? X : Menu} className="size-6" />
        </button>
      </div>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
