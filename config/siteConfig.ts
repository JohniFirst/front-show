// 站点配置文件
const REPO_NAME = "front-show"; // 只需在这里修改仓库名

const siteConfig = {
  // 部署路径配置
  basePath: process.env.NODE_ENV === "production" ? `/${REPO_NAME}` : "",

  // GitHub Pages 仓库名称
  githubRepo: REPO_NAME,

  // 资源路径前缀
  assetPrefix: process.env.NODE_ENV === "production" ? `/${REPO_NAME}/` : "",

  // 站点标题
  title: "前端开发-响应式网站、小程序、Flutter的安卓ios跨端App",

  // 站点描述
  description: "专业前端开发服务网站",

  // GitHub Pages URL
  githubPagesUrl: `https://JohniFirst.github.io/${REPO_NAME}/`,

  // 获取完整路径的方法
  getFullAssetPath: (path: string) => {
    if (typeof window !== "undefined") {
      // 客户端运行时
      const isProd = process.env.NODE_ENV === "production";
      if (isProd && window.location.hostname.includes("github.io")) {
        if (path.startsWith("/")) {
          return `/${REPO_NAME}${path}`;
        } else {
          return `/${REPO_NAME}/${path}`;
        }
      }
    }
    // 开发环境或服务端返回原始路径
    return path;
  },
};

export default siteConfig;
