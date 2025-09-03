import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import projects from "@/content/projects.json";
import { getAllPosts } from "@/lib/blog";
import { Project } from "@/lib/types";
import Link from "next/link";

export function About() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-3xl mb-1">
          Hello, I'm Abhin
          <br />
        </CardTitle>
        <CardDescription className="text-sm font-medium text-muted-foreground mb-4">
          pronounced /ab-hin/
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          I'm a software engineer living in Melbourne, and I've been a digital
          builder for the past few years. I'm passionate about interfaces that
          automate, infrastructure that scales, products that delight.
          <br />
          I'm currently open to new opportunities.
        </p>
        <p>
          <Link
            href="/about"
            className="mt-12 text-primary font-bold inline-block hover:text-muted-foreground"
          >
            About Me →
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}

export async function Writing() {
  const posts = await getAllPosts();

  return (
    <Card className="my-8">
      <CardHeader>
        <CardTitle className="mb-8 text-2xl font-bold!">
          Thoughts, ideas and opinions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="mb-10">
          {posts
            .reverse()
            .slice(0, 3)
            .map((post) => (
              <li key={post.metadata.title} className="mb-8">
                <h3 className="mb-1 text-lg">
                  <Link
                    href={`/blog/${post.metadata.slug}`}
                    className="no-underline"
                  >
                    {post.metadata.title}
                  </Link>
                </h3>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias impedit modi ad dolorum quidem facere vero voluptate
                  saepe quasi similique deserunt excepturi nam hic, vel culpa ea
                  veniam accusantium voluptates.{" • "}
                  <span className="text-muted-foreground">
                    {(post.metadata.date as Date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </p>
              </li>
            ))}
        </ul>
        <Link
          href="/blog"
          className="font-bold text-primary inline-block hover:text-muted-foreground"
        >
          Browse all {posts.length} posts →
        </Link>
      </CardContent>
    </Card>
  );
}

export function Projects() {
  return (
    <Card className="my-8">
      <CardHeader>
        <CardTitle className="mb-8 text-2xl font-bold!">Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="mb-10">
          {(projects as Project[]).map((project) => (
            <li key={project.title} className="mb-8">
              <h3 className="mb-1 text-lg">
                <Link target="_blank" href={project.link}>
                  {project.title}
                </Link>
              </h3>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                iusto et enim fuga suscipit debitis sed tempore voluptates
                voluptatum odio perspiciatis ad perferendis quos quisquam
                laborum, minima cumque nobis laboriosam!
              </p>
            </li>
          ))}
        </ul>
        <Link
          href="/projects"
          className="text-primary font-bold inline-block hover:text-muted-foreground"
        >
          See all {projects.length} projects →
        </Link>
      </CardContent>
    </Card>
  );
}
