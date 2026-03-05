import type { Metadata } from "next";
import Link from "next/link";
import { Archive } from "lucide-react";
import { getProjects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects and case studies from my work over the years with different startups.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <section>
      <div className="mx-auto max-w-240 px-4">
        <h1 className="text-lg mb-6 flex items-center gap-1 ">
          <Archive size={20} />
          Projects
        </h1>
        <p className="mb-12">
          Projects I&apos;ve worked on for fun or as a side hustle. Check out
          the Github source for these writeups{" "}
          <a href="https://github.com/AbhinRustagi/projects">here</a>.
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
                    href={`/projects/${project.slug}`}
                    className="font-serif font-medium no-underline hover:text-accent"
                  >
                    <span className="text-neutral-900">{project.title}</span>
                  </Link>
                  {project.description && (
                    <p className="mt-1 text-sm">{project.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
