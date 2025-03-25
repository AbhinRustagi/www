import Link from "next/link";

export default function Bio() {
  return (
    <section>
      <h1 className="mb-5 font-bold text-lg">Hi, again!</h1>
      <p className="my-5">
        My favorite work includes building reliable and scalable software that
        not only looks great but is meticulously built for performance and
        usability.
      </p>
      <p className="my-5">
        In the past, I've had the opportunity to develop software across a
        variety of settings — from an innovative{" "}
        <Link
          href="https://www.openhouse.study/"
          className="underline"
          target="_blank"
        >
          EdTech platform
        </Link>
        , or a creative{" "}
        <Link
          href="https://www.virtetic.com.au/"
          className="underline"
          target="_blank"
        >
          MedTech solution
        </Link>
        , to just as an agent for startups trying to find their feet making it
        big. Additionally, I also volunteer my time and engineering skills to
        help organisations fight the climate change battle.
      </p>
      <p className="my-5">
        Dreaming up cool automative yet productivity and user-first ideas and
        making them come true is where my passion lies. You can find my full
        projects list{" "}
        <Link href="/work" className="underline">
          here
        </Link>
        .
      </p>
      <p className="my-5">
        In my spare time, I&apos;m usually at the gym, climbing, reading,
        researching{" "}
        <Link
          href="https://eats.abhin.dev/"
          target="_blank"
          className="underline"
        >
          new places to eat at
        </Link>{" "}
        or planning my next travel.
      </p>
      <p className="mt-5">
        You can check out my{" "}
        <Link href="" className="underline">
          resume here
        </Link>
        .
      </p>
    </section>
  );
}
