import { Clock } from "lucide-react";
import Image from "next/image";
import { Suspense } from "react";
import {
  BlogPosts,
  BlogSkeleton,
  CodingStats,
  CodingStatsSkeleton,
  FeaturedProjects,
  FeaturedWork,
  ProjectsSkeleton,
  WorkSkeleton,
} from "./components";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <div className="flex gap-12 max-sm:flex-col">
      <div>
        <Suspense fallback={<ProjectsSkeleton />}>
          <FeaturedProjects />
        </Suspense>

        <Suspense fallback={<WorkSkeleton />}>
          <FeaturedWork />
        </Suspense>

        <Suspense fallback={<BlogSkeleton />}>
          <BlogPosts />
        </Suspense>
      </div>

      <div className="flex-[0.2] min-w-[300px] space-y-8">
        <section className="animate-in flex flex-col gap-4 items-center">
          <div>
            <h1 className="text-xl font-medium mb-6">About Me</h1>
            <Image
              src="/avatar.jpg"
              alt="Abhin Rustagi"
              width={64}
              height={64}
              className="rounded-lg float-left mr-4 mb-2 object-cover"
            />
            <p>
              Hey, I&apos;m Abhin, a Software Engineer with a passion for
              building systems that blend product thinking and scalability. I
              have been working with various startups on a wide range of domains
              &amp; products.
            </p>
          </div>
        </section>

        <section className="animate-in">
          <h2 className="text-xl mb-2 flex items-center gap-1">Now</h2>
          <ul className="pl-6 list-disc space-y-2">
            <li>Open to full-time opportunities</li>
            <Suspense fallback={<CodingStatsSkeleton />}>
              <CodingStats />
            </Suspense>
          </ul>
        </section>
      </div>
    </div>
  );
}
