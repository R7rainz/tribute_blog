import type React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CategoryCardProps {
  category: string
  onClick: (category: string) => void
  isActive: boolean
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  onClick,
  isActive,
}) => {
  return (
    <Button
      variant="outline"
      className={cn(
        "h-9 px-4 text-sm rounded-full border transition-colors",
        isActive
          ? "bg-primary text-primary-foreground border-transparent font-medium"
          : "bg-background text-muted-foreground border-border hover:bg-secondary hover:text-secondary-foreground"
      )}
      onClick={() => onClick(category)}
    >
      {category}
    </Button>
  )
}

export default CategoryCard