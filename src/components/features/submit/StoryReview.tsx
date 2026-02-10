"use client"

import { STAGE_LABELS, type StoryStage } from "@/types/story"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

interface StoryReviewProps {
  structuredStory: Record<StoryStage, string>
  consentGiven: boolean
  isPublic: boolean
  identity: { name: string; email: string } | null
  isSubmitted: boolean
  onConsentChange: (checked: boolean) => void
  onPublicChange: (checked: boolean) => void
  onIdentityChange: (identity: { name: string; email: string }) => void
  onSubmit: () => void
}

const STAGE_ORDER: StoryStage[] = [
  "barrier",
  "reflection",
  "action",
  "transformation",
]

export function StoryReview({
  structuredStory,
  consentGiven,
  isPublic,
  identity,
  isSubmitted,
  onConsentChange,
  onPublicChange,
  onIdentityChange,
  onSubmit,
}: StoryReviewProps) {
  if (isSubmitted) {
    return (
      <div className="flex justify-start">
        <div className="bg-surface w-full max-w-[85%] rounded-2xl rounded-tl-sm p-4 md:max-w-[70%]">
          <p className="text-sm font-medium">Your story has been submitted. Thank you for sharing.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex justify-start">
      <div className="bg-surface w-full max-w-[85%] rounded-2xl rounded-tl-sm p-4 md:max-w-[70%]">
        <p className="mb-4 text-sm font-medium">
          Here&apos;s your structured story. Review it and submit when you&apos;re ready.
        </p>

        <div className="flex flex-col gap-4">
          {STAGE_ORDER.map((stage) => (
            <div key={stage}>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {STAGE_LABELS[stage]}
              </p>
              <p className="mt-1 text-sm leading-relaxed">
                {structuredStory[stage]}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 border-t pt-4">
          <div className="flex items-start gap-2">
            <Checkbox
              id="consent"
              checked={consentGiven}
              onCheckedChange={(checked) =>
                onConsentChange(checked === true)
              }
            />
            <Label htmlFor="consent" className="text-sm leading-snug">
              I consent to my story being stored and used for research
              purposes.
            </Label>
          </div>

          <div className="mt-3 flex items-start gap-2">
            <Checkbox
              id="public"
              checked={isPublic}
              onCheckedChange={(checked) =>
                onPublicChange(checked === true)
              }
            />
            <Label htmlFor="public" className="text-sm leading-snug">
              Make my story public (optional)
            </Label>
          </div>

          {isPublic && (
            <div className="mt-3 flex flex-col gap-2">
              <Input
                placeholder="Your name"
                value={identity?.name ?? ""}
                onChange={(e) =>
                  onIdentityChange({
                    name: e.target.value,
                    email: identity?.email ?? "",
                  })
                }
              />
              <Input
                type="email"
                placeholder="Email address"
                value={identity?.email ?? ""}
                onChange={(e) =>
                  onIdentityChange({
                    name: identity?.name ?? "",
                    email: e.target.value,
                  })
                }
              />
            </div>
          )}

          <Button
            onClick={onSubmit}
            disabled={!consentGiven}
            className="mt-4 w-full rounded-xl"
          >
            Submit Story
          </Button>
        </div>
      </div>
    </div>
  )
}
