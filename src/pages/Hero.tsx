import React from 'react'

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative dark:bg-grid-white/[0.2] bg-grid-black/[0.2] border-b min-h-screen h-full grid place-items-center"
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="container mx-auto h-full">
        <div className="flex flex-col justify-center items-center h-full relative">
          <h1 className="text-6xl font-bold text-center">
            Hi, I'm Priyanshu T
          </h1>
          <p className="text-lg text-center">
            I'm a full-stack developer and a tech enthusiast
          </p>

          <div className="mt-8 space-x-2">
            <a
              href="#about"
              className="uppercase border-2 border-primary bg-primary text-primary-foreground px-3 py-2"
            >
              About me
            </a>
            <a
              href="#projects"
              className="uppercase border-2 border-primary px-3 py-2"
            >
              My Projects
            </a>
          </div>

          <div className="absolute bottom-5 left-0 right-0 flex justify-center items-center">
            <a href="#about" className="text-3xl">
              {/* <i className="fas fa-chevron-down"></i> */}
              👇
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
