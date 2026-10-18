import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { Accordion } from "@/components/ui/Accordion";
import { CallToAction } from "@/components/sections/CallToAction";
import { copy } from "@/lib/content";
import { isLocale, type Locale } from "@/config/site";
import { localizedMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return locale === "en" ? localizedMetadata("en", "/services", "Website design & development services", "Landing pages, business websites, redesigns, and frontend development for service-led businesses.") : localizedMetadata("ru", "/services", "Услуги по созданию сайтов", "Разработка лендингов, сайтов компаний, редизайн и frontend для сервисного бизнеса.");
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const t = copy[locale];
  const packages = locale === "ru"
    ? [["STARTER", "Лендинг для одной задачи", "Структура, дизайн и адаптивная реализация компактного одностраничного сайта."], ["BUSINESS", "Сайт компании", "Многостраничное представление услуг, процесса и компании с целостной визуальной системой."], ["CUSTOM", "Нестандартный проект", "Для особой структуры или интеграций после уточнения технических требований."]]
    : [["STARTER", "A focused landing page", "Structure, design, and responsive development for a compact single-page brief."], ["BUSINESS", "A company website", "A multi-page presentation of your services and approach, brought together with a consistent visual system."], ["CUSTOM", "A tailored project", "For specific structures or integrations, subject to a technical review."]];
  return (
    <>
      <section className="page-hero section-space"><div className="container page-hero-inner"><span className="eyebrow">{t.servicesPage.eyebrow}</span><h1>{t.servicesPage.title}</h1><p>{t.servicesPage.intro}</p></div></section>
      <section className="service-detail-section section-space"><div className="container">
        {t.services.map((service, index) => (
          <article className="service-detail" key={service.title} id={`service-${index + 1}`}>
            <div className="service-detail-heading"><span className="section-kicker">0{index + 1} / {locale === "ru" ? "УСЛУГА" : "SERVICE"}</span><h2>{service.title}</h2><p>{service.detail}</p></div>
            <div className="service-detail-body">
              <p className="service-audience">{service.audience}</p>
              <div className="service-detail-columns">
                <div><h3>{locale === "ru" ? "Что входит" : "What’s included"}</h3><ul>{service.includes.map((item) => <li key={item}>{item}</li>)}</ul></div>
                <div><h3>{t.servicesPage.deliver}</h3><ul>{service.deliver.map((item) => <li key={item}>{item}</li>)}</ul></div>
                <div><h3>{t.servicesPage.needed}</h3><ul>{service.needed.map((item) => <li key={item}>{item}</li>)}</ul></div>
                <div><h3>{t.servicesPage.extra}</h3><ul>{service.extra.map((item) => <li key={item}>{item}</li>)}</ul></div>
              </div>
              <Link className="text-link" href={`/${locale}/contact`}>{t.nav.start}<ArrowUpRight size={15} /></Link>
            </div>
          </article>
        ))}
      </div></section>
      <section className="packages-section section-space"><div className="container">
        <div className="section-heading"><span className="section-kicker">02 / {t.servicesPage.packages}</span><h2>{locale === "ru" ? "Формат под вашу задачу." : "A format to fit the brief."}</h2><p>{locale === "ru" ? "Примеры типового объёма, а не фиксированные тарифы. Стоимость обсуждается после знакомства с проектом." : "Typical project shapes, not fixed packages. Pricing is discussed once the brief is clear."}</p></div>
        <div className="package-grid">{packages.map(([name, title, description], index) => <article className={`package-card${index === 1 ? " package-card-featured" : ""}`} key={name}><span className="package-number">0{index + 1}</span><span className="eyebrow">{name}</span><h3>{title}</h3><p>{description}</p><strong>{locale === "ru" ? "Стоимость по запросу" : "Pricing on request"}</strong><Link href={`/${locale}/contact`} aria-label={`${t.nav.start}: ${name}`}><ArrowUpRight size={18} /></Link></article>)}</div>
      </div></section>
      <section className="faq-section section-space"><div className="container faq-grid"><div className="section-heading"><span className="section-kicker">03 / {t.servicesPage.faq}</span><h2>{locale === "ru" ? "Перед тем как начать." : "Before we begin."}</h2></div><Accordion locale={locale} /></div></section>
      <CallToAction locale={locale} />
    </>
  );
}
