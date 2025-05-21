import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // for easier test builds, you can turn these flags to true to ignore lint and type checking during builds
  // not reccomended for actual production builds, just for testing
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
