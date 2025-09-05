import Card from "@/components/Card";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PortraitImage from "@/lib/assets/images/about.jpg";

export default function About() {
  return (
    <React.Fragment>
      <section className="my-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="overflow-hidden relative h-max">
          <figure className="rounded-lg overflow-hidden relative w-full h-max">
            <Image
              src={PortraitImage}
              alt="Abhin Rustagi"
              width={1000}
              height={1000}
              className="object-cover rounded-lg md:aspect-auto aspect-square mb-2"
            />
            <figcaption className="text-xs text-muted-foreground text-center">
              📍 Cape Schanck, Victoria, Australia
            </figcaption>
          </figure>
        </div>
        <div>
          <h2 className="font-semibold mb-5 text-lg">
            Hi, my name is Abhin, a software engineer who loves a good
            challenge.
          </h2>
          <p className="mb-5">
            In the past, I've had the opportunity to develop software across a
            variety of settings — from an innovative{" "}
            <Link
              href="https://www.openhouse.study/"
              className="underline underline-offset-4 decoration-1"
              target="_blank"
            >
              EdTech platform
            </Link>
            , or a creative{" "}
            <Link
              href="https://www.virtetic.com.au/"
              className="underline underline-offset-4 decoration-1"
              target="_blank"
            >
              MedTech solution
            </Link>
            , to just as a freelance agent for startups trying to find their
            feet making it big. Additionally, I also volunteer my time and
            engineering skills to help organisations fight the climate change
            battle.
          </p>
          <p className="my-5">
            Dreaming up cool automative yet productivity and user-first ideas
            and making them come true is where my passion lies. You can find my
            full projects list{" "}
            <Link
              href="/projects"
              className="underline underline-offset-4 decoration-1"
            >
              here
            </Link>
            .
          </p>
          <p>
            I started programming in 2017, and made it my career in 2021. My
            roles have spanned the entire stack, from frontend to backend, and
            from AI to DevOps, and I have enjoyed almost every minute of it.
            These days, I'm mostly working on AI related projects.
          </p>
          <p className="my-5">
            In my spare time, I&apos;m usually at the gym, climbing, enjoying
            cricket, researching{" "}
            <Link
              href="https://eats.abhin.dev/"
              target="_blank"
              className="underline underline-offset-4 decoration-1"
            >
              new places to eat at
            </Link>{" "}
            or planning my next travel.
          </p>
        </div>
      </section>
      <Card as="section" title="Colophon">
        <ul className="list-disc list-inside marker:text-muted-foreground md:list-outside">
          <li>Built with Next.js, Tailwind CSS, and TypeScript</li>
          <li>Hosted on Vercel.</li>
          <li>Typeset in Inter Tight.</li>
          <li>Google Analytics for insights.</li>
          <li>Built with love, and a bit of borrowing.</li>
        </ul>
      </Card>
    </React.Fragment>
  );
}
