import type React from "react"
import { User } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const Sidebar: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Author Profile */}
      <Card className="shadow-sm">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mb-4">
              <User size={40} className="text-muted-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-foreground">Ronak Kamboj</h3>
            <p className="text-foreground/80 mb-4">
              Travel enthusiast and storyteller. Sharing my adventures and life lessons from around the world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                Twitter
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Highlights */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Highlights</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <ul className="space-y-4">
            <li>
              <a href="#" className="block hover:bg-secondary p-2 transition-colors">
                <h4 className="font-medium text-foreground">Japan Travel Guide</h4>
                <p className="text-sm text-foreground/70">Everything you need to know before visiting Japan</p>
              </a>
            </li>
            <li>
              <a href="#" className="block hover:bg-secondary p-2 transition-colors">
                <h4 className="font-medium text-foreground">Mindfulness Practices</h4>
                <p className="text-sm text-foreground/70">Simple techniques for daily mental wellness</p>
              </a>
            </li>
            <li>
              <a href="#" className="block hover:bg-secondary p-2 transition-colors">
                <h4 className="font-medium text-foreground">Urban Photography Tips</h4>
                <p className="text-sm text-foreground/70">Capture the essence of city life in your photos</p>
              </a>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

export default Sidebar
