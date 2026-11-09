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
  async redirects() {
    return [
      {
        source: "/services/formation-coaching",
        destination: "/nos-services",
        permanent: true,
      },
      {
        source: "/services/conseil-strategique",
        destination: "/nos-services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
