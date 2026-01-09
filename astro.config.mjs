import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  site: "https://abhin.dev",
  output: "hybrid",
  adapter: vercel(),
});
