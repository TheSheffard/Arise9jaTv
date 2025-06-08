import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.ariseplay.com", // Allows all subdomains
        pathname: "/**", // Allows any path
      },
      {
        protocol: "https",
        hostname: "arise9jaserver.vercel.app",
        pathname: "/**",
      },
    ],
  },
  // Add other Next.js config options here if needed
};

export default nextConfig;