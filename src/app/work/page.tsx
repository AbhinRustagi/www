import { getWorkEntries } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects and case studies from my freelance work.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  const projects = getWorkEntries();

  return (
    <section>
      <div className="mb-12">
        <p className="label mb-2">Experience</p>
        <h1 className="text-2xl mb-4">Work</h1>
        <div className="accent-line mb-6" />
        <p className="text-text-secondary">
          Selected projects and case studies from my work over the years with
          different startups.
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
              href={`/work/${project.slug}`}
              className={`glass-card p-5 flex gap-4 items-start no-underline group animate-in animate-in-delay-${Math.min(i + 1, 4)}`}
            >
              <div className="flex-1">
                <p className="text-text-primary group-hover:text-accent transition-colors font-medium">
                  {project.client} &middot; {project.title}
                </p>
                <p className="mt-1 text-sm text-text-muted">
                  {project.description}
                </p>
              </div>
              <span className="w-16 shrink-0 text-right text-sm text-text-muted">
                {new Date(project.date).getFullYear()}
              </span>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
