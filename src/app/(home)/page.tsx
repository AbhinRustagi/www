import Card from "@/components/Card";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Card title="About" link="/about">
          <p>
            I've been a digital builder for the past few years. I'm passionate
            about interfaces that automate, infrastructure that scales, products
            that delight.
            <br />
            <Link href="/about" className="mt-4 font-bold text-sm inline-block">
              About Me →
            </Link>
          </p>
        </Card>
        <Card title="Now">
          <ul className="list-disc list-inside md:list-outside mb-4 marker:text-muted-foreground">
            <li className="my-2">Open to new opportunities</li>
            <li className="my-2">
              Building SemiReal, a new age content creation platform
            </li>
          </ul>
          <ul className="list-disc list-inside md:list-outside marker:text-muted-foreground">
            <li className="my-2">
              Currently in Melbourne, Australia. <br />
              <span className="text-muted-foreground text-sm">
                It is 3:41 AM here (UTC+10).
              </span>
            </li>
            {/* <li>// Wakatime Stats</li> */}
          </ul>
        </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
        {/* Projects */}
        <Card title="Projects" link="/projects">
          <ul className="list-disc list-inside md:list-outside">
            <li className="my-2">
              Building SemiReal, a new age content creation platform
            </li>
          </ul>
        </Card>
        <Card title="Writing" link="/blog">
          <ul className="list-disc list-inside md:list-outside">
            <li className="my-2">Thoughts, ideas and opinions</li>
          </ul>
        </Card>
        {/* Writing */}
      </div>
    </>
  );
}
