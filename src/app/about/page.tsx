import generateMetadata from "@/lib/metadata";
import Image from "next/image";

export const metadata = generateMetadata({
  title: "About Me",
  canonical: "/about",
});

export default function About() {
  return (
    <section className="flex gap-8 flex-wrap">
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-4 max-w-md">
          <span className="text-neutral-100">Software Engineer</span> with
          product intuition and acute curiosity.
        </h1>
        <p className="mb-4 max-w-md">
          I was born and raised in New Delhi. Currently I reside in Melbourne,
          Australia. Prior to moving to Melbourne in 2023, I worked with various
          small and mid-size teams as a software engineer. I have worked at
          Openhouse, ReWorld Earth, Wetlands International, Virtetic, and more.
        </p>
        <p className="mb-4 max-w-md">
          I migrated to Melbourne to study a Masters of IT, and specialize in
          Artificial Intelligence. I completed a Bachelor of Science in
          Statistics from University of Delhi before this, sharpening my
          analytical and critical skills.
        </p>
        <p className="mb-4 max-w-md">
          When I'm not working, you can usually find me reading up on variety of
          things (astrophysics, cricket, finance, ∞), going for hikes, or
          photographing natural landscapes.
        </p>
      </div>
      <div className="flex justify-center w-80 h-52">
        <Image
          src="/headshot.jpg"
          alt=""
          width={320}
          height={240}
          className="object-cover rounded-sm"
        />
      </div>
    </section>
  );
}
