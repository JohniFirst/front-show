"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

interface GsapCardAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animationType?: "fadeIn" | "slideUp" | "scaleIn";
}

export default function GsapCardAnimation({
  children,
  className,
  delay = 0,
  animationType = "slideUp",
}: GsapCardAnimationProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;

    const timer = setTimeout(() => {
      // 卡片进入动画
      switch (animationType) {
        case "fadeIn":
          gsap.fromTo(
            element,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 0.8,
              delay: delay,
              ease: "power2.out",
            }
          );
          break;

        case "slideUp":
          gsap.fromTo(
            element,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay: delay,
              ease: "back.out(1.5)",
            }
          );
          break;

        case "scaleIn":
          gsap.fromTo(
            element,
            { scale: 0.8, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.8,
              delay: delay,
              ease: "back.out(1.5)",
            }
          );
          break;
      }

      // 悬停效果
      const handleMouseEnter = () => {
        gsap.to(element, {
          y: -10,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(element, {
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);

      // 清理事件监听器
      return () => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, 10);

    return () => {
      clearTimeout(timer);
    };
  }, [delay, animationType]);

  return (
    <div ref={cardRef} className={className}>
      {children}
    </div>
  );
}
