import React from 'react'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import About from './pages/About'
import Projects from './pages/Projects'
// import Achievements from './pages/Achievements'
// import Certifications from './pages/Certifications'
// import Resume from './pages/Resume'
// import Contact from './pages/Contact'
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      {/* <Achievements /> */}
      {/* <Certifications /> */}
      {/* <Resume /> */}
      {/* <Contact /> */}
      <Footer />
    </>
  )
}

export default App
