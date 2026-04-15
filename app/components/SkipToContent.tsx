"use client";

export default function SkipToContent() {
  return (
    <>
      {/* 跳过导航链接 - 对屏幕阅读器和键盘导航很重要 */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-indigo-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        跳转到主要内容
      </a>
      
      {/* 高对比度模式切换 */}
      <button
        type="button"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 z-50 bg-gray-800 text-white px-3 py-1 rounded text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
        onClick={() => {
          document.documentElement.classList.toggle("high-contrast");
          const isHighContrast = document.documentElement.classList.contains("high-contrast");
          localStorage.setItem("highContrastMode", isHighContrast.toString());
        }}
        aria-label="切换高对比度模式"
      >
        高对比度
      </button>
    </>
  );
}