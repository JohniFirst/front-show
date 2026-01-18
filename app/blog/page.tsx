import Link from "next/link";
import Navigation from "../components/Navigation";
import StaticImage from "../components/StaticImage";

// 定义文章类型
export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  image: string;
  tags: string[];
}

// 获取所有博客文章
async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const fs = await import("fs");
    const path = await import("path");
    const matter = await import("gray-matter");
    const siteConfig = await import("@/config/siteConfig").then(
      (m) => m.default
    );

    const postsDirectory = path.join(process.cwd(), "content", "posts");

    if (!fs.existsSync(postsDirectory)) {
      return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);

    const posts = fileNames.map((fileName) => {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const { data, content } = matter.default(fileContents);

      // 处理图片路径，根据环境调整
      let imagePath =
        data.image || "/images/photo-1551434678-e076c223a692.avif";
      if (process.env.NODE_ENV === "production") {
        // 在生产环境中，如果图片路径以 / 开头，则添加 basePath
        if (imagePath.startsWith("/")) {
          imagePath = siteConfig.getFullAssetPath(imagePath);
        }
      }

      return {
        id: fileName.replace(/\.md$/, ""),
        title: data.title || "",
        date: data.date || "",
        excerpt: data.excerpt || "",
        content,
        author: data.author || "",
        category: data.category || "",
        image: imagePath,
        tags: data.tags || [],
      };
    });

    // 按日期排序（最新的在前）
    return posts.sort((a, b) => {
      if (a.date < b.date) return 1;
      if (a.date > b.date) return -1;
      return 0;
    });
  } catch (error) {
    console.error("获取文章列表失败:", error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <>
      <Navigation />
      <div className="min-h-screen">
        <section className="bg-zinc-50 dark:bg-black py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                博客
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                来自我们专家团队的见解、教程和行业新闻。
              </p>
            </div>

            <div className="flex justify-center mb-12">
              <div className="inline-flex flex-wrap justify-center gap-2 bg-white dark:bg-gray-900 rounded-lg p-2">
                <button className="px-4 py-2 text-sm font-medium rounded-md bg-indigo-600 text-white">
                  全部文章
                </button>
                <button className="px-4 py-2 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                  前端开发
                </button>
                <button className="px-4 py-2 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                  编程语言
                </button>
                <button className="px-4 py-2 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                  设计
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {posts.map((post) => (
                <Link
                  href={`/blog/${post.id}`}
                  key={post.id}
                  className="block bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <article>
                    <div className="h-48 overflow-hidden">
                      <StaticImage
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">
                          {post.category}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {post.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <StaticImage
                              src="/images/photo-1555066931-4365d14bab8c.avif"
                              alt={post.author}
                              className="rounded-xl w-10 h-10 object-cover"
                            />
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {post.author}
                            </p>
                          </div>
                        </div>

                        <span className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium">
                          阅读全文 →
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                返回首页
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
