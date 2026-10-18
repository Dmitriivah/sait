import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CallToAction } from "@/components/sections/CallToAction";
import { copy } from "@/lib/content";
import { isLocale, type Locale } from "@/config/site";
import { localizedMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return locale === "en" ? localizedMetadata("en", "/about", "About the approach", "A practical, considered approach to design and development for service businesses.") : localizedMetadata("ru", "/about", "О подходе к работе", "Внимательный подход к дизайну и разработке сайтов для сервисного бизнеса.");
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const t = copy[locale];
  return (
    <>
      <section className="page-hero section-space"><div className="container page-hero-inner"><span className="eyebrow">{t.about.eyebrow}</span><h1>{t.about.title}</h1><p>{t.about.intro}</p></div></section>
      <section className="about-story section-space"><div className="container about-grid">
        <div className="about-monogram" aria-hidden="true"><span>{locale === "ru" ? "Д" : "D"}</span><small>{locale === "ru" ? "Веб-дизайн · Разработка" : "Web design · Development"}</small><i /></div>
        <div className="about-copy"><span className="section-kicker">01 / {t.about.approachTitle}</span><h2>{locale === "ru" ? "Начинаю с сути. Собираю её в ясную форму." : "Start with the substance. Shape it with care."}</h2><p>{t.about.approach}</p><div className="about-note"><span className="eyebrow">{locale === "ru" ? "Открыто и честно" : "A clear starting point"}</span><p>{t.about.personalize}</p></div></div>
      </div></section>
      <section className="about-principles section-space"><div className="container about-principles-grid"><div><span className="section-kicker">02 / {t.about.toolsTitle}</span><h2>{t.about.toolsTitle}</h2></div><div><div className="technology-tags"><span>Next.js</span><span>React</span><span>TypeScript</span><span>CSS</span></div><p className="about-tool-note">{locale === "ru" ? "Технологии и инструменты подбираются под задачу. Состав дополнительных интеграций обсуждается отдельно." : "Tools and technologies are chosen for the brief. Additional integrations are agreed separately."}</p></div></div></section>
      <section className="about-principles section-space"><div className="container about-principles-grid"><div><span className="section-kicker">03 / {t.about.principlesTitle}</span><h2>{t.about.principlesTitle}</h2></div><div className="principle-list">{t.principles.map(([title, description], index) => <article className="principle-row" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>
      <section className="about-principles section-space"><div className="container about-principles-grid"><div><span className="section-kicker">04 / {t.about.languagesTitle}</span><h2>{t.about.languagesTitle}</h2></div><p className="about-tool-note">{t.about.languages}</p></div></section>
      <CallToAction locale={locale} />
    </>
  );
}
