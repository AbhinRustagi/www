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
    <header className="mb-8 md:mb-12">
      <div className="mx-auto max-w-3xl flex items-center justify-between px-4 py-4 md:p-6">
        <Link
          href="/"
          className="text-text-primary font-semibold text-sm tracking-wide no-underline shrink-0"
        >
          AR
        </Link>
        <nav className="flex items-center gap-0.5 glass-card-static px-1 py-1 overflow-x-auto">
          {NAV_ITEMS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-xs md:text-sm no-underline px-2.5 md:px-4 py-1.5 rounded-xl transition-all whitespace-nowrap ${
                isActive(href)
                  ? "bg-accent text-white! text-bg font-medium"
                  : "text-text-secondary hover:text-text-primary"
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
