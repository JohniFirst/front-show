---
title: "CSS Grid布局完全指南"
date: "2024-01-05"
excerpt: "掌握CSS Grid布局，创建复杂的网页布局变得更加简单。"
author: "王五"
category: "前端开发"
tags: ["CSS", "布局", "前端"]
image: "/images/css.webp"
---

# CSS Grid 布局完全指南

CSS Grid 是创建二维布局的强大工具，它使我们能够以灵活的方式设计网页布局。

## 网格容器

要创建网格布局，首先需要定义一个网格容器：

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
}
```

## 网格项目

网格项目是网格容器的直接子元素：

```css
.grid-item {
  grid-column: span 2; /* 占据两列 */
  grid-row: span 1; /* 占据一行 */
}
```

## 重复函数

使用 repeat()函数可以简化网格模板定义：

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

## 媒体查询

Grid 布局与媒体查询结合可以创建响应式设计：

```css
@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}
```

## 结论

CSS Grid 为我们提供了强大的二维布局能力，使得创建复杂布局变得更加简单。
