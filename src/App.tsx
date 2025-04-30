import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import HomePage from "./pages/HomePage"
import ArticlePage from "./pages/ArticlePage"
import AboutPage from "./pages/AboutPage"
import CategoriesPage from "./pages/CategoriesPage"
import ContactPage from "./pages/ContactPage"
import WritePage from "./pages/WritePage"
import "./index.css"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="articles/:id" element={<ArticlePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="categories" element={<CategoriesPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="write" element={<WritePage />} />
      </Route>
    </Routes>
  )
}

export default App
