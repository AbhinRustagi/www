import Image from "next/image";
import { Clock } from "lucide-react";
import { getWakatimeHours, getGithubContributions } from "@/lib/data";
import { Suspense } from "react";
import {
  BlogPosts,
  BlogSkeleton,
  FeaturedProjects,
  FeaturedWork,
  ProjectsSkeleton,
  WorkSkeleton,
} from "./components";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [codingHours, contributions] = await Promise.all([
    getWakatimeHours(),
    getGithubContributions(),
  ]);

  return (
    <div className="mx-auto max-w-[960px] px-4 flex gap-4 max-sm:flex-col-reverse">
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

      <div className="flex-[0.2] min-w-[300px]">
        <section className="flex flex-col gap-4 items-center">
          <div>
            <h1 className="text-xl font-medium text-text mb-6">About Me</h1>
            <Image
              src="/avatar.jpg"
              alt="Abhin Rustagi"
              width={64}
              height={64}
              className="rounded-lg float-left mr-4 mb-2 object-cover"
            />
            <p className="text-text">
              Hey, I&apos;m Abhin, a Software Engineer with a passion for
              building systems that blend product thinking and scalability. I
              have been working with various startups on a wide range of domains
              &amp; products.
            </p>
          </div>
        </section>

        <section className="animate-in">
          <h2 className="text-lg mb-6 flex items-center gap-1 text-text">
            <Clock size={18} />
            Now
          </h2>
          <ul className="text-text-muted pl-6">
            <li>Building &amp; breaking with AI</li>
            <li>In Melbourne, Australia</li>
            <li>
              <a
                className="text-text-muted"
                href="https://wakatime.com/AbhinRustagi"
                target="_blank"
              >
                {codingHours} hours of coding
              </a>{" "}
              in the last week
            </li>
            <li>
              <a
                className="text-text-muted"
                href="https://github.com/AbhinRustagi"
                target="_blank"
              >
                {contributions} contributions
              </a>{" "}
              in the last year
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
