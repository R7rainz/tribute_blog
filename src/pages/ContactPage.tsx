import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"
import type { FormData, SubmitMessage } from "../types"

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [submitMessage, setSubmitMessage] = useState<SubmitMessage | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage({
        type: "success",
        text: "Your message has been sent successfully!",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage(null)
      }, 5000)
    }, 1500)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">Contact</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div>
          <div className="card p-8 mb-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Get in Touch</h2>
            <div className="space-y-4 text-gray-800 dark:text-gray-300">
              <div className="flex items-start">
                <Mail className="mr-4 mt-1 text-gray-800 dark:text-gray-300" size={20} />
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">Email</h3>
                  <p className="text-gray-400 dark:text-gray-500">contact@tributestories.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="mr-4 mt-1 text-gray-800 dark:text-gray-300" size={20} />
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">Phone</h3>
                  <p className="text-gray-400 dark:text-gray-500">+81 3-1234-5678</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="mr-4 mt-1 text-gray-800 dark:text-gray-300" size={20} />
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">Address</h3>
                  <p className="text-gray-400 dark:text-gray-500">
                    01 FA, First Floor, IIT Madras Research Park,
                    <br />
                    Kanagam Road, Taramani,
                    <br />
                    Chennai - 600113
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Office Hours</h2>
            <ul className="space-y-2 text-gray-800 dark:text-gray-300">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>10:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div className="card p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send a Message</h2>

          {submitMessage && (
            <div
              className={`p-4 mb-6 ${submitMessage.type === "success" ? "bg-green-900 text-green-100" : "bg-red-900 text-red-100"}`}
            >
              {submitMessage.text}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium text-gray-900 dark:text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 dark:bg-gray-700 border border-gray-800 dark:border-gray-600 p-3 text-white dark:text-gray-200 focus:outline-none focus:border-gray-600"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-medium text-gray-900 dark:text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 dark:bg-gray-700 border border-gray-800 dark:border-gray-600 p-3 text-white dark:text-gray-200 focus:outline-none focus:border-gray-600"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 font-medium text-gray-900 dark:text-white">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 dark:bg-gray-700 border border-gray-800 dark:border-gray-600 p-3 text-white dark:text-gray-200 focus:outline-none focus:border-gray-600"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium text-gray-900 dark:text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-gray-900 dark:bg-gray-700 border border-gray-800 dark:border-gray-600 p-3 text-white dark:text-gray-200 focus:outline-none focus:border-gray-600"
                />
              </div>

              <button type="submit" disabled={isSubmitting} className="btn w-full flex justify-center items-center bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-300">
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
