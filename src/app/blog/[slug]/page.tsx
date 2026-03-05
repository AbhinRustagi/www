import type { Metadata } from "next";
import Link from "next/link";
import { marked } from "marked";
import { getBlogPosts, getBlogPostContent } from "@/lib/data";
import { PostViewCounter } from "../view-count";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const posts = await getBlogPosts();
  const post = posts.find((p) => p.slug === slug);
  return {
    title: post?.title,
    description: post?.description || post?.title,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const posts = await getBlogPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <p className="mx-auto max-w-240 px-4 ">Post not found.</p>;
  }

  const { data, content } = await getBlogPostContent(post.path);
  const meta = { ...post, ...data };
  const html = await marked.parse(content);
  const date = new Date(meta.date);

  return (
    <section>
      <div className="mx-auto max-w-240 px-4">
        <h1 className="text-lg mb-6 flex items-center gap-1 ">{meta.title}</h1>
        <div className="flex items-center gap-1  text-sm mb-4">
          <time>
            {date.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
          <PostViewCounter slug={slug} />
        </div>
        {/* Content sourced from own GitHub repo (trusted markdown) */}
        <div
          className="prose animate-in animate-in-delay-1"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <div className="mt-12">
          <Link href="/blog" className="text-sm  hover:text-accent">
            &larr; Back to all posts
          </Link>
        </div>
      </div>
    </section>
  );
}
