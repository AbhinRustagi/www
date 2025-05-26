import { BaseCard } from "@/components/Card";
import Image from "next/image";
import Link from "next/link";

export function Profile() {
  return (
    <BaseCard className="md:p-0 p-0 relative overflow-hidden">
      <div className="relative w-full h-32 border-b border-b-card-border">
        <Image
          fill
          src="/cover.jpg"
          alt=""
          className="object-cover object-center"
        />
      </div>
      <div className="rounded-full w-22 h-22 absolute top-20 md:left-8 left-6 overflow-hidden">
        <Image fill src="/IMG_1096_tiny.jpg" alt="" className="h-full w-full" />
      </div>
      <div className="mt-14 px-6 pb-6 md:px-8 md:pb-8">
        <h1 className="text-title text-2xl font-medium mb-3">
          Hey, I&apos;m Abhin.
          <br /> Software Engineer & Builder
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
          porro
        </p>
      </div>
    </BaseCard>
  );
}

export function About() {
  return (
    <BaseCard>
      <h1 className="mb-3 text-xs uppercase font-bold">About</h1>
      <p className="font-light">
        I'm a full stack software engineer who loves building impactful
        products. Currently – completing a Masters of Information Technology,
        and specialising in Artificial Intelligence from the University of
        Melbourne. Prior to this I studied Statistics as my undergrad major.
      </p>
    </BaseCard>
  );
}

export function Writing() {
  return (
    <BaseCard>
      <h1 className="mb-3 text-xs uppercase font-bold">Writing</h1>
      <ul className="mb-4">
        {[{ title: "Documentation" }, { title: "Documentatio 2n" }].map(
          (post) => (
            <li
              key={post.title}
              className="text-sm py-3 not-last:border-b not-last:border-b-card-border"
            >
              <Link href="/" className="hover:text-accent">
                {post.title}
              </Link>
            </li>
          )
        )}
      </ul>
      <Link
        href="/blog"
        className="inline-block rounded-lg px-5 py-2 text-sm bg-gray-200 dark:bg-neutral-700 text-medium text-title"
      >
        All Posts
      </Link>
    </BaseCard>
  );
}

export function Now() {
  return (
    <BaseCard>
      <h1 className="mb-3 text-xs uppercase font-bold">Now</h1>
      <p className="my-3 text-title text-2xl font-medium">
        What I'm upto right now
      </p>
    </BaseCard>
  );
}
