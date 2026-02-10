export type StoryStage = "barrier" | "reflection" | "action" | "transformation"

export const STAGE_LABELS: Record<StoryStage, string> = {
  barrier: "Facing a barrier",
  reflection: "Mid-reflection",
  action: "Taking action",
  transformation: "Post-transformation",
}

export interface Story {
  id: string
  title: string
  stages: Record<StoryStage, string>
}

export interface StorySubmission {
  stages: Record<StoryStage, string>
  pipelineStage: "student" | "early-career" | "mid-career"
  pronouns: string
  isPublic: boolean
  identity: { name: string; email: string } | null
  submittedAt: number
}
