import Back from "@/components/Back";
import { getAllPosts, getIndex, groupPostsByDate } from "@/lib/blog";
import generateMetadata from "@/lib/metadata";
import Link from "next/link";
import { PiArrowLeftBold } from "react-icons/pi";

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
      <h1 className="text-2xl mb-1">Blog</h1>
      <p className="mb-8 italic">Thoughts, ideas and opinions</p>
      <div className="mb-16">
        <ul className="mb-10">
          {posts.reverse().map((post) => (
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
      </div>
    </section>
  );
}
