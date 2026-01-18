"use client";

import React from "react";
import siteConfig from "@/config/siteConfig";

interface StaticImageProps {
  src: string;
  alt: string;
  className?: string;
  title?: string;
}

const StaticImage: React.FC<StaticImageProps> = ({
  src,
  alt,
  className,
  title,
}) => {
  // 使用 useEffect 和 useState 来管理图片路径
  const [imageSrc, setImageSrc] = React.useState(src);

  React.useEffect(() => {
    // 在客户端更新图片路径
    if (typeof window !== "undefined") {
      // 检查是否在生产环境部署
      const isProd = process.env.NODE_ENV === "production";
      if (isProd && window.location.hostname.includes("github.io")) {
        // 使用配置文件中的路径处理方法
        setImageSrc(siteConfig.getFullAssetPath(src));
      } else {
        setImageSrc(src);
      }
    } else {
      // 服务端渲染时使用原始路径
      setImageSrc(src);
    }
  }, [src]);

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      title={title}
      onError={(e) => {
        console.error(`Failed to load image: ${imageSrc}`);
      }}
    />
  );
};

export default StaticImage;
