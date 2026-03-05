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
  image: "https://abhin.dev/avatar.jpg",
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
      <div className="glass-card-static p-5 md:p-8 animate-in animate-in-delay-1">
        <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
          <Image
            src="/avatar.jpg"
            alt="Abhin Rustagi"
            width={64}
            height={64}
            className="rounded-xl object-cover shrink-0 avatar-glow"
          />
          <div>
            <p className="label mb-2">Software Engineer</p>
            <h1 className="text-xl md:text-2xl mb-3">Abhin Rustagi</h1>
            <p className="text-text-secondary leading-relaxed text-sm md:text-base mb-4">
              Building systems that blend product thinking and scalability.
              Working with startups across a wide range of domains &amp;
              products.
            </p>
            <span className="status-pill">Open to new roles</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      {/* <Suspense fallback={<CodingStatsSkeleton />}>
        <CodingStats />
      </Suspense> */}

      {/* Content grid */}
      <div className="grid md:grid-cols-2 gap-4 md:gap-8">
        <Suspense fallback={<ProjectsSkeleton />}>
          <FeaturedProjects />
        </Suspense>

        <Suspense fallback={<WorkSkeleton />}>
          <FeaturedWork />
        </Suspense>
      </div>

      <Suspense fallback={<BlogSkeleton />}>
        <BlogPosts />
      </Suspense>
    </div>
  );
}
