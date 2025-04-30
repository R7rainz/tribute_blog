import type React from "react"

import { useState } from "react"
import { Outlet, Link, useLocation } from "react-router-dom"
import { Menu, X, PenLine } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "../lib/utils"
import { ThemeToggle } from "./theme-toggle"

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const location = useLocation()

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path: string): boolean => {
    return location.pathname === path
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b sticky top-0 z-40 w-full bg-background/95 backdrop-blur">
        <div className="container py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">
            Tribute Stories
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/") ? "text-primary" : "text-foreground",
              )}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/about") ? "text-primary" : "text-foreground",
              )}
            >
              About me
            </Link>
            <Link
              to="/categories"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/categories") ? "text-primary" : "text-foreground",
              )}
            >
              Categories
            </Link>
            <Link
              to="/contact"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/contact") ? "text-primary" : "text-foreground",
              )}
            >
              Contact
            </Link>
            <Link
              to="/write"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary flex items-center",
                isActive("/write") ? "text-primary" : "text-foreground",
              )}
            >
              <PenLine size={16} className="mr-1" />
              Write
            </Link>
            <ThemeToggle />
          </nav>

          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-background z-50 md:hidden pt-16">
          <nav className="container flex flex-col space-y-4 mt-8">
            <Link
              to="/"
              className={cn(
                "text-lg font-medium transition-colors hover:text-primary p-2",
                isActive("/") ? "text-primary bg-secondary" : "text-foreground",
              )}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={cn(
                "text-lg font-medium transition-colors hover:text-primary p-2",
                isActive("/about") ? "text-primary bg-secondary" : "text-foreground",
              )}
              onClick={toggleMenu}
            >
              About me
            </Link>
            <Link
              to="/categories"
              className={cn(
                "text-lg font-medium transition-colors hover:text-primary p-2",
                isActive("/categories") ? "text-primary bg-secondary" : "text-foreground",
              )}
              onClick={toggleMenu}
            >
              Categories
            </Link>
            <Link
              to="/contact"
              className={cn(
                "text-lg font-medium transition-colors hover:text-primary p-2",
                isActive("/contact") ? "text-primary bg-secondary" : "text-foreground",
              )}
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link
              to="/write"
              className={cn(
                "text-lg font-medium transition-colors hover:text-primary p-2 flex items-center",
                isActive("/write") ? "text-primary bg-secondary" : "text-foreground",
              )}
              onClick={toggleMenu}
            >
              <PenLine size={16} className="mr-2" />
              Write
            </Link>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="page-container">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t py-8 bg-secondary/50">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-foreground text-sm">© 2023 Tribute Stories. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-sm text-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
          <div className="mt-4 text-center text-xs text-muted-foreground">
            <p>
              Interax AI Private Limited. 01 FA, First Floor, IIT Madras Research Park, Kanagam Road, Taramani, Chennai
              - 600113
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
