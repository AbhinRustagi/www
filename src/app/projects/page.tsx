import type { Metadata } from "next";
import Link from "next/link";
import { getProjects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects and case studies from my work over the years with different startups.",
  alternates: { canonical: "/projects" },
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <section>
      <div className="mb-12">
        <p className="label mb-2">Portfolio</p>
        <h1 className="text-2xl mb-4">Projects</h1>
        <div className="accent-line mb-6" />
        <p className="text-text-secondary">
          Projects I&apos;ve worked on for fun or as a side hustle. Check out
          the Github source for these writeups{" "}
          <a href="https://github.com/AbhinRustagi/projects">here</a>.
        </p>
      </div>

      {projects.length === 0 ? (
        <p className="py-12 text-text-muted">
          No projects yet. Check back soon.
        </p>
      ) : (
        <div className="space-y-2">
          {projects.map((project, i) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className={`glass-card p-5 block no-underline group animate-in animate-in-delay-${Math.min(i + 1, 4)}`}
            >
              <p className="text-white group-hover:text-accent transition-colors font-medium">
                {project.title}
              </p>
              {project.description && (
                <p className="mt-1 text-sm text-text-muted">
                  {project.description}
                </p>
              )}
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
