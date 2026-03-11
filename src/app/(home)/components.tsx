import { LinkButton } from "@/components/button";
import {
  getBlogPosts,
  getGithubContributions,
  getProjects,
  getWakatimeHours,
  getWorkEntries,
} from "@/lib/data";
import Link from "next/link";

export async function BlogPosts() {
  const posts = await getBlogPosts();
  const recentPosts = posts.slice(0, 3);

  if (recentPosts.length === 0) return null;

  return (
    <section>
      <div className="flex items-center justify-between mb-4 animate-in animate-in-delay-1">
        <div>
          <h2 className="text-lg">Writing</h2>
        </div>
        <LinkButton variant="outline" href="/blog">
          Read all
        </LinkButton>
      </div>
      <div className="space-y-1">
        {recentPosts.map((post, i) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className={`block no-underline group px-4 py-3 -mx-4 rounded-xl transition-colors hover:bg-surface-raised animate-in animate-in-delay-${Math.min(i + 2, 4)}`}
          >
            <span className="!text-text-primary font-semibold block mb-1 group-hover:text-accent transition-colors">
              {post.title}
            </span>
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export async function FeaturedProjects() {
  const projects = await getProjects();
  const featuredProjects = projects.slice(0, 3);

  if (featuredProjects.length === 0) return null;

  return (
    <section>
      <div className="flex items-center justify-between mb-4 animate-in animate-in-delay-1">
        <div>
          <h2 className="text-lg">Projects</h2>
        </div>
        <Link href="/projects" className="link-button">
          View all
        </Link>
      </div>
      <div className="space-y-2">
        {featuredProjects.map((project, i) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className={`glass-card p-4 md:p-5 block no-underline group animate-in animate-in-delay-${Math.min(i + 2, 4)}`}
          >
            <p className="text-text-primary font-medium group-hover:text-accent transition-colors mb-1">
              {project.title}
            </p>
            {project.description && (
              <p className="text-sm text-text-muted">
                {project.description.length > 100
                  ? project.description.slice(0, 100) + "..."
                  : project.description}
              </p>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}

export async function FeaturedWork() {
  const featuredWork = getWorkEntries()
    .filter((w) => w.featured)
    .slice(0, 3);

  if (featuredWork.length === 0) return null;

  return (
    <section>
      <div className="flex items-center justify-between mb-4 animate-in animate-in-delay-1">
        <div>
          <h2 className="text-lg">Work Projects</h2>
        </div>
        <Link href="/work" className="link-button">
          View all
        </Link>
      </div>
      <div className="space-y-2">
        {featuredWork.map((work, i) => (
          <Link
            key={work.slug}
            href={`/work/${work.slug}`}
            className={`glass-card p-4 md:p-5 block no-underline group animate-in animate-in-delay-${Math.min(i + 2, 4)}`}
          >
            <p className="text-text-primary font-medium group-hover:text-accent transition-colors mb-1">
              {work.title}
            </p>
            <p className="text-sm text-text-muted">{work.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export async function CodingStats() {
  const [codingHours, contributions] = await Promise.all([
    getWakatimeHours(),
    getGithubContributions(),
  ]);

  return (
    <div className="space-y-2">
      <div className="rounded-md glass-card-static px-4 py-2 text-sm font-medium animate-in animate-in-delay-2 flex items-center justify-between gap-4">
        <Link
          href="https://wakatime.com/AbhinRustagi"
          target="_blank"
          className="no-underline group"
        >
          <span className="text-text-primary group-hover:text-accent transition-colors">
            {codingHours}h
          </span>
          <span className="ml-1">coded this week</span>
        </Link>
        <span>WakaTime</span>
      </div>
      <div className="rounded-md glass-card-static px-4 py-2 font-medium animate-in animate-in-delay-2 flex items-center justify-between gap-4 text-sm">
        <Link
          href="https://github.com/AbhinRustagi"
          target="_blank"
          className="no-underline group"
        >
          <span className="text-text-primary group-hover:text-accent transition-colors">
            {contributions}
          </span>
          <span className="ml-1">contributions this year</span>
        </Link>
        <span>Github</span>
      </div>
    </div>
  );
}

export function CodingStatsSkeleton() {
  return (
    <div className="glass-card-static p-4 md:p-5 flex items-center gap-6">
      <div className="h-5 w-40 skeleton" />
      <div className="h-5 w-40 skeleton" />
    </div>
  );
}

function SkeletonLine({ width = "w-full" }: { width?: string }) {
  return <div className={`h-4 ${width} skeleton`} />;
}

function SectionSkeleton({ rows }: { rows: number }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="space-y-2">
          <div className="h-3 w-16 skeleton" />
          <div className="h-5 w-24 skeleton" />
        </div>
        <div className="h-8 w-16 skeleton" />
      </div>
      <div className="space-y-2">
        {Array.from({ length: rows }).map((_, i) => (
          <div key={i} className="glass-card-static p-4 md:p-5 space-y-2">
            <SkeletonLine width="w-1/2" />
            <SkeletonLine width="w-3/4" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProjectsSkeleton() {
  return <SectionSkeleton rows={3} />;
}

export function WorkSkeleton() {
  return <SectionSkeleton rows={3} />;
}

export function BlogSkeleton() {
  return <SectionSkeleton rows={3} />;
}
