import Image from "next/image";

export default function Header() {
  return (
    <div className="mb-12 flex gap-5 items-center">
      <div className="flex items-center justify-between gap-3 md:gap-5 rounded-full overflow-hidden">
        <Image src="/headshot.jpg" alt="logo" width={80} height={80} />
      </div>
      <div>
        <h2 className="text-3xl">Abhin Rustagi</h2>
        <p className="text-base">Software Engineer</p>
      </div>
    </div>
  );
}
