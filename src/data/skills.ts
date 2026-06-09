export interface Skill {
  name: string
}

export interface SkillGroup {
  category: string
  skills: Skill[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Backend",
    skills: [
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "Spring Cloud" },
      { name: "Python" },
      { name: "FastAPI" },
      { name: "REST APIs" },
      { name: "Microservices" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Next.js" },
      { name: "Astro" },
    ],
  },
  {
    category: "Tools & Infrastructure",
    skills: [
      { name: "Docker" },
      { name: "PostgreSQL" },
      { name: "Redis" },
      { name: "Git" },
      { name: "Linux" },
      { name: "CI/CD" },
    ],
  },
]
