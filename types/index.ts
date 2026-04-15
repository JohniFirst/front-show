// 项目相关类型定义

export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  fullDescription?: string;
  features?: string[];
  challenges?: string[];
  solutions?: string[];
  technologies?: Technology[];
}

export interface Technology {
  name: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  author: string;
  content: string;
  tags: string[];
  readingTime: number;
  featuredImage?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  technologies: string[];
}

export interface NavigationLink {
  name: string;
  href: string;
  current?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  type?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

// GSAP动画配置
export interface AnimationConfig {
  type: "fadeIn" | "slideIn" | "scaleUp" | "typing";
  delay?: number;
  duration?: number;
  ease?: string;
  from?: object;
  to?: object;
}

// 响应式断点
export interface Breakpoints {
  sm: number;
  md: number;
  lg: number;
  xl: number;
  "2xl": number;
}

export const breakpoints: Breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

// 主题配置
export type ThemeMode = "light" | "dark" | "system";

export interface ThemeConfig {
  mode: ThemeMode;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
}

// 站点配置
export interface SiteConfig {
  title: string;
  description: string;
  url: string;
  author: string;
  language: string;
  locale: string;
  timezone: string;
}

// 性能指标
export interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

// 分析数据
export interface AnalyticsData {
  pageviews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  trafficSources: TrafficSource[];
}

export interface TrafficSource {
  source: string;
  medium: string;
  sessions: number;
}

// 可访问性检查结果
export interface AccessibilityResult {
  id: string;
  description: string;
  impact: "critical" | "serious" | "moderate" | "minor";
  nodes: string[];
}

export interface A11yAudit {
  timestamp: number;
  results: AccessibilityResult[];
  score: number;
}

// 用户偏好
export interface UserPreferences {
  theme: ThemeMode;
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: "small" | "medium" | "large";
}