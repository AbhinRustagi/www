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
    <footer className="my-16 flex justify-center">
      <p className="text-sm text-muted-foreground">
        Made with ☕️ by Abhin. Last updated {buildDate}.{" "}
        <Link className="underline underline-offset-4" href="/about#colophon">
          Colophon
        </Link>
      </p>
    </footer>
  );
}
