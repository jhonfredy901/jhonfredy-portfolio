import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "";
const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  images: { unoptimized: true },
  // Export estático solo al hacer `next build` (no en `next dev`).
  ...(isDev ? {} : { output: "export", trailingSlash: true }),
  ...(basePath
    ? {
        basePath,
        assetPrefix: `${basePath}/`,
      }
    : {}),
};

export default nextConfig;
