"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";
import type { Locale } from "@/config/site";
import { copy } from "@/lib/content";
import { siteConfig } from "@/config/site";
import { languagePath } from "@/lib/locale";

export function Footer({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const pathname = usePathname();
  if (pathname.endsWith("/demo")) return null;
  const nav = [
    [t.nav.services, `/${locale}/services`],
    [t.nav.work, `/${locale}/portfolio`],
    [t.nav.about, `/${locale}/about`],
    [t.nav.contact, `/${locale}/contact`],
  ];
  const socials = Object.entries(siteConfig.socialLinks).filter(([, url]) => url);

  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand-block">
          <Link className="wordmark" href={`/${locale}`}><span className="wordmark-symbol" aria-hidden="true" />{locale === "ru" ? "ДМИТРИЙ" : "DMITRY"}<span className="wordmark-period">.</span></Link>
          <p>{locale === "ru" ? "Веб-дизайн и разработка современных сайтов для сервисного бизнеса." : "Web design and modern website development for service businesses."}</p>
        </div>
        <div className="footer-nav-block">
          <span className="eyebrow">{locale === "ru" ? "Навигация" : "Explore"}</span>
          {nav.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
        </div>
        <div className="footer-nav-block">
          <span className="eyebrow">{locale === "ru" ? "Ещё" : "More"}</span>
          <Link href={`/${locale}/privacy-policy`}>{locale === "ru" ? "Политика конфиденциальности" : "Privacy policy"}</Link>
          {socials.map(([name, href]) => <a href={href} key={name} target="_blank" rel="noreferrer">{name}<ArrowUpRight size={13} aria-hidden="true" /></a>)}
          {siteConfig.email && <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>}
          <a href={`tel:${siteConfig.phone.href}`}>{siteConfig.phone.display[locale]}</a>
        </div>
        <div className="footer-language">
          <span className="eyebrow">{locale === "ru" ? "Язык" : "Language"}</span>
          <div className="language-switch"><Link href={locale === "ru" ? pathname : languagePath(pathname, "ru")} aria-current={locale === "ru" ? "page" : undefined}>RU</Link><span>/</span><Link href={locale === "en" ? pathname : languagePath(pathname, "en")} aria-current={locale === "en" ? "page" : undefined}>EN</Link></div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {siteConfig.brandName[locale]}</span>
        <span>{locale === "ru" ? "Независимый веб-дизайн и разработка" : "Independent web design & development"}</span>
        <a href="#top" className="back-to-top">{locale === "ru" ? "Наверх" : "Back to top"} ↑</a>
      </div>
    </footer>
  );
}
