import Image from "next/image";

export default function Header() {
  return (
    <div className="mb-12 flex gap-5">
      <div className="flex items-center justify-between gap-3 md:gap-5">
        <Image src="/header.png" alt="logo" width={100} height={100} />
      </div>
      <div className="pt-6">
        <h2 className="text-2xl font-source!">Abhin Rustagi</h2>
        <p className="font-geist! text-lg">Software Engineer</p>
      </div>
    </div>
  );
}
