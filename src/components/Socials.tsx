import Link from "next/link";
import Card from "./Card";

export default function Socials() {
  return (
    <Card as="section" className="mt-16" title="Contact">
      <p className="my-2">
        I'm always on the lookout for new opportunities and collaborations. Feel
        free to reach out to me.
      </p>
      <ul className="mt-6 list-disc list-inside md:list-outside marker:text-muted-foreground">
        <li className="my-2">
          <span className="font-bold">hi [at] abhin [dot] dev</span> for emails
        </li>
        <li className="my-2">
          <Link
            className="font-bold hover:underline underline-offset-4"
            href="https://www.linkedin.com/in/abhinrustagi"
          >
            /in/abhinrustagi
          </Link>{" "}
          on LinkedIn
        </li>
        <li className="my-2">
          <Link
            className="font-bold hover:underline underline-offset-4"
            href="https://www.github.com/AbhinRustagi"
          >
            @AbhinRustagi
          </Link>{" "}
          on GitHub
        </li>
        <li className="my-2">
          <Link
            className="font-bold hover:underline underline-offset-4"
            href="https://www.x.com/abhinrustagi"
          >
            @AbhinRustagi
          </Link>{" "}
          on X
        </li>
      </ul>
    </Card>
  );
}
