import MdRenderer from "@/components/MdRenderer/MdRenderer";
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
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
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-neutral-100 mb-8 text-3xl font-bold">
            {data.metadata.title}
          </CardTitle>
          <CardDescription>
            <p className="text-muted-foreground/80 font-medium text-sm">
              {data.metadata.date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              • {data.metadata.reading_time} minutes
            </p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <MdRenderer content={data.content} />
        </CardContent>
      </Card>
    </>
  );
}

export async function generateStaticParams() {
  const posts = (await getAllPosts()) as IPost[];
  return posts.map((post) => ({
    slug: post.metadata.slug,
  }));
}
