import { getAllPosts } from "@/lib/blog";
import HomePage from "@/pages/Home";

export default async function Home() {
  const posts = await getAllPosts();
  return <HomePage posts={posts} />;
}
