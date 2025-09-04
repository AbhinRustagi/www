"use client";

import { IconType } from "react-icons";
import {
  PiEnvelopeBold,
  PiFileBold,
  PiGithubLogoBold,
  PiLinkedinLogoBold,
  PiXLogoBold,
} from "react-icons/pi";
import Card from "./Card";
import Link from "next/link";

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
    <Card as="section" className="mt-16" title="Contact">
      <p className="my-2">
        I would love to connect with you! Always on the lookout for new
        opportunities and collaborations. Feel free to reach out to me.
      </p>
      <ul className="list-disc list-inside md:list-outside marker:text-muted-foreground">
        <li className="my-2">
          <span className="font-bold">hi [at] abhin [dot] dev</span> for emails
        </li>
        <li className="my-2">
          <Link
            className="font-bold hover:underline underline-offset-4"
            href="https://www.linkedin.com/in/abhinrustagi"
          >
            /in/abhinrustagi
          </Link>{" "}
          on LinkedIn
        </li>
        <li className="my-2">
          <Link
            className="font-bold hover:underline underline-offset-4"
            href="https://www.github.com/AbhinRustagi"
          >
            @AbhinRustagi
          </Link>{" "}
          on GitHub
        </li>
        <li className="my-2">
          <Link
            className="font-bold hover:underline underline-offset-4"
            href="https://www.x.com/abhinrustagi"
          >
            @AbhinRustagi
          </Link>{" "}
          on X
        </li>
      </ul>
    </Card>
    // <Card id="contact">
    //   <CardHeader>
    //     <CardTitle className="text-2xl font-bold!">Let's Connect</CardTitle>
    //     <p className="my-3 text-muted-foreground">
    //       Always on the lookout for new opportunities and collaborations. Feel
    //       free to reach out to me.
    //     </p>
    //   </CardHeader>
    //   <CardContent>
    //     <ul className="flex gap-4">
    //       {socials.map(({ href, title }) => {
    //         const id = `header-${title.toLowerCase()}`;

    //         return (
    //           <li key={id}>
    //             <Link
    //               href={href}
    //               target="_blank"
    //               className="hover:text-primary font-bold"
    //               data-tooltip-id={id}
    //               data-tooltip-content={title}
    //             >
    //               {title}
    //             </Link>
    //           </li>
    //         );
    //       })}
    //     </ul>
    //   </CardContent>
    // </Card>
  );
}
