import type { ChatStep, PipelineStage } from "@/types/chat"

const MOCK_DELAY = 800

interface CoachResponse {
  response: string
  advanceStep: boolean
}

const WELCOME_MESSAGE =
  "Hey! I'm your Story Coach. I'm here to help you tell your career story — the real one, not the LinkedIn version. First, let's figure out where you are right now."

const PIPELINE_ACKNOWLEDGMENTS: Record<PipelineStage, string> = {
  student:
    "Starting out — that's a powerful place to be. You're seeing things with fresh eyes. Let's talk about what you've been running into.",
  "early-career":
    "The early years can be intense — you're figuring out so much at once. Let's dig into what's been on your mind.",
  "mid-career":
    "You've got some real experience under your belt. That means you've probably hit some walls that newer folks haven't yet. Let's explore that.",
}

const STAGE_PROMPTS: Record<string, string> = {
  barrier:
    "Think about a moment in your career where you hit a wall — something that felt like it was blocking your path. What happened?",
  reflection:
    "That sounds like it really stuck with you. When you look back at that barrier now, what do you see differently? What did it teach you about yourself?",
  action:
    "So you had this realization. What did you actually do about it? What concrete steps did you take?",
  transformation:
    "Looking at where you started and where you are now — how has this whole experience changed the way you work or think about your career?",
}

const STAGE_REFLECTIONS: Record<string, string> = {
  barrier:
    "I hear you. That's a real barrier — not just an inconvenience, but something that actually shaped your path. Thank you for sharing that.",
  reflection:
    "That kind of self-awareness is exactly what makes a story worth telling. You're not just describing what happened — you're making sense of it.",
  action:
    "That took courage. It's one thing to see the problem, another to actually do something about it. That's action.",
  transformation:
    "That's a transformation. You're not the same person who hit that wall. Let me put together what you've shared into a structured story.",
}

const HELP_RESPONSES: Record<string, string> = {
  barrier:
    "No worries — try thinking about a time you felt stuck, frustrated, or like you didn't belong. It could be a bad manager, a systemic issue, imposter syndrome, or a career pivot that went sideways. There's no wrong answer.",
  reflection:
    "Think about what surprised you when you look back. Did your perspective shift? Did you realize something about yourself, the industry, or what you actually want?",
  action:
    "What changed because of you? Did you have a hard conversation, switch roles, build something, set a boundary, or take a risk? Even small steps count.",
  transformation:
    "How are you different now? Think about your confidence, your priorities, how you handle similar situations, or what you'd tell someone going through the same thing.",
}

export function getWelcomeMessage(): string {
  return WELCOME_MESSAGE
}

export function getPipelineAcknowledgment(stage: PipelineStage): string {
  return PIPELINE_ACKNOWLEDGMENTS[stage]
}

export function getStagePrompt(step: ChatStep): string {
  return STAGE_PROMPTS[step] ?? ""
}

export async function getMockCoachResponse(
  step: ChatStep,
  _message: string,
  isHelpRequest: boolean
): Promise<CoachResponse> {
  await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY))

  if (isHelpRequest) {
    return {
      response: HELP_RESPONSES[step] ?? "Just share whatever feels true. There's no wrong answer here.",
      advanceStep: false,
    }
  }

  // In coached steps, the coach reflects back and signals advancement
  return {
    response: STAGE_REFLECTIONS[step] ?? "Thank you for sharing that.",
    advanceStep: true,
  }
}

export async function getMockStructuredStory(
  stageResponses: Record<string, string>
): Promise<Record<string, string>> {
  await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY))

  return {
    barrier: stageResponses.barrier ?? "",
    reflection: stageResponses.reflection ?? "",
    action: stageResponses.action ?? "",
    transformation: stageResponses.transformation ?? "",
  }
}
