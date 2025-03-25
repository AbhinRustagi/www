import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <div className="flex gap-4 flex-wrap md:flex-nowrap items-center flex-row md:flex-row-reverse">
        <div className="flex h-24 w-24 relative aspect-square">
          <Image
            src="/_headshot.jpg"
            alt="Image of Abhin Rustagi"
            className="rounded aspect-square object-cover"
            layout="fill"
          />
        </div>
        <div>
          <h1 className="font-bold text-4xl mb-4">Abhin Rustagi</h1>
          <p>
            Hey, I am Abhin Rustagi, a full stack software engineer who loves
            building impactful products.
          </p>
        </div>
      </div>
      <p className="my-5">
        Currently – completing a Masters of Information Technology, and
        specialising in Artificial Intelligence from the University of
        Melbourne. Prior to this I studied Statistics as my undergrad major.
      </p>
    </section>
  );
}
