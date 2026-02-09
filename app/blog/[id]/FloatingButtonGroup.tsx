"use client";

import { useState } from "react";
import type { BlogPost } from "./BlogPostClient";
import QrFloatingButton from "./QrFloatingButton";

interface FloatingButtonGroupProps {
  post: BlogPost;
  showBackToTop: boolean;
  onScrollToTop: () => void;
}

export default function FloatingButtonGroup({
  post,
  showBackToTop,
  onScrollToTop,
}: FloatingButtonGroupProps) {
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  const generateMarkdownContent = () => {
    return `---
title: ${post.title}
author: ${post.author}
date: ${post.date}
category: ${post.category}
tags: [${post.tags.join(", ")}]
---

# ${post.title}

${post.content}
`;
  };

  const generateTextContent = () => {
    return `标题: ${post.title}
作者: ${post.author}
日期: ${post.date}
分类: ${post.category}
标签: ${post.tags.join(", ")}

${post.content}
`;
  };

  const exportAsMarkdown = () => {
    setIsExporting(true);
    try {
      const content = generateMarkdownContent();
      const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${post.title.replace(
        /[^a-zA-Z0-9\u4e00-\u9fa5]/g,
        "_"
      )}.md`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Export failed:", error);
    } finally {
      setIsExporting(false);
      setIsExportOpen(false);
    }
  };

  const exportAsText = () => {
    setIsExporting(true);
    try {
      const content = generateTextContent();
      const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${post.title.replace(
        /[^a-zA-Z0-9\u4e00-\u9fa5]/g,
        "_"
      )}.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Export failed:", error);
    } finally {
      setIsExporting(false);
      setIsExportOpen(false);
    }
  };

  const toggleExportMenu = () => {
    if (!isExporting) {
      setIsExportOpen(!isExportOpen);
    }
  };

  const closeExportMenu = () => {
    if (!isExporting) {
      setIsExportOpen(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative flex flex-col items-center space-y-4">
        {/* Back to Top Button */}
        <button
          onClick={onScrollToTop}
          className={`w-14 h-14 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex items-center justify-center transform ${
            showBackToTop
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-4 scale-95 pointer-events-none"
          }`}
          aria-label="回到顶部"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>

        {/* Export Button */}
        <div className="relative">
          <button
            onClick={toggleExportMenu}
            disabled={isExporting}
            className="w-14 h-14 bg-green-600 hover:bg-green-700 rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="导出文章"
            title="导出文章"
          >
            {isExporting ? (
              <svg
                className="w-6 h-6 text-white animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            )}
          </button>

          {/* Export Options Popup */}
          {isExportOpen && (
            <div
              className="absolute bottom-full right-0 mb-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 transform opacity-100 scale-100 transition-all duration-300 z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-2">
                <div className="text-sm font-medium text-gray-900 dark:text-white px-3 py-2">
                  导出格式
                </div>
                <button
                  onClick={exportAsMarkdown}
                  disabled={isExporting}
                  className="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Markdown (.md)
                </button>
                <button
                  onClick={exportAsText}
                  disabled={isExporting}
                  className="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Text (.txt)
                </button>
              </div>
            </div>
          )}

          {/* Click outside to close export menu */}
          {isExportOpen && (
            <div
              className="fixed inset-0 z-40"
              onClick={closeExportMenu}
              aria-hidden="true"
            ></div>
          )}
        </div>

        {/* QR Button */}
        <div className="hidden md:block">
          <QrFloatingButton articleId={post.id} />
        </div>
      </div>
    </div>
  );
}
