"use client";

import Button from "@/components/Button";
import { IPost } from "@/lib/blog";
import Image from "next/image";
import Link from "next/link";
import AvatarImage from "@/public/avatar.jpg";

export function Avatar() {
  return (
    <div className="rounded-xl aspect-square overflow-hidden w-20 h-20 mb-5">
      <Image
        width={80}
        height={80}
        src={AvatarImage}
        className="object-cover"
        alt="Abhin Rustagi"
      />
    </div>
  );
}

export function About() {
  return (
    <div className="mb-10">
      <h1 className="text-2xl font-medium">Hello, I&apos;m Abhin</h1>
      <p className="mb-4 text-sm text-subtitle">pronounced /ab-hin/</p>
      <p className="mb-4">
        I am a final semester Masters of IT student at the University of
        Melbourne, specializing in AI. I&apos;m passionate about building
        scalable, efficient, and impactful technology.
      </p>
      <p>
        I’ve worked with startups like Openhouse and Virtetic, developing
        everything from distributed databases to data-driven dashboards. I also
        lead tech projects at ReWorld Earth and CISSA.
      </p>
      <div className="mt-6 flex gap-3">
        <Button text="more about me" href="/about" />
        <Button text="resume" href="https://abhin.dev/resume.pdf" />
      </div>
    </div>
  );
}

export function Blog(props: { posts: IPost[] }) {
  return (
    <div className="mb-10">
      <h2 className="mb-3 text-xl">Writing</h2>
      <ul className="pl-4">
        {props.posts.map(({ metadata }) => (
          <li key={metadata.slug} className="list-disc">
            <Link
              className="block mb-2 cursor-pointer hover:text-title"
              href={`/blog/${metadata.slug}`}
            >
              {metadata.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Button text="view all posts" href="/blog" />
      </div>
    </div>
  );
}

export function NowWidget() {
  return (
    <div className="p-6 flex-1 rounded-xl">
      <h2 className="mb-2 font-mono">now</h2>
      <ul className="list-disc pl-4">
        <li className="text-sm">
          Completing my Masters of IT (final sem, yay!) from the University of
          Melbourne
        </li>
      </ul>
      <div className="mt-3 rounded inline-block overflow-hidden border border-neutral-700 transition-colors hover:text-accent hover:border-accent">
        <Link href="/blog" className="block p-1 px-2 text-sm">
          /now
        </Link>
      </div>
    </div>
  );
}
