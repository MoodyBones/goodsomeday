import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Story, StoryStage, STAGE_LABELS } from "@/types/story"

const stageOrder: StoryStage[] = [
  "barrier",
  "reflection",
  "action",
  "transformation",
]

interface StoryCardProps {
  story: Story
}

export function StoryCard({ story }: StoryCardProps) {
  return (
    <Card className="border-l-4 border-l-golden">
      <CardHeader>
        <CardTitle className="text-lg">{story.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {stageOrder.map((stage) => (
          <div key={stage}>
            <p className="text-sm font-medium text-golden mb-1">
              {STAGE_LABELS[stage]}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {story.stages[stage]}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
