import type { BlogPost } from "./page.server";
import { getAllBlogPosts } from "./page.server";
import BlogPageClient from "./page.client";

export default async function BlogPage() {
  const posts = await getAllBlogPosts();
  return <BlogPageClient posts={posts} />;
}
