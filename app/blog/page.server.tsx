import { getAllBlogPosts } from "@/lib/blog";

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

export { getAllBlogPosts };
