import type { Metadata } from "next";
import Link from "next/link";
import { marked } from "marked";
import { getWorkEntries, getWorkEntry } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  const entries = getWorkEntries();
  return entries.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = getWorkEntry(slug);
  return {
    title: entry?.meta.title,
    description: entry?.meta.description,
    alternates: { canonical: `/work/${slug}` },
    openGraph: {
      title: entry?.meta.title,
      description: entry?.meta.description,
      type: "article",
      url: `/work/${slug}`,
    },
  };
}

export default async function WorkEntryPage({ params }: Props) {
  const { slug } = await params;
  const entry = getWorkEntry(slug);

  if (!entry) {
    return <p className="text-text-muted">Work entry not found.</p>;
  }

  const { meta, content } = entry;
  const html = await marked.parse(content);

  return (
    <article>
      <header className="mb-8 animate-in">
        <div className="flex gap-2 label mb-3">
          <span>{new Date(meta.date).getFullYear()}</span>
          {meta.client && <span>/ {meta.client}</span>}
        </div>
        <h1 className="text-2xl mb-3">{meta.title}</h1>
        <div className="accent-line" />
      </header>
      {/* Content from local markdown files (trusted) */}
      <div
        className="prose animate-in animate-in-delay-1"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <div className="mt-12">
        <Link href="/work" className="link-button">
          &larr; Back to all work
        </Link>
      </div>
    </article>
  );
}
