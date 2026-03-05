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
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post?.title,
      description: post?.description || post?.title,
      type: "article",
      publishedTime: post?.date,
      url: `/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const posts = await getBlogPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <p className="text-text-muted">Post not found.</p>;
  }

  const { data, content } = await getBlogPostContent(post.path);
  const meta = { ...post, ...data };
  const html = await marked.parse(content);
  const date = new Date(meta.date);

  return (
    <article>
      <header className="mb-8 animate-in">
        <p className="label mb-3">
          <time>
            {date.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
        </p>
        <h1 className="text-2xl mb-3">{meta.title}</h1>
        <div className="accent-line mb-4" />
        <PostViewCounter slug={slug} />
      </header>
      {/* Content sourced from own GitHub repo (trusted markdown) */}
      <div
        className="prose animate-in animate-in-delay-1"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <div className="mt-12">
        <Link href="/blog" className="link-button">
          &larr; Back to all posts
        </Link>
      </div>
    </article>
  );
}
