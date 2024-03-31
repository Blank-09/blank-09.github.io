import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon
} from '@radix-ui/react-icons'
import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="container mx-auto py-8">
      <div className="flex justify-center items-center space-x-4">
        <a
          href="https://github.com/Blank-09/"
          target="_blank"
          className="text-2xl"
        >
          <GitHubLogoIcon />
        </a>
        <a
          href="https://linkedin.com/in/priyanshu-t/"
          target="_blank"
          className="text-2xl"
        >
          <LinkedInLogoIcon />
        </a>
        <a href="#" target="_blank" className="text-2xl">
          <TwitterLogoIcon />
        </a>
      </div>
      <div className="mt-4 text-center">
        <p>&copy;{new Date().getFullYear()} Priyanshu T</p>
      </div>
    </footer>
  )
}

export default Footer
