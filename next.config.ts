import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: { BUILD_TS: `${Math.floor(Date.now() / 1000)}` },
};

export default nextConfig;
