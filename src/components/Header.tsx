"use client";

import Link from "next/link";

import React from "react";
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
import { BaseCard } from "./Card";
import { Tooltip } from "react-tooltip";

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

export default function Header() {
  return (
    <BaseCard className="mb-12 py-4 px-5 md:p-4 w-max mx-auto">
      <ul className="flex items-center justify-between gap-3 md:gap-5">
        <li>
          <Link href="/">
            <PiHouseBold className="w-6 h-5 text-title hover:text-accent" />
          </Link>
        </li>
        <li>
          <PiSunDimBold
            onClick={() => document.documentElement.classList.toggle("dark")}
            className="w-6 h-5 text-title hover:text-accent cursor-pointer"
          />
        </li>
        <div className="w-px bg-title h-5"></div>
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
                <Icon className="w-6 h-5 text-title hover:text-accent" />
              </Link>
              <Tooltip id={id} place="bottom" />
            </li>
          );
        })}
      </ul>
    </BaseCard>
  );
}
