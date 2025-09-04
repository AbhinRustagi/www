import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import projects from "@/content/projects.json";
import Link from "next/link";

export default function Projects() {
  return (
    <Card className="my-16">
      <CardHeader>
        <CardTitle className="mb-8 text-3xl font-bold!">Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          {projects.map((project) => (
            <li key={project.title}>
              <h3 className="mb-1 text-lg">
                <Link href={project.link}>{project.title}</Link>
              </h3>
              <p className="text-muted-foreground">{project.description}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
