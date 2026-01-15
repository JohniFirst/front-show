import Link from "next/link";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt:
        "Exploring the latest trends and technologies that will shape the future of web development, from AI integration to edge computing.",
      author: "Alex Johnson",
      date: "May 15, 2024",
      readTime: "5 min read",
      category: "Technology",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Web Development", "Trends", "AI"],
    },
    {
      id: 2,
      title: "Building Scalable Applications with Microservices Architecture",
      excerpt:
        "Learn how to design and implement microservices architecture to build scalable and maintainable applications.",
      author: "Sarah Williams",
      date: "April 28, 2024",
      readTime: "8 min read",
      category: "Architecture",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Microservices", "Architecture", "Scalability"],
    },
    {
      id: 3,
      title: "Optimizing User Experience Through Data Analytics",
      excerpt:
        "Discover how to leverage user data to improve user experience and drive better engagement with your digital products.",
      author: "Michael Chen",
      date: "April 10, 2024",
      readTime: "6 min read",
      category: "UX Design",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["UX", "Analytics", "User Research"],
    },
    {
      id: 4,
      title: "The Rise of Progressive Web Apps: A Complete Guide",
      excerpt:
        "Everything you need to know about PWAs, from benefits to implementation, and why they&#39;re becoming increasingly popular.",
      author: "Emma Rodriguez",
      date: "March 22, 2024",
      readTime: "7 min read",
      category: "Web Development",
      image:
        "https://images.unsplash.com/photo-1555066932-407dcede0bc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["PWA", "Mobile", "Performance"],
    },
    {
      id: 5,
      title: "Securing Your Applications: Best Practices for 2024",
      excerpt:
        "Essential security practices every developer should implement to protect applications from common vulnerabilities.",
      author: "David Kim",
      date: "March 5, 2024",
      readTime: "9 min read",
      category: "Security",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Security", "Best Practices", "Authentication"],
    },
    {
      id: 6,
      title: "The Impact of AI on Software Development",
      excerpt:
        "How artificial intelligence is transforming the software development lifecycle and what it means for developers.",
      author: "Priya Sharma",
      date: "February 18, 2024",
      readTime: "10 min read",
      category: "AI",
      image:
        "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["AI", "Automation", "Tools"],
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Insights, tutorials, and industry news from our team of experts.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center gap-2 bg-white dark:bg-gray-900 rounded-lg p-2">
            <button className="px-4 py-2 text-sm font-medium rounded-md bg-indigo-600 text-white">
              All Articles
            </button>
            <button className="px-4 py-2 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
              Technology
            </button>
            <button className="px-4 py-2 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
              UX Design
            </button>
            <button className="px-4 py-2 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
              Security
            </button>
            <button className="px-4 py-2 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
              AI
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {post.author}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {post.date}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${post.id}`}
                    className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
                  >
                    Read
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center mb-16">
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Previous
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              2
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              3
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Next
            </a>
          </nav>
        </div>

        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-10 text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-indigo-100 text-lg mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest articles and
            industry insights directly to your inbox.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
            <button className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-3 rounded-r-lg font-medium">
              Subscribe
            </button>
          </div>
        </div>

        <div className="text-center">
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
