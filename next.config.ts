import type { NextConfig } from "next";
import siteConfig from "./config/siteConfig";

const nextConfig: NextConfig = {
  output: process.env.NODE_ENV === "production" ? "export" : undefined, // 只在生产环境中启用静态导出
  trailingSlash: process.env.NODE_ENV === "production" ? true : undefined, // 只在生产环境中启用尾随斜杠
  basePath: siteConfig.basePath, // 使用配置文件中的路径
  assetPrefix: siteConfig.assetPrefix, // 使用配置文件中的资源路径前缀
  images: {
    unoptimized: true, // 由于使用GitHub Pages静态导出，禁用Next.js图片优化
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "**.githubusercontent.com",
      },
    ],
  },
  experimental: {
    optimizeCss: true, // 优化CSS输出
  },
};

export default nextConfig;
