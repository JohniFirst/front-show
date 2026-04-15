import Link from "next/link";
import Navigation from "../../components/Navigation";
import GsapElementAnimation from "../../components/GsapElementAnimation";
import StaticImage from "../../components/StaticImage";

// 定义项目接口
interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  fullDescription?: string;
  features?: string[];
  challenges?: string[];
  solutions?: string[];
  technologies?: { name: string; description: string }[];
}

// 获取项目数据
async function getProject(id: string): Promise<Project | null> {
  const projects: Project[] = [
    {
      id: 1,
      title: "电子商务平台",
      description: "功能齐全的在线购物平台，具备支付处理和库存管理功能。",
      category: "网络应用",
      image: "/images/photo-1551434678-e076c223a692.avif",
      tags: ["React", "Node.js", "MongoDB"],
      fullDescription:
        "这是一个功能齐全的电子商务平台，为用户提供流畅的在线购物体验。平台集成了支付处理、库存管理、订单跟踪等功能，支持多用户并发访问。",
      features: [
        "用户认证和授权系统",
        "商品搜索和筛选功能",
        "购物车和订单管理",
        "支付接口集成（支付宝、微信）",
        "库存管理和自动补货提醒",
        "数据分析和报表系统",
      ],
      technologies: [
        { name: "React", description: "构建用户界面" },
        { name: "Node.js", description: "后端服务" },
        { name: "MongoDB", description: "数据存储" },
      ],
    },
    {
      id: 2,
      title: "移动银行应用",
      description: "具有生物识别认证和实时交易的安全银行应用。",
      category: "移动应用",
      image: "/images/photo-1555066931-4365d14bab8c.avif",
      tags: ["Flutter", "Firebase", "生物识别"],
      fullDescription:
        "一款安全可靠的移动银行应用，支持指纹和面部识别，提供实时交易通知、账户管理、转账汇款等功能。",
      features: [
        "生物识别登录（指纹/面部）",
        "实时交易通知",
        "账户余额查询",
        "转账汇款功能",
        "账单查询和导出",
        "安全加密传输",
      ],
      technologies: [
        { name: "Flutter", description: "跨平台开发" },
        { name: "Firebase", description: "后端服务" },
        { name: "生物识别 SDK", description: "身份验证" },
      ],
    },
    {
      id: 3,
      title: "企业仪表板",
      description: "用于企业分析和报告的数据可视化仪表板。",
      category: "仪表板",
      image: "/images/photo-1460925895917-afdab827c52f.avif",
      tags: ["Vue.js", "D3.js", "Express"],
      fullDescription:
        "专为企业打造的数据分析和报告仪表板，提供实时数据可视化、自定义报表、多维度分析等功能。",
      features: [
        "实时数据更新",
        "交互式图表展示",
        "自定义报表生成",
        "多维度数据分析",
        "数据导出功能",
        "权限管理系统",
      ],
      technologies: [
        { name: "Vue.js", description: "前端框架" },
        { name: "D3.js", description: "数据可视化" },
        { name: "Express", description: "后端 API" },
      ],
    },
    {
      id: 4,
      title: "旅游预订系统",
      description: "具备实时可用性和定价的综合旅游预订平台。",
      category: "网络应用",
      image: "/images/photo-1503220317375-aaad61436b1b.avif",
      tags: ["React", "Node.js", "PostgreSQL"],
      fullDescription:
        "一个综合性的旅游预订平台，支持酒店、机票、景点门票的在线预订，提供实时价格查询和订单管理。",
      features: [
        "实时价格查询",
        "多条件搜索筛选",
        "在线支付系统",
        "订单管理和取消",
        "用户评价系统",
        "推荐算法",
      ],
      technologies: [
        { name: "React", description: "前端开发" },
        { name: "Node.js", description: "后端服务" },
        { name: "PostgreSQL", description: "数据库" },
      ],
    },
    {
      id: 5,
      title: "医疗保健门户",
      description: "用于病历、预约和远程医疗服务的患者门户。",
      category: "网络应用",
      image: "/images/photo-1516321318423-f06f85e504b3.avif",
      tags: ["React", "GraphQL", "AWS"],
      fullDescription:
        "为患者提供的在线医疗服务门户，支持病历管理、在线预约、远程问诊等功能。",
      features: [
        "电子病历管理",
        "在线预约系统",
        "视频问诊功能",
        "处方药配送",
        "健康数据跟踪",
        "消息通知系统",
      ],
      technologies: [
        { name: "React", description: "前端框架" },
        { name: "GraphQL", description: "API 查询" },
        { name: "AWS", description: "云服务" },
      ],
    },
    {
      id: 6,
      title: "微信小程序",
      description: "提供产品展示和在线预约功能的小程序。",
      category: "小程序",
      image: "/images/photo-1571019613454-1cb2f99b2d8b.avif",
      tags: ["微信小程序", "JavaScript", "云开发"],
      fullDescription:
        "为客户定制的微信小程序，提供产品展示、在线预约、客户管理等功能，利用微信生态实现快速获客。",
      features: [
        "产品展示橱窗",
        "在线预约系统",
        "客户信息管理",
        "消息模板推送",
        "微信支付集成",
        "数据统计分析",
      ],
      technologies: [
        { name: "微信小程序", description: "开发框架" },
        { name: "JavaScript", description: "编程语言" },
        { name: "微信云开发", description: "后端服务" },
      ],
    },
    {
      id: 7,
      title: "OpenLayers 地理信息可视化平台",
      description: "基于 OpenLayers 的地理信息数据可视化平台。",
      category: "网络应用",
      image: "/images/photo-1524661135-423995f22d0b.avif",
      tags: ["OpenLayers", "React", "TypeScript", "GeoJSON"],
      fullDescription:
        "一个专业的地理信息可视化平台，基于 OpenLayers 构建，支持多源地图数据集成、空间分析、实时数据展示等功能。平台可应用于城市规划、环境监测、物流配送等多个领域。",
      features: [
        "多源地图数据集成（OpenStreetMap、Google Maps、天地图等）",
        "多层地图叠加和透明度调节",
        "矢量数据渲染和样式自定义",
        "空间查询和分析功能",
        "实时数据动态展示",
        "测量工具（距离、面积）",
        "地图标注和信息弹窗",
        "数据导出（GeoJSON、KML）",
      ],
      challenges: [
        "大量矢量数据渲染性能优化",
        "多坐标系转换和投影处理",
        "实时数据更新的流畅性保证",
        "移动端触摸交互体验优化",
        "不同地图源之间的无缝切换",
      ],
      solutions: [
        "使用矢量切片技术和 Web Workers 提升渲染性能",
        "集成 Proj4js 库实现精确的坐标转换",
        "采用数据节流和增量更新策略",
        "实现自定义触摸手势和交互逻辑",
        "统一坐标系统和投影参数配置",
      ],
      technologies: [
        {
          name: "OpenLayers",
          description: "核心地图库，提供地图渲染和交互功能",
        },
        {
          name: "React",
          description: "前端框架，构建组件化用户界面",
        },
        {
          name: "TypeScript",
          description: "类型安全的 JavaScript 超集",
        },
        {
          name: "GeoJSON",
          description: "地理数据格式标准",
        },
      ],
    },
  ];

  const project = projects.find((p) => p.id === parseInt(id));
  return project || null;
}

