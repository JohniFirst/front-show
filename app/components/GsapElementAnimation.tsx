"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

interface GsapElementAnimationProps {
  children: React.ReactNode;
  className?: string;
  animationType?: "fadeIn" | "slideIn" | "scaleIn" | "bounceIn";
  delay?: number;
  duration?: number;
  stagger?: number;
}

export default function GsapElementAnimation({
  children,
  className,
  animationType = "fadeIn",
  delay = 0,
  duration = 0.8,
  stagger = 0,
}: GsapElementAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const timer = setTimeout(() => {
      const tl = gsap.timeline();

      // 根据子元素数量决定动画策略
      const childElements = Array.from(el.children) as HTMLElement[];

      if (childElements.length > 1) {
        // 如果有多个子元素，使用交错动画
        const targets = childElements;

        switch (animationType) {
          case "fadeIn":
            tl.fromTo(
              targets,
              { opacity: 0 },
              {
                opacity: 1,
                stagger: stagger || 0.1,
                duration: duration,
                delay: delay,
                ease: "power2.out",
              }
            );
            break;

          case "slideIn":
            tl.fromTo(
              targets,
              { x: -50, opacity: 0 },
              {
                x: 0,
                opacity: 1,
                stagger: stagger || 0.1,
                duration: duration,
                delay: delay,
                ease: "power2.out",
              }
            );
            break;

          case "scaleIn":
            tl.fromTo(
              targets,
              { scale: 0.8, opacity: 0 },
              {
                scale: 1,
                opacity: 1,
                stagger: stagger || 0.1,
                duration: duration,
                delay: delay,
                ease: "back.out(1.7)",
              }
            );
            break;

          case "bounceIn":
            tl.fromTo(
              targets,
              { scale: 0.3, opacity: 0 },
              {
                scale: 1.05,
                opacity: 1,
                duration: duration,
                delay: delay,
                ease: "elastic.out(1.2, 0.4)",
              }
            );
            // 额外的反弹动画
            tl.to(targets, { scale: 1, duration: 0.2 }, "-=0.2");
            break;
        }
      } else {
        // 如果只有一个子元素，直接对其应用动画
        const target = el;

        switch (animationType) {
          case "fadeIn":
            tl.fromTo(
              target,
              { opacity: 0 },
              {
                opacity: 1,
                duration: duration,
                delay: delay,
                ease: "power2.out",
              }
            );
            break;

          case "slideIn":
            tl.fromTo(
              target,
              { x: -50, opacity: 0 },
              {
                x: 0,
                opacity: 1,
                duration: duration,
                delay: delay,
                ease: "power2.out",
              }
            );
            break;

          case "scaleIn":
            tl.fromTo(
              target,
              { scale: 0.8, opacity: 0 },
              {
                scale: 1,
                opacity: 1,
                duration: duration,
                delay: delay,
                ease: "back.out(1.7)",
              }
            );
            break;

          case "bounceIn":
            tl.fromTo(
              target,
              { scale: 0.3, opacity: 0 },
              {
                scale: 1.05,
                opacity: 1,
                duration: duration,
                delay: delay,
                ease: "elastic.out(1.2, 0.4)",
              }
            );
            // 额外的反弹动画
            tl.to(target, { scale: 1, duration: 0.2 }, "-=0.2");
            break;
        }
      }
    }, 10);

    return () => {
      clearTimeout(timer);
    };
  }, [animationType, delay, duration, stagger]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
