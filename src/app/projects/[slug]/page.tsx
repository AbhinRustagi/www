import type { Metadata } from "next";
import { marked } from "marked";
import { Globe, Github } from "lucide-react";
import { getProjects, getProjectContent } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const projects = await getProjects();
  const project = projects.find((p) => p.slug === slug);
  return {
    title: project?.title,
    description: project?.description || `Read about ${project?.title}`,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title: project?.title,
      description: project?.description || `Read about ${project?.title}`,
      type: "article",
      url: `/projects/${slug}`,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const projects = await getProjects();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <p className="text-text-muted">Project not found.</p>;
  }

  const rawContent = await getProjectContent(project.path);
  const html = await marked.parse(rawContent);

  return (
    <article>
      <header className="mb-8 animate-in">
        <p className="label mb-3">
          <time>
            {new Date(project.date).toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </time>
        </p>
        <h1 className="text-2xl mb-3">{project.title}</h1>
        <div className="accent-line mb-4" />
        {project.description && (
          <p className="text-text-secondary">{project.description}</p>
        )}
      </header>

      {(project.github_url || project.web_url) && (
        <div className="flex gap-3 items-center mb-8">
          {project.web_url && (
            <a
              className="glass-card-static px-4 py-2 inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors no-underline"
              href={project.web_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe size={14} />
              View
            </a>
          )}
          {project.github_url && (
            <a
              className="glass-card-static px-4 py-2 inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors no-underline"
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={14} />
              Github
            </a>
          )}
        </div>
      )}

      {/* Content sourced from own GitHub repo (trusted markdown) */}
      <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
