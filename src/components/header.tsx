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
    <header className="bg-bg mb-12">
      <div className="mx-auto max-w-[960px] flex items-center justify-center flex-wrap gap-4 p-6">
        <nav className="flex items-center gap-4">
          {NAV_ITEMS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-xs no-underline font-mono uppercase px-4 py-1 rounded-2xl transition-colors ${
                isActive(href)
                  ? "text-white font-bold bg-accent"
                  : "text-text-muted hover:text-white hover:font-bold hover:bg-accent"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
