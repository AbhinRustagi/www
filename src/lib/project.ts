import projects from "@/content/projects.json";

interface Project {
  title: string;
  slug: string;
  date: string;
  image: string;
  tags: string[];
  links: {
    type: string;
    url: string;
  }[];
  highlights: string[];
  description: string;
}

export const getProjectBySlug = async (
  slug: string
): Promise<Project | undefined> => {
  const project = projects.find((project) => project.slug === slug) as
    | Project
    | undefined;
  return project;
};
