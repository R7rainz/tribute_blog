import type React from "react"

import { useState, useEffect } from "react"
import Carousel from "../components/Carousel"
import ArticleCard from "../components/ArticleCard"
import CategoryCard from "../components/CategoryCard"
import Sidebar from "../components/SideBar"
import SearchBar from "../components/SearchBar"
import articlesData from "../data/articles.json"
import type { Article } from "../types"

const HomePage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const [featuredArticles, setFeaturedArticles] = useState<Article[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [searchTerm, setSearchTerm] = useState<string>("")

  useEffect(() => {
    // Load articles
    setArticles(articlesData as Article[])

    // Set featured articles (first 3)
    setFeaturedArticles((articlesData as Article[]).slice(0, 3))

    // Extract unique categories
    const uniqueCategories = ["All", ...Array.from(new Set((articlesData as Article[]).map((article) => article.category)))]
    setCategories(uniqueCategories)
  }, [])

  // Filter articles based on search term and selected category
  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleCategorySelect = (category: string): void => {
    setSelectedCategory(category)
  }

  return (
    <div>
      {/* Hero Section with Carousel */}
      <section className="mb-12">
        <Carousel items={featuredArticles} />
      </section>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Articles and Categories */}
        <div className="lg:col-span-2 space-y-12">
          {/* Search Bar */}
          <div className="mb-8">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>

          {/* Categories Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-foreground">Explore by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {categories.map((category) => (
                <CategoryCard
                  key={category}
                  category={category}
                  onClick={handleCategorySelect}
                  isActive={selectedCategory === category}
                />
              ))}
            </div>
          </section>

          {/* Recent Articles Section */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-foreground">Recent Articles</h2>
              {selectedCategory !== "All" && (
                <button
                  className="text-sm text-foreground hover:text-primary"
                  onClick={() => setSelectedCategory("All")}
                >
                  Clear filter
                </button>
              )}
            </div>
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            ) : (
              <p className="text-foreground">No articles found matching your criteria.</p>
            )}
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default HomePage
