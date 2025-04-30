import type React from "react"
import { cn } from "../lib/utils"
import { Card } from "./ui/card"

interface CategoryCardProps {
  category: string
  onClick: (category: string) => void
  isActive: boolean
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick, isActive }) => {
  return (
    <Card
      className={cn(
        "p-6 text-center transition-all cursor-pointer hover:bg-secondary",
        isActive && "border-primary bg-secondary",
      )}
      onClick={() => onClick(category)}
    >
      <h3 className={cn("text-lg font-medium", isActive && "text-primary")}>{category}</h3>
    </Card>
  )
}

export default CategoryCard
