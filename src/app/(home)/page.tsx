import { getAllPosts } from "@/lib/blog";
import HomeContent from "@/components/HomeContent";

export default async function Home() {
  const posts = await getAllPosts();

  return <HomeContent posts={posts} />;
}
