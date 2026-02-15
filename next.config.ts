import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['@prophecy/contentful'],
  images: {
    domains: ['images.ctfassets.net'],
  },
};

export default nextConfig;
