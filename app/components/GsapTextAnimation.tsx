"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

interface GsapTextAnimationProps {
  children: string;
  className?: string;
  animationType?: "stagger" | "typing" | "fade";
  speed?: number; // 打字速度
  loop?: boolean; // 是否循环
}

export default function GsapTextAnimation({
  children,
  className,
  animationType = "typing",
  speed = 100,
  loop = true,
}: GsapTextAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (animationType !== "typing") return;

    let timeoutId: NodeJS.Timeout;

    const handleTyping = () => {
      if (!isDeleting && currentIndex < children.length) {
        // 正在打字
        setDisplayText(children.substring(0, currentIndex + 1));
        setCurrentIndex((prev) => prev + 1);
        timeoutId = setTimeout(handleTyping, speed);
      } else if (!isDeleting && currentIndex === children.length) {
        // 文字打完，暂停一下然后开始删除
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, 1500);
      } else if (isDeleting && displayText.length > 0) {
        // 正在删除
        setDisplayText((prev) => prev.substring(0, prev.length - 1));
        timeoutId = setTimeout(handleTyping, speed / 2);
      } else if (isDeleting && displayText.length === 0 && loop) {
        // 删除完成，如果循环则重新开始
        setIsDeleting(false);
        setCurrentIndex(0);
        timeoutId = setTimeout(handleTyping, speed);
      }
    };

    timeoutId = setTimeout(handleTyping, speed);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [
    children,
    animationType,
    speed,
    loop,
    currentIndex,
    isDeleting,
    displayText,
  ]);

  // 对于非打字机动画，使用原始的字符动画
  useEffect(() => {
    if (animationType === "typing") return;

    const element = containerRef.current;
    if (!element) return;

    const timer = setTimeout(() => {
      // 获取所有字符
      const chars = Array.from(
        element.querySelectorAll(".char")
      ) as HTMLElement[];

      const tl = gsap.timeline();

      switch (animationType) {
        case "stagger":
          // 交错动画
          tl.fromTo(
            chars,
            { y: 50, opacity: 0, rotationX: -90 },
            {
              y: 0,
              opacity: 1,
              rotationX: 0,
              stagger: 0.05,
              duration: 0.8,
              ease: "back.out(1.7)",
            }
          );
          break;

        case "fade":
          // 淡入效果
          tl.fromTo(
            chars,
            { opacity: 0, x: -20 },
            {
              opacity: 1,
              x: 0,
              stagger: 0.02,
              duration: 0.5,
              ease: "power2.out",
            }
          );
          break;
      }
    }, 10);

    return () => {
      clearTimeout(timer);
    };
  }, [children, animationType]);

  // 渲染函数
  const renderContent = () => {
    if (animationType === "typing") {
      return (
        <div ref={containerRef} className={className}>
          <span>{displayText}</span>
          <span className="cursor">|</span>
        </div>
      );
    } else {
      // 将文本拆分为单个字符以便动画
      const renderChars = (text: string) => {
        return text.split("").map((char, index) => (
          <span
            key={index}
            className="char inline-block"
            style={{
              display: "inline-block",
              opacity: 0, // 初始透明，等待动画启动
            }}
          >
            {char === " " ? "\u00A0" : char} {/* 处理空格 */}
          </span>
        ));
      };

      return (
        <div ref={containerRef} className={className}>
          {renderChars(children)}
        </div>
      );
    }
  };

  return renderContent();
}
