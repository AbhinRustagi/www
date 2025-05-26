import { getIndex, groupPostsByDate } from "@/lib/blog";
import generateMetadata from "@/lib/metadata";
import Link from "next/link";
import { PiArrowLeftBold } from "react-icons/pi";

export const metadata = generateMetadata({
  title: "Blog",
  description: "Thoughts, ideas and opinions",
  canonical: "https://abhin.dev/blog",
});

export default async function Blog() {
  const postsIndex = await getIndex();
  const organizedPosts = groupPostsByDate(postsIndex);

  return (
    <section>
      <div>
        <Link
          href="/"
          className="flex items-center gap-2 mb-10 no-underline! hover:underline"
        >
          <PiArrowLeftBold />
          <span>Home</span>
        </Link>
      </div>
      <h1 className="text-2xl mb-3">Blog</h1>
      <p className="mb-8">Thoughts, ideas and opinions</p>
      <div className="mb-16">
        {organizedPosts.map((groupedPosts) => (
          <div key={groupedPosts.date}>
            <h2 className="mb-2 text-base text-foreground!">
              {groupedPosts.date}
            </h2>
            <ul>
              {groupedPosts.posts.map((item) => (
                <li key={item.slug} className="mb-6">
                  <div>
                    <Link href={`/blog/${item.slug}`} className="no-underline!">
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
