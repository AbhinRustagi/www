"use client";

import ReactClock from "react-live-clock";
import { BaseCard } from "./Card";

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
    <footer className="mt-12">
      <BaseCard>
        <div className="text-xs">
          <ReactClock
            ticking
            format="LTS"
            timezone="Australia/Melbourne"
            className="m-0 p-0"
          />{" "}
          AEST
        </div>
        <p className="my-2 text-xs">Last updated {buildDate}.</p>
        <p className="text-xs">
          Built using Next and Tailwind, hosted on Vercel.
        </p>
      </BaseCard>
    </footer>
  );
}
