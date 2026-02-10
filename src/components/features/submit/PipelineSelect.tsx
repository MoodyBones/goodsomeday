"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { PipelineStage } from "@/types/chat"
import { PIPELINE_LABELS } from "@/types/chat"

interface PipelineSelectProps {
  onSubmit: (stage: PipelineStage, pronouns: string) => void
  disabled?: boolean
}

export function PipelineSelect({ onSubmit, disabled = false }: PipelineSelectProps) {
  const [selectedStage, setSelectedStage] = useState<PipelineStage | null>(null)
  const [pronouns, setPronouns] = useState("")

  const handleSubmit = () => {
    if (!selectedStage) return
    onSubmit(selectedStage, pronouns.trim())
  }

  return (
    <div className="flex justify-start">
      <div className="bg-surface w-full max-w-[85%] rounded-2xl rounded-tl-sm p-4 md:max-w-[70%]">
        <p className="mb-3 text-sm font-medium">Where are you in your career?</p>
        <div className="flex flex-col gap-2">
          {(Object.entries(PIPELINE_LABELS) as [PipelineStage, string][]).map(
            ([stage, label]) => (
              <button
                key={stage}
                onClick={() => setSelectedStage(stage)}
                disabled={disabled}
                className={`rounded-lg border px-3 py-2 text-left text-sm transition-colors ${
                  selectedStage === stage
                    ? "border-golden bg-golden/20 font-medium"
                    : "border-border hover:border-golden/50 bg-background"
                } disabled:opacity-50`}
              >
                {label}
              </button>
            )
          )}
        </div>

        <div className="mt-4">
          <Label htmlFor="pronouns" className="mb-1.5 text-sm">
            Pronouns (optional)
          </Label>
          <Input
            id="pronouns"
            value={pronouns}
            onChange={(e) => setPronouns(e.target.value)}
            placeholder="e.g. she/her, they/them"
            disabled={disabled}
            className="mt-1.5"
          />
        </div>

        <Button
          onClick={handleSubmit}
          disabled={disabled || !selectedStage}
          className="mt-4 w-full rounded-xl"
        >
          Let&apos;s go
        </Button>
      </div>
    </div>
  )
}
