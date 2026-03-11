import Link from "next/link";
import { ButtonHTMLAttributes, ComponentProps, DetailedHTMLProps } from "react";
import { twMerge } from "tailwind-merge";

const variants = {
  default:
    "font-bold rounded-3xl py-1.5 px-4 text-xs bg-white text-black hover:bg-white/70 cursor-pointer",
  outline:
    "font-bold rounded-3xl py-1.5 px-4 text-xs text-black hover:bg-white cursor-pointer border border-neutral-200 dark:border-neutral-600 transition-all",
  link: "",
};

export function Button(
  props: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & { variant?: "default" | "outline" } = { variant: "default" },
) {
  const className = twMerge(
    variants[props.variant || "default"],
    props.className,
  );
  return <button {...props} className={className} />;
}

export function LinkButton(
  props: ComponentProps<typeof Link> & { variant?: "default" | "outline" } = {
    variant: "default",
    href: "",
  },
) {
  const className = twMerge(
    variants[props.variant || "default"],
    props.className,
  );
  return <Link {...props} className={className} />;
}
