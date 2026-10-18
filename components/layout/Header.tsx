"use client";

import Link from "next/link";
import { Menu, MoveUpRight, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import type { Locale } from "@/config/site";
import { copy } from "@/lib/content";
import { languagePath } from "@/lib/locale";

export function Header({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  if (pathname.endsWith("/demo")) return null;

  const links = [
    { href: `/${locale}/services`, label: t.nav.services },
    { href: `/${locale}/portfolio`, label: t.nav.work },
    { href: `/${locale}/about`, label: t.nav.about },
    { href: `/${locale}/contact`, label: t.nav.contact },
  ];

  return (
    <header className="site-header" onKeyDown={(event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButton.current?.focus();
      }
    }}>
      <div className="header-inner container">
        <Link className="wordmark" href={`/${locale}`} aria-label={`${locale === "ru" ? "Дмитрий" : "Dmitry"} — ${locale === "ru" ? "главная" : "home"}`}>
          <span className="wordmark-symbol" aria-hidden="true" />
          {locale === "ru" ? "ДМИТРИЙ" : "DMITRY"}<span className="wordmark-period">.</span>
        </Link>
        <nav className="desktop-nav" aria-label={locale === "ru" ? "Основная навигация" : "Main navigation"}>
          {links.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
        </nav>
        <div className="header-actions">
          <div className="language-switch" aria-label="Language">
            <Link href={locale === "ru" ? pathname : languagePath(pathname, "ru")} onClick={() => setOpen(false)} aria-current={locale === "ru" ? "page" : undefined}>RU</Link>
            <span aria-hidden="true">/</span>
            <Link href={locale === "en" ? pathname : languagePath(pathname, "en")} onClick={() => setOpen(false)} aria-current={locale === "en" ? "page" : undefined}>EN</Link>
          </div>
          <Link className="button button-small button-outline header-cta" href={`/${locale}/contact`}>
            {t.nav.start}<MoveUpRight size={14} aria-hidden="true" />
          </Link>
          <button className="menu-toggle" ref={menuButton} type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? t.nav.close : t.nav.menu} onClick={() => setOpen(!open)}>
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>
      <nav id="mobile-navigation" className={`mobile-nav${open ? " is-open" : ""}`} aria-label={locale === "ru" ? "Мобильная навигация" : "Mobile navigation"} inert={!open}>
        {links.map((link, index) => (
          <Link href={link.href} key={link.href} onClick={() => setOpen(false)} style={{ transitionDelay: open ? `${index * 35}ms` : "0ms" }}>{link.label}<MoveUpRight size={16} aria-hidden="true" /></Link>
        ))}
        <Link className="mobile-nav-cta" href={`/${locale}/contact`} onClick={() => setOpen(false)}>{t.nav.start}<MoveUpRight size={16} aria-hidden="true" /></Link>
      </nav>
    </header>
  );
}
