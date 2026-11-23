import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Repo root — keeps Turbopack from picking up the stray package-lock.json in the home dir
  turbopack: {
    root: path.join(__dirname),
  },
  poweredByHeader: false,
  images: {
    // AVIF first: ~30% smaller than WebP for the photos on this site, WebP fallback
    formats: ["image/avif", "image/webp"],
    // Portfolio images rarely change, so keep optimized variants for 31 days
    // instead of the 4-hour default: fewer re-transformations on Vercel and
    // faster repeat visits. Renaming a file busts it immediately.
    minimumCacheTTL: 2678400,
  },
};

export default nextConfig;
