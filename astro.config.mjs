import { defineConfig } from "astro/config";
import node from "@astrojs/node";

export default defineConfig({
  site: "https://abhin.dev",
  output: "hybrid",
  adapter: node({
    mode: "standalone",
  }),
});
