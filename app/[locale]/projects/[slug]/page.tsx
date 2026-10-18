import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { ProjectArtwork } from "@/components/projects/ProjectArtwork";
import { CallToAction } from "@/components/sections/CallToAction";
import { copy, projectPath, type ProjectId } from "@/lib/content";
import { isLocale, type Locale } from "@/config/site";
import { localizedMetadata } from "@/lib/seo";

const projectIds: ProjectId[] = ["northline", "atelier-form", "clearspace"];
type Params = Promise<{ locale: string; slug: string }>;

export async function generateStaticParams() {
  return ["ru", "en"].flatMap((locale) => projectIds.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale) || !projectIds.includes(slug as ProjectId)) return {};
  const project = copy[rawLocale].projects[slug as ProjectId];
  return localizedMetadata(rawLocale, `/projects/${slug}`, `${project.name} — ${project.category}`, project.short);
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale) || !projectIds.includes(slug as ProjectId)) notFound();
  const locale = rawLocale as Locale;
  const t = copy[locale];
  const project = t.projects[slug as ProjectId];
  const heading = locale === "ru" ? ["Идея проекта", "Для кого этот концепт", "Задача дизайна", "Ключевые решения", "Страницы и элементы", "Что демонстрирует проект", "Адаптивность и реализация"] : ["The concept", "Intended audience", "Design brief", "Design decisions", "Pages and interface", "What this project demonstrates", "Responsive design & build"];
  const next = t.projects[project.next];
  return (
    <>
      <section className="project-detail-hero section-space"><div className="container">
        <Link className="back-link" href={`/${locale}/portfolio`}><ArrowLeft size={15} />{t.backWork}</Link>
        <div className="project-detail-meta"><span className="eyebrow">{project.category}</span><span className="concept-label">{t.concept}</span></div>
        <h1>{project.name}</h1><p className="project-lead">{project.short}</p>
        <ProjectArtwork project={project} />
        <Link className="demo-launch-link" href={projectPath(locale, project.id) + "/demo"}>{locale === "ru" ? "Открыть интерактивный концепт" : "Open the interactive concept"}<ArrowUpRight size={16} /></Link>
      </div></section>
      <section className="project-story-section section-space"><div className="container project-story">
        <div className="project-story-intro"><span className="section-kicker">01 / {heading[0]}</span><p>{project.concept}</p></div>
        <div className="project-story-grid">
          <article><span className="section-kicker">02 / {heading[1]}</span><p>{project.audience}</p></article>
          <article><span className="section-kicker">03 / {heading[2]}</span><p>{project.challenge}</p></article>
          <article><span className="section-kicker">04 / {heading[3]}</span><p>{project.direction}</p><ul>{project.decisions.map((decision) => <li key={decision}>{decision}</li>)}</ul></article>
          <article><span className="section-kicker">05 / {heading[4]}</span><ul>{project.pages.map((page) => <li key={page}>{page}</li>)}</ul></article>
        </div>
      </div></section>
      <section className="project-features-section section-space"><div className="container project-feature-grid">
        <div><span className="section-kicker">06 / {heading[5]}</span><h2>{locale === "ru" ? "Решения, которые можно увидеть и проверить." : "Design decisions you can explore."}</h2><p>{locale === "ru" ? "Здесь нет выдуманных бизнес-результатов: это вымышленный проект, позволяющий оценить конкретные элементы интерфейса." : "There are no fictional business results here. This concept lets you explore the interface and its implementation."}</p></div>
        <ul className="feature-list">{project.features.map((feature, index) => <li key={feature}><span>0{index + 1}</span>{feature}<ArrowUpRight size={15} /></li>)}</ul>
      </div></section>
      <section className="project-implementation-section section-space"><div className="container implementation-grid"><span className="section-kicker">07 / {heading[6]}</span><div><h2>{locale === "ru" ? "Сделано для каждого экрана." : "Considered at every size."}</h2><p>{locale === "ru" ? "Адаптивная композиция, интерфейсные состояния и переходы сверстаны с учётом мобильных и настольных экранов. Проект создан на Next.js и React; элементы, обозначенные как интерактивные, работают в текущей демонстрации." : "Responsive layouts, interface states, and navigation are built for mobile and desktop. The project uses Next.js and React; the interactive elements shown here work in this demonstration."}</p><div className="technology-tags"><span>Next.js</span><span>React</span><span>TypeScript</span><span>Responsive UI</span></div></div></div></section>
      <section className="next-project-section"><div className="container next-project"><span className="eyebrow">{t.nextProject}</span><Link href={projectPath(locale, next.id)}><span>{next.name}</span><ArrowUpRight size={24} /></Link></div></section>
      <CallToAction locale={locale} />
    </>
  );
}
