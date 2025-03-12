"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "home" },
  { href: "/blog", label: "blog" },
  { href: "/about", label: "about" },
  { href: "#contact", label: "contact" },
];

export default function Header() {
  const pathname = usePathname();

  const isCurrentPath = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    const currentPath = pathname.replace(/\/$/, "");
    return currentPath.startsWith(href.replace(/\/$/, ""));
  };

  return (
    <header className="mb-12">
      <nav>
        <ul className="flex gap-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <Link
                href={href}
                className={`hover:text-neutral-100 ${
                  isCurrentPath(href) ? "text-neutral-100" : "text-neutral-500"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
