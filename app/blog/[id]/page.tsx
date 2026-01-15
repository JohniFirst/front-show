import Link from "next/link";
import ReactMarkdown from "react-markdown";

// 导入客户端组件
import QrCodeSection from "./QrCodeSection";

// 定义文章类型
interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
}

// 从文件系统读取博客文章
async function getBlogPost(id: string): Promise<BlogPost | null> {
  try {
    const fs = await import("fs");
    const path = await import("path");
    const matter = await import("gray-matter");

    const filePath = path.join(process.cwd(), "content", "posts", `${id}.md`);

    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter.default(fileContents);

    return {
      id,
      title: data.title || "",
      date: data.date || "",
      excerpt: data.excerpt || "",
      content,
      author: data.author || "",
      category: data.category || "",
      tags: data.tags || [],
    };
  } catch (error) {
    console.error(`读取文章 ${id} 失败:`, error);
    return null;
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const post = await getBlogPost(id);

  if (!post) {
    return (
      <div className="min-h-screen bg-zinc-50 dark:bg-black py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            文章未找到
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            抱歉，找不到您请求的文章。
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            返回博客列表
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 mb-8">
          <div className="mb-6">
            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center text-gray-600 dark:text-gray-400 mb-8">
            <span className="mr-4">作者: {post.author}</span>
            <span>{post.date}</span>
            <div className="ml-4 flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs font-medium px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </div>

        {/* 二维码区域 */}
        <QrCodeSection articleId={id} />

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            返回博客列表
          </Link>
        </div>
      </div>
    </div>
  );
}
