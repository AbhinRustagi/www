import Link from "next/link";

const socials = [
  {
    name: "Email",
    link: "mailto:hi@abhin.dev",
  },
  {
    name: "Linkedin",
    link: "https://twitter.com/abhinavcreed",
  },
  {
    name: "X (Twitter)",
    link: "",
  },
  {
    name: "Bluesky",
    link: "",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="mt-12 pt-12 border-t border-t-neutral-800">
      <h2 className="text-xl font-bold mb-4 text-neutral-100">
        Let's discuss your project and ideas.
      </h2>
      <p className="my-4">
        Happy to chat about tech, coffee, mountains and everything in between.
      </p>
      <div>
        <ul className="flex gap-3 flex-wrap">
          {socials.map((social) => (
            <li key={social.name}>
              <Link
                className="text-neutral-100 hover:underline"
                href={social.link}
              >
                {social.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
