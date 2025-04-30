import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Textarea } from "../components/ui/textarea"
import { Button } from "../components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { useNavigate } from "react-router-dom"
import articlesData from "../data/articles.json"
import type { Article } from "../types"

const WritePage: React.FC = () => {
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<Omit<Article, "id">>({
    title: "",
    excerpt: "",
    content: "",
    author: "Guest Author",
    date: new Date().toISOString().split("T")[0],
    category: "",
    readingTime: 5,
    image: "/placeholder.png?height=600&width=1200",
  })

  const categories = ["Stories", "Health", "Inspiration", "Travel", "Technology", "Lifestyle"]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCategoryChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      category: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      const newArticle: Article = {
        ...formData,
        id: (articlesData.length + 1).toString(),
      }

      console.log("New article created:", newArticle)

      alert("Your article has been published successfully!")

      navigate("/")

      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Write a New Article</h1>

      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Create Your Story</CardTitle>
          <CardDescription>Share your thoughts, experiences, or knowledge with the world.</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="Enter a captivating title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                name="excerpt"
                placeholder="Write a brief summary of your article"
                value={formData.excerpt}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select value={formData.category} onValueChange={handleCategoryChange} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="image">Image URL</Label>
              <Input
                id="image"
                name="image"
                placeholder="Enter an image URL (optional)"
                value={formData.image}
                onChange={handleChange}
              />
              <p className="text-xs text-muted-foreground">Leave empty to use a placeholder image</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                name="content"
                placeholder="Write your article content here"
                value={formData.content}
                onChange={handleChange}
                className="min-h-[300px]"
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" type="button" onClick={() => navigate("/")}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Publishing..." : "Publish Article"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

export default WritePage
