"use client";

import Link from "next/link";
import GsapTextAnimation from "@/app/components/GsapTextAnimation";
import GsapElementAnimation from "@/app/components/GsapElementAnimation";
import GsapCardAnimation from "@/app/components/GsapCardAnimation";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-black py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* 装饰性元素 */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 dark:bg-yellow-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-60 h-60 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="relative z-10">
          <GsapElementAnimation
            animationType="fadeIn"
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              <GsapTextAnimation
                animationType="typing"
                speed={150}
                className="block"
              >
                欢迎来到我的应用
              </GsapTextAnimation>
            </h1>
            <GsapElementAnimation
              delay={0.2}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10"
            >
              发现为您量身定制的精彩功能和服务。探索我们下面的提供的服务。
            </GsapElementAnimation>

            <GsapElementAnimation
              delay={0.3}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <div className="transform transition-transform duration-300 hover:scale-105 active:scale-95">
                <Link
                  href="/about"
                  className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
                >
                  了解我们
                </Link>
              </div>
              <div className="transform transition-transform duration-300 hover:scale-105 active:scale-95">
                <Link
                  href="/contact"
                  className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-lg hover:shadow-xl"
                >
                  联系我们
                </Link>
              </div>
            </GsapElementAnimation>
          </GsapElementAnimation>

          <GsapElementAnimation
            animationType="slideIn"
            stagger={0.1}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            <GsapCardAnimation
              delay={0.1}
              animationType="slideUp"
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 text-center border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all cursor-pointer"
            >
              <div className="mx-auto bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 w-16 h-16 rounded-full flex items-center justify-center mb-6 animate-float">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-indigo-600 dark:text-indigo-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                探索服务
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                发现我们广泛的专业服务，旨在满足您的业务需求。
              </p>
              <div className="transform transition-transform duration-300 hover:scale-105">
                <Link
                  href="/services"
                  className="text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                >
                  查看服务
                </Link>
              </div>
            </GsapCardAnimation>

            <GsapCardAnimation
              delay={0.2}
              animationType="slideUp"
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 text-center border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all cursor-pointer"
            >
              <div className="mx-auto bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 w-16 h-16 rounded-full flex items-center justify-center mb-6 animate-float animation-delay-2000">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-indigo-600 dark:text-indigo-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                查看作品集
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                查看我们的作品集，了解我们成功项目和满意客户的案例。
              </p>
              <div className="transform transition-transform duration-300 hover:scale-105">
                <Link
                  href="/portfolio"
                  className="text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                >
                  查看作品集
                </Link>
              </div>
            </GsapCardAnimation>

            <GsapCardAnimation
              delay={0.3}
              animationType="slideUp"
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 text-center border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all cursor-pointer"
            >
              <div className="mx-auto bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 w-16 h-16 rounded-full flex items-center justify-center mb-6 animate-float animation-delay-4000">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-indigo-600 dark:text-indigo-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                阅读我们的博客
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                随时了解我们专家团队提供的最新行业见解和技巧。
              </p>
              <div className="transform transition-transform duration-300 hover:scale-105">
                <Link
                  href="/blog"
                  className="text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                >
                  阅读博客
                </Link>
              </div>
            </GsapCardAnimation>
          </GsapElementAnimation>

          <GsapElementAnimation
            delay={0.4}
            animationType="scaleIn"
            className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-pattern"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">
                准备好开始了吗？
              </h2>
              <p className="text-indigo-100 text-lg mb-6 max-w-2xl mx-auto">
                加入数以千计使用我们的解决方案转型业务的满意客户。
              </p>
              <div className="transform transition-transform duration-300 hover:scale-105 active:scale-95">
                <Link
                  href="/contact"
                  className="inline-block px-8 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
                >
                  联系我们
                </Link>
              </div>
            </div>
          </GsapElementAnimation>
        </div>
      </div>
    </div>
  );
}
