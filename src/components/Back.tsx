import Link from "next/link";
import { PiArrowLeftBold } from "react-icons/pi";

export default function Back() {
  return (
    <div>
      <Link
        href="/"
        className="flex items-center gap-2 mb-10 no-underline! hover:underline"
      >
        <PiArrowLeftBold />
        <span>Home</span>
      </Link>
    </div>
  );
}
