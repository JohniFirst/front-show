import type { NextConfig } from "next";
import siteConfig from "./config/siteConfig";

const nextConfig: NextConfig = {
  output: process.env.NODE_ENV === "production" ? "export" : undefined, // 只在生产环境中启用静态导出
  trailingSlash: process.env.NODE_ENV === "production" ? true : undefined, // 只在生产环境中启用尾随斜杠
  basePath: siteConfig.basePath, // 使用配置文件中的路径
  assetPrefix: siteConfig.assetPrefix, // 使用配置文件中的资源路径前缀
};

export default nextConfig;
