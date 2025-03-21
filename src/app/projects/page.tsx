import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card/Card';
import Link from 'next/link';

const projects = [
  {
    id: 'project-1',
    title: 'Project One',
    description: 'A brief description of the project and its key features.',
    technologies: ['Next.js', 'React', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yourusername/project-1',
    liveUrl: 'https://project-1.com',
  },
  {
    id: 'project-2',
    title: 'Project Two',
    description: 'Another amazing project showcasing different technologies.',
    technologies: ['TypeScript', 'Node.js', 'PostgreSQL'],
    githubUrl: 'https://github.com/yourusername/project-2',
    liveUrl: 'https://project-2.com',
  },
  {
    id: 'project-3',
    title: 'Project Three',
    description: 'An innovative solution to a real-world problem.',
    technologies: ['React', 'GraphQL', 'AWS'],
    githubUrl: 'https://github.com/yourusername/project-3',
    liveUrl: 'https://project-3.com',
  },
];

export default function Projects() {
  return (
    <div className="container py-8 md:py-12 lg:py-24">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">My Projects</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A collection of my work and personal projects. Each project represents a unique challenge
          and learning experience.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} className="h-full">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  GitHub →
                </Link>
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Live Demo →
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 