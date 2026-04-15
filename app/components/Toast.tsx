"use client";

import { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  type?: "success" | "error" | "info" | "warning";
  duration?: number;
  onClose?: () => void;
}

export default function Toast({
  message,
  type = "info",
  duration = 5000,
  onClose,
}: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onClose?.(), 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const getTypeStyles = () => {
    switch (type) {
      case "success":
        return "bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800 text-green-800 dark:text-green-300";
      case "error":
        return "bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-800 text-red-800 dark:text-red-300";
      case "warning":
        return "bg-yellow-50 dark:bg-yellow-900/30 border-yellow-200 dark:border-yellow-800 text-yellow-800 dark:text-yellow-300";
      default:
        return "bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-300";
    }
  };

  const getIcon = () => {
    switch (type) {
      case "success":
        return (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      case "error":
        return (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        );
      case "warning":
        return (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        );
      default:
        return (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 max-w-sm w-full sm:w-auto transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}
      role="alert"
      aria-live="polite"
      aria-atomic="true"
    >
      <div
        className={`flex items-center p-4 rounded-lg border ${getTypeStyles()} shadow-lg animate-fade-in`}
      >
        <div className="flex-shrink-0 mr-3">{getIcon()}</div>
        <p className="text-sm font-medium flex-1">{message}</p>
        <button
          onClick={() => {
            setIsVisible(false);
            setTimeout(() => onClose?.(), 300);
          }}
          className="ml-3 flex-shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 rounded"
          aria-label="关闭通知"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}