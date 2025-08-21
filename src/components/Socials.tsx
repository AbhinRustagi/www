"use client";

import Link from "next/link";
import { IconType } from "react-icons";
import {
  PiEnvelopeBold,
  PiFileBold,
  PiGithubLogoBold,
  PiLinkedinLogoBold,
  PiXLogoBold,
} from "react-icons/pi";

interface Social {
  href: string;
  icon: IconType;
  title: string;
}

const socials = [
  {
    title: "Email",
    href: "mailto:hi@abhin.dev",
    icon: PiEnvelopeBold,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/abhinrustagi",
    icon: PiLinkedinLogoBold,
  },
  {
    title: "GitHub",
    href: "https://www.github.com/AbhinRustagi",
    icon: PiGithubLogoBold,
  },
  {
    title: "X",
    href: "https://www.github.com/AbhinRustagi",
    icon: PiXLogoBold,
  },
  {
    title: "Resume",
    href: "",
    icon: PiFileBold,
  },
] as Social[];

export default function Socials() {
  return (
    <div className="max-w-lg">
      <h2 className="text-2xl">Let's Connect</h2>
      <p className="my-5 text-xl!">
        Always on the lookout for new opportunities and collaborations. Feel
        free to reach out to me.
      </p>
      <ul className="flex gap-4">
        {socials.map(({ href, title }) => {
          const id = `header-${title.toLowerCase()}`;

          return (
            <li key={id}>
              <Link
                href={href}
                id={id}
                target="_blank"
                data-tooltip-id={id}
                data-tooltip-content={title}
                className="hover:text-accent text-xl!"
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
