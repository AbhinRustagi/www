import type { Metadata } from "next";
import { Heart, Mail, User } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Full-stack developer with a passion for building thoughtful web experiences.",
};

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-lg mb-6 flex items-center gap-1 ">
          <User size={20} />
          About
        </h1>
        <div className="animate-in animate-in-delay-1  space-y-4 leading-7">
          <p>
            Hi, my name is Abhin, a software engineer who loves a good
            challenge. In the past, I&apos;ve had the opportunity to develop
            software across a variety of settings - from an innovative EdTech
            platform, or a creative MedTech solution, to just as a freelance
            agent for startups trying to find their feet making it big.
            Additionally, I also volunteer my time and engineering skills to
            help organisations fight the climate change battle.
          </p>
          <p>
            Dreaming up cool automative yet productivity and user-first ideas
            and making them come true is where my passion lies. I started
            programming in 2017, and made it my career in 2021. My roles have
            spanned the entire stack, from frontend to backend, and from AI to
            DevOps, and I have enjoyed almost every minute of it.
          </p>
          <p>
            In my spare time, I&apos;m usually at the gym, climbing, enjoying
            cricket, researching new places to eat at or planning my next
            travel.
          </p>
        </div>
      </section>

      <section className="animate-in animate-in-delay-3">
        <h2 className="text-lg mb-6 flex items-center gap-1">
          <Heart size={20} />
          Good words
        </h2>
        <div className="mb-6">
          <p>
            Abhin is a complete package. His communication and understanding of
            startups made collaboration smooth and efficient.
          </p>
          <p className="text-neutral-900 font-serif mt-2">
            Chris Illuk, Co-Founder Layer Licensing, Accord
          </p>
        </div>
        <div className="mb-6">
          <p>
            What I appreciate most about Abhin is his commitment. He&apos;s not
            just ticking boxes and doing tasks, he wants his work to mean
            something, to make a real impact.
          </p>
          <p className="text-neutral-900 font-serif mt-2">
            Prudhvi Dharmana, Founder ReWorld Earth
          </p>
        </div>
        <div>
          <p>
            Abhin has flawless work ethic, he is an amazing team member, and his
            work is of the upmost quality.
          </p>
          <p className="text-neutral-900 font-serif mt-2">
            Ricardo Rosas, Founder Virtetic
          </p>
        </div>
      </section>

      <section className="animate-in animate-in-delay-4">
        <h2 className="text-lg mb-6 flex items-center gap-1">
          <Mail size={20} />
          Contact
        </h2>
        <p>
          I&apos;m always open to interesting projects and collaborations via
          email at <span>hi[at]abhin[dot]dev</span>
        </p>
      </section>
    </div>
  );
}
