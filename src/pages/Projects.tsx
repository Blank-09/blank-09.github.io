import ProjectCard from '@/components/ProjectCard'
import React from 'react'

const projects = [
  {
    title: 'SocioPoints',
    description:
      'We have build a Credit Based System app called "SocioPoints" that will take in input from User/Patient/Doctor. And determines the Social Health and computes TSS.',
    tags: ['html', 'Bootstrap'],
    image: 'https://layaranjith.github.io/assets/img/SocioPoints.jpg',
    github: '',
    demo: ''
  },
  {
    title: 'CollegePro',
    description:
      'It is an application created for the welfare students community to collaborate with others on online it also has CodeX, IDE, Events, Cources etc...',
    tags: ['Next.js', 'Tailwind CSS', 'mongodb'],
    image: 'https://layaranjith.github.io/assets/img/CollegePro.jpeg',
    github: '',
    demo: ''
  },
  {
    title: 'Weather Prediction',
    description:
      'A simple weather prediction app using React and Tailwind CSS for farmers to fetch the weather details of their location. It uses OpenWeatherMap API to fetch details.',
    tags: ['React', 'Tailwind CSS'],
    image: 'https://layaranjith.github.io/assets/img/Weather%20prediction.jpeg',
    github: '',
    demo: ''
  }
]

const Projects: React.FC = () => {
  return (
    <section id="projects" className="container mx-auto border-b">
      <div className="py-20">
        <div>
          <h2 className="text-4xl font-bold">Projects</h2>
          <p className="text-lg">
            Here are some of the projects I have worked on
          </p>
        </div>

        <div className="mt-10 grid grid-cols-12 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
