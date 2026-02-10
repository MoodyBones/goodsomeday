"use client"

import { useEffect, useRef } from "react"
import type { ChatMessage } from "@/types/chat"
import { ChatBubble } from "./ChatBubble"
import { TypingIndicator } from "./TypingIndicator"

interface ChatMessageListProps {
  messages: ChatMessage[]
  isLoading: boolean
  children?: React.ReactNode
}

export function ChatMessageList({
  messages,
  isLoading,
  children,
}: ChatMessageListProps) {
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages.length, isLoading])

  return (
    <div className="flex flex-1 flex-col gap-3 overflow-y-auto p-4">
      {messages.map((message) => (
        <ChatBubble key={message.id} message={message} />
      ))}
      {children}
      {isLoading && <TypingIndicator />}
      <div ref={bottomRef} />
    </div>
  )
}
