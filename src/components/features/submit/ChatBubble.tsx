"use client"

import { cn } from "@/lib/utils"
import type { ChatMessage } from "@/types/chat"

interface ChatBubbleProps {
  message: ChatMessage
}

export function ChatBubble({ message }: ChatBubbleProps) {
  const isCoach = message.role === "coach"

  return (
    <div
      className={cn(
        "flex w-full",
        isCoach ? "justify-start" : "justify-end"
      )}
    >
      <div
        className={cn(
          "max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed md:max-w-[70%]",
          isCoach
            ? "bg-surface text-foreground rounded-tl-sm"
            : "bg-golden text-golden-foreground rounded-tr-sm"
        )}
      >
        {message.content}
      </div>
    </div>
  )
}
