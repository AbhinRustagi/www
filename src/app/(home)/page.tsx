import Image from "next/image";

export default function Home() {
  return (
    <section>
      <h1 className="font-bold text-neutral-100 text-4xl mb-4">
        Hi, I&apos;m Abhin Rustagi!
      </h1>
      <p className="text-2xl font-semibold text-neutral-400 max-w-lg leading-normal">
        Full Stack Engineer building user-first applications creating impact.
      </p>
      <ul className="mt-4 flex md:justify-between md:flex-row flex-col">
        <li>📍 Based in Melbourne</li>
      </ul>
    </section>
  );
}
