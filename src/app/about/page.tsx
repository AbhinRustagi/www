"use client";

import Back from "@/components/Back";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <React.Fragment>
      <section className="mb-16 relative">
        <Back />
        <h1 className="text-3xl mb-1">About Me</h1>
        <p className="mb-8 italic">Who even am I?</p>
        <p className="my-5">
          My name is Abhin, and I'm a software engineer who loves a good
          challenge. In the past, I've had the opportunity to develop software
          across a variety of settings — from an innovative{" "}
          <Link
            href="https://www.openhouse.study/"
            className="underline !text-foreground !hover:text-foreground/80"
            target="_blank"
          >
            EdTech platform
          </Link>
          , or a creative{" "}
          <Link
            href="https://www.virtetic.com.au/"
            className="underline !text-foreground !hover:text-foreground/80"
            target="_blank"
          >
            MedTech solution
          </Link>
          , to just as a freelance agent for startups trying to find their feet
          making it big. Additionally, I also volunteer my time and engineering
          skills to help organisations fight the climate change battle.
        </p>
        <p className="my-5">
          Dreaming up cool automative yet productivity and user-first ideas and
          making them come true is where my passion lies. You can find my full
          projects list{" "}
          <Link href="/#projects" className="underline">
            here
          </Link>
          .
        </p>
        <p>
          I started programming in 2017, and made it my career in 2021. My roles
          have spanned the entire stack, from frontend to backend, and from AI
          to DevOps, and I have enjoyed almost every minute of it. These days,
          I'm mostly working on AI related projects.
        </p>
        <p className="my-5">
          In my spare time, I&apos;m usually at the gym, climbing, enjoying
          cricket, researching{" "}
          <Link
            href="https://eats.abhin.dev/"
            target="_blank"
            className="underline !text-foreground !hover:text-foreground/80"
          >
            new places to eat at
          </Link>{" "}
          or planning my next travel.
        </p>
        <ul className="mt-5 flex gap-2">
          <li>
            <Link className="mono" href="">
              Resume
            </Link>
          </li>
          <span>•</span>
          <li>
            <Link className="mono" href="/">
              Timeline
            </Link>
          </li>
        </ul>
      </section>
      {/* <section className="mb-16">
        <h2 className="text-3xl">Tech skills</h2>
        <p className="my-5">
          Here's an incomplete list of the technologies I use on a daily basis,
          or have used extensively in the past.
        </p>
        <ul className="list-disc list-inside">
          <li>Languages - Javascript, Typescript, Python, Go, C#</li>
          <li>
            Frameworks/Libraries - React, Next, React Native, Tailwind, Shadcn,
            Firebase
          </li>
          <li>BE Frameworks - Django, FastAPI, Flask, Express, .NET</li>
          <li>
            Databases - PostgreSQL, MySQL, MongoDB, Redis, SQLite, Supabase
          </li>
          <li>LLMs - LLama, Grok, OpenAI, Mistral</li>
          <li>
            Libraries - PyTorch, TensorFlow, Hugging Face, Transformers, FAISS,
            Langchain and more
          </li>
          <li>Cloud - AWS, GCP</li>
          <li>DevOps - Docker, Github Actions, Kubernetes, Terraform</li>
        </ul>
      </section> */}
      <section id="testimonials" className="mb-16">
        <h2 className="text-3xl">Testimonials</h2>
        <p className="my-5">
          I've worked with some amazing folks, and they had some good things to
          say.{" "}
          <Link
            className="mono"
            href="https://www.linkedin.com/in/abhinrustagi"
          >
            (Source)
          </Link>
        </p>
        <ul className="list-disc list-inside mb-5">
          <li className="mb-1">
            Abhin is reliable, with strong ownership and passion. He is calm and
            can work under high pressure with crazy deadlines.
          </li>
          <li className="mb-1">
            Abhin has a flawless work ethic, he is an amazing team member, and
            his work is of the upmost quality.
          </li>
          <li>
            He is extremely motivated and has a strong sense of ownership of his
            work.
          </li>
        </ul>
      </section>
      <section id="colophon" className="mb-16">
        <h2 className="text-3xl">Colophon</h2>
        <ul className="mt-5 mb-10 list-disc list-inside">
          <li>Built with Next.js, Tailwind CSS, and TypeScript</li>
          <li>Hosted on Vercel.</li>
          <li>Typeset in Inter Tight, Google Sans Code and Host Grotesk.</li>
          <li>Google Analytics for insights.</li>
          <li>Built with love, and a bit of borrowing.</li>
        </ul>
      </section>
    </React.Fragment>
  );
}
