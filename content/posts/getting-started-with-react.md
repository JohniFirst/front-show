---
title: "React入门指南"
date: "2024-01-15"
excerpt: "学习React的基础知识，从组件到状态管理的完整指南。"
author: "张三"
category: "前端开发"
tags: ["React", "JavaScript", "前端"]
---

# React 入门指南

React 是一个流行的 JavaScript 库，用于构建用户界面。本文将介绍 React 的基本概念：

## 什么是 React？

React 是由 Facebook 开发的开源 JavaScript 库，用于构建用户界面。它的核心思想是组件化，允许开发者创建可重用的 UI 组件。

## JSX 语法

JSX 是一种 JavaScript 语法扩展，允许我们在 JavaScript 中编写类似 HTML 的代码：

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

## 组件和 Props

组件是 React 的核心概念。你可以将 UI 拆分成独立的、可重用的部分：

```jsx
function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}
```

## 状态管理

React 提供了 useState Hook 来管理组件的状态：

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

## 结论

React 的组件化架构使得构建复杂 UI 变得简单而高效。通过组合简单的组件，我们可以构建出功能丰富的应用。
