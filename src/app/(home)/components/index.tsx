import { getAllPosts, sortPosts } from "@/lib/blog";
import Link from "next/link";

export function About() {
  return (
    <section className="mb-16">
      <p className="mb-5">
        With over 2 years of experience in software development, I'm a full
        stack software engineer who loves building impactful products. I am a
        recent graduate from the University of Melbourne, where I studied
        Information Technology, with a specialisation in AI. Prior to this I
        studied Statistics as my undergrad major.
      </p>
      <p className="pl-4 border-l-3 border-gray-border">
        If you want to learn <Link href="/about">more about me</Link>
      </p>
    </section>
  );
}

export async function Writing() {
  const posts = await getAllPosts();

  return (
    <section className="mb-16">
      <h2 className="mb-5 text-2xl">Writing</h2>
      <ul className="mb-10">
        {posts
          .reverse()
          .slice(0, 3)
          .map((post) => (
            <li
              key={post.metadata.title}
              className="md:flex-row flex-col mb-4 flex justify-between"
            >
              <Link
                href={`/blog/${post.metadata.slug}`}
                className="no-underline! md:max-w-md"
              >
                {post.metadata.title}
              </Link>
              <span>
                {(post.metadata.date as Date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </li>
          ))}
      </ul>
      <div className="pl-4 border-l-3 border-gray-border">
        You can find <Link href="/blog">all my posts here</Link>
      </div>
    </section>
  );
}
