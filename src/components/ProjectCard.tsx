import { ArrowRight } from "lucide-react"

import Github from "@/assets/icon/github"

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import type { Project } from "@/data/projects"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 flex-wrap content-start gap-2">
        {project.techStack.map((tech) => (
          <Badge key={tech} variant="secondary">
            {tech}
          </Badge>
        ))}
      </CardContent>
      <CardFooter className="flex gap-2">
        {project.githubUrl && (
          <Button variant="outline" size="icon" asChild>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source on GitHub"
            >
              <Github />
            </a>
          </Button>
        )}
        <Button variant="default" asChild className="flex-1">
          <a href={`/projects/${project.slug}`}>
            View Project
            <ArrowRight data-icon="inline-end" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
