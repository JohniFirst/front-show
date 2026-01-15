"use client";

import dynamic from "next/dynamic";

const DynamicQRCode = dynamic(() => import("qrcode.react"), { ssr: false });

interface QrCodeSectionProps {
  articleId: string;
}

export default function QrCodeSection({ articleId }: QrCodeSectionProps) {
  const currentUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/blog/${articleId}`
      : "";

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        扫描二维码继续阅读
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        在手机上扫描下方二维码，随时随地继续阅读这篇文章
      </p>

      <div className="flex flex-col items-center">
        <div className="bg-white p-4 rounded-lg shadow-inner inline-block">
          {currentUrl && <DynamicQRCode value={currentUrl} size={200} />}
        </div>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm">
          扫描二维码在移动设备上阅读
        </p>
      </div>
    </div>
  );
}
