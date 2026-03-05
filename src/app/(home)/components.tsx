import {
  getBlogPosts,
  getGithubContributions,
  getProjects,
  getWakatimeHours,
  getWorkEntries,
} from "@/lib/data";
import { Book } from "lucide-react";
import Link from "next/link";

export async function BlogPosts() {
  const posts = await getBlogPosts();
  const recentPosts = posts.slice(0, 3);

  if (recentPosts.length === 0) return null;

  return (
    <section className="animate-in">
      <h2 className="text-xl mb-6 flex items-center gap-1 ">
        <Book size={16} />
        Writing
      </h2>
      <div className="relative">
        {recentPosts.map((post) => (
          <div key={post.slug} className="flex gap-2 mb-4">
            <div className="flex-1">
              <Link
                href={`/blog/${post.slug}`}
                className="text-neutral-900 font-serif no-underline group"
              >
                <span className="text-neutral-900 group-hover:text-accent">
                  {post.title}
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Link
        href="/blog"
        className="border border-neutral-300 text-neutral-300 rounded-lg p-1 px-2 inline-block mt-6 text-sm hover:text-accent"
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
      <h2 className="text-xl mb-6 flex items-center gap-1 ">Projects</h2>
      <ul className="relative space-y-6">
        {featuredProjects.map((project) => (
          <li key={project.slug} className="flex gap-2 flex-wrap">
            <p className="flex-1">
              <Link
                href={`/projects/${project.slug}`}
                className="no-underline group"
              >
                <p className="mb-2 font-serif text-neutral-900 group-hover:text-accent">
                  {project.title}
                </p>
                {project.description && (
                  <p className="text-sm basis-full">
                    {project.description.length > 140
                      ? project.description.slice(0, 140) + "..."
                      : project.description}
                  </p>
                )}
              </Link>
            </p>
          </li>
        ))}
      </ul>
      <Link
        href="/projects"
        className="border border-neutral-300 text-neutral-300 rounded-lg p-1 px-2 inline-block mt-6 text-sm hover:text-accent"
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
    <section className="animate-in my-12">
      <h2 className="text-xl mb-6 flex items-center gap-1 ">Work Projects</h2>
      <ul className="relative space-y-6">
        {featuredWork.map((work) => (
          <li key={work.slug} className="flex gap-2">
            <p className="flex-1">
              <Link href={`/work/${work.slug}`} className="no-underline group">
                <p className="mb-1 font-serif text-neutral-900 group-hover:text-accent">
                  {work.title}
                </p>
                <p className="text-sm group-hover:text-accent">
                  {work.description}
                </p>
              </Link>
            </p>
          </li>
        ))}
      </ul>
      <Link
        href="/work"
        className="border border-neutral-300 rounded-lg p-1 px-2 inline-block mt-6 text-sm hover:text-accent"
      >
        Explore all
      </Link>
    </section>
  );
}

export async function CodingStats() {
  const [codingHours, contributions] = await Promise.all([
    getWakatimeHours(),
    getGithubContributions(),
  ]);

  return (
    <>
      <li>
        <Link
          className="underline underline-offset-4"
          href="https://wakatime.com/AbhinRustagi"
          target="_blank"
        >
          {codingHours} hours of coding
        </Link>{" "}
        in the last week
      </li>
      <li>
        <Link
          className="underline underline-offset-4"
          href="https://github.com/AbhinRustagi"
          target="_blank"
        >
          {contributions} contributions
        </Link>{" "}
        in the last year
      </li>
    </>
  );
}

export function CodingStatsSkeleton() {
  return (
    <>
      <li>
        <span className="inline-block h-4 w-48 rounded bg-neutral-700/5 animate-pulse align-middle" />
      </li>
      <li>
        <span className="inline-block h-4 w-44 rounded bg-neutral-700/5 animate-pulse align-middle" />
      </li>
    </>
  );
}

function SkeletonLine({ width = "w-full" }: { width?: string }) {
  return (
    <div className={`h-4 ${width} rounded bg-neutral-700/5 animate-pulse`} />
  );
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
      <div className="h-5 w-32 rounded bg-neutral-700/5 animate-pulse mb-6" />
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
