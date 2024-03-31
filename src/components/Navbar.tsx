import * as React from 'react'
import { DarkModeToggle } from './DarkModeToggle'

const navlinks = [
  {
    title: 'Home',
    href: '#'
  },
  {
    title: 'About',
    href: '#about'
  },
  {
    title: 'Projects',
    href: '#projects'
  },
  {
    title: 'Achievements',
    href: '#achievements'
  },
  {
    title: 'Contact',
    href: '#contact'
  }
]

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const home = document.getElementById('home')

    if (!home) {
      return
    }

    const checkScroll = () => {
      setIsScrolled(window.scrollY > home.clientHeight)
    }

    window.addEventListener('scroll', checkScroll)

    return () => {
      window.removeEventListener('scroll', checkScroll)
    }
  }, [])

  return (
    <nav
      id="navbar"
      className={`h-auto w-full top-0 z-50 ${
        isScrolled
          ? 'fixed backdrop-blur border-b bg-background/50'
          : 'absolute my-2 px-4'
      }`}
    >
      <div className="container mx-auto px-8 py-4 flex justify-between items-center">
        <div className="">
          <h3 className="text-3xl font-semibold">
            Priyanshu<span className="text-orange-500 font-extrabold">.</span>
          </h3>
        </div>
        <ul className="flex space-x-8">
          {navlinks.map((navlink) => (
            <li key={navlink.title} className="relative group">
              <a href={navlink.href} className="hover:text-orange-500">
                {navlink.title}
              </a>
              <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-orange-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
            </li>
          ))}
        </ul>

        <DarkModeToggle />
      </div>
    </nav>
  )
}

export default Navbar
