"use client";

import ReactClock from "react-live-clock";

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

  const dateStr = new Date().toLocaleDateString("en-US", dateOptions);

  return (
    <footer className="mt-12 pt-12 border-t border-t-neutral-700 text-neutral-500 text-xs">
      <div className="text-xs">
        <ReactClock
          ticking
          format="LTS"
          timezone="Australia/Melbourne"
          className="m-0 p-0"
        />{" "}
        AEST
      </div>
      <p className="my-2">Built using Next and Tailwind, hosted on Vercel.</p>
      <p>&copy; 2025 Abhin Rustagi. Last updated {dateStr}</p>
    </footer>
  );
}
