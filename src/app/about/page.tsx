import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Full-stack developer with a passion for building thoughtful web experiences.",
  alternates: { canonical: "/about" },
};

const TESTIMONIALS = [
  {
    quote:
      "Abhin is a complete package. His communication and understanding of startups made collaboration smooth and efficient.",
    author: "Chris Illuk",
    role: "Co-Founder Layer Licensing, Accord",
  },
  {
    quote:
      "What I appreciate most about Abhin is his commitment. He's not just ticking boxes and doing tasks, he wants his work to mean something, to make a real impact.",
    author: "Prudhvi Dharmana",
    role: "Founder ReWorld Earth",
  },
  {
    quote:
      "Abhin has flawless work ethic, he is an amazing team member, and his work is of the upmost quality.",
    author: "Ricardo Rosas",
    role: "Founder Virtetic",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-xl mb-4">About</h1>
        <div className="accent-line mb-4" />
        <div className="animate-in animate-in-delay-1 space-y-4 leading-7 text-sm md:text-base text-text-secondary">
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
        <h2 className="text-lg mb-4">Good Words</h2>
        <div className="accent-line mb-6" />
        <div className="flex flex-col gap-4">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.author} className="glass-card p-6">
              <p className="text-text-secondary leading-relaxed mb-4 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <p className="text-text-primary text-sm font-medium">
                {testimonial.author}
              </p>
              <p className="text-text-muted text-xs">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="animate-in animate-in-delay-4">
        <h2 className="text-lg mb-4">Contact</h2>
        <div className="accent-line mb-6" />
        <p className="text-text-secondary">
          I&apos;m always open to interesting projects and collaborations via
          email at <span className="text-accent">hi[at]abhin[dot]dev</span>
        </p>
      </section>
    </div>
  );
}
