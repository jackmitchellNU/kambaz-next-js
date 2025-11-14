import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Skip ESLint during production builds on CI (useful for deployments)
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
