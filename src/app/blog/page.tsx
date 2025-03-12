import { getIndex, groupPostsByDate } from "@/lib/blog";
import generateMetadata from "@/lib/metadata";
import Link from "next/link";

export const metadata = generateMetadata({
  title: "Blog",
  description: "Thoughts, ideas and opinions",
  canonical: "https://abhin.dev/blog",
});

export default async function Blog() {
  const posts = await getIndex();
  const organizedPosts = groupPostsByDate(posts);

  return (
    <section>
      <h1 className="text-2xl font-bold text-neutral-100 mb-8">
        Thoughts, ideas and opinions
      </h1>
      <div className="mb-16 max-w-md">
        {organizedPosts.map((groupedPosts) => (
          <div key={groupedPosts.date}>
            <h2 className="mb-2 text-sm">{groupedPosts.date}</h2>
            <ul>
              {groupedPosts.posts.map((item) => (
                <li key={item.slug} className="mb-6">
                  <div>
                    <Link
                      href={`/blog/${item.slug}`}
                      className="text-neutral-100"
                    >
                      {item.title}
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
