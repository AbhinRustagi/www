"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <header className="mb-16 pb-8 border-b border-border flex gap-4 items-center flex-wrap">
      <nav>
        <ul className="flex gap-4 flex-wrap">
          {navItems.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className={`${
                  isActive(item.href)
                    ? "font-bold underline underline-offset-4"
                    : ""
                }`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
