import Back from "@/components/Back";
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
    <section>
      <Back />
      <h1 className="text-3xl mb-1">Blog</h1>
      <p className="mb-8 text-xl!">Thoughts, ideas and opinions</p>
      <div className="mb-16">
        <ul className="mb-10">
          {posts.reverse().map((post) => (
            <li key={post.metadata.title} className="text-xl! mb-10">
              <span className="text-base! mb-2 font-medium block">
                {(post.metadata.date as Date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
              <Link
                href={`/blog/${post.metadata.slug}`}
                className="hover:text-accent hover:underline underline-offset-4"
              >
                {post.metadata.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
