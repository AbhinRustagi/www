"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Writing" },
  { href: "/projects", label: "Projects" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <header className="mb-12">
      <div className="mx-auto max-w-4xl flex items-center justify-center flex-wrap gap-4 p-6">
        <nav className="flex flex-wrap items-center gap-4">
          {NAV_ITEMS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`group text-sm no-underline font-serif px-4 py-1 rounded-2xl transition-colors ${
                isActive(href) ? "bg-accent" : "hover:bg-accent"
              }`}
            >
              <span
                className={
                  isActive(href)
                    ? "text-neutral-100 font-bold"
                    : " group-hover:text-white group-hover:font-bold"
                }
              >
                {label}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