// 生成静态参数
export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    { id: "7" },
  ];
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = await getProject(id);

  if (!project) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              项目未找到
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              抱歉，您访问的项目不存在
            </p>
            <Link
              href="/portfolio"
              className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700"
            >
              返回作品集
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-zinc-50 dark:bg-black py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* 返回按钮 */}
          <GsapElementAnimation animationType="fadeIn" delay={0.2}>
            <Link
              href="/portfolio"
              className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 mb-8"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              返回作品集
            </Link>
          </GsapElementAnimation>

          {/* 项目封面 */}
          <GsapElementAnimation animationType="fadeIn" delay={0.3}>
            <div className="rounded-2xl overflow-hidden shadow-2xl mb-8">
              <StaticImage
                src={project.image}
                alt={project.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          </GsapElementAnimation>

          {/* 项目标题和分类 */}
          <GsapElementAnimation animationType="slideIn" delay={0.4}>
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h1>
                <span className="text-sm font-medium px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">
                  {project.category}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-sm px-3 py-1 rounded bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </GsapElementAnimation>

          {/* 项目描述 */}
          <GsapElementAnimation animationType="fadeIn" delay={0.5}>
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                项目概述
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                {project.fullDescription || project.description}
              </p>
            </div>
          </GsapElementAnimation>

          {/* 功能特性 */}
          {project.features && project.features.length > 0 && (
            <GsapElementAnimation animationType="fadeIn" delay={0.6}>
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  功能特性
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </GsapElementAnimation>
          )}

          {/* 挑战与解决方案 */}
          {project.challenges &&
            project.challenges.length > 0 &&
            project.solutions &&
            project.solutions.length > 0 && (
              <GsapElementAnimation animationType="fadeIn" delay={0.7}>
                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    技术挑战与解决方案
                  </h2>
                  <div className="space-y-6">
                    {project.challenges.map((challenge, index) => (
                      <div
                        key={index}
                        className="border-l-4 border-red-500 pl-6 py-2"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          挑战：{challenge}
                        </h3>
                        {project.solutions && project.solutions[index] && (
                          <div className="flex items-start mt-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <p className="text-gray-600 dark:text-gray-300">
                              解决方案：{project.solutions[index]}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </GsapElementAnimation>
            )}

          {/* 技术栈 */}
          {project.technologies && project.technologies.length > 0 && (
            <GsapElementAnimation animationType="fadeIn" delay={0.8}>
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  技术栈
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900 dark:to-purple-900 rounded-lg"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {tech.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {tech.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </GsapElementAnimation>
          )}

          {/* 行动召唤 */}
          <GsapElementAnimation animationType="fadeIn" delay={0.9}>
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                对这个项目感兴趣？
              </h2>
              <p className="text-indigo-100 mb-6">
                联系我了解更多详情，或讨论您的项目需求
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                {project.id === 7 && (
                  <Link
                    href="/demo/openlayers"
                    className="inline-block px-8 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
                  >
                    🚀 体验在线演示
                  </Link>
                )}
                <Link
                  href="/contact"
                  className="inline-block px-8 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
                >
                  联系我
                </Link>
              </div>
            </div>
          </GsapElementAnimation>
        </div>
      </div>
    </>
  );
}
