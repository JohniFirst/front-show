import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 启用静态导出
  trailingSlash: true, // 确保所有路由都带斜杠，有助于静态导出
  basePath: process.env.NODE_ENV === "production" ? "/front-show" : "", // 生产环境使用实际仓库名作为基础路径，开发环境为空
  assetPrefix: process.env.NODE_ENV === "production" ? "/front-show/" : "./",
  images: {
    unoptimized: true, // 在静态导出时取消图片优化
  },
};

export default nextConfig;
