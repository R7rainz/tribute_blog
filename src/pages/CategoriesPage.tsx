import type React from "react"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import articlesData from "../data/articles.json"
import type { Article } from "../types"

const CategoriesPage: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([])
  const [articlesByCategory, setArticlesByCategory] = useState<Record<string, Article[]>>({})

  useEffect(() => {
    // Extract unique categories
    const uniqueCategories = Array.from(new Set((articlesData as Article[]).map((article) => article.category)))
    setCategories(uniqueCategories)

    // Group articles by category
    const groupedArticles: Record<string, Article[]> = {}
    uniqueCategories.forEach((category) => {
      groupedArticles[category] = (articlesData as Article[]).filter((article) => article.category === category)
    })

    setArticlesByCategory(groupedArticles)
  }, [])

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Categories</h1>

      {categories.map((category) => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articlesByCategory[category]?.map((article) => (
              <Link
                key={article.id}
                to={`/articles/${article.id}`}
                className="card overflow-hidden hover:border-gray-700 transition-colors"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={article.image || "/placeholder.png"}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">{article.title}</h3>
                  <p className="text-sm text-gray-400 mb-4 line-clamp-2">{article.excerpt}</p>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>{article.date}</span>
                    <span>{article.readingTime} min read</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default CategoriesPage
