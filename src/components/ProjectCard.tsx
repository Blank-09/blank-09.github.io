import { GitHubLogoIcon } from '@radix-ui/react-icons'
import React from 'react'

type Props = {
  title: string
  description: string
  tags: string[]
  image: string
  github: string
  demo: string
}

const ProjectCard: React.FC<Props> = (props) => {
  return (
    <div className="col-span-4 border-2 border-primary p-5">
      <div className="relative">
        <img
          src={props.image}
          alt={props.title}
          className="rounded-lg border shadow-sm aspect-video"
          // style={{ aspectRatio: '4/3' }}
        />

        <a
          href={props.github}
          className="absolute top-2 right-2 p-2 bg-neutral-900 text-white rounded-full shadow"
        >
          <GitHubLogoIcon className="w-6 h-6" />
        </a>
      </div>

      <div className="mt-4">
        <h3 className="text-2xl font-bold mb-1">{props.title}</h3>
        <p className="text-muted-foreground mb-4 leading-5">
          {props.description}
        </p>

        <div className="space-x-2 text-sm">
          {props.tags.map((tag) => {
            const slug = tag.replace(' ', '-').toLowerCase()

            return (
              <code
                key={tag}
                className={`px-1 rounded ${
                  (slug == 'react' && 'text-sky-500 bg-sky-500/10') ||
                  (slug == 'next.js' && 'text-blue-500 bg-blue-500/10') ||
                  (slug == 'mongodb' && 'text-green-500 bg-green-500/10') ||
                  (slug == 'tailwind-css' && 'text-cyan-500 bg-cyan-500/10') ||
                  (slug == 'html' && 'text-red-500 bg-red-500/10') ||
                  (slug == 'bootstrap' && 'text-violet-500 bg-violet-500/10')
                }`}
              >
                #{slug}
              </code>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
