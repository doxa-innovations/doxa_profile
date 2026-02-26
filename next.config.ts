import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.doxaplc.com",
      },
    ],
  },
};

export default nextConfig;
