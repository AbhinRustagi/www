import Headshot from "@/lib/assets/images/headshot.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className="mb-16 pb-8 border-b border-border flex gap-4 items-center justify-center md:justify-start flex-wrap">
      <div className="w-24 h-24 rounded-full overflow-hidden relative">
        <Image
          src={Headshot}
          alt="Abhin Rustagi"
          width={96}
          height={96}
          className="object-cover w-full h-full absolute"
        />
      </div>
      <div>
        <h1 className="text-2xl font-bold">Abhin Rustagi</h1>
        <p className="text-muted-foreground">Software Engineer</p>
      </div>
    </header>
  );
}
