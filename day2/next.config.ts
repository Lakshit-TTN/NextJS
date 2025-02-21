import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'images.pexels.com',
      },
    ],
  },  reactStrictMode: true,
};

export default nextConfig;
