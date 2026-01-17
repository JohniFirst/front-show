import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "前端开发-响应式网站、小程序、Flutter的安卓ios跨端App",
  description:
    "专业前端开发服务，提供响应式网站设计、小程序开发、Flutter跨平台移动应用开发。精通React、Vue、Angular等现代前端框架，致力于打造用户体验卓越的数字化产品。",
  keywords: [
    "前端开发",
    "响应式网站",
    "小程序开发",
    "Flutter",
    "跨端应用",
    "React",
    "Vue",
    "UI/UX设计",
    "JavaScript",
    "TypeScript",
  ],
  authors: [{ name: "Frontend Developer" }],
  creator: "Frontend Developer",
  publisher: "Frontend Developer",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "前端开发-响应式网站、小程序、Flutter跨端App",
    description:
      "专业前端开发服务，提供响应式网站设计、小程序开发、Flutter跨平台移动应用开发。",
    type: "website",
    locale: "zh_CN",
  },
  twitter: {
    card: "summary_large_image",
    title: "前端开发-响应式网站、小程序、Flutter跨端App",
    description:
      "专业前端开发服务，提供响应式网站设计、小程序开发、Flutter跨平台移动应用开发。",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical:
      typeof process.env.NEXT_PUBLIC_SITE_URL !== "undefined"
        ? process.env.NEXT_PUBLIC_SITE_URL
        : "https://JohniFirst.github.io/front-show/",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen antialiased bg-white dark:bg-black text-gray-900 dark:text-white">
        {children}
      </body>
    </html>
  );
}
