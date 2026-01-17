import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "../components/Navigation";
import GsapElementAnimation from "../components/GsapElementAnimation";

export const metadata: Metadata = {
  title: "关于我们 | 前端开发-响应式网站、小程序、Flutter的安卓ios跨端App",
  description:
    "我们是一家专业的前端开发公司，专注于响应式网站设计、小程序开发、Flutter跨平台应用开发。我们致力于为客户提供高质量的数字化解决方案。",
  keywords: [
    "前端开发公司",
    "响应式网站设计",
    "小程序开发",
    "Flutter开发",
    "UI/UX设计",
    "前端开发团队",
    "数字化解决方案",
  ],
  alternates: {
    canonical: "https://JohniFirst.github.io/front-show/about",
  },
};

export default function AboutPage() {
  const stats = [
    { number: "50+", label: "项目", description: "成功交付的解决方案" },
    { number: "25+", label: "团队成员", description: "敬业的专业人士" },
    { number: "8+", label: "年经验", description: "综合行业专业知识" },
  ];

  const values = [
    {
      title: "创新",
      description:
        "我们拥抱尖端技术和创意解决方案，不断探索前端开发的新可能性。",
      icon: "🚀",
    },
    {
      title: "诚信",
      description: "我们相信诚实沟通和道德实践，与客户建立长期信任关系。",
      icon: "🤝",
    },
    {
      title: "协作",
      description:
        "我们与客户密切合作，确保每个项目都能满足业务需求和用户期望。",
      icon: "👥",
    },
    {
      title: "卓越",
      description: "我们力求在工作的每个细节上都做到完美，交付超越期望的产品。",
      icon: "⭐",
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
                  关于我们
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  了解更多关于我们的使命、愿景和团队的信息
                </p>
              </div>
            </GsapElementAnimation>

            <GsapElementAnimation animationType="slideIn" delay={0.4}>
              <div
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 mb-12"
                role="region"
                aria-labelledby="our-story"
              >
                <h2
                  id="our-story"
                  className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
                >
                  我们的故事
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  公司成立于2023年，我们的初衷很简单：创造美观、实用且以用户为中心的数字体验。从最初由充满热情的开发人员和设计师组成的小团队，
                  现已发展成为一支多元化的问题解决专家团队。
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  我们相信，优秀的数字产品源于深思熟虑的设计、简洁的代码以及对使用者的真诚同理心。我们承担的每一个项目都是学习、成长和产生积极影响的机会。
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  凭借多年的行业经验，我们为各种规模的企业提供专业的前端开发服务，帮助他们实现数字化转型目标。
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
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8"
                role="region"
                aria-labelledby="our-values"
              >
                <h2
                  id="our-values"
                  className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
                >
                  我们的价值观
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
