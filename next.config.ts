import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,

  // GitHub Pages needs static export + repo subpath; Vercel serves from domain root.
  ...(isGithubPages
    ? {
        output: "export",
        basePath: "/proteus1208-portfolio",
        assetPrefix: "/proteus1208-portfolio/",
      }
    : {}),

  images: {
    unoptimized: true,
    domains: ["localhost"],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  experimental: {
    optimizeCss: true,
    scrollRestoration: false,
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
