"use client";

interface LoadingSkeletonProps {
  type?: "card" | "text" | "image" | "grid";
  count?: number;
  className?: string;
}

export default function LoadingSkeleton({
  type = "card",
  count = 1,
  className = "",
}: LoadingSkeletonProps) {
  const skeletons = Array(count).fill(0);

  if (type === "card") {
    return (
      <div className={`space-y-4 ${className}`}>
        {skeletons.map((_, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6"
            aria-hidden="true"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse" />
              <div className="space-y-2 flex-1">
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse w-3/4" />
                <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded animate-pulse w-1/2" />
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
              <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
              <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded animate-pulse w-2/3" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (type === "text") {
    return (
      <div className={`space-y-3 ${className}`}>
        {skeletons.map((_, index) => (
          <div key={index} className="space-y-2">
            <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse w-full" />
            <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse w-5/6" />
            <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse w-4/6" />
          </div>
        ))}
      </div>
    );
  }

  if (type === "image") {
    return (
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
        {skeletons.map((_, index) => (
          <div
            key={index}
            className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (type === "grid") {
    return (
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
        {skeletons.map((_, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 animate-pulse"
          >
            <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg mb-4" />
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4" />
              <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-full" />
              <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-2/3" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return null;
}