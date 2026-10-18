import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDemo } from "@/components/projects/ProjectDemo";
import { copy, type ProjectId } from "@/lib/content";
import { isLocale, type Locale } from "@/config/site";
import { localizedMetadata } from "@/lib/seo";

const projectIds: ProjectId[] = ["northline", "atelier-form", "clearspace"];

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale) || !projectIds.includes(slug as ProjectId)) return {};
  const project = copy[rawLocale].projects[slug as ProjectId];
  return localizedMetadata(rawLocale, `/projects/${slug}/demo`, `${project.name} — ${rawLocale === "ru" ? "интерактивный концепт" : "interactive concept"}`, project.short, { noIndex: true });
}

export default async function ProjectDemoPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale) || !projectIds.includes(slug as ProjectId)) notFound();
  return <ProjectDemo locale={rawLocale as Locale} projectId={slug as ProjectId} />;
}
