import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            关于我们
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            了解更多关于我们的使命、愿景和团队的信息
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            我们的故事
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            公司成立于2023年，我们的初衷很简单：创造美观、实用且以用户为中心的数字体验。从最初由充满热情的开发人员和设计师组成的小团队，现已发展成为一支多元化的问题解决专家团队。
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            我们相信，优秀的数字产品源于深思熟虑的设计、简洁的代码以及对使用者的真诚同理心。我们承担的每一个项目都是学习、成长和产生积极影响的机会。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
              50+
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              项目
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              成功交付的解决方案
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
              25+
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              团队成员
            </h3>
            <p className="text-gray-600 dark:text-gray-300">敬业的专业人士</p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
              8+
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              年经验
            </h3>
            <p className="text-gray-600 dark:text-gray-300">综合行业专业知识</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            我们的价值观
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-3 mt-1">
                <span className="text-indigo-600 dark:text-indigo-400 text-sm">
                  ✓
                </span>
              </div>
              <span className="text-gray-600 dark:text-gray-300">
                <strong>创新:</strong> 我们拥抱尖端技术和创意解决方案。
              </span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-3 mt-1">
                <span className="text-indigo-600 dark:text-indigo-400 text-sm">
                  ✓
                </span>
              </div>
              <span className="text-gray-600 dark:text-gray-300">
                <strong>诚信:</strong> 我们相信诚实沟通和道德实践。
              </span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-3 mt-1">
                <span className="text-indigo-600 dark:text-indigo-400 text-sm">
                  ✓
                </span>
              </div>
              <span className="text-gray-600 dark:text-gray-300">
                <strong>协作:</strong> 我们与客户密切合作，实现共同目标。
              </span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-3 mt-1">
                <span className="text-indigo-600 dark:text-indigo-400 text-sm">
                  ✓
                </span>
              </div>
              <span className="text-gray-600 dark:text-gray-300">
                <strong>卓越:</strong> 我们力求在工作的每个细节上都做到完美。
              </span>
            </li>
          </ul>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            返回首页
          </Link>
        </div>
      </div>
    </div>
  );
}
