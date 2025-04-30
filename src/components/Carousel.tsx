import type React from "react"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"
import type { Article } from "../types"
import { Button } from "./ui/button"
import { cn } from "../lib/utils"

interface CarouselProps {
  items: Article[]
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  useEffect(() => {
    if (!items || items.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [items])

  if (!items || items.length === 0) {
    return null
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)
  }

  const currentItem = items[currentIndex]

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
        style={{
          backgroundImage: `url(${currentItem.image || "/placeholder.png?height=800&width=1200"})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center px-6 md:px-12 z-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">{currentItem.title}</h1>
          <p className="text-white/90 mb-6 text-lg">{currentItem.excerpt}</p>
          <Button asChild>
            <Link to={`/articles/${currentItem.id}`}>Read More</Link>
          </Button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        type="button"
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-none bg-black/50 border-white/10 text-white hover:bg-black/70"
        onClick={goToPrevious}
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </Button>
      <Button
        type="button"
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-none bg-black/50 border-white/10 text-white hover:bg-black/70"
        onClick={goToNext}
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            type="button"
            className={cn(
              "w-3 h-3 rounded-full transition-colors",
              index === currentIndex ? "bg-white" : "bg-white/50 hover:bg-white/70"
            )}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
