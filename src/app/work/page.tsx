import type { Metadata } from "next";
import Link from "next/link";
import { getWorkEntries } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects and case studies from my freelance work.",
};

export default function WorkPage() {
  const projects = getWorkEntries();

  return (
    <section>
      <div className="mx-auto max-w-240 px-4">
        <h2 className="text-lg mb-6 text-text">Work</h2>
        <p className="text-text-muted mb-12">
          Selected projects and case studies from my work over the years with
          different startups.
        </p>

        {projects.length === 0 ? (
          <p className="text-text-muted py-12">
            No projects yet. Check back soon.
          </p>
        ) : (
          <div className="relative">
            {projects.map((project, i) => (
              <div
                key={project.slug}
                className={`flex gap-2 mb-4 animate-in animate-in-delay-${Math.min(i + 1, 4)}`}
              >
                <div className="flex-1">
                  <Link
                    href={`/work/${project.slug}`}
                    className="font-medium text-text no-underline hover:text-accent"
                  >
                    {project.title}
                  </Link>
                  <p className="mt-1 text-[0.9375rem] text-text-muted">
                    {project.client} / {project.description}
                  </p>
                </div>
                <span className="w-20 shrink-0 text-right text-text-muted text-sm">
                  {new Date(project.date).getFullYear()}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
