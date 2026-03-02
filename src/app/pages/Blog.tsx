import { useState } from "react";
import { Link } from "react-router";
import { Search, ArrowRight } from "lucide-react";
import { blogPosts } from "../data.js";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    "all",
    "health_tips",
    "news",
    "research",
    "community",
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];
  const regularPosts = filteredPosts.slice(
    selectedCategory === "all" && !searchTerm ? 1 : 0
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl mb-6">Health Blog</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Stay informed with the latest health tips, medical news, and research from our expert physicians.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm transition-colors ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {category === "all"
                    ? "All"
                    : category.replace("_", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {selectedCategory === "all" && !searchTerm && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl mb-8">Featured Article</h2>
            <Link
              to={`/blog/${featuredPost.slug}`}
              className="grid md:grid-cols-2 gap-8 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="aspect-video md:aspect-auto overflow-hidden">
                <ImageWithFallback
                  src={featuredPost.featuredImage}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="text-xs text-blue-600 mb-3 uppercase tracking-wide">
                  {featuredPost.category.replace("_", " ")}
                </div>
                <h3 className="text-3xl mb-4 group-hover:text-blue-600 transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 mb-6 text-lg">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <span>{featuredPost.author}</span>
                  <span>•</span>
                  <span>{new Date(featuredPost.publishedAt).toLocaleDateString()}</span>
                </div>
                <span className="text-blue-600 inline-flex items-center gap-2">
                  Read More
                  <ArrowRight className="w-5 h-5" />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {!searchTerm && selectedCategory === "all" && (
            <h2 className="text-2xl mb-8">Latest Articles</h2>
          )}
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs text-blue-600 mb-2 uppercase tracking-wide">
                    {post.category.replace("_", " ")}
                  </div>
                  <h3 className="text-xl mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {regularPosts.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No articles found matching your criteria.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
