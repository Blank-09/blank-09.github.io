export interface Project {
  slug: string
  title: string
  description: string
  longDescription: string
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    slug: "spring-microservices",
    title: "Spring Boot Microservices Platform",
    description:
      "Production-ready microservices with service discovery, API gateway, and distributed tracing.",
    longDescription:
      "Built a comprehensive microservices platform using Spring Boot, featuring Eureka service discovery, Spring Cloud Gateway for API routing, and Zipkin for distributed tracing. Implemented JWT-based authentication, circuit breakers with Resilience4j, and containerized all services with Docker Compose.",
    techStack: ["Java", "Spring Boot", "Spring Cloud", "Docker", "PostgreSQL", "Redis"],
    githubUrl: "https://github.com/blank-09",
    featured: true,
  },
  {
    slug: "analytics-dashboard",
    title: "Analytics Dashboard",
    description:
      "Full-stack analytics dashboard with real-time data visualization and role-based access control.",
    longDescription:
      "Developed a feature-rich analytics dashboard with interactive charts, real-time WebSocket updates, and role-based access control. The React frontend uses React Query for data fetching and Recharts for visualization. The Python FastAPI backend handles data aggregation and serves a RESTful API.",
    techStack: ["React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "WebSockets"],
    githubUrl: "https://github.com/blank-09",
    featured: true,
  },
  {
    slug: "ml-pipeline",
    title: "ML Data Pipeline",
    description:
      "Automated pipeline for training and deploying machine learning models with experiment tracking.",
    longDescription:
      "Built an end-to-end ML pipeline using Python, automating data ingestion, preprocessing, model training, and deployment. Integrated MLflow for experiment tracking and model registry, Airflow for pipeline orchestration, and Docker for containerized model serving.",
    techStack: ["Python", "MLflow", "Apache Airflow", "Docker", "scikit-learn", "PostgreSQL"],
    githubUrl: "https://github.com/blank-09",
    featured: true,
  },
]
