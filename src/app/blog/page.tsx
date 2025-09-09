import { getAllPosts } from "@/lib/blog";
import generateMetadata from "@/lib/metadata";
import Link from "next/link";

export const dynamic = "force-dynamic";

export const metadata = generateMetadata({
  title: "Blog",
  description: "Thoughts, ideas and opinions",
  canonical: "https://abhin.dev/blog",
});

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <ul>
      {posts.reverse().map((post) => (
        <li key={post.metadata.title} className="my-6">
          <h3 className="mb-1 text-foreground font-semibold">
            <Link href={`/blog/${post.metadata.slug}`}>
              {post.metadata.title}
            </Link>
          </h3>
          <p className="mb-1 text-muted-foreground text-sm font-fira-mono">
            <span>
              {(post.metadata.date as Date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
            {" • "}
            {post.metadata.reading_time} minutes
          </p>
        </li>
      ))}
    </ul>
  );
}
