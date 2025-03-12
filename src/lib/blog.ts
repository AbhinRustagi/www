/* eslint-disable @typescript-eslint/no-explicit-any */
import matter from "gray-matter";
import { parse } from "marked";
import { notFound } from "next/navigation";

export interface PostMetadata {
  title: string;
  date: string;
  reading_time: string;
  tags: string[];
  slug: string;
  description: string;
  canonical_url: string;
  platforms: { [key: string]: string };
  published: boolean;
}

export interface IPost {
  metadata: PostMetadata;
  content: string;
}

export interface GroupedPosts {
  date: string;
  posts: Index[];
}

export async function getAllPosts(): Promise<IPost[]> {
  const { tree } = await fetch(
    "https://api.github.com/repos/AbhinRustagi/blog/git/trees/main?recursive=1"
  )
    .then((res) => res.json())
    .catch((e: Error) => {
      return {
        tree: [],
      };
    });

  const posts = tree
    .filter((node: any) => {
      const filepath = node.path as string;
      // Expect only (Non Readme) Markdown Files
      return filepath.startsWith("posts") && filepath.endsWith(".md");
    })
    .map(async (node: any) => {
      const post = await getPostByPath(node.path);
      return post;
    });

  return Promise.all(posts).catch((e: Error) => {
    return [];
  });
}

const sortPosts = (posts: any): Index[] =>
  posts.sort((a: any, b: any) => {
    const date1 = new Date(a.date);
    const date2 = new Date(b.date);
    return date2.getTime() / 1000 - date1.getTime() / 1000;
  });

export function groupPostsByDate(posts: Index[]): GroupedPosts[] {
  const groupedList: { date: string; posts: any[] }[] = [];
  const dateIndexMap: { [k in string]: number } = {};

  sortPosts(posts);

  posts.forEach((post) => {
    const postDate = new Date(post.date);
    const strPublishDate = postDate.toLocaleDateString("default", {
      month: "long",
      year: "numeric",
    });

    if (dateIndexMap.hasOwnProperty(strPublishDate)) {
      const index = dateIndexMap[strPublishDate];
      const listItem = groupedList[index];
      listItem.posts.push(post);
      groupedList[index] = listItem;
    } else {
      dateIndexMap[strPublishDate] = groupedList.length;
      const listEntry = {
        date: strPublishDate,
        posts: [post],
      };
      groupedList.push(listEntry);
    }
  });

  return groupedList;
}

interface Index {
  title: string;
  slug: string;
  path: string;
  date: string;
}

export async function getIndex(): Promise<Index[]> {
  const indexData = fetch(
    "https://raw.githubusercontent.com/AbhinRustagi/blog/main/index.json"
  )
    .then(async (res) => {
      const text = await res.text();
      const cleanedText = text.charAt(0) === "�" ? text.slice(2) : text;

      // Remove null characters
      let sanitizedText = cleanedText.replace(/\u0000/g, "");

      // Replace unescaped control characters with empty strings or properly escaped characters
      sanitizedText = sanitizedText.replace(
        /[\u0000-\u001F\u007F-\u009F]/g,
        ""
      ); // Removes non-printable characters
      sanitizedText = sanitizedText.replace(/[\r\n\t]/g, (match: string) => {
        switch (match) {
          case "\r":
            return "\\r";
          case "\n":
            return "\\n";
          case "\t":
            return "\\t";
          default:
            return ""; // Ensure a string is always returned
        }
      });

      return sanitizedText;
    })
    .catch(() => {
      notFound();
    });

  const parsedIndex = JSON.parse(await indexData);
  return parsedIndex;
}

export async function getPostBySlug(slug: string) {
  const index = await getIndex();
  const postIndex = index.find((post: Index) => post.slug === slug);

  if (!postIndex) {
    notFound();
  }

  return await getPostByPath(postIndex.path);
}

export async function getPostByPath(path: string): Promise<IPost> {
  const mdContent = await fetch(
    `https://raw.githubusercontent.com/AbhinRustagi/blog/main/${path}`
  ).then((res) => res.text());

  const parsedMdContent = matter(mdContent);
  const content = parsedMdContent.content.replaceAll(
    "(/images/",
    "(https://raw.githubusercontent.com/AbhinRustagi/blog/main/images/"
  );

  return {
    metadata: { ...parsedMdContent.data } as PostMetadata,
    content: await parse(content),
  };
}
