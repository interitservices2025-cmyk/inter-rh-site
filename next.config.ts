import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "inter-rh.lovable.app",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
