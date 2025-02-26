import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mt-16">
      <div className="flex gap-6 flex-wrap md:flex-nowrap">
        <div className="relative aspect-square rounded-lg overflow-hidden md:flex-1">
          <Image src="/404.jpg" alt="" />
        </div>
        <div className="md:flex-1">
          <h1>404: Not Found</h1>
          <p>Could not find requested resource</p>
          <Link href="/" className="underline mt-4 inline-block">
            Return Home
          </Link>
        </div>
      </div>
    </section>
  );
}
