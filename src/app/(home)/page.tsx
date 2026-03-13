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

export const dynamic = "force-dynamic";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abhin Rustagi",
  url: "https://abhin.dev",
  image: "https://abhin.dev/headshot.png",
  jobTitle: "Software Engineer",
  description:
    "Full-stack developer building systems that blend product thinking and scalability.",
  sameAs: [
    "https://github.com/AbhinRustagi",
    "https://linkedin.com/in/abhinrustagi",
    "https://wakatime.com/AbhinRustagi",
  ],
};

export default function HomePage() {
  return (
    <div className="space-y-4 md:space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      {/* <div className="glass-card-static p-5 md:p-8 animate-in animate-in-delay-1"> */}
      <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
        <Image
          src="/headshot.png"
          alt="Abhin Rustagi"
          width={96}
          height={96}
          className="rounded-2xl object-cover shrink-0 avatar-glow"
        />
        <div>
          <h1 className="text-lg font-bold">Abhin Rustagi</h1>
          <p className="my-1 text-white font-medium">
            Full Stack Software Engineer
          </p>
          <p className="leading-relaxed text-sm md:text-base font-medium">
            Building systems that blend product thinking and scalability.
            Working with startups across a wide range of domains &amp; products.
          </p>
          <p className="my-4 font-medium">Likes talking about: Generative UI</p>
          <span className="status-pill">Open to new roles</span>
        </div>
      </div>
      {/* </div> */}

      {/* Stats */}
      <Suspense fallback={<CodingStatsSkeleton />}>
        <CodingStats />
      </Suspense>

      {/* Content grid */}
      <div className="space-y-12">
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
    </div>
  );
}
