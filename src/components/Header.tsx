import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, PenLine } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "../lib/utils"
import { ThemeToggle } from "./theme-toggle"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const isActive = (path: string) => location.pathname === path

  return (
    <header className="bg-black text-white shadow-lg sticky top-0 z-50 w-full border-b border-gray-800">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white">
          Tribute Stories
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          {["/", "/about", "/categories", "/contact"].map((path) => (
            <Link
              key={path}
              to={path}
              className={cn(
                "hover:text-gray-300 transition-colors text-sm font-medium",
                isActive(path) ? "text-primary underline underline-offset-4" : "text-white"
              )}
            >
              {path === "/" ? "Home" : path.replace("/", "").replace(/\b\w/g, c => c.toUpperCase())}
            </Link>
          ))}
          <Link
            to="/write"
            className={cn(
              "flex items-center hover:text-gray-300 transition-colors text-sm font-medium",
              isActive("/write") ? "text-primary underline underline-offset-4" : "text-white"
            )}
          >
            <PenLine size={16} className="mr-1" />
            Write
          </Link>
          <ThemeToggle />
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black text-white px-4 pb-6">
          <nav className="flex flex-col space-y-4 mt-4">
            {["/", "/about", "/categories", "/contact", "/write"].map((path) => (
              <Link
                key={path}
                to={path}
                className={cn(
                  "text-base font-medium py-2 px-3 rounded-md transition-colors",
                  isActive(path) ? "bg-gray-800 text-primary" : "hover:bg-gray-700 text-white"
                )}
                onClick={toggleMenu}
              >
                {path === "/" ? "Home" : path.replace("/", "").replace(/\b\w/g, c => c.toUpperCase())}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
