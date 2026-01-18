"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Navigation from "../../components/Navigation";
import QrFloatingButton from "./QrFloatingButton";
import TableOfContents from "./TableOfContents";
import StaticImage from "../../components/StaticImage";

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

interface BlogPostClientProps {
  initialPost: BlogPost;
  initialHeadings: Array<{ level: number; text: string; id: string }>;
}

export default function BlogPostClient({
  initialPost,
  initialHeadings,
}: BlogPostClientProps) {
  const [post] = useState(initialPost);
  const [headings] = useState(initialHeadings);

  return (
    <>
      <Navigation />
      <div className="min-h-screen">
        <section className="bg-zinc-50 dark:bg-black py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto flex flex-col lg:flex-row">
            <div className="w-full lg:flex-1">
              <div className="mb-8">
                <StaticImage
                  src={post.image || "/images/photo-default.webp"}
                  alt={post.title}
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 -mt-12 relative z-10">
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
                  <ReactMarkdown
                    components={{
                      // Table components for GFM support
                      table: (props) => (
                        <table
                          className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 my-4 border border-gray-200 dark:border-gray-700"
                          {...props}
                        />
                      ),
                      th: (props) => (
                        <th
                          className="px-4 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                          {...props}
                        />
                      ),
                      td: (props) => (
                        <td
                          className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700"
                          {...props}
                        />
                      ),
                      tr: (props) => (
                        <tr className="bg-white dark:bg-gray-900" {...props} />
                      ),

                      // Headings with IDs
                      h1: (props) => {
                        const text = Array.isArray(props.children)
                          ? props.children.join("")
                          : String(props.children);
                        const id = text
                          .toLowerCase()
                          .replace(/\s+/g, "-")
                          .replace(/[^a-z0-9-]/g, "");
                        return (
                          <h1
                            id={id}
                            className="text-3xl font-bold text-gray-900 dark:text-white mb-4 mt-6 scroll-mt-24"
                            {...props}
                          />
                        );
                      },
                      h2: (props) => {
                        const text = Array.isArray(props.children)
                          ? props.children.join("")
                          : String(props.children);
                        const id = text
                          .toLowerCase()
                          .replace(/\s+/g, "-")
                          .replace(/[^a-z0-9-]/g, "");
                        return (
                          <h2
                            id={id}
                            className="text-2xl font-bold text-gray-900 dark:text-white mb-3 mt-5 scroll-mt-24"
                            {...props}
                          />
                        );
                      },
                      h3: (props) => {
                        const text = Array.isArray(props.children)
                          ? props.children.join("")
                          : String(props.children);
                        const id = text
                          .toLowerCase()
                          .replace(/\s+/g, "-")
                          .replace(/[^a-z0-9-]/g, "");
                        return (
                          <h3
                            id={id}
                            className="text-xl font-bold text-gray-900 dark:text-white mb-2 mt-4 scroll-mt-24"
                            {...props}
                          />
                        );
                      },
                      h4: (props) => {
                        const text = Array.isArray(props.children)
                          ? props.children.join("")
                          : String(props.children);
                        const id = text
                          .toLowerCase()
                          .replace(/\s+/g, "-")
                          .replace(/[^a-z0-9-]/g, "");
                        return (
                          <h4
                            id={id}
                            className="text-lg font-bold text-gray-900 dark:text-white mb-2 mt-3 scroll-mt-24"
                            {...props}
                          />
                        );
                      },

                      // Paragraph
                      p: (props) => (
                        <p
                          className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed"
                          {...props}
                        />
                      ),

                      // Lists
                      ul: (props) => (
                        <ul
                          className="list-disc pl-6 mb-4 space-y-2"
                          {...props}
                        />
                      ),
                      ol: (props) => (
                        <ol
                          className="list-decimal pl-6 mb-4 space-y-2"
                          {...props}
                        />
                      ),
                      li: (props) => (
                        <li
                          className="text-gray-700 dark:text-gray-300"
                          {...props}
                        />
                      ),

                      // Code blocks
                      code({ node, ...props }) {
                        const { children, className } = props;
                        const classes = className || "";
                        const hasLang = /language-(\w+)/.exec(classes);
                        const lang = hasLang?.[1];
                        const isInline = !String(children).includes("\n");

                        if (isInline) {
                          return (
                            <code
                              className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-sm font-mono"
                              {...props}
                            />
                          );
                        }
                        return (
                          <pre className="mb-4 bg-gray-800 rounded-lg p-4 overflow-x-auto">
                            <code
                              className="block text-sm text-gray-100 font-mono"
                              {...props}
                            />
                          </pre>
                        );
                      },
                      pre: (props) => <pre {...props} />, // Wrapper for code blocks

                      // Links
                      a: (props) => (
                        <a
                          className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 underline"
                          target="_blank"
                          rel="noopener noreferrer"
                          {...props}
                        />
                      ),

                      // Images
                      img: ({ src, alt, title }) => {
                        const imageUrl = typeof src === "string" ? src : "";
                        return (
                          <StaticImage
                            src={imageUrl}
                            alt={alt || ""}
                            title={title}
                            className="rounded-lg shadow-md max-w-full h-auto my-4"
                          />
                        );
                      },

                      // Blockquote
                      blockquote: (props) => (
                        <blockquote
                          className="border-l-4 border-indigo-500 dark:border-indigo-400 pl-4 py-2 my-4 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 italic"
                          {...props}
                        />
                      ),

                      // Strong and emphasis
                      strong: (props) => (
                        <strong
                          className="font-bold text-gray-900 dark:text-white"
                          {...props}
                        />
                      ),
                      em: (props) => (
                        <em
                          className="italic text-gray-700 dark:text-gray-300"
                          {...props}
                        />
                      ),

                      // Horizontal rule
                      hr: (props) => (
                        <hr
                          className="my-6 border-gray-300 dark:border-gray-700"
                          {...props}
                        />
                      ),
                    }}
                  >
                    {post.content}
                  </ReactMarkdown>
                </div>
              </div>
            </div>

            <div className="hidden lg:block w-48 flex-shrink-0 ml-4 self-start">
              {/* Table of Contents - only show on larger screens */}
              <div className="sticky top-24">
                <TableOfContents headings={headings} />
              </div>
            </div>
          </div>
        </section>

        {/* 二维码浮窗 */}
        <QrFloatingButton articleId={post.id} />

        <div className="text-center mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            返回博客列表
          </Link>
        </div>
      </div>
    </>
  );
}
