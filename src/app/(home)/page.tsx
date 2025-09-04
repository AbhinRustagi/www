import Card from "@/components/Card";
import projects from "@/content/projects.json";
import { getAllPosts } from "@/lib/blog";
import Image from "next/image";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Card title="About" link="/about">
          <p>
            I've been a digital builder for the past few years. I'm passionate
            about interfaces that automate, infrastructure that scales, products
            that delight.
            <br />
            <p className="mt-4 font-bold text-sm inline-block">About Me →</p>
          </p>
        </Card>
        <Card title="Now">
          <ul className="list-disc list-inside md:list-outside mb-4 marker:text-muted-foreground">
            <li className="my-2">Open to new opportunities</li>
            <li className="my-2">
              Building SemiReal, a new age content creation platform
            </li>
          </ul>
          <ul className="list-disc list-inside md:list-outside marker:text-muted-foreground">
            <li className="my-2">
              Currently in Melbourne, Australia
              {/*<br />
               <span className="text-muted-foreground text-sm">
                It is 3:41 AM here (UTC+10).
              </span> */}
            </li>
            {/* <li>// Wakatime Stats</li> */}
          </ul>
        </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
        {/* Projects */}
        <Card title="Projects" link="/projects">
          <ul className="grid grid-cols-3 gap-4">
            {projects.map((project) => (
              <li
                className="rounded border border-neutral-700"
                key={project.title}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover aspect-square"
                />
              </li>
            ))}
          </ul>
        </Card>
        <Card title="Writing" link="/blog">
          <ul className="list-disc list-inside md:list-outside">
            {posts.slice(0, 3).map((post) => (
              <li key={post.metadata.slug} className="my-2">
                {post.metadata.title}
                <br />
                <span className="text-muted-foreground text-sm">
                  {post.metadata.date.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </li>
            ))}
          </ul>
          <br />
          <p className="font-bold text-sm inline-block">
            Browse all {posts.length} posts →
          </p>
        </Card>
        {/* Writing */}
      </div>
    </>
  );
}
