import Link from "next/link";

type DateFormatOptions = {
  year: "numeric";
  month: "long";
  day: "numeric";
};

const dateOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
} as DateFormatOptions;

const buildDate = new Date(
  Number(process.env.NEXT_PUBLIC_BUILD_TS ?? process.env.BUILD_TS) * 1000
).toLocaleDateString("en-US", dateOptions);

export default function Footer() {
  return (
    <footer className="my-16 border-t border-gray-border pt-12 text-foreground">
      <p className="text-base">
        Last updated {buildDate}.{" "}
        <Link className="italic" href="/about#colophon">
          Colophon
        </Link>
      </p>
    </footer>
  );
}
