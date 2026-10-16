import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Repo root — keeps Turbopack from picking up the stray package-lock.json in the home dir
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
