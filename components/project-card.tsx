import { Github, ExternalLink } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
}

export default function ProjectCard({ title, description, technologies, githubUrl, liveUrl }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-3 border-t">
        {githubUrl && (
          <Button variant="ghost" size="sm">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              <Github className="h-4 w-4" />
              <span>Code</span>
            </a>
          </Button>
        )}
        {liveUrl && (
          <Button variant="ghost" size="sm">
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              <ExternalLink className="h-4 w-4" />
              <span>Live Demo</span>
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

