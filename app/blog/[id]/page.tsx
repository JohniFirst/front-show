import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import Navigation from "../../components/Navigation";
import * as React from "react";

// Import client components
import QrFloatingButton from "./QrFloatingButton";
import TableOfContents from "./TableOfContents";

// Define BlogPost interface
interface BlogPost {
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

// 从文件系统读取博客文章
async function getBlogPost(id: string): Promise<BlogPost | null> {
  try {
    const fs = await import("fs");
    const path = await import("path");

    const filePath = path.join(process.cwd(), "content", "posts", `${id}.md`);

    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContents = fs.readFileSync(filePath, "utf8");
    const matterModule = await import("gray-matter");
    const { data, content } = (matterModule as any).default(fileContents);

    const siteConfig = await import("@/config/siteConfig").then(
      (m) => m.default
    );

    // 处理图片路径，根据环境调整
    let imagePath = data.image || "/images/photo-default.webp";
    if (process.env.NODE_ENV === "production") {
      // 在生产环境中，如果图片路径以 / 开头，则添加 basePath
      if (imagePath.startsWith("/")) {
        imagePath = siteConfig.getFullAssetPath(imagePath);
      }
    }

    return {
      id,
      title: data.title || "",
      date: data.date || "",
      excerpt: data.excerpt || "",
      content,
      author: data.author || "",
      category: data.category || "",
      image: imagePath,
      tags: data.tags || [],
    };
  } catch (error) {
    console.error(`读取文章 ${id} 失败:`, error);
    return null;
  }
}

// 生成静态参数
export async function generateStaticParams() {
  const fs = await import("fs");
  const path = await import("path");

  const postsDirectory = path.join(process.cwd(), "content", "posts");
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => {
    return {
      id: filename.replace(/\.md$/, ""), // 移除 .md 扩展名
    };
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const awaitedParams = await params;
  const post = await getBlogPost(awaitedParams.id);

  if (!post) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen">
          <section className="bg-zinc-50 dark:bg-black py-12 px-4 sm:px-6 lg:px-8">
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
          </section>
        </div>
      </>
    );
  }

  // Extract headings for table of contents
  const extractHeadings = (content: string) => {
    const headingRegex = /^(#{1,6})\s+(.+)$/gm;
    const headings: Array<{ level: number; text: string; id: string }> = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length;
      const text = match[2].trim();
      const slug = text.toLowerCase().replace(/[\s\W-]+/g, "-");
      headings.push({ level, text, id: slug });
    }

    return headings;
  };

  const headings = extractHeadings(post.content);

  // Import the client component
  const BlogPostClient = (await import("./BlogPostClient")).default;

  // Render the content with a client component for interactivity
  return <BlogPostClient initialPost={post} initialHeadings={headings} />;
}
