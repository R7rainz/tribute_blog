export interface Article {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  readingTime: number
  image: string
}

export interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface SubmitMessage {
  type: "success" | "error"
  text: string
}
