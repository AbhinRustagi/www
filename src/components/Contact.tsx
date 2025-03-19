import Link from "next/link";

const socials = [
  {
    name: "Email",
    link: "mailto:hi@abhin.dev",
  },
  {
    name: "Linkedin",
    link: "https://linkedin.com/in/abhinrustagi",
  },
  {
    name: "Github",
    link: "https://www.github.com/AbhinRustagi",
  },
  {
    name: "X (Twitter)",
    link: "https://www.x.com/@abhinrustagi",
  },
  {
    name: "Bluesky",
    link: "https://bsky.app/profile/abhinr.bsky.social",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="mt-12 pt-12 border-t border-t-neutral-800">
      <p className="text-lg font-semibold max-w-lg mb-4">
        Have a question, a project idea, or just want to say hello? I’d love to
        hear from you! Happy to chat about tech, coffee, mountains and
        everything in between.
      </p>
      <div>
        <ul className="flex gap-4 flex-wrap">
          {socials.map((social) => (
            <li key={social.name}>
              <Link
                target="_blank"
                rel="noopener"
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
