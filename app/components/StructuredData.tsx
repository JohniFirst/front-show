"use client";

import siteConfig from "@/config/siteConfig";

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.githubPagesUrl}#website`,
        "url": siteConfig.githubPagesUrl,
        "name": "前端开发个人作品集",
        "description": siteConfig.description,
        "inLanguage": "zh-CN",
        "publisher": {
          "@id": `${siteConfig.githubPagesUrl}#person`
        }
      },
      {
        "@type": "Person",
        "@id": `${siteConfig.githubPagesUrl}#person`,
        "name": "前端开发工程师",
        "jobTitle": "前端开发工程师",
        "description": "专业前端开发工程师，专注于响应式网站设计、小程序开发和Flutter跨平台应用开发",
        "knowsAbout": [
          "前端开发",
          "响应式网站设计",
          "小程序开发",
          "Flutter",
          "React",
          "Vue.js",
          "TypeScript",
          "JavaScript",
          "UI/UX设计"
        ],
        "url": siteConfig.githubPagesUrl,
        "image": `${siteConfig.githubPagesUrl}images/photo-1551434678-e076c223a692.avif`,
        "sameAs": [
          "https://github.com/JohniFirst"
        ]
      },
      {
        "@type": "Person",
        "@id": `${siteConfig.githubPagesUrl}#person`,
        "name": "前端开发工程师",
        "url": siteConfig.githubPagesUrl,
        "image": `${siteConfig.githubPagesUrl}images/photo-1551434678-e076c223a692.avif`,
        "sameAs": [
          "https://github.com/JohniFirst"
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}