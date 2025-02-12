import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      mono: ["var(--font-cascadia-code)", "ui-monospace", "system-ui"],
      sans: ["var(--font-syne)", "Inter", "ui-sans-serif", "system-ui"],
    },
    extend: {
      colors: {
        background: "var(--background)",
        title: "var(--title)",
        subtitle: "var(--subtitle)",
        body: "var(--body)",
        accent: "var(--accent)",
        card: "var(--card)",
        border: "var(--border)",
        button: "var(--button)",
      },
    },
  },
  plugins: [],
};
export default config;
