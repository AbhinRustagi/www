import Socials from "@/components/Socials";
import { getAllPosts } from "@/lib/blog";
import { About, Avatar, Blog } from "./components/Cards";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <>
      <Avatar />
      <About />
      <Socials />
      <section className="mb-10">
        <h2 className="text-xl mb-3">Projects</h2>
        <p>Hang tight. Coming up shortly.</p>
      </section>
      <Blog posts={posts.reverse().slice(0, 4)} />
    </>
  );
}
