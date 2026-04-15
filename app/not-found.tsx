import Link from "next/link";
import Navigation from "./components/Navigation";
import GsapElementAnimation from "./components/GsapElementAnimation";

export default function NotFound() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-black flex flex-col items-center justify-center p-8">
        <GsapElementAnimation animationType="fadeIn" delay={0.2}>
          <div className="max-w-lg w-full text-center">
            {/* 装饰元素 */}
            <div
              aria-hidden="true"
              className="absolute top-20 left-10 w-64 h-64 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
            ></div>
            <div
              aria-hidden="true"
              className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 dark:bg-yellow-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"
            ></div>
            <div
              aria-hidden="true"
              className="absolute bottom-20 left-1/3 w-60 h-60 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"
            ></div>

            {/* 404内容 */}
            <div className="relative z-10">
              <div className="mb-8">
                <h1 className="text-9xl font-bold text-gray-900 dark:text-white opacity-20">
                  404
                </h1>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                页面未找到
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                抱歉，您访问的页面不存在或已被移动。请检查网址是否正确，或返回首页继续浏览。
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  aria-label="返回首页"
                >
                  返回首页
                </Link>

                <Link
                  href="/portfolio"
                  className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  aria-label="浏览作品集"
                >
                  浏览作品集
                </Link>

                <Link
                  href="/contact"
                  className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  aria-label="联系我"
                >
                  联系我
                </Link>
              </div>

              {/* 快速链接 */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                  快速链接
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {["关于", "服务", "作品集", "博客", "联系"].map((link) => (
                    <Link
                      key={link}
                      href={`/${link === "关于" ? "about" : link === "服务" ? "services" : link === "作品集" ? "portfolio" : link === "博客" ? "blog" : "contact"}`}
                      className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors focus:outline-none focus:underline"
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </GsapElementAnimation>
      </div>
    </>
  );
}