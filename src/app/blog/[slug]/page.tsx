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

  return <section className="max-w-2xl mx-auto"></section>;
}

export async function generateStaticParams() {
  const posts = (await getAllPosts()) as IPost[];
  return posts.map((post) => ({
    slug: post.metadata.slug,
  }));
}
