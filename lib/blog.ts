import type { BlogPost } from "@/app/blog/page.server";

// 获取所有博客文章
export async function getAllBlogPosts(): Promise<BlogPost[]> {
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
