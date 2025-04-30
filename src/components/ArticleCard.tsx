import type React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Clock } from "lucide-react"
import type { Article } from "../types"
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card"
import { Button } from "./ui/button"

interface ArticleCardProps {
  article: Article
}

const PLACEHOLDER_IMAGE = "/placeholder.png"

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const [imgSrc, setImgSrc] = useState(article.image || PLACEHOLDER_IMAGE)
  const [hasError, setHasError] = useState(false)

  const handleImageError = () => {
    if (!hasError) {
      setImgSrc(PLACEHOLDER_IMAGE)
      setHasError(true)
    }
  }

  return (
    <Card className="overflow-hidden flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imgSrc}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          onError={handleImageError}
        />
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-2 py-1 text-xs font-medium">
          {article.category}
        </div>
      </div>
      <CardHeader className="pb-0">
        <h3 className="text-xl font-bold text-foreground">{article.title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-foreground/80 line-clamp-2">{article.excerpt}</p>
      </CardContent>
      <CardFooter className="flex justify-between mt-auto">
        <div className="flex items-center text-foreground/70 text-sm">
          <Clock size={16} className="mr-1" />
          <span>{article.readingTime} min read</span>
        </div>
        <Button asChild size="sm" variant="outline">
          <Link to={`/articles/${article.id}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ArticleCard  