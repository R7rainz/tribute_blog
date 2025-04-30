import type React from "react"

import { Search } from "lucide-react"

interface SearchBarProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
  theme: "light" | "dark" 
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm, theme }) => {
  const inputClasses =
    theme === "light"
      ? "bg-black text-white border-gray-800 focus:border-gray-600"
      : "bg-white text-black border-gray-300 focus:border-gray-500"

  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        placeholder="Search articles..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={`w-full py-2 pl-10 pr-4 rounded-none focus:outline-none border ${inputClasses}`}
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
    </div>
  )
}

export default SearchBar
