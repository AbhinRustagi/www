import MdRenderer from "@/components/MdRenderer/MdRenderer";
import { getAllPosts, getPostBySlug, IPost } from "@/lib/blog";
import _generateMetadata from "@/lib/metadata";
import { Metadata } from "next";

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
      <h1 className="text-xl font-semibold">{data.metadata.title}</h1>
      <p className="text-muted-foreground font-medium text-sm my-4 font-fira-mono">
        {data.metadata.date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}{" "}
        • {data.metadata.reading_time} minutes
      </p>
      <MdRenderer content={data.content} />
    </>
  );
}

export async function generateStaticParams() {
  const posts = (await getAllPosts()) as IPost[];
  return posts.map((post) => ({
    slug: post.metadata.slug,
  }));
}
