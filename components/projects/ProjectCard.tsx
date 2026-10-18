import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Locale } from "@/config/site";
import { copy, projectPath, type Project } from "@/lib/content";
import { ProjectArtwork } from "@/components/projects/ProjectArtwork";

export function ProjectCard({ locale, project, index = 0 }: { locale: Locale; project: Project; index?: number }) {
  const t = copy[locale];
  return (
    <article className={`project-card project-card-${index + 1}`}>
      <Link className="project-art-link" href={projectPath(locale, project.id)} aria-label={`${t.viewProject}: ${project.name}`}>
        <ProjectArtwork project={project} compact />
        <span className="concept-stamp">{t.concept}</span>
      </Link>
      <div className="project-card-copy">
        <div><span className="project-category">{project.category}</span><h3>{project.name}</h3><p>{project.short}</p></div>
        <Link className="icon-link" href={projectPath(locale, project.id)} aria-label={`${t.viewProject}: ${project.name}`}><ArrowUpRight size={20} /></Link>
      </div>
    </article>
  );
}
