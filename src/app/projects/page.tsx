import projects from "@/content/projects.json";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
      {projects.map((project) => (
        <div key={project.title} className="relative">
          <Link
            href={project.link}
            className="absolute w-full h-full z-10 block top-0 left-0 right-0 bottom-0"
          ></Link>
          <div>
            <Image
              src={project.image}
              alt={project.title}
              width={1000}
              height={1000}
              className="w-full h-full object-cover aspect-video border border-neutral-700 rounded mb-3"
            />
            <h3 className="text-lg font-bold">{project.title}</h3>
            <p className="text-sm text-muted-foreground">
              {project.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
