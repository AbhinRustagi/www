import Link from "next/link";
import React from "react";

interface CardProps {
  children: React.ReactNode;
  title: string;
  link?: string;
  as?: "section" | "div";
  className?: string;
}

export default function Card({
  children,
  title,
  link,
  as: Component = "div",
  className,
}: CardProps) {
  return (
    <Component className={`relative group h-max ${className}`}>
      {link && (
        <React.Fragment>
          <div className="absolute -top-6 -left-6 -bottom-6 -right-6 rounded-lg bg-transparent group-hover:bg-card pointer-events-none -z-10 transition-all duration-300"></div>
          <Link
            href={link}
            className="absolute z-20 block w-full h-full"
          ></Link>
        </React.Fragment>
      )}
      <h2 className="text-xs font-medium font-geist-mono mb-4 uppercase text-muted-foreground tracking-widest">
        /{title}
      </h2>
      {children}
    </Component>
  );
}
