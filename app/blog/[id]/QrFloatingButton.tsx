"use client";

import { useState, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";

interface QrFloatingButtonProps {
  articleId: string;
}

export default function QrFloatingButton({ articleId }: QrFloatingButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState("");

  useEffect(() => {
    // 在客户端设置URL以确保window对象可用
    setUrl(window.location.href);
  }, [articleId]);

  const toggleQR = () => {
    setIsOpen(!isOpen);
  };

  const closeQR = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Floating Button */}
      <button
        onClick={toggleQR}
        className="w-14 h-14 bg-indigo-600 hover:bg-indigo-700 rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        aria-label="显示二维码"
        title="查看二维码"
      >
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
            d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
          />
        </svg>
      </button>

      {/* QR Code Popup */}
      {isOpen && (
        <div
          className="absolute bottom-full right-0 mb-4 w-48 h-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 transform opacity-100 scale-100 transition-all duration-300 z-50 flex items-center justify-center"
          onClick={closeQR}
        >
          <div className="p-2 bg-white rounded-lg">
            {url && (
              <QRCodeCanvas
                value={url}
                size={160}
                bgColor={"#ffffff"}
                fgColor={"#000000"}
                level={"H"}
              />
            )}
          </div>
        </div>
      )}

      {/* Click outside to close */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={closeQR}
          aria-hidden="true"
        ></div>
      )}
    </div>
  );
}
