import type React from "react"
import { User, Mail, MapPin, LinkIcon } from "lucide-react"

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-black text-black dark:text-white">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">About me</h1>

      {/* Profile Section */}
      <div className="card p-8 mb-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-32 h-32 bg-gray-800 dark:bg-white rounded-full flex items-center justify-center">
            <User size={48} className="text-white dark:text-black" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Ronak Kamboj</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Travel enthusiast and storyteller</p>
            <div className="space-y-2 text-gray-800 dark:text-gray-100">
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-gray-600 dark:text-gray-400" />
                <span>jessica.hansen@example.com</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2 text-gray-600 dark:text-gray-400" />
                <span>Tokyo, Japan</span>
              </div>
              <div className="flex items-center">
                <LinkIcon size={16} className="mr-2 text-gray-600 dark:text-gray-400" />
                <a href="#" className="text-gray-800 hover:text-white dark:text-gray-100 dark:hover:text-gray-300">
                  www.jessicahansen.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bio Section */}
      <div className="card p-8 mb-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-4">Biography</h2>
        <div className="space-y-4 text-gray-800 dark:text-gray-100">
          <p>
            Hello! I'm Jessica, a passionate traveler, writer, and photographer based in Tokyo, Japan. For the past
            decade, I've been exploring the world and documenting my experiences through stories, photographs, and
            personal reflections.
          </p>
          <p>
            My journey began when I took a gap year after college to backpack across Southeast Asia. What was meant to
            be a one-year adventure turned into a lifelong passion for exploring different cultures, cuisines, and
            landscapes. Since then, I've visited over 50 countries across six continents, living for extended periods in
            Japan, Thailand, and New Zealand.
          </p>
          <p>
            Through my writing, I aim to share not just the beautiful destinations I visit, but also the transformative
            experiences, challenges, and personal growth that come with travel. I believe that travel is not just about
            seeing new places, but about gaining new perspectives and understanding our place in the world.
          </p>
          <p>
            When I'm not on the road, you can find me exploring the hidden corners of Tokyo, practicing my photography
            skills, or enjoying a cup of coffee at a local café while planning my next adventure.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="card p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-4">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-black dark:bg-white border rounded-xl border-gray-800 dark:border-gray-700">
            <h3 className="font-bold mb-2 text-white dark:text-black">Travel Writing</h3>
            <p className="text-gray-400 dark:text-gray-600">Crafting engaging narratives about destinations and experiences</p>
          </div>
          <div className="p-4 bg-black dark:bg-white border rounded-xl border-gray-800 dark:border-gray-700">
            <h3 className="font-bold mb-2 text-white dark:text-black">Photography</h3>
            <p className="text-gray-400 dark:text-gray-600">Capturing the essence of places through visual storytelling</p>
          </div>
          <div className="p-4 bg-black dark:bg-white border rounded-xl border-gray-800 dark:border-gray-700">
            <h3 className="font-bold mb-2 text-white dark:text-black">Cultural Immersion</h3>
            <p className="text-gray-400 dark:text-gray-600">Adapting to and understanding diverse cultural contexts</p>
          </div>
          <div className="p-4 bg-black dark:bg-white border rounded-xl border-gray-800 dark:border-gray-700">
            <h3 className="font-bold mb-2 text-white dark:text-black">Language Learning</h3>
            <p className="text-gray-400 dark:text-gray-600">Proficient in Japanese, Thai, and conversational Spanish</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
