import Back from "@/components/Back";
import Image from "next/image";
import Link from "next/link";
import { PiArrowLeftBold } from "react-icons/pi";

export default function About() {
  return (
    <>
      <section className="mb-16 relative">
        <Back />
        <h1 className="text-2xl mb-1">About Me</h1>
        <p className="mb-8 italic">Who even am I?</p>
        <div className="lg:absolute top-42 -left-32">
          <Image
            src="/headshot.jpg"
            alt="Abhin"
            width={100}
            height={100}
            className="rounded-xl"
          />
        </div>
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
        <p className="mt-5">
          You can check out my complete <Link href="">resume here</Link>
          .<br /> I also maintain an <Link href="/">unconventional resume</Link>
          .<br /> You can also check out my{" "}
          <Link href="/timeline">timeline</Link>.
        </p>
      </section>
      <section className="mb-16">
        <h2 className="text-2xl">Tech skills</h2>
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
      </section>
      <section id="testimonials" className="mb-16">
        <h2 className="text-2xl">Testimonials</h2>
        <p className="my-5">
          I've worked with some amazing folks, and they had some good things to
          say.{" "}
          <Link
            className="italic"
            href="https://www.linkedin.com/in/abhinrustagi"
          >
            (Source)
          </Link>
        </p>
        <ul className="list-disc list-inside mb-5">
          <li className="mb-3">
            Abhin is reliable, with strong ownership and passion. He is calm and
            can work under high pressure with crazy deadlines.
          </li>
          <li className="mb-3">
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
        <h2 className="text-2xl">Colophon</h2>
        <p className="mt-5 mb-10">
          This site is built with a lot of love, and a bit of borrowing. Major
          credit to{" "}
          <Link
            href="https://kyswtn.com?utm_source=abhin.dev"
            target="_blank"
            className="underline !text-foreground !hover:text-foreground/80"
          >
            Kyaw
          </Link>{" "}
          for the minimal design inspiration. I’ve adapted their structure while
          adding my own content, projects, and quirks. This website is made with{" "}
          <Link
            href="https://nextjs.org/"
            target="_blank"
            className="underline !text-foreground !hover:text-foreground/80"
          >
            Next.js
          </Link>{" "}
          and{" "}
          <Link
            href="https://www.typescriptlang.org/"
            target="_blank"
            className="underline !text-foreground !hover:text-foreground/80"
          >
            Typescript
          </Link>
          , with concrete plans to add a custom CMS (the content is mostly
          hard-coded right now). Typeset is in{" "}
          <Link
            href="https://fonts.google.com/specimen/Inter+Tight"
            target="_blank"
            className="underline !text-foreground !hover:text-foreground/80"
          >
            Inter Tight
          </Link>{" "}
          and{" "}
          <Link
            href="https://fonts.google.com/specimen/Source+Serif+4"
            target="_blank"
            className="underline !text-foreground !hover:text-foreground/80"
          >
            Source Serif 4
          </Link>
          . Styling is done with{" "}
          <Link
            href="https://tailwindcss.com/"
            target="_blank"
            className="underline !text-foreground !hover:text-foreground/80"
          >
            Tailwind CSS
          </Link>
          . The illustrations are from{" "}
          <Link
            href="https://www.instagram.com/pablostanley/?hl=en"
            target="_blank"
            className="underline !text-foreground !hover:text-foreground/80"
          >
            Pablo Stanley's
          </Link>{" "}
          Open Peeps Illustrations. Using Google Analytics for insights. It is
          hosted on{" "}
          <Link
            href="https://vercel.com/"
            target="_blank"
            className="underline !text-foreground !hover:text-foreground/80"
          >
            Vercel
          </Link>
          .
        </p>
      </section>
      <section className="mb-16">
        <p className="my-5">
          Meanwhile, this is what happens when you let me near Figma after 10pm.
          <br />
          <em>Professional? Yes. Cartoonist? Questionable.</em>
        </p>
        <Image
          src="/cartoon.svg"
          alt="Me"
          width={600}
          height={600}
          objectFit="cover"
          className="rounded-md mb-5"
        />
      </section>
    </>
  );
}
