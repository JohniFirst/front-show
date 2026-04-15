"use client";

import Image from "next/image";
import { useState } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  quality?: number;
  sizes?: string;
}

export default function OptimizedImage({
  src,
  alt,
  className = "",
  width = 800,
  height = 600,
  priority = false,
  quality = 85,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  // 从src中提取文件名，用于骨架屏颜色
  const getColorFromSrc = () => {
    if (src.includes("photo-")) {
      return "bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900";
    }
    return "bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900";
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* 骨架屏 */}
      {isLoading && (
        <div
          className={`absolute inset-0 animate-pulse ${getColorFromSrc()}`}
          aria-hidden="true"
        >
          <div className="h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
        </div>
      )}

      {/* 优化的Next.js Image组件 */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        quality={quality}
        sizes={sizes}
        className={`transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoadingComplete={() => setIsLoading(false)}
        loading={priority ? "eager" : "lazy"}
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAABQb/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCAAAH/2Q=="
        placeholder="blur"
      />
    </div>
  );
}