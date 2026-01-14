import { Facebook, Github, Linkedin, Twitter } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
  return (
      <footer className="bg-accent dark:bg-slate-900 border-t">
      <div className="container mx-auto flex flex-col items-center px-4 md:px-6 py-16">
          <div className="flex justify-center items-center space-x-6 mb-4 ">
            <Link to="https://www.facebook.com/ChehabuDiin" target="_blank" className="text-muted-foreground hover:text-foreground">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-5 w-5" />
            </Link>
            <Link to="https://x.com/eldinshehab87" target="_blank" className="text-muted-foreground hover:text-foreground">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-5 w-5" />
            </Link>
            <Link to="https://www.linkedin.com/in/ahmed-abdisalam-415579307/" target="_blank" className="text-muted-foreground hover:text-foreground">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link to="https://github.com/Ahmed-abdisalaam-ahmed" target="_blank" className="text-muted-foreground hover:text-foreground">
              <span className="sr-only">GitHub</span>
              <Github className="h-5 w-5" />
            </Link>
          </div>
          <div className="flex flex-col items-center space-y-2 pt-4   text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} SwiftTask. All rights reserved.</p>
            <nav className="flex space-x-4">
              <Link href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Cookies
              </Link>
            </nav>
          </div>
        </div>
    </footer>
  )
}

export default Footer