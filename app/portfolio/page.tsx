import Link from "next/link";
import Navigation from "../components/Navigation";
import GsapElementAnimation from "../components/GsapElementAnimation";
import StaticImage from "../components/StaticImage";

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "电子商务平台",
      description: "功能齐全的在线购物平台，具备支付处理和库存管理功能。负责前端开发和用户界面设计。",
      category: "网络应用",
      image: "/images/photo-1551434678-e076c223a692.avif",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      title: "移动银行应用",
      description: "具有生物识别认证和实时交易的安全银行应用。负责Flutter跨平台开发。",
      category: "移动应用",
      image: "/images/photo-1555066931-4365d14bab8c.avif",
      tags: ["Flutter", "Firebase", "生物识别"],
    },
    {
      id: 3,
      title: "企业仪表板",
      description: "用于企业分析和报告的数据可视化仪表板。负责前端开发和数据可视化实现。",
      category: "仪表板",
      image: "/images/photo-1460925895917-afdab827c52f.avif",
      tags: ["Vue.js", "D3.js", "Express"],
    },
    {
      id: 4,
      title: "旅游预订系统",
      description: "具备实时可用性和定价的综合旅游预订平台。负责前端开发和用户体验设计。",
      category: "网络应用",
      image: "/images/photo-1503220317375-aaad61436b1b.avif",
      tags: ["React", "Node.js", "PostgreSQL"],
    },
    {
      id: 5,
      title: "医疗保健门户",
      description: "用于病历、预约和远程医疗服务的患者门户。负责前端开发和响应式设计。",
      category: "网络应用",
      image: "/images/photo-1516321318423-f06f85e504b3.avif",
      tags: ["React", "GraphQL", "AWS"],
    },
    {
      id: 6,
      title: "微信小程序",
      description: "为客户开发的微信小程序，提供产品展示和在线预约功能。负责全栈开发。",
      category: "小程序",
      image: "/images/photo-1571019613454-1cb2f99b2d8b.avif",
      tags: ["微信小程序", "JavaScript", "云开发"],
    },
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen">
        <section className="bg-zinc-50 dark:bg-black py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <GsapElementAnimation animationType="fadeIn" delay={0.2}>
              <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  我的作品集
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  探索我参与的项目，了解我如何帮助企业实现数字化转型。
                </p>
              </div>
            </GsapElementAnimation>

            <GsapElementAnimation animationType="slideIn" delay={0.4}>
              <div className="flex justify-center mb-12">
                <div className="inline-flex flex-wrap justify-center gap-2 bg-white dark:bg-gray-900 rounded-lg p-2">
                  <button className="px-4 py-2 text-sm font-medium rounded-md bg-indigo-600 text-white">
                    所有项目
                  </button>
                  <button className="px-4 py-2 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                    网络应用
                  </button>
                  <button className="px-4 py-2 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                    移动应用
                  </button>
                  <button className="px-4 py-2 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                    小程序
                  </button>
                </div>
              </div>
            </GsapElementAnimation>

            <GsapElementAnimation animationType="slideIn" delay={0.6}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="h-48 overflow-hidden">
                      <StaticImage
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {project.title}
                        </h3>
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">
                          {project.category}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="text-xs font-medium px-2.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className="text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-800 dark:hover:text-indigo-300 text-sm flex items-center">
                        查看详情
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </GsapElementAnimation>

            <GsapElementAnimation animationType="fadeIn" delay={0.8}>
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 mb-16">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="mb-6 md:mb-0 md:mr-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      准备好启动您的项目？
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                      让我帮您将想法变成现实，提供专业的前端开发解决方案。
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    联系我
                  </Link>
                </div>
              </div>
            </GsapElementAnimation>

            <GsapElementAnimation animationType="fadeIn" delay={1.0}>
              <div className="text-center">
                <Link
                  href="/"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
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
