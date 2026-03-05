import { getWorkEntries } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects and case studies from my freelance work.",
};

export default function WorkPage() {
  const projects = getWorkEntries();

  return (
    <section>
      <div className="mx-auto max-w-240 px-4">
        <h2 className="text-lg mb-6 ">Work</h2>
        <p className="mb-12">
          Selected projects and case studies from my work over the years with
          different startups.
        </p>

        {projects.length === 0 ? (
          <p className="py-12">No projects yet. Check back soon.</p>
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
                    className="font-serif font-medium no-underline hover:text-accent"
                  >
                    <span className="text-neutral-900">
                      {project.client} • {project.title}
                    </span>
                  </Link>
                  <p className="mt-2 text-sm">{project.description}</p>
                </div>
                <span className="w-20 shrink-0 text-right text-sm">
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
