const Footer = () => {
  return (
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
            Interax AI Private Limited. 01 FA, First Floor, IIT Madras Research Park, Kanagam Road,
            Taramani, Chennai - 600113
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer  