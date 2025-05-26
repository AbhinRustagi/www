"use client";

import ReactClock from "react-live-clock";
import { BaseCard } from "./Card";
import Link from "next/link";

type DateFormatOptions = {
  year: "numeric";
  month: "long";
  day: "numeric";
};

export default function Footer() {
  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  } as DateFormatOptions;

  const buildDate = new Date(
    Number(process.env.NEXT_PUBLIC_BUILD_TS ?? process.env.BUILD_TS) * 1000
  ).toLocaleDateString("en-US", dateOptions);

  return (
    <footer className="my-12 border-t border-gray-border pt-12 text-foreground">
      <p className="text-base">
        Last updated {buildDate}. <Link href="/about#colophon">Colophon</Link>
      </p>
    </footer>
  );
}
