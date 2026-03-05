import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const SOCIAL_LINKS = [
  { href: "mailto:hi@abhin.dev", label: "Email", icon: Mail },
  { href: "https://linkedin.com/in/abhinrustagi", label: "LinkedIn", icon: Linkedin },
  { href: "https://twitter.com/abhinrustagi", label: "X/Twitter", icon: Twitter },
  { href: "https://github.com/abhinrustagi", label: "GitHub", icon: Github },
];

export function Footer() {
  return (
    <footer className="mx-auto max-w-[960px] mt-12 mb-12 flex flex-col items-center gap-4">
      <div className="flex gap-4">
        {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-text-muted no-underline flex items-center justify-center transition-colors hover:text-accent"
          >
            <Icon size={20} />
          </a>
        ))}
      </div>
      <p className="font-mono uppercase text-sm text-text-muted">
        Made By Abhin Rustagi
      </p>
    </footer>
  );
}
