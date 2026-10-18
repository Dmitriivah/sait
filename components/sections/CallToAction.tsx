import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import type { Locale } from "@/config/site";
import { copy } from "@/lib/content";

export function CallToAction({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <section className="cta-section section-space">
      <div className="container cta-inner">
        <span className="eyebrow">{locale === "ru" ? "Есть идея?" : "Have a project in mind?"}</span>
        <h2>{t.home.ctaTitle}</h2>
        <p>{t.home.ctaIntro}</p>
        <div className="cta-actions">
          <Link className="button button-accent" href={`/${locale}/contact`}>{t.nav.start}<ArrowUpRight size={16} /></Link>
          <Link className="text-link" href={`/${locale}/contact#project-form`}>{t.home.ctaForm}<ArrowDown size={15} /></Link>
        </div>
        <span className="cta-decoration" aria-hidden="true">F.</span>
      </div>
    </section>
  );
}
