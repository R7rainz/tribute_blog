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
    <header className="border-b sticky top-0 z-40 w-full bg-background/95 backdrop-blur">
      <div className="container py-4 grid grid-cols-3 items-center">
        {/* Left - Logo */}
        <div className="justify-self-start">
          <Link to="/" className="text-xl font-bold">
            Tribute Stories
          </Link>
        </div>

        {/* Center - Desktop Navigation */}
        <nav className="hidden md:flex justify-center space-x-8">
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About me" },
            { path: "/categories", label: "Categories" },
            { path: "/contact", label: "Contact" },
          ].map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive(path) ? "text-primary" : "text-foreground"
              )}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/write"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary flex items-center",
              isActive("/write") ? "text-primary" : "text-foreground"
            )}
          >
            <PenLine size={16} className="mr-1" />
            Write
          </Link>
        </nav>

        {/* Right - Theme Toggle & Mobile Menu */}
        <div className="justify-self-end flex items-center space-x-2">
          <ThemeToggle />
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-background z-50 md:hidden pt-16">
          <nav className="container flex flex-col space-y-4 mt-8">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About me" },
              { path: "/categories", label: "Categories" },
              { path: "/contact", label: "Contact" },
              { path: "/write", label: "Write", icon: <PenLine size={16} className="mr-2" /> },
            ].map(({ path, label, icon }) => (
              <Link
                key={path}
                to={path}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-primary p-2 flex items-center",
                  isActive(path) ? "text-primary bg-secondary" : "text-foreground"
                )}
                onClick={toggleMenu}
              >
                {icon}
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
