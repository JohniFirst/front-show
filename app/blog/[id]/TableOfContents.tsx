"use client";

import { useState, useEffect } from "react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: Heading[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -80% 0%" } // Adjust as needed
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      headings.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [headings]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Calculate offset to account for fixed navigation/header
      const offsetTop = element.offsetTop - 120; // 120px offset to account for header
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setActiveId(id);
    }
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 border border-gray-200 dark:border-gray-700 max-h-[70vh] overflow-y-auto">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
        目录
      </h3>
      <ul className="space-y-1">
        {headings.map((heading) => (
          <li key={heading.id} className="ml-1">
            <button
              onClick={() => scrollToHeading(heading.id)}
              className={`w-full text-left truncate px-2 py-1 rounded text-sm transition-colors ${
                activeId === heading.id
                  ? "bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200"
                  : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
              style={{ paddingLeft: `${(heading.level - 1) * 0.75}rem` }}
            >
              {heading.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
