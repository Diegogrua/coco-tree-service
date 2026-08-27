import { COMPANY, NAV_LINKS } from "@/lib/constants";
import { services } from "@/data/services";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/ui/Logo";
import { NavLink } from "@/components/navigation/NavLink";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark-forest py-16 text-off-white sm:py-24">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo inverted className="text-xl" />
            <p className="mt-4 max-w-xs text-sm leading-6 text-off-white/70">
              {COMPANY.tagline}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-sand">
              Navigate
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <NavLink href={link.href}>{link.label}</NavLink>
                </li>
              ))}
              <li>
                <NavLink href="#contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-sand">
              Services
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {services.map((service) => (
                <li key={service.id}>
                  <NavLink href="#services">{service.title}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-sand">
              Contact
            </p>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-off-white/80">
              <li>
                <a href={COMPANY.phoneHref} className="hover:text-white">
                  {COMPANY.phoneLabel}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="hover:text-white">
                  {COMPANY.email}
                </a>
              </li>
              <li>{COMPANY.location}</li>
              <li>{COMPANY.hours}</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-off-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {COMPANY.name}. All rights reserved.
          </p>
          <p>Social links to be confirmed</p>
        </div>
      </Container>
    </footer>
  );
}
