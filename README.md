# 我的应用

这是一个使用 Next.js 构建的现代化应用程序，具有流畅的动画效果和中文界面。

## 功能特性

- 中文用户界面
- 博客系统，支持 Markdown 格式文章
- GSAP 驱动的流畅动画效果
- 响应式设计
- 静态站点生成支持

## 动画效果

- 主标题打字机效果
- 页面元素渐入动画
- 卡片悬停效果
- 浮动装饰元素

## 静态站点部署

此项目支持静态站点导出，适用于 CDN 或静态托管服务：

```bash
npm run build
```

构建完成后，静态文件将生成在 `out` 目录中，可以直接部署到任何静态托管服务。

## 开发脚本

- `npm run dev` - 启动开发服务器
- `npm run build` - 构建生产版本（包含静态导出）
- `npm run start` - 启动生产服务器
- `npm run lint` - 运行代码检查

## 技术栈

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- GSAP (动画库)
- Markdown 解析

## 目录结构

- `app/` - Next.js App Router 页面
- `content/posts/` - Markdown 博客文章
- `components/` - React 组件
- `public/` - 静态资源
