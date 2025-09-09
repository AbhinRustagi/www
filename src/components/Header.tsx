"use client";

import pageMetadata from "@/content/page-metadata.json";
import Headshot from "@/lib/assets/images/Group 3.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface PageMetadata {
  pathname: string;
  title: string;
  description?: string;
}

export default function Header() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const isHome = isActive("/");
  const [metadata, setMetadata] = useState<PageMetadata | null>(null);

  useEffect(() => {
    const metadata =
      pageMetadata[pathname.replace("/", "") as keyof typeof pageMetadata];
    if (metadata) {
      setMetadata(metadata);
    }
  }, [pathname]);

  return (
    <header className="mb-16 flex gap-2 justify-center flex-wrap flex-col">
      <div className="flex gap-0 items-center">
        <div className="w-20 h-20 relative">
          <Link href="/" className="absolute z-20 block w-full h-full"></Link>
          <Image
            src={Headshot}
            alt="Abhin Rustagi"
            width={80}
            height={80}
            className="object-contain w-full h-full absolute"
          />
        </div>
        <div>
          <h1 className="text-xl md:text-2xl font-bold font-fira-mono">
            <Link href="/">Abhin Rustagi </Link>
            {!isHome && metadata ? (
              <span className="text-muted-foreground">
                <Link href={metadata.pathname}>/ {metadata.title}</Link>
              </span>
            ) : (
              ""
            )}
          </h1>
          <p className="md:block hidden text-sm md:text-base text-muted-foreground">
            Software Engineer
          </p>
        </div>
      </div>
      {!isHome && metadata?.description && (
        <div className="flex flex-col gap-1 text-muted-foreground text-sm max-w-lg mt-4">
          {metadata.description}
        </div>
      )}
    </header>
  );
}
