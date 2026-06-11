import type { NextConfig } from "next";

const isProd = process.env.GITHUB_ACTIONS === "true";
const repoName = "classroll.github.io";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
};

export default nextConfig;
