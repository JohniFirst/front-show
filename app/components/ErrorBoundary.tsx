"use client";

import React from "react";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    // 这里可以添加错误上报逻辑，如 Sentry、LogRocket 等
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-[400px] flex flex-col items-center justify-center p-8 text-center">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 max-w-lg w-full">
            <div className="mx-auto bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-900 dark:to-pink-900 w-20 h-20 rounded-full flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-red-600 dark:text-red-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              哎呀，出了点问题！
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              页面加载时遇到了问题。请尝试刷新页面或返回首页。
            </p>

            {this.state.error && process.env.NODE_ENV === "development" && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6 text-left">
                <p className="text-sm font-medium text-red-800 dark:text-red-300 mb-1">
                  错误详情：
                </p>
                <code className="text-xs text-red-700 dark:text-red-400 break-all">
                  {this.state.error.message}
                </code>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={this.handleRetry}
                className="px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white font-medium rounded-lg hover:from-red-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                aria-label="重试加载页面"
              >
                重试
              </button>
              
              <Link
                href="/"
                className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                aria-label="返回首页"
              >
                返回首页
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}