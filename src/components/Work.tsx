"use client";
import { useState, useEffect } from "react";
import Projects from "../content/projects.json";
import { Project } from "@/lib/types";
import Link from "next/link";
import { HiExternalLink } from "react-icons/hi";

const tags = [
  {
    display: "all",
    bg: "bg-violet-800/50",
    text: "text-violet-100",
    border: "border-violet-700",
  },
  {
    display: "personal",
    bg: "bg-blue-400/40",
    text: "text-neutral-100",
    border: "border-blue-300/50",
  },
  {
    display: "work",
    bg: "bg-green-400/40",
    text: "text-neutral-100",
    border: "border-green-300/50",
  },
  {
    display: "mini-project",
    bg: "bg-yellow-400/40",
    text: "text-neutral-100",
    border: "border-yellow-300/50",
  },
];

const Card = ({ project }: { project: Project }) => (
  <div className="border-l-2 border-l-neutral-600 px-4 py-2">
    <h3 className="text-lg font-bold text-neutral-100">{project.title}</h3>
    <p className="text-sm my-2">{project.description}</p>
    <Link href={project.link} className="text-sm text-neutral-100 flex items-center gap-1">
      check it out <HiExternalLink className="inline mt-[2px]" />
    </Link>
  </div>
);

export default function Work() {
  const [currentTag, setTag] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(
    Projects as Project[]
  );

  const updateTag = (newTag: string) => {
    if (currentTag === newTag) {
      setTag("all");
    } else {
      setTag(newTag);
    }
  };

  useEffect(() => {
    if (currentTag === "all") {
      setFilteredProjects(Projects as Project[]);
    } else {
      setFilteredProjects(
        (Projects as Project[]).filter((project) => project.type === currentTag)
      );
    }
  }, [currentTag]);

  return (
    <section className="border-t border-t-neutral-800 mt-12 pt-12">
      <div className="flex gap-3">
        {tags.map((tag) => (
          <div
            onClick={() => updateTag(tag.display)}
            key={tag.display}
            className={`rounded-3xl px-2 py-1 text-xs flex items-center justify-center cursor-pointer ${
              tag.display === currentTag ? tag.bg : "bg-transparent"
            } ${tag.text} border ${tag.border}`}
          >
            {tag.display}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
        {filteredProjects.map((project) => (
          <Card key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
