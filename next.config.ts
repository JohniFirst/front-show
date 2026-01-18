import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.NODE_ENV === "production" ? "export" : undefined, // 只在生产环境中启用静态导出
  trailingSlash: process.env.NODE_ENV === "production" ? true : undefined, // 只在生产环境中启用尾随斜杠
  basePath: process.env.NODE_ENV === "production" ? "/front-show" : "", // 生产环境使用实际仓库名作为基础路径，开发环境为空
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/front-show/" : undefined, // 只在生产环境中设置assetPrefix
};

export default nextConfig;
