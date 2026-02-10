import type { StoryStage } from "./story"

export type ChatStep =
  | "pipeline"
  | "barrier"
  | "reflection"
  | "action"
  | "transformation"
  | "review"

export const CHAT_STEPS: ChatStep[] = [
  "pipeline",
  "barrier",
  "reflection",
  "action",
  "transformation",
  "review",
]

export const COACHED_STEPS: ChatStep[] = [
  "barrier",
  "reflection",
  "action",
  "transformation",
]

export type PipelineStage = "student" | "early-career" | "mid-career"

export const PIPELINE_LABELS: Record<PipelineStage, string> = {
  student: "Student / New Grad",
  "early-career": "Early Career (0–5 yrs)",
  "mid-career": "Mid Career (5+ yrs)",
}

export interface ChatMessage {
  id: string
  role: "coach" | "user" | "system"
  content: string
  timestamp: number
}

export interface ChatState {
  step: ChatStep
  messages: ChatMessage[]
  pronouns: string
  pipelineStage: PipelineStage | null
  stageResponses: Partial<Record<StoryStage, string>>
  structuredStory: Record<StoryStage, string> | null
  isLoading: boolean
  isSubmitted: boolean
  consentGiven: boolean
  isPublic: boolean
  identity: { name: string; email: string } | null
}
