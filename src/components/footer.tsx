import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

const SOCIAL_LINKS = [
  { href: "mailto:hi@abhin.dev", label: "Email", icon: Mail },
  {
    href: "https://linkedin.com/in/abhinrustagi",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://twitter.com/abhinrustagi",
    label: "X/Twitter",
    icon: Twitter,
  },
  { href: "https://github.com/abhinrustagi", label: "GitHub", icon: Github },
];

export function Footer() {
  return (
    <footer className="mx-auto max-w-4xl mt-12 mb-12 flex flex-col items-center gap-4">
      <div className="flex gap-4">
        {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="no-underline flex items-center justify-center transition-colors hover:text-accent"
          >
            <Icon size={18} className="stroke-neutral-500" />
          </Link>
        ))}
      </div>
      <p className="font-serif text-sm text-muted">Made By Abhin Rustagi</p>
    </footer>
  );
}
