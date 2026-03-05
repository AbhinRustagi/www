import type { Metadata } from "next";
import Link from "next/link";
import { Book } from "lucide-react";
import { getBlogPosts } from "@/lib/data";
import { ViewCount } from "./view-count";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Thoughts on web development, freelancing, and building products.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section>
      <div className="mx-auto max-w-[960px] px-4">
        <h1 className="text-lg mb-6 flex items-center gap-1 text-text">
          <Book size={20} />
          Writing
        </h1>
        <p className="text-text-muted mb-12">
          Thoughts, opinions and learnings on development and building products.
          Check out the Github source for this blog{" "}
          <a href="https://github.com/AbhinRustagi/blog">here</a>.
        </p>

        {posts.length === 0 ? (
          <p className="text-text-muted py-12">
            No posts yet. Check back soon.
          </p>
        ) : (
          <div className="relative">
            {posts.map((post, i) => (
              <div
                key={post.slug}
                className={`flex gap-2 mb-4 animate-in animate-in-delay-${Math.min(i + 1, 4)}`}
              >
                <div className="flex-1">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-mono font-medium text-[0.9375rem] text-text no-underline hover:text-accent"
                  >
                    {post.title}
                  </Link>
                  {post.description && (
                    <p className="mt-1 text-sm text-text-muted">
                      {post.description}
                    </p>
                  )}
                  <ViewCount slug={post.slug} />
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
        )}
      </div>
    </section>
  );
}
