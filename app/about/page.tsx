import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Us
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Learn more about our mission, vision, and team
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Our Story
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Founded in 2023, our company began with a simple mission: to create
            beautiful, functional, and user-centered digital experiences. What
            started as a small team of passionate developers and designers has
            grown into a diverse collective of creative problem solvers.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            We believe that great digital products come from a combination of
            thoughtful design, clean code, and genuine empathy for the people
            who use them. Every project we take on is an opportunity to learn,
            grow, and make a positive impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
              50+
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Projects
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Successfully delivered solutions
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
              25+
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Team Members
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Dedicated professionals
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
              8+
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Years Experience
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Combined industry expertise
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Our Values
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-3 mt-1">
                <span className="text-indigo-600 dark:text-indigo-400 text-sm">
                  ✓
                </span>
              </div>
              <span className="text-gray-600 dark:text-gray-300">
                <strong>Innovation:</strong> We embrace cutting-edge
                technologies and creative solutions.
              </span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-3 mt-1">
                <span className="text-indigo-600 dark:text-indigo-400 text-sm">
                  ✓
                </span>
              </div>
              <span className="text-gray-600 dark:text-gray-300">
                <strong>Integrity:</strong> We believe in honest communication
                and ethical practices.
              </span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-3 mt-1">
                <span className="text-indigo-600 dark:text-indigo-400 text-sm">
                  ✓
                </span>
              </div>
              <span className="text-gray-600 dark:text-gray-300">
                <strong>Collaboration:</strong> We work closely with our clients
                to achieve shared goals.
              </span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-3 mt-1">
                <span className="text-indigo-600 dark:text-indigo-400 text-sm">
                  ✓
                </span>
              </div>
              <span className="text-gray-600 dark:text-gray-300">
                <strong>Excellence:</strong> We strive for perfection in every
                detail of our work.
              </span>
            </li>
          </ul>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
