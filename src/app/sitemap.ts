import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const links = [
    {
      url: "https://abhin.dev", // Replace with your homepage
      lastModified: new Date(),
    },
    {
      url: "https://abhin.dev/about",
      lastModified: new Date(),
    },
    {
      url: "https://abhin.dev/work",
      lastModified: new Date(),
    },
    {
      url: "https://abhin.dev/blog",
      lastModified: new Date(),
    },
  ];

  const posts = await getAllPosts();
  posts.forEach((post) => {
    links.push({
      url: `https://abhin.dev/blog/${post.metadata.slug}`,
      lastModified: new Date(post.metadata.date),
    });
  });

  return links;
}
