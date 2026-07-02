import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["pdf-lib"],
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;