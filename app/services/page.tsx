import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "../components/Navigation";
import GsapElementAnimation from "../components/GsapElementAnimation";

export const metadata: Metadata = {
  title: "服务 | 前端开发-响应式网站、小程序、Flutter的安卓ios跨端App",
  description:
    "我们提供专业的前端开发服务，包括响应式网站设计、小程序开发、Flutter跨平台应用开发。使用最新的技术栈，为客户提供高质量的数字化解决方案。",
  keywords: [
    "前端开发服务",
    "响应式网站",
    "小程序开发",
    "Flutter应用",
    "跨平台开发",
    "UI/UX设计",
    "React开发",
    "Vue开发",
  ],
  alternates: {
    canonical: "https://JohniFirst.github.io/front-show/services",
  },
};

export default function ServicesPage() {
  const services = [
    {
      title: "响应式网站开发",
      description:
        "创建适应各种设备的现代网站，使用React、Vue、Angular等前沿技术，确保在桌面、平板和手机上都有卓越的用户体验。",
      icon: (
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
      ),
      features: [
        "现代前端框架 (React, Vue, Angular)",
        "响应式设计",
        "高性能优化",
        "SEO友好",
      ],
    },
    {
      title: "小程序开发",
      description:
        "为微信、支付宝、抖音等平台开发功能丰富的小程序，快速部署，触达海量用户。",
      icon: (
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
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      features: ["微信小程序", "支付宝小程序", "跨平台兼容", "原生体验"],
    },
    {
      title: "Flutter跨平台应用",
      description:
        "使用Flutter框架开发高性能、高保真的iOS和Android应用，一套代码，双端运行。",
      icon: (
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
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      features: ["跨平台开发", "原生性能", "快速迭代", "统一UI"],
    },
    {
      title: "UI/UX 设计",
      description:
        "专业的用户界面和用户体验设计服务，结合业务需求和技术可行性，创造直观易用的产品界面。",
      icon: (
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
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 000-2.828l-3-3a2 2 0 00-2.828 0L7 5.343l8.314 8.314z"
          />
        </svg>
      ),
      features: ["用户研究", "交互设计", "视觉设计", "原型制作"],
    },
    {
      title: "前端咨询与优化",
      description:
        "为企业提供前端技术选型、架构设计、性能优化等咨询服务，提升开发效率和产品质量。",
      icon: (
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      features: ["技术咨询", "架构设计", "性能优化", "代码审查"],
    },
    {
      title: "维护与支持",
      description:
        "提供长期的技术支持和网站维护服务，确保您的数字产品持续稳定运行。",
      icon: (
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
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
          />
        </svg>
      ),
      features: ["定期维护", "安全更新", "技术支持", "功能扩展"],
    },
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen">
        <section className="min-h-screen bg-zinc-50 dark:bg-black py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <GsapElementAnimation animationType="fadeIn" delay={0.2}>
              <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  我们的服务
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  专业的前端开发服务，助力您的业务数字化转型
                </p>
              </div>
            </GsapElementAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <GsapElementAnimation
                  key={index}
                  animationType="slideIn"
                  delay={0.1 * index}
                >
                  <article
                    className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 text-center border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-shadow duration-300"
                    role="article"
                    aria-labelledby={`service-title-${index}`}
                  >
                    <div className="mx-auto bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                      {service.icon}
                    </div>
                    <h2
                      id={`service-title-${index}`}
                      className="text-xl font-bold text-gray-900 dark:text-white mb-3"
                    >
                      {service.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {service.description}
                    </p>
                    <ul
                      className="space-y-2 mb-6"
                      aria-label={`服务特点列表-${service.title}`}
                    >
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-2 mt-0.5">
                            <span className="text-indigo-600 dark:text-indigo-400 text-xs">
                              ✓
                            </span>
                          </div>
                          <span className="text-gray-600 dark:text-gray-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="transform transition-transform duration-300 hover:scale-105">
                      <Link
                        href="/contact"
                        className="inline-block px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
                        aria-label={`了解${service.title}服务详情`}
                      >
                        了解更多
                      </Link>
                    </div>
                  </article>
                </GsapElementAnimation>
              ))}
            </div>

            <GsapElementAnimation animationType="fadeIn" delay={0.8}>
              <div
                className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-12 text-center relative overflow-hidden"
                role="complementary"
              >
                <div className="absolute inset-0 bg-pattern opacity-10"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    准备好提升您的数字产品？
                  </h2>
                  <p className="text-indigo-100 text-lg mb-6 max-w-2xl mx-auto">
                    联系我们讨论您的项目需求，获得专业的前端开发解决方案
                  </p>
                  <div className="transform transition-transform duration-300 hover:scale-105">
                    <Link
                      href="/contact"
                      className="inline-block px-8 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
                      aria-label="联系我们开始项目"
                    >
                      立即咨询
                    </Link>
                  </div>
                </div>
              </div>
            </GsapElementAnimation>
          </div>
        </section>
      </div>
    </>
  );
}
