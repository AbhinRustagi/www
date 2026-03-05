import type { MetadataRoute } from "next";
import { getBlogPosts, getProjects, getWorkEntries } from "@/lib/data";

const BASE_URL = "https://abhin.dev";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, projects] = await Promise.all([
    getBlogPosts(),
    getProjects(),
  ]);
  const workEntries = getWorkEntries();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/blog`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/projects`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/work`, changeFrequency: "monthly", priority: 0.9 },
  ];

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
    lastModified: new Date(project.date),
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  const workPages: MetadataRoute.Sitemap = workEntries.map((entry) => ({
    url: `${BASE_URL}/work/${entry.slug}`,
    lastModified: new Date(entry.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages, ...projectPages, ...workPages];
}
