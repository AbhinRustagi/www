import projects from "@/content/projects.json";
import { getAllPosts } from "@/lib/blog";
import { Project } from "@/lib/types";
import Link from "next/link";

export function About() {
  return (
    <section className="mb-20">
      <h2 className="text-3xl mb-4">
        Hello, I'm <span className="text-accent">Abhin</span>
        <br />
        <span className="text-sm font-medium text-foreground">
          pronounced /ab-hin/
        </span>
      </h2>
      <div>
        <p className="font-semibold! text-2xl! text-title! max-w-xl tracking-tighter">
          I'm a <span className="text-accent">software engineer</span> living in
          Melbourne, and I've been a digital builder for the past few years. I'm
          passionate about interfaces that automate, infrastructure that scales,
          products that delight.
          <br />
          I'm currently open to new opportunities.
        </p>
      </div>
      <Link
        href="/about"
        className="mt-12 py-4 px-6 text-title font-semibold inline-block bg-white/10 hover:bg-accent hover:text-black"
      >
        About Me
      </Link>
    </section>
  );
}

export async function Writing() {
  const posts = await getAllPosts();

  return (
    <section className="mb-20">
      <h2 className="mb-5 text-3xl">Writing</h2>
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
      <p>
        <Link href="/blog" className="mono">
          All posts here
        </Link>
      </p>
    </section>
  );
}

export function Projects() {
  return (
    <section className="mb-20">
      <h2 className="mb-5 text-3xl">Projects</h2>
      <ul className="mb-10">
        {(projects as Project[]).map((project) => (
          <li
            key={project.title}
            className="md:flex-row flex-col mb-4 flex justify-between"
          >
            <span>
              <Link
                target="_blank"
                href={project.link}
                className="no-underline! hover:underline!"
              >
                {project.title}
              </Link>{" "}
              {project.mini && (
                <sup className="italic text-orange-300">mini</sup>
              )}
            </span>
            <span>{project.date}</span>
          </li>
        ))}
      </ul>
      <p>
        More projects in the works. Meanwhile, have you checked out my work log
        on my{" "}
        <Link className="italic" href="/timeline">
          timeline
        </Link>
        ? <span>📜</span>
      </p>
    </section>
  );
}
