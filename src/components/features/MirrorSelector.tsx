"use client"

import { Button } from "@/components/ui/button"
import { StoryStage, STAGE_LABELS } from "@/types/story"
import { cn } from "@/lib/utils"

interface MirrorSelectorProps {
  selected: StoryStage | null
  onSelect: (stage: StoryStage) => void
}

const stages: StoryStage[] = [
  "barrier",
  "reflection",
  "action",
  "transformation",
]

export function MirrorSelector({ selected, onSelect }: MirrorSelectorProps) {
  return (
    <div role="group" aria-label="Where are you in your career story?">
      <p className="text-muted-foreground mb-4 text-lg">
        Where are you right now?
      </p>
      <div className="flex flex-wrap gap-3">
        {stages.map((stage) => {
          const isActive = selected === stage
          return (
            <Button
              key={stage}
              variant={isActive ? "default" : "outline"}
              size="lg"
              onClick={() => onSelect(stage)}
              aria-pressed={isActive}
              className={cn(
                "transition-all duration-200 text-base",
                isActive &&
                  "bg-golden text-golden-foreground hover:bg-golden/90 border-golden",
                !isActive &&
                  "hover:border-golden/50 hover:scale-[1.02]"
              )}
            >
              {STAGE_LABELS[stage]}
            </Button>
          )
        })}
      </div>
    </div>
  )
}
