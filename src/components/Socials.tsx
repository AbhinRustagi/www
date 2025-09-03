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
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

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
    <Card id="contact">
      <CardHeader>
        <CardTitle className="text-2xl font-bold!">Let's Connect</CardTitle>
        <p className="my-3 text-muted-foreground">
          Always on the lookout for new opportunities and collaborations. Feel
          free to reach out to me.
        </p>
      </CardHeader>
      <CardContent>
        <ul className="flex gap-4">
          {socials.map(({ href, title }) => {
            const id = `header-${title.toLowerCase()}`;

            return (
              <li key={id}>
                <Link
                  href={href}
                  target="_blank"
                  className="hover:text-primary font-bold"
                  data-tooltip-id={id}
                  data-tooltip-content={title}
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
}
