"use client";

import Link from "next/link";
import { IconType } from "react-icons";
import {
  PiEnvelopeBold,
  PiFileBold,
  PiGithubLogoBold,
  PiHouseBold,
  PiLinkedinLogoBold,
  PiSunDimBold,
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
    title: "CV",
    href: "",
    icon: PiFileBold,
  },
] as Social[];

export default function Socials() {
  return (
    <div>
      <h2 className="text-2xl">Let's Connect</h2>
      <p className="mt-5 mb-10">
        I'm always looking for new opportunities and collaborations. Feel free
        to reach out to me.
      </p>
      <ul className="flex items-center gap-3 md:gap-5">
        {socials.map(({ href, icon: Icon, title }) => {
          const id = `header-${title.toLowerCase()}`;

          return (
            <li key={id}>
              <Link
                href={href}
                id={id}
                target="_blank"
                data-tooltip-id={id}
                data-tooltip-content={title}
              >
                <Icon className="w-7 h-7 text-title hover:text-accent" />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
