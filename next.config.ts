import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Repo root — keeps Turbopack from picking up the stray package-lock.json in the home dir
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    // AVIF first: ~30% smaller than WebP for the photos on this site, WebP fallback
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
