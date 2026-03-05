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
      <h1 className="text-lg mb-6 flex items-center gap-1 ">
        <Book size={20} />
        Writing
      </h1>
      <p className="mb-12">
        Thoughts, opinions and learnings on development and building products.
        Check out the Github source for this blog{" "}
        <a href="https://github.com/AbhinRustagi/blog">here</a>.
      </p>

      {posts.length === 0 ? (
        <p className="py-12">No posts yet. Check back soon.</p>
      ) : (
        <div className="relative">
          {posts.map((post, i) => (
            <div
              key={post.slug}
              className={`flex gap-2 mb-6 animate-in animate-in-delay-${Math.min(i + 1, 4)}`}
            >
              <div className="flex-1">
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-serif font-medium no-underline hover:text-accent"
                >
                  <span className="text-neutral-900">{post.title}</span>
                </Link>
                {post.description && (
                  <p className="mt-1 text-sm">{post.description}</p>
                )}
                <ViewCount slug={post.slug} />
              </div>
              <span className="w-20 shrink-0 text-right text-sm">
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
    </section>
  );
}
