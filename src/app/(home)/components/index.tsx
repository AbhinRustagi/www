import projects from "@/content/projects.json";
import { getAllPosts } from "@/lib/blog";
import { Project } from "@/lib/types";
import Link from "next/link";

export function About() {
  return (
    <section className="mb-16">
      <p className="mb-5">
        With over 2 years of experience in software development, I'm a full
        stack software engineer who <em>loves</em> building impactful products.
        I am a recent (post)graduate from the University of Melbourne, where I
        studied Information Technology, with a specialisation in AI. Prior to
        this I studied Statistics as my undergrad major.
      </p>
      <p className="mb-5">Currently open to new opportunities.</p>
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

export function Projects() {
  return (
    <section className="mb-16">
      <h2 className="mb-5 text-2xl">Projects</h2>
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
