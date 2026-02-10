"use client"

import { useState, useCallback } from "react"
import { MirrorSelector } from "@/components/features/MirrorSelector"
import { StoryFragment } from "@/components/features/StoryFragment"
import { StoryCard } from "@/components/features/StoryCard"
import { Button } from "@/components/ui/button"
import { stories } from "@/data/stories"
import { StoryStage } from "@/types/story"

export default function Home() {
  const [selectedStage, setSelectedStage] = useState<StoryStage | null>(null)
  const [storyIndex, setStoryIndex] = useState(0)

  const handleSelect = useCallback(
    (stage: StoryStage) => {
      setSelectedStage(stage)
      // Cycle through stories so repeat selections show different content
      setStoryIndex((prev) => (prev + 1) % stories.length)
    },
    []
  )

  const matchedStory = selectedStage ? stories[storyIndex] : null

  return (
    <main className="min-h-screen">
      {/* Section 1: Arrival */}
      <section className="px-6 py-20 md:py-32">
        <div className="mx-auto max-w-[800px]">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Hope comes from action.
          </h1>
          <p className="mt-4 text-xl text-muted-foreground md:text-2xl">
            Real stories of career barriers and what people did next.
            Not inspiration. Pattern recognition.
          </p>

          <div className="mt-12">
            <MirrorSelector
              selected={selectedStage}
              onSelect={handleSelect}
            />
          </div>
        </div>
      </section>

      {/* Section 2: Recognition */}
      {selectedStage && matchedStory && (
        <section className="bg-surface px-6 py-16 md:py-24">
          <div className="mx-auto max-w-[800px]">
            <div key={`${selectedStage}-${storyIndex}`}>
              <StoryFragment story={matchedStory} stage={selectedStage} />
            </div>

            <div className="mt-8 text-center">
              <Button
                variant="ghost"
                size="lg"
                className="text-muted-foreground hover:text-foreground"
                onClick={() => {
                  document
                    .getElementById("browse")
                    ?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Read more stories
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Section 3: Browse */}
      <section id="browse" className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[800px]">
          <h2 className="text-3xl font-bold md:text-4xl">
            The pattern so far.
          </h2>
          <p className="mt-2 text-muted-foreground">
            {stories.length} stories. Each one a barrier, a reflection, an
            action, a transformation.
          </p>

          <div className="mt-10 space-y-6">
            {stories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Submit CTA */}
      <section className="border-t bg-surface px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Add your data point.
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-muted-foreground">
            Your story is anonymous unless you choose otherwise.
            We aggregate patterns, not personal details.
          </p>
          <div className="mt-8">
            <Button
              size="lg"
              className="bg-golden text-golden-foreground hover:bg-golden/90 text-base"
              asChild
            >
              <a href="/submit">Share your story</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t px-6 py-12">
        <div className="mx-auto max-w-[800px]">
          <p className="text-sm text-muted-foreground">
            Built by Mel Jones in Melbourne.
          </p>
        </div>
      </footer>
    </main>
  )
}
