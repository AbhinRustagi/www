"use client";

import Headshot from "@/lib/assets/images/headshot.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
  const isHome = isActive("/");

  return (
    <header className="mb-16 flex gap-4 items-center justify-center flex-wrap flex-col">
      <div className="flex gap-4 items-center">
        <div className="w-24 h-24 rounded-full overflow-hidden relative">
          <Image
            src={Headshot}
            alt="Abhin Rustagi"
            width={96}
            height={96}
            className="object-cover w-full h-full absolute"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold font-geist-mono">Abhin Rustagi</h1>
          <p className="text-muted-foreground">Software Engineer</p>
        </div>
        {!isHome && (
          <div className="font-geist-mono text-lg font-medium text-muted-foreground">
            / BLOG
          </div>
        )}
      </div>
      {!isHome && (
        <div className="flex flex-col gap-1 text-muted-foreground text-sm max-w-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
          inventore
        </div>
      )}
    </header>
  );
}
