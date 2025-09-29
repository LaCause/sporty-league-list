import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://r2.thesportsdb.com/**")],
  },
};

export default nextConfig;
