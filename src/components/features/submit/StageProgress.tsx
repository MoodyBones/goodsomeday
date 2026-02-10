"use client"

import { cn } from "@/lib/utils"
import { CHAT_STEPS, type ChatStep } from "@/types/chat"

interface StageProgressProps {
  currentStep: ChatStep
}

export function StageProgress({ currentStep }: StageProgressProps) {
  const currentIndex = CHAT_STEPS.indexOf(currentStep)

  return (
    <div className="flex items-center justify-center gap-2 border-b bg-background px-4 py-3">
      {CHAT_STEPS.map((step, i) => (
        <div
          key={step}
          className={cn(
            "size-2 rounded-full transition-colors",
            i < currentIndex
              ? "bg-golden"
              : i === currentIndex
                ? "bg-golden scale-125"
                : "bg-border"
          )}
          aria-label={`Step ${i + 1}: ${step}${i === currentIndex ? " (current)" : ""}`}
        />
      ))}
    </div>
  )
}
