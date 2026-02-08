"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Story, StoryStage, STAGE_LABELS } from "@/types/story"
import { cn } from "@/lib/utils"

interface StoryFragmentProps {
  story: Story
  stage: StoryStage
}

export function StoryFragment({ story, stage }: StoryFragmentProps) {
  return (
    <Card
      className={cn(
        "border-l-4 border-l-golden",
        "motion-safe:animate-[fade-in-up_0.5s_ease-out]"
      )}
    >
      <CardContent className="space-y-3">
        <p className="text-sm font-medium text-golden">
          {STAGE_LABELS[stage]}
        </p>
        <blockquote className="text-lg leading-relaxed">
          &ldquo;{story.stages[stage]}&rdquo;
        </blockquote>
        <p className="text-sm text-muted-foreground">{story.title}</p>
      </CardContent>
    </Card>
  )
}
