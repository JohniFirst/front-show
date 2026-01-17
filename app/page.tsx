import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "./components/Navigation";
import GsapElementAnimation from "./components/GsapElementAnimation";

export const metadata: Metadata = {
  title: "首页 | 前端开发-响应式网站、小程序、Flutter的安卓ios跨端App",
  description:
    "欢迎来到专业前端开发服务网站。我们提供响应式网站设计、小程序开发、Flutter跨平台移动应用开发服务。",
  alternates: {
    canonical: "https://JohniFirst.github.io/front-show/",
  },
};

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen">
        <section className="min-h-screen bg-gradient-to-br from-zinc-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-black py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto relative">
            {/* Decorative floating elements */}
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

            <div className="relative z-10">
              <div className="text-center mb-16">
                <GsapElementAnimation animationType="fadeIn" delay={0.2}>
                  <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                    <span>前端开发专家</span>
                    <span className="cursor">|</span>
                  </h1>
                </GsapElementAnimation>

                <GsapElementAnimation animationType="slideIn" delay={0.4}>
                  <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
                    专业的前端开发服务，涵盖响应式网站、小程序、Flutter跨平台应用开发
                  </p>
                </GsapElementAnimation>

                <GsapElementAnimation animationType="slideIn" delay={0.6}>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <div className="transform transition-transform duration-300 hover:scale-105 active:scale-95">
                      <Link
                        href="/about"
                        className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
                        aria-label="了解我们的服务详情"
                      >
                        了解我们
                      </Link>
                    </div>
                    <div className="transform transition-transform duration-300 hover:scale-105 active:scale-95">
                      <Link
                        href="/contact"
                        className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-lg hover:shadow-xl"
                        aria-label="联系我们获取报价"
                      >
                        联系我们
                      </Link>
                    </div>
                  </div>
                </GsapElementAnimation>
              </div>

              <GsapElementAnimation animationType="slideIn" delay={0.8}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                  <article
                    className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 text-center border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all cursor-pointer"
                    role="region"
                    aria-labelledby="responsive-design-title"
                  >
                    <div className="mx-auto bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 w-16 h-16 rounded-full flex items-center justify-center mb-6 animate-float">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-indigo-600 dark:text-indigo-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                    </div>
                    <h2
                      id="responsive-design-title"
                      className="text-xl font-bold text-gray-900 dark:text-white mb-3"
                    >
                      响应式网站设计
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      为各种设备尺寸优化的现代网站，确保在桌面、平板和手机上都有完美的用户体验
                    </p>
                    <div className="transform transition-transform duration-300 hover:scale-105">
                      <Link
                        href="/services"
                        className="text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                        aria-label="了解更多响应式网站设计服务"
                      >
                        了解更多
                      </Link>
                    </div>
                  </article>

                  <article
                    className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 text-center border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all cursor-pointer"
                    role="region"
                    aria-labelledby="mini-program-title"
                  >
                    <div className="mx-auto bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 w-16 h-16 rounded-full flex items-center justify-center mb-6 animate-float animation-delay-2000">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-indigo-600 dark:text-indigo-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                        />
                      </svg>
                    </div>
                    <h2
                      id="mini-program-title"
                      className="text-xl font-bold text-gray-900 dark:text-white mb-3"
                    >
                      小程序开发
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      微信、支付宝等平台的小程序开发，快速部署，轻量化用户体验
                    </p>
                    <div className="transform transition-transform duration-300 hover:scale-105">
                      <Link
                        href="/services"
                        className="text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                        aria-label="了解更多小程序开发服务"
                      >
                        了解更多
                      </Link>
                    </div>
                  </article>

                  <article
                    className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 text-center border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all cursor-pointer"
                    role="region"
                    aria-labelledby="flutter-title"
                  >
                    <div className="mx-auto bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 w-16 h-16 rounded-full flex items-center justify-center mb-6 animate-float animation-delay-4000">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-indigo-600 dark:text-indigo-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </div>
                    <h2
                      id="flutter-title"
                      className="text-xl font-bold text-gray-900 dark:text-white mb-3"
                    >
                      Flutter跨端应用
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      一套代码同时构建iOS和Android原生应用，高效开发，性能卓越
                    </p>
                    <div className="transform transition-transform duration-300 hover:scale-105">
                      <Link
                        href="/services"
                        className="text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                        aria-label="了解更多Flutter跨端应用服务"
                      >
                        了解更多
                      </Link>
                    </div>
                  </article>
                </div>
              </GsapElementAnimation>

              <GsapElementAnimation animationType="fadeIn" delay={1.0}>
                <div
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-12 text-center relative overflow-hidden"
                  role="banner"
                >
                  <div className="absolute inset-0 bg-pattern opacity-10"></div>
                  <div className="relative z-10">
                    <h2 className="text-3xl font-bold text-white mb-4">
                      准备开始您的项目？
                    </h2>
                    <p className="text-indigo-100 text-lg mb-6 max-w-2xl mx-auto">
                      加入众多信赖我们专业前端开发服务的满意客户，让我们为您的业务打造卓越的数字化体验
                    </p>
                    <div className="transform transition-transform duration-300 hover:scale-105 active:scale-95">
                      <Link
                        href="/contact"
                        className="inline-block px-8 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
                        aria-label="立即联系我们开始项目"
                      >
                        立即开始
                      </Link>
                    </div>
                  </div>
                </div>
              </GsapElementAnimation>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
