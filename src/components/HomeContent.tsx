"use client";

import Card from "@/components/Card";
import projects from "@/content/projects.json";
import Image from "next/image";
import Clock from "react-live-clock";

interface Post {
  metadata: {
    slug: string;
    title: string;
    date: Date;
  };
}

interface HomeContentProps {
  posts: Post[];
}

export default function HomeContent({ posts }: HomeContentProps) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Card title="About" link="/about">
          <p>
            I've been a digital builder for the past few years. I'm passionate
            about interfaces that automate, infrastructure that scales, products
            that delight.
            <br />
            <p className="mt-4 font-bold text-sm inline-block">About Me →</p>
          </p>
        </Card>
        <Card title="Now">
          <ul className="">
            <li className="my-2">📥 Open to new opportunities</li>
            <li className="my-2">
              ⚒️ Building SemiReal, a new age content creation platform
            </li>
          </ul>
          <ul className="">
            <li className="my-2">
              📍 Currently in Melbourne, Australia
              {/*<br />
               <span className="text-muted-foreground text-sm">
                It is 3:41 AM here (UTC+10).
              </span> */}
            </li>
            {/* <li>// Wakatime Stats</li> */}
            {/* Github Stats */}
          </ul>
        </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
        {/* Projects */}
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
        <Card title="Currently">
          <ul className="list-none">
            <li className="my-4 flex gap-2">
              <span className="flex">📍</span>
              <div className="flex flex-col">
                <span className="text-sm mb-1">Melbourne, Australia</span>
                <span className="text-muted-foreground text-sm">
                  It is <Clock format="h:mm A" timezone="Australia/Melbourne" />{" "}
                  here (UTC+10).
                </span>
              </div>
            </li>
            <li className="my-4 flex gap-2">
              <span className="flex">💻</span>
              <div className="flex flex-col">
                <span className="text-sm mb-1">
                  3 hours of coding yesterday
                </span>
                <span className="text-muted-foreground text-sm">
                  27 hours in last 14 days
                </span>
              </div>
            </li>
            <li className="my-4 flex gap-2">
              <span className="flex">🟢</span>
              <div className="flex flex-col">
                <span className="text-sm mb-1">106 contributions</span>
                <span className="text-muted-foreground text-sm">
                  on GitHub this year
                </span>
              </div>
            </li>
          </ul>
        </Card>
      </div>
    </>
  );
}
