import { getAllPosts } from "@/lib/blog";
import { About, Blog, CartoonAvatar } from "@/pages/Home";
import Socials from "@/components/Socials";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <>
      <CartoonAvatar />
      <About />
      <Socials />
      <section className="mb-10">
        <h2 className="text-xl mb-3">Projects</h2>
        <p>Hang tight. Coming up shortly.</p>
      </section>
      <Blog posts={posts} />
    </>
  );
}
