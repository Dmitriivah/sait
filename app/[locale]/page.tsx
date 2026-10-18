import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { Accordion } from "@/components/ui/Accordion";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectArtwork } from "@/components/projects/ProjectArtwork";
import { CallToAction } from "@/components/sections/CallToAction";
import { copy, type ProjectId } from "@/lib/content";
import { isLocale, type Locale } from "@/config/site";
import { localizedMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return {};
  return rawLocale === "ru"
    ? localizedMetadata(rawLocale, "", "Сайты и лендинги для сервисного бизнеса", "Разработка современных сайтов для сервисных компаний: ясная структура, выразительный дизайн и адаптивный интерфейс.")
    : localizedMetadata(rawLocale, "", "Websites for service businesses", "Modern websites and landing pages for service businesses, built with clear structure and considered design.");
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const t = copy[locale];
  const projectIds: ProjectId[] = ["northline", "atelier-form", "clearspace"];
  return (
    <>
      <section className="hero-section section-space">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><span className="eyebrow-dot" />{t.home.eyebrow}</span>
            <h1>{t.home.title}</h1>
            <p className="hero-intro">{t.home.intro}</p>
            <div className="hero-actions">
              <Link className="button button-accent" href={`/${locale}/contact`}>{t.home.primary}<ArrowUpRight size={16} /></Link>
              <Link className="button button-text" href={`/${locale}/portfolio`}>{t.home.secondary}<ArrowDown size={15} /></Link>
            </div>
            <span className="hero-signature">{t.home.signature}</span>
          </div>
          <div className="hero-art" aria-label={locale === "ru" ? "Фрагменты трёх концептуальных проектов" : "Previews of three concept projects"}>
            <div className="hero-art-back"><ProjectArtwork project={t.projects.northline} compact /></div>
            <div className="hero-art-front"><ProjectArtwork project={t.projects["atelier-form"]} compact /></div>
            <div className="hero-art-accent"><ProjectArtwork project={t.projects.clearspace} compact /></div>
            <span className="hero-art-index">SELECTED CONCEPTS / 01—03</span>
          </div>
          <a className="hero-scroll" href="#intro"><span>{locale === "ru" ? "Листайте вниз" : "Scroll to explore"}</span><ArrowDown size={14} /></a>
        </div>
      </section>

      <section className="statement-section section-space" id="intro">
        <div className="container statement-grid">
          <span className="section-kicker">01 / {locale === "ru" ? "Позиционирование" : "Perspective"}</span>
          <div className="statement-main">
            <h2>{t.home.statementLabel}</h2>
            <div className="statement-columns">
              <p>{t.home.statement}</p>
              <div className="statement-note"><span className="statement-mark">↗</span><span>{locale === "ru" ? "Структура · Визуальный язык · Удобство" : "Structure · Visual direction · Usability"}</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="work-section section-space" id="work">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div><span className="section-kicker">02 / {t.home.workLabel}</span><h2>{t.home.workTitle}</h2><p>{t.home.workIntro}</p></div>
            <Link className="text-link" href={`/${locale}/portfolio`}>{t.viewAll}<ArrowUpRight size={15} /></Link>
          </div>
          <div className="project-grid">
            {projectIds.map((id, index) => <ProjectCard key={id} locale={locale} project={t.projects[id]} index={index} />)}
          </div>
          <p className="honesty-note"><span aria-hidden="true">✳</span> {locale === "ru" ? "Все работы на этой странице — концепты, созданные для демонстрации дизайна и разработки." : "Every project shown here is a concept created to demonstrate design and development."}</p>
        </div>
      </section>

      <section className="services-section section-space" id="services">
        <div className="container">
          <div className="section-heading"><span className="section-kicker">03 / {t.home.servicesLabel}</span><h2>{t.home.servicesTitle}</h2></div>
          <div className="service-list">
            {t.services.map((service, index) => (
              <Link href={`/${locale}/services`} className="service-row" key={service.title}>
                <span className="service-number">0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <ArrowUpRight className="service-arrow" size={20} aria-hidden="true" />
              </Link>
            ))}
          </div>
          <p className="section-footnote">{locale === "ru" ? "Итоговый объём и технические возможности зависят от задачи." : "Final scope and technical options depend on the brief."}</p>
        </div>
      </section>

      <section className="principles-section section-space">
        <div className="container principles-grid">
          <div className="section-heading"><span className="section-kicker">04 / {t.home.principlesLabel}</span><h2>{t.home.principlesTitle}</h2></div>
          <div className="principle-list">
            {t.principles.map(([title, description], index) => <article className="principle-row" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}
          </div>
        </div>
      </section>

      <section className="process-section section-space">
        <div className="container">
          <div className="section-heading section-heading-split"><div><span className="section-kicker">05 / {t.home.processLabel}</span><h2>{t.home.processTitle}</h2></div><p className="process-intro">{t.home.processNote}</p></div>
          <div className="process-grid">{t.process.map(([number, title, description]) => <article className="process-step" key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
        </div>
      </section>

      <section className="faq-section section-space">
        <div className="container faq-grid">
          <div className="section-heading"><span className="section-kicker">06 / {t.home.faqLabel}</span><h2>{t.home.faqTitle}</h2></div>
          <Accordion locale={locale} />
        </div>
      </section>

      <CallToAction locale={locale} />
    </>
  );
}
