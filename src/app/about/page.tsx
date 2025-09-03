import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <React.Fragment>
      <section className="mb-20 relative">
        <h1 className="text-3xl font-bold! mb-6">Namaste</h1>
        <p className="mb-5">
          My name is Abhin, and I'm a software engineer who loves a good
          challenge. In the past, I've had the opportunity to develop software
          across a variety of settings — from an innovative{" "}
          <Link
            href="https://www.openhouse.study/"
            className="underline underline-offset-4 !text-foreground !hover:text-foreground/80"
            target="_blank"
          >
            EdTech platform
          </Link>
          , or a creative{" "}
          <Link
            href="https://www.virtetic.com.au/"
            className="underline underline-offset-4 !text-foreground !hover:text-foreground/80"
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
          <Link href="/#projects" className="underline underline-offset-4">
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
            className="underline underline-offset-4 !text-foreground !hover:text-foreground/80"
          >
            new places to eat at
          </Link>{" "}
          or planning my next travel.
        </p>
      </section>
      {/* TODO: Redesign */}
      {/* <section id="testimonials" className="my-16">
        <h2 className="text-2xl font-bold!">Kind words from good folks</h2>
        <ul className="list-disc list-inside my-5">
          <li className="mb-1 font-medium">
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
      </section> */}
      <section id="colophon" className="my-16">
        <h2 className="text-2xl font-bold!">This Website</h2>
        <ul className="mt-5 mb-10 list-disc list-inside">
          <li>Built with Next.js, Tailwind CSS, and TypeScript</li>
          <li>Hosted on Vercel.</li>
          <li>Typeset in Inter Display.</li>
          <li>Google Analytics for insights.</li>
          <li>Built with love, and a bit of borrowing.</li>
        </ul>
      </section>
    </React.Fragment>
  );
}
