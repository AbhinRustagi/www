export interface PostMeta {
  title: string;
  date: string;
  slug: string;
  path: string;
  description?: string;
  tags: string[];
  reading_time: number;
  published: boolean;
}

export interface ProjectMeta {
  title: string;
  date: string;
  slug: string;
  path: string;
  description?: string;
  tags: string[];
  thumbnail?: string;
  published: boolean;
  canonical_url?: string;
  web_url?: string | null;
  github_url?: string | null;
}

export interface WorkMeta {
  title: string;
  description: string;
  client?: string;
  date: string;
  tech: string[];
  featured: boolean;
  draft: boolean;
  slug: string;
}
