import { NextResponse } from "next/server";
import { getAllBlogPosts } from "@/lib/blog";

export async function GET() {
  try {
    const posts = await getAllBlogPosts();
    return NextResponse.json(posts);
  } catch (error) {
    console.error("获取博客文章失败:", error);
    return NextResponse.json({ error: "获取博客文章失败" }, { status: 500 });
  }
}
