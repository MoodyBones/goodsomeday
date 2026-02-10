import { useReducer } from "react"
import type { StoryStage } from "@/types/story"
import type {
  ChatMessage,
  ChatState,
  ChatStep,
  PipelineStage,
} from "@/types/chat"

const STEP_ORDER: ChatStep[] = [
  "pipeline",
  "barrier",
  "reflection",
  "action",
  "transformation",
  "review",
]

/** Maps coached chat steps to their corresponding StoryStage key */
const STEP_TO_STAGE: Partial<Record<ChatStep, StoryStage>> = {
  barrier: "barrier",
  reflection: "reflection",
  action: "action",
  transformation: "transformation",
}

type ChatAction =
  | { type: "SET_PIPELINE"; stage: PipelineStage }
  | { type: "SET_PRONOUNS"; pronouns: string }
  | { type: "ADD_USER_MESSAGE"; content: string }
  | { type: "ADD_COACH_MESSAGE"; content: string }
  | { type: "ADVANCE_STEP" }
  | { type: "SET_LOADING"; isLoading: boolean }
  | { type: "SET_STRUCTURED_STORY"; story: Record<StoryStage, string> }
  | { type: "SET_CONSENT"; consentGiven: boolean }
  | { type: "SET_PUBLIC"; isPublic: boolean }
  | { type: "SET_IDENTITY"; identity: { name: string; email: string } | null }
  | { type: "SET_SUBMITTED" }

function createMessage(
  role: ChatMessage["role"],
  content: string
): ChatMessage {
  return {
    id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    role,
    content,
    timestamp: Date.now(),
  }
}

export const initialChatState: ChatState = {
  step: "pipeline",
  messages: [],
  pronouns: "",
  pipelineStage: null,
  stageResponses: {},
  structuredStory: null,
  isLoading: false,
  isSubmitted: false,
  consentGiven: false,
  isPublic: false,
  identity: null,
}

export function chatReducer(state: ChatState, action: ChatAction): ChatState {
  switch (action.type) {
    case "SET_PIPELINE":
      return { ...state, pipelineStage: action.stage }

    case "SET_PRONOUNS":
      return { ...state, pronouns: action.pronouns }

    case "ADD_USER_MESSAGE": {
      const message = createMessage("user", action.content)
      const storyStage = STEP_TO_STAGE[state.step]
      return {
        ...state,
        messages: [...state.messages, message],
        // If we're in a coached step, store the response
        stageResponses: storyStage
          ? { ...state.stageResponses, [storyStage]: action.content }
          : state.stageResponses,
      }
    }

    case "ADD_COACH_MESSAGE": {
      const message = createMessage("coach", action.content)
      return { ...state, messages: [...state.messages, message] }
    }

    case "ADVANCE_STEP": {
      const currentIndex = STEP_ORDER.indexOf(state.step)
      const nextIndex = currentIndex + 1
      if (nextIndex >= STEP_ORDER.length) return state
      return { ...state, step: STEP_ORDER[nextIndex] }
    }

    case "SET_LOADING":
      return { ...state, isLoading: action.isLoading }

    case "SET_STRUCTURED_STORY":
      return { ...state, structuredStory: action.story }

    case "SET_CONSENT":
      return { ...state, consentGiven: action.consentGiven }

    case "SET_PUBLIC":
      return {
        ...state,
        isPublic: action.isPublic,
        // Clear identity when toggling off
        identity: action.isPublic ? state.identity : null,
      }

    case "SET_IDENTITY":
      return { ...state, identity: action.identity }

    case "SET_SUBMITTED":
      return { ...state, isSubmitted: true }

    default:
      return state
  }
}

export function useChatReducer() {
  return useReducer(chatReducer, initialChatState)
}
