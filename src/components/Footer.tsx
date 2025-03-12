type DateFormatOptions = {
  year: "numeric";
  month: "long";
  day: "numeric";
};

export default function Footer() {
  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  } as DateFormatOptions;

  return (
    <footer className="mt-12 pt-12 border-t border-t-neutral-800 text-neutral-500 text-xs">
      <p className="mb-2">Built using Next and Tailwind, hosted on Vercel.</p>
      <p className="my-2">
        Last updated {new Date().toLocaleDateString("en-US", dateOptions)}
      </p>
      <p>&copy; 2025 Abhin Rustagi</p>
    </footer>
  );
}
