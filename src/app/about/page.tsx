import generateMetadata from "@/lib/metadata";

export const metadata = generateMetadata({
  title: "About Me",
  canonical: "/about",
});

export default function About() {
  return <div>About</div>;
}
