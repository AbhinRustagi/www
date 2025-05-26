import MdRenderer from "@/components/MdRenderer/MdRenderer";
import { getAllPosts, getPostBySlug, IPost } from "@/lib/blog";
import _generateMetadata from "@/lib/metadata";
import { Metadata } from "next";
import Link from "next/link";
import { PiArrowLeftBold } from "react-icons/pi";

interface Props {
  params: Promise<{ slug: string }>;
}

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const data = await getPostBySlug(
    decodeURIComponent((await props.params).slug)
  );

  return _generateMetadata({
    title: data.metadata?.title,
    description: data.metadata?.description,
    canonical: `/blog/${data.metadata?.slug}`,
  });
};

export default async function BlogPost({ params }: Props) {
  const data = await getPostBySlug(decodeURIComponent((await params).slug));

  return (
    <>
      <div>
        <Link
          href="/"
          className="flex items-center gap-2 mb-10 no-underline! hover:underline"
        >
          <PiArrowLeftBold />
          <span>Home</span>
        </Link>
      </div>
      <section className="mb-16">
        <h1 className="text-neutral-100 mb-8 text-2xl font-bold">
          {data.metadata.title}
        </h1>
        <p className="text-foreground/80 mb-8">
          {data.metadata.date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          • {data.metadata.reading_time} minutes
        </p>
        <MdRenderer content={data.content} />
      </section>
    </>
  );
}

export async function generateStaticParams() {
  const posts = (await getAllPosts()) as IPost[];
  return posts.map((post) => ({
    slug: post.metadata.slug,
  }));
}
