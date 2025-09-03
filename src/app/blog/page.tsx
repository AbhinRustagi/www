import { getAllPosts } from "@/lib/blog";
import generateMetadata from "@/lib/metadata";
import Link from "next/link";

export const metadata = generateMetadata({
  title: "Blog",
  description: "Thoughts, ideas and opinions",
  canonical: "https://abhin.dev/blog",
});

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <section className="my-16">
      <h1 className="mb-8 text-3xl font-bold!">Thoughts, ideas and opinions</h1>
      <div>
        <ul className="mb-10">
          {posts.reverse().map((post) => (
            <li key={post.metadata.title} className="mb-10">
              <h3 className="mb-1 text-lg">
                <Link href={`/blog/${post.metadata.slug}`}>
                  {post.metadata.title}
                </Link>
              </h3>
              <p className="mb-1 text-foreground">
                <span className="font-medium">
                  {(post.metadata.date as Date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
                {" • "}
                {post.metadata.reading_time} minutes
              </p>
              <p>{post.metadata.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
