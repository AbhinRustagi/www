import fs from "fs";
import path from "path";
import type { PostMeta, ProjectMeta, WorkMeta } from "./types";

const BLOG_REPO = "AbhinRustagi/blog";
const PROJECTS_REPO = "AbhinRustagi/projects";
const GITHUB_USERNAME = "AbhinRustagi";

export async function getBlogPosts(): Promise<PostMeta[]> {
  const res = await fetch(
    `https://raw.githubusercontent.com/${BLOG_REPO}/main/index.json`,
    { next: { revalidate: 3600 } },
  );
  const index: PostMeta[] = await res.json();
  return index
    .filter((p) => p.published)
    .sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
}

export async function getBlogPostContent(
  postPath: string,
): Promise<{ data: Record<string, unknown>; content: string }> {
  const res = await fetch(
    `https://raw.githubusercontent.com/${BLOG_REPO}/main/${postPath}`,
  );
  const raw = await res.text();
  return parseFrontmatter(raw);
}

export async function getProjects(): Promise<ProjectMeta[]> {
  const res = await fetch(
    `https://raw.githubusercontent.com/${PROJECTS_REPO}/main/index.json`,
    { next: { revalidate: 3600 } },
  );
  if (!res.ok) return [];
  const index: ProjectMeta[] = await res.json();
  return index
    .filter((p) => p.published)
    .sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
}

export async function getProjectContent(projectPath: string): Promise<string> {
  const markdownPath = projectPath.replace("projects/", "");
  const res = await fetch(
    `https://raw.githubusercontent.com/${PROJECTS_REPO}/main/projects/${markdownPath}`,
  );
  const markdown = await res.text();
  return markdown.replace(/^---[\s\S]*?---/, "").trim();
}

export function getWorkEntries(): WorkMeta[] {
  const workDir = path.join(process.cwd(), "src/content/work");
  const files = fs.readdirSync(workDir).filter((f) => f.endsWith(".md"));

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(workDir, file), "utf-8");
      const { data } = parseFrontmatter(raw);
      return {
        title: data.title as string,
        description: data.description as string,
        client: data.client as string | undefined,
        date: data.date as string,
        tech: (data.tech as string[]) || [],
        featured: data.featured === true,
        draft: data.draft === true,
        slug: file.replace(".md", ""),
      };
    })
    .filter((w) => !w.draft)
    .sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
}

export function getWorkEntry(
  slug: string,
): { meta: WorkMeta; content: string } | null {
  const filePath = path.join(process.cwd(), "src/content/work", `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = parseFrontmatter(raw);

  return {
    meta: {
      title: data.title as string,
      description: data.description as string,
      client: data.client as string | undefined,
      date: data.date as string,
      tech: (data.tech as string[]) || [],
      featured: data.featured === true,
      draft: data.draft === true,
      slug,
    },
    content,
  };
}

export async function getWakatimeHours(): Promise<number> {
  const key = process.env.WAKATIME_API_KEY;
  if (!key) return 0;

  try {
    const res = await fetch(
      "https://wakatime.com/api/v1/users/AbhinRustagi/stats/last_7_days",
      {
        headers: {
          Authorization: `Basic ${Buffer.from(key).toString("base64")}`,
        },
        next: { revalidate: 3600 },
      },
    );
    if (!res.ok) return 0;
    const data = await res.json();
    const totalSeconds = data.data?.total_seconds || 0;
    return Math.round((totalSeconds / 3600) * 100) / 100;
  } catch {
    return 0;
  }
}

export async function getGithubContributions(): Promise<number> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) return 0;

  try {
    const query = `
      query($username: String!) {
        user(login: $username) {
          contributionsCollection {
            contributionCalendar {
              totalContributions
            }
          }
        }
      }
    `;
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: { username: GITHUB_USERNAME },
      }),
      next: { revalidate: 3600 },
    });
    if (!res.ok) return 0;
    const data = await res.json();
    return (
      data.data?.user?.contributionsCollection?.contributionCalendar
        ?.totalContributions ?? 0
    );
  } catch {
    return 0;
  }
}

function parseFrontmatter(raw: string): {
  data: Record<string, unknown>;
  content: string;
} {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const [, frontmatterStr, content] = match;
  const data: Record<string, unknown> = {};
  let currentKey = "";
  let inArray = false;
  const arrayValues: string[] = [];

  for (const line of frontmatterStr.split("\n")) {
    if (inArray) {
      if (line.match(/^\s+-\s+/)) {
        arrayValues.push(line.replace(/^\s+-\s+/, "").trim());
        continue;
      } else {
        data[currentKey] = [...arrayValues];
        arrayValues.length = 0;
        inArray = false;
      }
    }

    const colonIndex = line.indexOf(":");
    if (colonIndex === -1) continue;

    const key = line.slice(0, colonIndex).trim();
    let value: unknown = line.slice(colonIndex + 1).trim();

    if (value === "") {
      currentKey = key;
      inArray = true;
      continue;
    }

    if (
      typeof value === "string" &&
      ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'")))
    ) {
      value = (value as string).slice(1, -1);
    } else if (value === "true") {
      value = true;
    } else if (value === "false") {
      value = false;
    } else if (!isNaN(Number(value)) && value !== "") {
      value = Number(value);
    }

    data[key] = value;
  }

  if (inArray) {
    data[currentKey] = [...arrayValues];
  }

  return { data, content };
}
