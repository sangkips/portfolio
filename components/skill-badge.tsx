import { Badge } from "@/components/ui/badge"

interface SkillBadgeProps {
  name: string
  level: number
}

export default function SkillBadge({ name, level }: SkillBadgeProps) {
  return (
    <div className="inline-flex flex-col items-center">
      <Badge className="mb-1 px-3 py-1">{name}</Badge>
      <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
        <div className="bg-primary h-full rounded-full" style={{ width: `${level}%` }} />
      </div>
    </div>
  )
}

