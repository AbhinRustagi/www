import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllPosts } from "@/lib/blog";
import generateMetadata from "@/lib/metadata";
import Link from "next/link";

export const dynamic = "force-dynamic";

export const metadata = generateMetadata({
  title: "Blog",
  description: "Thoughts, ideas and opinions",
  canonical: "https://abhin.dev/blog",
});

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <Card className="my-8">
      <CardHeader>
        <CardTitle className="text-3xl font-bold! text-foreground">
          Thoughts, ideas and opinions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          {posts.reverse().map((post) => (
            <li key={post.metadata.title} className="my-6">
              <h3 className="mb-1 text-foreground">
                <Link href={`/blog/${post.metadata.slug}`}>
                  {post.metadata.title}
                </Link>
              </h3>
              <p className="mb-1 text-muted-foreground text-sm">
                <span className="font-medium">
                  {(post.metadata.date as Date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
                {" • "}
                {post.metadata.reading_time} minutes
              </p>
              <p className="text-muted-foreground text-sm">
                {post.metadata.description}
              </p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
