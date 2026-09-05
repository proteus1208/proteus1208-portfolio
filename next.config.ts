import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  // Only apply repo subpath for GitHub Pages builds.
  ...(isGithubPages
    ? {
        basePath: "/proteus1208-portfolio",
        assetPrefix: "/proteus1208-portfolio/",
      }
    : {}),
  images: {
    unoptimized: true,
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
