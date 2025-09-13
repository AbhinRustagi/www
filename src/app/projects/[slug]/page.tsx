import Image from "next/image";
import { Github, Globe, Tag } from "lucide-react";
import { getProjectBySlug } from "@/lib/project";
import { notFound } from "next/navigation";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: Props) {
  const slug = (await params).slug;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold">{project.title}</h1>
      <div className="overflow-hidden rounded-lg">
        <Image
          src={project.image}
          alt={project.title}
          width={1000}
          height={400}
          className="my-6 border border-neutral-700 rounded-lg object-cover aspect-video overflow-hidden"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-sm text-muted-foreground">
        {project.links.map((link) => {
          let icon = null;
          let text = link.type;

          if (link.type === "website") {
            icon = <Globe className="w-4 h-4" />;
            text = "View Live";
          } else if (link.type === "github") {
            icon = <Github className="w-4 h-4" />;
            text = "View on GitHub";
          }

          return (
            <div className="flex items-center gap-2" key={link.type}>
              {icon}
              <span className="underline underline-offset-4 decoration-1">
                <Link href={link.url} target="_blank">
                  {text}
                </Link>
              </span>
            </div>
          );
        })}
        <div className="flex gap-2 items-center flex-wrap">
          <Tag className="w-4 h-4" />
          {project.tags.map((tag) => {
            return (
              <span
                key={tag}
                className="underline underline-offset-4 decoration-1 whitespace-nowrap"
              >
                {tag}
              </span>
            );
          })}
        </div>
      </div>
      <h2 className="mt-12 mb-2 text-lg font-semibold">Key Highlights</h2>
      <ul className="mb-6 grid grid-cols-3 gap-2">
        {project.highlights.map((highlight) => (
          <li className="my-2" key={highlight}>
            {highlight}
          </li>
        ))}
      </ul>
      <div className="prose mt-12">{project.description}</div>
    </div>
  );
}
