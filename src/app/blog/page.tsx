import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts } from "@/lib/data";


export const metadata: Metadata = {
  title: "Writing",
  description:
    "Thoughts on web development, freelancing, and building products.",
  alternates: { canonical: "/blog" },
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section>
      <div className="mb-12">
        <p className="label mb-2">Blog</p>
        <h1 className="text-2xl mb-4">Writing</h1>
        <div className="accent-line mb-6" />
        <p className="text-text-secondary">
          Thoughts, opinions and learnings on development and building products.
          Check out the Github source for this blog{" "}
          <a href="https://github.com/AbhinRustagi/blog">here</a>.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="py-12 text-text-muted">No posts yet. Check back soon.</p>
      ) : (
        <div className="space-y-1">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`block no-underline group px-4 py-3 -mx-4 rounded-xl transition-colors hover:bg-surface-raised animate-in animate-in-delay-${Math.min(i + 1, 4)}`}
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-text-primary group-hover:text-accent transition-colors">
                  {post.title}
                </span>
                <span className="shrink-0 text-xs text-text-muted tabular-nums">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    year: "2-digit",
                  })}
                </span>
              </div>
              {post.description && (
                <p className="mt-1 text-sm text-text-muted">
                  {post.description.length > 120
                    ? post.description.slice(0, 120) + "..."
                    : post.description}
                </p>
              )}
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
