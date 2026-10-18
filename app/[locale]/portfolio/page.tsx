import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { copy, type ProjectId } from "@/lib/content";
import { isLocale, type Locale } from "@/config/site";
import { localizedMetadata } from "@/lib/seo";
import { CallToAction } from "@/components/sections/CallToAction";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return locale === "en" ? localizedMetadata("en", "/portfolio", "Selected website design concepts", "Explore three conceptual website projects for consulting, interior design, and commercial services.") : localizedMetadata("ru", "/portfolio", "Концептуальные проекты сайтов", "Три демонстрационных проекта для консалтинга, интерьерного дизайна и профессионального сервиса.");
}

export default async function PortfolioPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const t = copy[locale];
  const ids: ProjectId[] = ["northline", "atelier-form", "clearspace"];
  return (
    <>
      <section className="page-hero section-space"><div className="container page-hero-inner"><span className="eyebrow">{t.portfolio.eyebrow}</span><h1>{t.portfolio.title}</h1><p>{t.portfolio.intro}</p></div></section>
      <section className="portfolio-section section-space"><div className="container"><div className="project-grid portfolio-grid">{ids.map((id, index) => <ProjectCard key={id} locale={locale} project={t.projects[id]} index={index} />)}</div></div></section>
      <CallToAction locale={locale} />
    </>
  );
}
