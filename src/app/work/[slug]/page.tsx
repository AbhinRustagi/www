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
  };
}

export default async function WorkEntryPage({ params }: Props) {
  const { slug } = await params;
  const entry = getWorkEntry(slug);

  if (!entry) {
    return (
      <p className="mx-auto max-w-240 px-4 text-text-muted">
        Work entry not found.
      </p>
    );
  }

  const { meta, content } = entry;
  const html = await marked.parse(content);

  return (
    <article>
      <div className="mx-auto max-w-240 px-4">
        <div className="animate-in mb-6">
          <div className="flex gap-2 text-text-muted text-sm mb-2">
            <span>{new Date(meta.date).getFullYear()}</span>
            {meta.client && <span>/ {meta.client}</span>}
          </div>
          <h1>{meta.title}</h1>
        </div>
        {/* Content from local markdown files (trusted) */}
        <div
          className="prose animate-in animate-in-delay-1"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <Link
          href="/work"
          className="inline-block mt-8 text-sm text-text-muted hover:text-accent"
        >
          &larr; Back to all work
        </Link>
      </div>
    </article>
  );
}
