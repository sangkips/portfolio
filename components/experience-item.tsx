import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

interface ExperienceItemProps {
  title: string
  company: string
  period: string
  description: string
  achievements: string[]
}

export default function ExperienceItem({ title, company, period, description, achievements }: ExperienceItemProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-muted-foreground">{company}</p>
          </div>
          <span className="text-sm font-medium bg-muted px-3 py-1 rounded-full">{period}</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{description}</p>
        <h4 className="font-medium mb-2">Key Achievements:</h4>
        <ul className="space-y-2">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

