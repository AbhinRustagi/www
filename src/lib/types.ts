export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  type: "work" | "personal" | "mini-project";
}
