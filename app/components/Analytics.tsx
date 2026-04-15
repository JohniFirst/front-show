"use client";

import { useEffect } from "react";

export default function Analytics() {
  useEffect(() => {
    // 这里可以添加Google Analytics、Plausible等分析代码
    // 出于隐私考虑，这里只展示占位逻辑
    
    const trackPageView = () => {
      if (process.env.NODE_ENV === "production") {
        // 示例：Google Analytics 4
        /*
        if (typeof window.gtag !== "undefined") {
          window.gtag("config", "G-XXXXXXXXXX", {
            page_path: window.location.pathname,
          });
        }
        */
        
        // 示例：Plausible Analytics
        /*
        if (typeof window.plausible !== "undefined") {
          window.plausible("pageview");
        }
        */
      }
    };

    // 初始页面加载跟踪
    trackPageView();

    // 监听路由变化（Next.js应用）
    const handleRouteChange = () => {
      trackPageView();
    };

    // 对于Next.js App Router，可能需要使用next/navigation监听路由变化
    // 这里简化处理，仅在组件加载时跟踪一次

    return () => {
      // 清理
    };
  }, []);

  return null;
}