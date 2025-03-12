import { getIndex, groupPostsByDate } from "@/lib/blog";
import generateMetadata from "@/lib/metadata";

export const metadata = generateMetadata({
  title: "Blog",
  description: "Thoughts, ideas and opinions",
  canonical: "https://abhin.dev/blog",
});

export default async function Blog() {
  const posts = await getIndex();
  const organizedPosts = groupPostsByDate(posts);

  return <></>;
}
