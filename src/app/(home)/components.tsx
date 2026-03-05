import { getBlogPosts, getProjects, getWorkEntries } from "@/lib/data";
import { Book, FlaskConical, SquarePen } from "lucide-react";
import Link from "next/link";

export async function BlogPosts() {
  const posts = await getBlogPosts();
  const recentPosts = posts.slice(0, 3);

  if (recentPosts.length === 0) return null;

  return (
    <section className="animate-in">
      <h2 className="text-lg mb-6 flex items-center gap-1 text-text">
        <Book size={16} />
        Writing
      </h2>
      <div className="relative">
        {recentPosts.map((post) => (
          <div key={post.slug} className="flex gap-2 mb-4">
            <div className="flex-1">
              <Link
                href={`/blog/${post.slug}`}
                className="font-medium text-text no-underline hover:text-accent"
              >
                {post.title}
              </Link>
            </div>
            <span className="w-20 shrink-0 text-right text-text-muted text-sm">
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
                year: "2-digit",
                day: "numeric",
              })}
            </span>
          </div>
        ))}
      </div>
      <Link
        href="/blog"
        className="inline-block mt-6 text-[0.9375rem] text-text-muted hover:text-accent"
      >
        Read all posts
      </Link>
    </section>
  );
}

export async function FeaturedProjects() {
  const projects = await getProjects();
  const featuredProjects = projects.slice(0, 3);

  if (featuredProjects.length === 0) return null;

  return (
    <section className="animate-in">
      <h2 className="text-lg mb-6 flex items-center gap-1 text-text">
        <FlaskConical size={18} />
        Projects
      </h2>
      <ul className="relative">
        {featuredProjects.map((project) => (
          <li key={project.slug} className="flex gap-2 mb-4 flex-wrap">
            <div className="flex-1">
              <Link
                href={`/projects/${project.slug}`}
                className="font-medium text-text no-underline hover:text-accent"
              >
                {project.title}
              </Link>
            </div>
            {project.description && (
              <p className="text-sm text-text-muted mt-1 basis-full">
                {project.description.length > 140
                  ? project.description.slice(0, 140) + "..."
                  : project.description}
              </p>
            )}
          </li>
        ))}
      </ul>
      <Link
        href="/projects"
        className="inline-block mt-6 text-[0.9375rem] text-text-muted hover:text-accent"
      >
        Explore all
      </Link>
    </section>
  );
}

export async function FeaturedWork() {
  const featuredWork = getWorkEntries()
    .filter((w) => w.featured)
    .slice(0, 3);

  if (featuredWork.length === 0) return null;

  return (
    <section className="animate-in">
      <h2 className="text-lg mb-6 flex items-center gap-1 text-text">
        <SquarePen size={16} />
        Work Case Studies
      </h2>
      <ul className="relative">
        {featuredWork.map((work) => (
          <li key={work.slug} className="flex gap-2 mb-4">
            <div className="flex-1">
              <Link
                href={`/work/${work.slug}`}
                className="font-medium text-text no-underline hover:text-accent"
              >
                {work.title}
              </Link>
            </div>
            <span className="w-20 shrink-0 text-right text-text-muted text-sm">
              {new Date(work.date).toLocaleDateString("en-US", {
                month: "short",
                year: "2-digit",
              })}
            </span>
          </li>
        ))}
      </ul>
      <Link
        href="/work"
        className="inline-block mt-6 text-[0.9375rem] text-text-muted hover:text-accent"
      >
        Explore all
      </Link>
    </section>
  );
}

function SkeletonLine({ width = "w-full" }: { width?: string }) {
  return <div className={`h-4 ${width} rounded bg-white/5 animate-pulse`} />;
}

function SectionSkeleton({
  rows,
  showDate,
}: {
  rows: number;
  showDate?: boolean;
}) {
  return (
    <section>
      <div className="h-5 w-32 rounded bg-white/5 animate-pulse mb-6" />
      <div className="space-y-4">
        {Array.from({ length: rows }).map((_, i) => (
          <div key={i} className="flex gap-2">
            <div className="flex-1 space-y-2">
              <SkeletonLine width="w-3/4" />
            </div>
            {showDate && (
              <div className="w-20 shrink-0">
                <SkeletonLine width="w-full" />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6">
        <SkeletonLine width="w-24" />
      </div>
    </section>
  );
}

export function ProjectsSkeleton() {
  return <SectionSkeleton rows={3} />;
}

export function WorkSkeleton() {
  return <SectionSkeleton rows={3} showDate />;
}

export function BlogSkeleton() {
  return <SectionSkeleton rows={3} showDate />;
}
