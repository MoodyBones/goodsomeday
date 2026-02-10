"use client"

import { useCallback, useEffect } from "react"
import { useChatReducer } from "@/hooks/use-chat-reducer"
import { COACHED_STEPS, type PipelineStage } from "@/types/chat"
import type { StoryStage } from "@/types/story"
import {
  getWelcomeMessage,
  getPipelineAcknowledgment,
  getStagePrompt,
  getMockCoachResponse,
  getMockStructuredStory,
} from "@/lib/mock-coach"
import { StageProgress } from "./StageProgress"
import { ChatMessageList } from "./ChatMessageList"
import { ChatInput } from "./ChatInput"
import { PipelineSelect } from "./PipelineSelect"
import { StoryReview } from "./StoryReview"
import { HelpButton } from "./HelpButton"

export function ChatShell() {
  const [state, dispatch] = useChatReducer()

  const isCoachedStep = COACHED_STEPS.includes(state.step)
  const showInput = isCoachedStep && !state.isLoading
  const showHelp = isCoachedStep && !state.isLoading

  // Send welcome message on mount
  useEffect(() => {
    dispatch({ type: "ADD_COACH_MESSAGE", content: getWelcomeMessage() })
  }, [dispatch])

  const handlePipelineSubmit = useCallback(
    async (stage: PipelineStage, pronouns: string) => {
      dispatch({ type: "SET_PIPELINE", stage })
      dispatch({ type: "SET_PRONOUNS", pronouns: pronouns || "they/them" })
      dispatch({
        type: "ADD_USER_MESSAGE",
        content: `I'm ${stage === "student" ? "a student / new grad" : stage === "early-career" ? "early career" : "mid career"}${pronouns ? ` (${pronouns})` : ""}`,
      })

      dispatch({ type: "SET_LOADING", isLoading: true })

      // Simulate coach acknowledging and transitioning
      await new Promise((resolve) => setTimeout(resolve, 800))
      dispatch({
        type: "ADD_COACH_MESSAGE",
        content: getPipelineAcknowledgment(stage),
      })
      dispatch({ type: "ADVANCE_STEP" })

      // Follow up with the barrier prompt
      await new Promise((resolve) => setTimeout(resolve, 600))
      dispatch({
        type: "ADD_COACH_MESSAGE",
        content: getStagePrompt("barrier"),
      })
      dispatch({ type: "SET_LOADING", isLoading: false })
    },
    [dispatch]
  )

  const handleSendMessage = useCallback(
    async (content: string) => {
      dispatch({ type: "ADD_USER_MESSAGE", content })
      dispatch({ type: "SET_LOADING", isLoading: true })

      const { response, advanceStep } = await getMockCoachResponse(
        state.step,
        content,
        false
      )

      dispatch({ type: "ADD_COACH_MESSAGE", content: response })

      if (advanceStep) {
        dispatch({ type: "ADVANCE_STEP" })

        // If we're advancing to review, structure the story
        const nextStepIndex =
          ["pipeline", "barrier", "reflection", "action", "transformation", "review"].indexOf(state.step) + 1
        const nextStep = ["pipeline", "barrier", "reflection", "action", "transformation", "review"][nextStepIndex]

        if (nextStep === "review") {
          dispatch({ type: "SET_LOADING", isLoading: true })
          const structured = await getMockStructuredStory(
            state.stageResponses as Record<string, string>
          )
          dispatch({
            type: "SET_STRUCTURED_STORY",
            story: structured as Record<StoryStage, string>,
          })
          dispatch({ type: "SET_LOADING", isLoading: false })
        } else if (nextStep) {
          // Send the next stage prompt
          await new Promise((resolve) => setTimeout(resolve, 600))
          dispatch({
            type: "ADD_COACH_MESSAGE",
            content: getStagePrompt(nextStep as any),
          })
          dispatch({ type: "SET_LOADING", isLoading: false })
        }
      } else {
        dispatch({ type: "SET_LOADING", isLoading: false })
      }
    },
    [dispatch, state.step, state.stageResponses]
  )

  const handleHelpRequest = useCallback(async () => {
    dispatch({ type: "SET_LOADING", isLoading: true })

    const { response } = await getMockCoachResponse(state.step, "", true)
    dispatch({ type: "ADD_COACH_MESSAGE", content: response })
    dispatch({ type: "SET_LOADING", isLoading: false })
  }, [dispatch, state.step])

  const handleSubmit = useCallback(() => {
    dispatch({ type: "SET_SUBMITTED" })
    dispatch({
      type: "ADD_COACH_MESSAGE",
      content:
        "Your story has been received. Thank you for sharing your experience — it matters.",
    })
  }, [dispatch])

  return (
    <div className="mx-auto flex h-dvh max-w-2xl flex-col">
      <StageProgress currentStep={state.step} />

      <ChatMessageList messages={state.messages} isLoading={state.isLoading}>
        {/* Inline components rendered in the message flow */}
        {state.step === "pipeline" && state.messages.length > 0 && (
          <PipelineSelect
            onSubmit={handlePipelineSubmit}
            disabled={state.isLoading || state.pipelineStage !== null}
          />
        )}
        {state.step === "review" && state.structuredStory && (
          <StoryReview
            structuredStory={state.structuredStory}
            consentGiven={state.consentGiven}
            isPublic={state.isPublic}
            identity={state.identity}
            isSubmitted={state.isSubmitted}
            onConsentChange={(checked) =>
              dispatch({ type: "SET_CONSENT", consentGiven: checked })
            }
            onPublicChange={(checked) =>
              dispatch({ type: "SET_PUBLIC", isPublic: checked })
            }
            onIdentityChange={(identity) =>
              dispatch({ type: "SET_IDENTITY", identity })
            }
            onSubmit={handleSubmit}
          />
        )}
      </ChatMessageList>

      {showInput && <ChatInput onSend={handleSendMessage} disabled={state.isLoading} />}
      {showHelp && <HelpButton onClick={handleHelpRequest} disabled={state.isLoading} />}
    </div>
  )
}
