"use client";

import Card from "@/components/Card";
import projects from "@/content/projects.json";
import Image from "next/image";
import Clock from "react-live-clock";
import { GithubActivity } from "@/lib/github";
import { WakatimeActivity } from "@/lib/wakatime";
import Link from "next/link";

interface Post {
  metadata: {
    slug: string;
    title: string;
    date: Date;
  };
}

interface HomeContentProps {
  posts: Post[];
  githubActivity: GithubActivity;
  wakatimeActivity: WakatimeActivity;
}

export default function HomeContent({
  posts,
  githubActivity,
  wakatimeActivity,
}: HomeContentProps) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Card title="About" link="/about">
          <p>
            I've been a digital builder for the past few years. I'm passionate
            about interfaces that automate, infrastructure that scales, products
            that delight.
            <br />
            <span className="mt-4 font-bold text-sm inline-block">
              About Me →
            </span>
          </p>
        </Card>
        <Card title="Projects" link="/projects">
          <ul className="grid grid-cols-3 gap-4">
            {projects.slice(0, 6).map((project) => (
              <li
                className="rounded-lg overflow-hidden border border-neutral-700"
                key={project.title}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover aspect-square"
                />
              </li>
            ))}
          </ul>
          <br />
          <p className="font-bold text-sm inline-block">
            See all {projects.length} projects →
          </p>
        </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
        <Card title="Now">
          <ul className="list-none">
            <li className="my-4 flex gap-2 items-center">
              <span className="flex">💬</span>
              <div className="flex flex-col">
                <span className="text-sm">Open to new opportunities</span>
              </div>
            </li>
            <li className="my-4 flex gap-2">
              <span className="flex">⚒️</span>
              <div className="flex flex-col">
                <span className="text-sm mb-1">
                  Building SemiReal, a new age content creation platform
                </span>
                <span className="text-muted-foreground text-sm">
                  <Link
                    href="https://semireal.app"
                    className="underline underline-offset-2 decoration-1"
                  >
                    semireal.app
                  </Link>
                </span>
              </div>
            </li>
            <li className="my-4 flex gap-2">
              <span className="flex">📍</span>
              <div className="flex flex-col">
                <span className="text-sm mb-1">Melbourne, Australia</span>
                <span className="text-muted-foreground text-sm">
                  It is{" "}
                  <Clock
                    format="h:mm:ss A"
                    timezone="Australia/Melbourne"
                    ticking
                  />{" "}
                  here (UTC+10).
                </span>
              </div>
            </li>
            <li className="my-4 flex gap-2">
              <span className="flex">💻</span>
              <div className="flex flex-col">
                <span className="text-sm mb-1">
                  {wakatimeActivity.last7DaysCoding} hours
                </span>
                <span className="text-muted-foreground text-sm">
                  of coding in last 7 days
                </span>
              </div>
            </li>
            <li className="my-4 flex gap-2">
              <span className="flex">🟢</span>
              <div className="flex flex-col">
                <span className="text-sm mb-1">
                  {githubActivity.contributions} contributions
                </span>
                <span className="text-muted-foreground text-sm">
                  on GitHub in last 365 days
                </span>
              </div>
            </li>
          </ul>
        </Card>
        {/* Writing */}
        <Card title="Writing" link="/blog">
          <ul className="list-disc list-inside md:list-outside">
            {posts.slice(0, 3).map((post) => (
              <li key={post.metadata.slug} className="my-2">
                {post.metadata.title}
                <br />
                <span className="text-muted-foreground text-sm">
                  {post.metadata.date.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </li>
            ))}
          </ul>
          <br />
          <p className="font-bold text-sm inline-block">
            Browse all {posts.length} posts →
          </p>
        </Card>
      </div>
    </>
  );
}
