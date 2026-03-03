import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "../components/Navigation";
import GsapElementAnimation from "../components/GsapElementAnimation";
import RadarChartComponent from "../components/charts/RadarChart";

export const metadata: Metadata = {
  title: "关于我 | 个人前端开发作品集",
  description:
    "我是一名专业的前端开发工程师，专注于响应式网站设计、小程序开发和Flutter跨平台应用开发。我致力于为客户提供高质量的数字化解决方案。",
  keywords: [
    "前端开发工程师",
    "响应式网站设计",
    "小程序开发",
    "Flutter开发",
    "UI/UX设计",
    "个人作品集",
    "数字化解决方案",
  ],
  alternates: {
    canonical: "https://JohniFirst.github.io/front-show/about",
  },
};

export default function AboutPage() {
  const stats = [
    { number: "30+", label: "项目", description: "成功交付的解决方案" },
    { number: "5+", label: "年经验", description: "前端开发专业知识" },
    { number: "10+", label: "技术栈", description: "熟练掌握的技术" },
  ];

  const values = [
    {
      title: "创新",
      description:
        "我拥抱尖端技术和创意解决方案，不断探索前端开发的新可能性。",
      icon: "🚀",
    },
    {
      title: "诚信",
      description: "我相信诚实沟通和道德实践，与客户建立长期信任关系。",
      icon: "🤝",
    },
    {
      title: "专业",
      description:
        "我专注于每个项目的细节，确保交付高质量的前端解决方案。",
      icon: "💼",
    },
    {
      title: "学习",
      description: "我不断学习新技术和最佳实践，保持前端开发领域的专业知识。",
      icon: "📚",
    },
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen">
        <section className="min-h-screen bg-zinc-50 dark:bg-black py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <GsapElementAnimation animationType="fadeIn" delay={0.2}>
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  关于我
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  了解更多关于我的专业背景、技能和经验
                </p>
              </div>
            </GsapElementAnimation>

            <GsapElementAnimation animationType="slideIn" delay={0.4}>
              <div
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 mb-12"
                role="region"
                aria-labelledby="my-story"
              >
                <h2
                  id="my-story"
                  className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
                >
                  我的故事
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  我是一名拥有5年经验的前端开发工程师，专注于创建美观、实用且以用户为中心的数字体验。我热爱前端开发，因为它结合了技术与创意，
                  让我能够将想法转化为实际可用的产品。
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  我相信，优秀的前端开发不仅仅是编写代码，更是理解用户需求、设计直观的界面、优化性能，以及持续学习新技术。
                  每一个项目对我来说都是一次学习和成长的机会。
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  我为各种规模的企业提供专业的前端开发服务，帮助他们实现数字化转型目标，提升用户体验，增强品牌价值。
                </p>
              </div>
            </GsapElementAnimation>

            <GsapElementAnimation animationType="slideIn" delay={0.6}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 text-center"
                    role="region"
                    aria-labelledby={`stat-${index}`}
                  >
                    <div
                      className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-4"
                      id={`stat-${index}`}
                      aria-label={`${stat.number} ${stat.label}`}
                    >
                      {stat.number}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {stat.label}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>
            </GsapElementAnimation>

            <GsapElementAnimation animationType="slideIn" delay={0.8}>
              <div
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 mb-12"
                role="region"
                aria-labelledby="my-values"
              >
                <h2
                  id="my-values"
                  className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
                >
                  我的价值观
                </h2>
                <ul className="space-y-6">
                  {values.map((value, index) => (
                    <li
                      key={index}
                      className="flex items-start"
                      role="listitem"
                    >
                      <div className="flex-shrink-0 h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-4 mt-1">
                        <span className="text-2xl">{value.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                          {value.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {value.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </GsapElementAnimation>

            <GsapElementAnimation animationType="slideIn" delay={0.9}>
              <div
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8"
                role="region"
                aria-labelledby="skills-chart"
              >
                <h2
                  id="skills-chart"
                  className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center"
                >
                  技术能力展示
                </h2>
                <div className="h-[500px]">
                  <RadarChartComponent />
                </div>
              </div>
            </GsapElementAnimation>

            <GsapElementAnimation animationType="fadeIn" delay={1.0}>
              <div className="mt-12 text-center">
                <Link
                  href="/"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                  aria-label="返回首页"
                >
                  返回首页
                </Link>
              </div>
            </GsapElementAnimation>
          </div>
        </section>
      </div>
    </>
  );
}
