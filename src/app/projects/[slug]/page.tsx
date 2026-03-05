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
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const projects = await getProjects();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <p className="mx-auto max-w-240 px-4 ">Project not found.</p>;
  }

  const rawContent = await getProjectContent(project.path);
  const html = await marked.parse(rawContent);

  return (
    <article className="mx-auto max-w-240 px-4">
      <header className="mb-4">
        <h1 className="text-neutral-900 text-lg mb-6 flex items-center gap-1 ">
          {project.title}
        </h1>
        <div className="flex flex-wrap gap-4 items-center">
          <time className="text-sm">
            {new Date(project.date).toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </time>
          <span>
            {project.description && (
              <p className=" text-sm">{project.description}</p>
            )}
          </span>
        </div>
      </header>

      {(project.github_url || project.web_url) && (
        <div className="flex gap-4 items-center mb-6">
          {project.web_url && (
            <a
              className="flex items-center gap-2 px-4 py-2 rounded-lg no-underline text-xs border border-neutral-500 hover:text-accent"
              href={project.web_url}
            >
              <Globe size={16} />
              <span className="text-sm">View</span>
            </a>
          )}
          {project.github_url && (
            <a
              className="flex items-center gap-2 px-4 py-2 rounded-lg no-underline text-xs border border-neutral-500 hover:text-accent"
              href={project.github_url}
            >
              <Github size={16} />
              <span className="text-sm">Github</span>
            </a>
          )}
        </div>
      )}

      {/* Content sourced from own GitHub repo (trusted markdown) */}
      <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
