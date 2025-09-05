import Image from "next/image";
import { Github, Globe, Tag } from "lucide-react";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Photo of the Day</h1>
      <Image
        src=""
        alt={"project.title"}
        width={1000}
        height={400}
        className="my-6 border border-neutral-700 rounded-lg object-cover"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4" />
          <span className="underline underline-offset-4 decoration-1">
            View Live
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Github className="w-4 h-4" />
          <span className="underline underline-offset-4 decoration-1">
            View on GitHub
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <Tag className="w-4 h-4" />
          <span className="underline underline-offset-4 decoration-1">
            Tag 1
          </span>
        </div>
      </div>
      <h2 className="mt-12 mb-2 text-lg font-semibold">Key Highlights</h2>
      <ul className="mb-6 grid grid-cols-3 gap-2 list-inside list-disc">
        <li className="my-2">Powered by Zeus</li>
      </ul>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde hic
        magnam placeat, optio autem saepe nemo, dolorem ipsam pariatur odit iure
        perferendis soluta in minus aut, praesentium debitis ad mollitia?
        Cumque, excepturi sunt. Tenetur, iusto harum ullam suscipit voluptates
        nam provident alias nisi odit iure reprehenderit veritatis fugiat amet
        quidem voluptas consectetur repudiandae in corporis? Soluta quisquam
        suscipit ex nam?
      </div>
    </div>
  );
}
